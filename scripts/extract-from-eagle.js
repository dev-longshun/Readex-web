/**
 * Eagle 书籍提取脚本
 * 从 Eagle 素材库中提取 EPUB 书籍信息和封面
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import EPub from "epub";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 配置
const CONFIG = {
  // Eagle 库路径
  eagleLibraryPath: "/Users/longshun/Movies/longshun.library",
  // 输出路径
  outputDataPath: path.join(__dirname, "../src/data/booksData.js"),
  outputCoversPath: path.join(__dirname, "../public/images/books"),
  // 网站 base 路径（与 vite.config.js 中的 base 保持一致）
  basePath: "/Readex-web",
  // 要提取的文件夹 ID（神奇树屋 EPUB）
  targetFolderIds: {
    MKI9D2CGC6NXZ: { series: "神奇树屋", season: "第一季" },
    MKI9D2DW5ZLQV: { series: "神奇树屋", season: "第二季" },
  },
};

/**
 * 清理 HTML 标签，提取纯文本
 */
function stripHtml(html) {
  if (!html) return "";
  return html
    .replace(/<br\s*\/?>/gi, " ") // <br> 转空格
    .replace(/<\/p>/gi, " ") // </p> 转空格
    .replace(/<[^>]*>/g, "") // 移除所有 HTML 标签
    .replace(/&nbsp;/g, " ") // 转换 &nbsp;
    .replace(/&amp;/g, "&") // 转换 &amp;
    .replace(/&lt;/g, "<") // 转换 &lt;
    .replace(/&gt;/g, ">") // 转换 &gt;
    .replace(/&quot;/g, '"') // 转换 &quot;
    .replace(/\s+/g, " ") // 多个空格合并
    .trim();
}

/**
 * 根据书名生成简介（当 EPUB 没有 description 时）
 */
function generateDescription(title, bookNumber) {
  return `Magic Tree House 系列第 ${bookNumber} 本，跟随 Jack 和 Annie 开启奇妙的冒险之旅。`;
}

/**
 * 解析 EPUB 文件，提取元数据和封面
 */
function parseEpub(epubPath) {
  return new Promise((resolve, reject) => {
    const epub = new EPub(epubPath);

    epub.on("end", () => {
      const rawDescription = epub.metadata.description || "";
      const metadata = {
        title: epub.metadata.title || "",
        author: epub.metadata.creator || "",
        description: stripHtml(rawDescription),
        publisher: epub.metadata.publisher || "",
        language: epub.metadata.language || "",
      };

      // 获取封面
      let coverId = null;
      if (epub.metadata.cover) {
        coverId = epub.metadata.cover;
      } else {
        // 尝试从 manifest 中找封面
        for (const [id, item] of Object.entries(epub.manifest)) {
          if (
            item["media-type"]?.startsWith("image/") &&
            (id.toLowerCase().includes("cover") ||
              item.href?.toLowerCase().includes("cover"))
          ) {
            coverId = id;
            break;
          }
        }
      }

      resolve({ metadata, coverId, epub });
    });

    epub.on("error", (err) => {
      console.error(`解析 EPUB 失败: ${epubPath}`, err.message);
      resolve({
        metadata: { title: path.basename(epubPath, ".epub") },
        coverId: null,
        epub: null,
      });
    });

    epub.parse();
  });
}

/**
 * 保存封面图片
 */
function saveCover(epub, coverId, outputPath) {
  return new Promise((resolve) => {
    if (!epub || !coverId) {
      resolve(null);
      return;
    }

    epub.getImage(coverId, (err, data, mimeType) => {
      if (err || !data) {
        resolve(null);
        return;
      }

      const ext = mimeType?.split("/")[1] || "jpg";
      const coverPath = `${outputPath}.${ext}`;

      fs.writeFileSync(coverPath, data);
      resolve(path.basename(coverPath));
    });
  });
}

/**
 * 从文件名中提取书籍序号
 */
function extractBookNumber(filename) {
  // 匹配 [Magic Tree House 11] 或 Magic Tree House #11 等格式
  const match =
    filename.match(/(?:Magic Tree House|MTH)\s*#?\s*(\d+)/i) ||
    filename.match(/\[.*?(\d+)\]/);
  return match ? parseInt(match[1], 10) : 999;
}

/**
 * 将字符串转换为安全的文件名（slug 格式）
 */
function slugify(text) {
  return text
    .toLowerCase()
    .replace(/['’]/g, "") // 移除单引号
    .replace(/[^a-z0-9\u4e00-\u9fa5]+/g, "-") // 非字母数字和中文转连字符
    .replace(/^-+|-+$/g, "") // 移除首尾连字符
    .substring(0, 50); // 限制长度
}

/**
 * 生成语义化的封面文件名
 */
function generateCoverFilename(bookNumber, title) {
  const num = String(bookNumber).padStart(2, "0");
  const slug = slugify(title);
  return `${num}-${slug}`;
}

/**
 * 生成系列文件夹名
 */
function generateSeriesFolderName(series, season) {
  const seriesSlug = slugify(series);
  const seasonSlug = slugify(season);
  return `${seriesSlug}/${seasonSlug}`;
}

/**
 * 主函数
 */
async function main() {
  console.log("🚀 开始提取 Eagle 书籍信息...\n");

  const imagesPath = path.join(CONFIG.eagleLibraryPath, "images");
  const infoDirs = fs
    .readdirSync(imagesPath)
    .filter((d) => d.endsWith(".info"));

  const books = [];
  const seriesMap = new Map(); // 用于组织系列书籍

  // 确保封面输出目录存在
  if (!fs.existsSync(CONFIG.outputCoversPath)) {
    fs.mkdirSync(CONFIG.outputCoversPath, { recursive: true });
  }

  for (const infoDir of infoDirs) {
    const metadataPath = path.join(imagesPath, infoDir, "metadata.json");

    if (!fs.existsSync(metadataPath)) continue;

    const metadata = JSON.parse(fs.readFileSync(metadataPath, "utf-8"));

    // 只处理 EPUB 文件
    if (metadata.ext !== "epub") continue;

    // 检查是否在目标文件夹中
    const targetFolder = metadata.folders?.find(
      (f) => CONFIG.targetFolderIds[f],
    );
    if (!targetFolder) continue;

    const folderInfo = CONFIG.targetFolderIds[targetFolder];
    const epubPath = path.join(imagesPath, infoDir, `${metadata.name}.epub`);

    if (!fs.existsSync(epubPath)) {
      console.log(`⚠️ EPUB 文件不存在: ${epubPath}`);
      continue;
    }

    console.log(`📖 处理: ${metadata.name}`);

    // 解析 EPUB
    const { metadata: epubMeta, coverId, epub } = await parseEpub(epubPath);

    // 生成唯一 ID
    const bookId = metadata.id;

    // 生成语义化的文件路径
    const bookNumber = extractBookNumber(metadata.name);
    const seriesFolderName = generateSeriesFolderName(
      folderInfo.series,
      folderInfo.season,
    );
    const coverBaseName = generateCoverFilename(
      bookNumber,
      epubMeta.title || metadata.name,
    );

    // 确保系列文件夹存在
    const seriesCoverPath = path.join(
      CONFIG.outputCoversPath,
      seriesFolderName,
    );
    if (!fs.existsSync(seriesCoverPath)) {
      fs.mkdirSync(seriesCoverPath, { recursive: true });
    }

    // 保存封面
    const coverFilename = await saveCover(
      epub,
      coverId,
      path.join(seriesCoverPath, coverBaseName),
    );

    const bookInfo = {
      id: bookId,
      title: epubMeta.title || metadata.name,
      author: epubMeta.author || "Unknown",
      description: epubMeta.description || "",
      cover: coverFilename
        ? `${CONFIG.basePath}/images/books/${seriesFolderName}/${coverFilename}`
        : null,
      series: folderInfo.series,
      season: folderInfo.season,
      bookNumber: bookNumber,
      // 暂时留空，后续添加
      downloadLink: "",
      extractCode: "",
      level: "beginner", // 默认分级
      tags: [],
    };

    // 按系列+季度组织
    const seriesKey = `${folderInfo.series}-${folderInfo.season}`;
    if (!seriesMap.has(seriesKey)) {
      seriesMap.set(seriesKey, {
        series: folderInfo.series,
        season: folderInfo.season,
        books: [],
      });
    }
    seriesMap.get(seriesKey).books.push(bookInfo);
  }

  // 对每个系列内的书籍按序号排序
  for (const [key, seriesData] of seriesMap) {
    seriesData.books.sort((a, b) => a.bookNumber - b.bookNumber);
  }

  // 生成最终数据结构
  const booksData = [];
  let seriesId = 1;

  for (const [key, seriesData] of seriesMap) {
    booksData.push({
      id: `series-${seriesId++}`,
      type: "series",
      title: `${seriesData.series} ${seriesData.season}`,
      author: seriesData.books[0]?.author || "Mary Pope Osborne",
      cover: seriesData.books[0]?.cover,
      level: "beginner",
      category: "children",
      tags: ["儿童文学", "冒险", "魔法树屋"],
      description: `${seriesData.series}系列 ${seriesData.season}，共 ${seriesData.books.length} 本`,
      books: seriesData.books.map((book) => ({
        id: book.id,
        title: book.title,
        cover: book.cover,
        description: book.description,
        downloadLink: book.downloadLink,
        extractCode: book.extractCode,
      })),
    });
  }

  // 生成 booksData.js 文件
  const outputContent = `// 此文件由 scripts/extract-from-eagle.js 自动生成
// 生成时间: ${new Date().toLocaleString("zh-CN")}

// 分级阅读级别
export const readingLevels = [
  { id: 'all', label: '全部' },
  { id: 'beginner', label: '入门', description: 'AR 1.0-2.9' },
  { id: 'intermediate', label: '进阶', description: 'AR 3.0-4.9' },
  { id: 'advanced', label: '高级', description: 'AR 5.0+' },
];

// 书籍分类
export const bookCategories = [
  { id: 'children', label: '儿童文学' },
  { id: 'fiction', label: '小说' },
  { id: 'nonfiction', label: '非虚构' },
  { id: 'classic', label: '经典文学' },
];

// 书籍数据
export const booksData = ${JSON.stringify(booksData, null, 2)};
`;

  fs.writeFileSync(CONFIG.outputDataPath, outputContent);

  console.log(`\n✅ 提取完成！`);
  console.log(`   - 系列数量: ${booksData.length}`);
  console.log(
    `   - 书籍总数: ${booksData.reduce((sum, s) => sum + (s.books?.length || 0), 0)}`,
  );
  console.log(`   - 数据文件: ${CONFIG.outputDataPath}`);
  console.log(`   - 封面目录: ${CONFIG.outputCoversPath}`);
}

main().catch(console.error);
