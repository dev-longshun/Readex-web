import { useState, useMemo } from "react";
import BookCard from "../components/BookCard";
import BookModal from "../components/BookModal";
import SeriesCard from "../components/SeriesCard";
import SeriesModal from "../components/SeriesModal";
import { booksData, readingLevels } from "../data/booksData";

const ResourcesPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLevel, setSelectedLevel] = useState("all");
  const [selectedBook, setSelectedBook] = useState(null);
  const [selectedSeries, setSelectedSeries] = useState(null);

  // 过滤书籍和系列
  const filteredItems = useMemo(() => {
    return booksData.filter((item) => {
      // 分级筛选
      if (selectedLevel !== "all" && item.level !== selectedLevel) {
        return false;
      }
      // 搜索筛选
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        const matchesBasic =
          item.title.toLowerCase().includes(query) ||
          item.author.toLowerCase().includes(query) ||
          (item.tags &&
            item.tags.some((tag) => tag.toLowerCase().includes(query)));

        // 对于系列，还要搜索系列内的书籍标题
        if (item.type === "series" && item.books) {
          const matchesBooks = item.books.some((book) =>
            book.title.toLowerCase().includes(query),
          );
          return matchesBasic || matchesBooks;
        }
        return matchesBasic;
      }
      return true;
    });
  }, [searchQuery, selectedLevel]);

  // 统计总数（系列按内部书籍数量计算）
  const totalBookCount = useMemo(() => {
    return filteredItems.reduce((count, item) => {
      if (item.type === "series") {
        return count + (item.books?.length || 0);
      }
      return count + 1;
    }, 0);
  }, [filteredItems]);

  const bookSites = [
    {
      name: "Z-Library",
      description: "世界最大的数字图书馆，提供海量的免费电子书下载。",
      links: [
        { url: "https://zh.zlib.li/", label: "zh.zlib.li" },
        { url: "https://zh.fin101.ru/", label: "zh.fin101.ru（无需魔法）" },
      ],
    },
    {
      name: "Project Gutenberg",
      description:
        "全球最大的公版书库，提供超过 70,000 本免费电子书，EPUB 结构标准，兼容性好。",
      links: [{ url: "https://www.gutenberg.org/", label: "gutenberg.org" }],
    },
    {
      name: "Standard Ebooks",
      description: "基于公版书进行精心排版和设计的高质量电子书，阅读体验极佳。",
      links: [
        { url: "https://standardebooks.org/", label: "standardebooks.org" },
      ],
    },
  ];

  return (
    <div className="bg-white">
      {/* 页面标题 */}
      <section className="bg-apple-gray py-16 md:py-24">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            书籍资源
          </h1>
          <p className="text-xl text-apple-text-secondary max-w-2xl mx-auto">
            精选免费电子书下载网站 · 分级阅读书单
          </p>
        </div>
      </section>

      {/* 书籍下载网站导航 */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 tracking-tight">
            书籍下载网站
          </h2>
          <p className="text-center text-apple-text-secondary mb-12 max-w-2xl mx-auto">
            以下网站提供大量免费电子书资源，支持 EPUB 格式下载
          </p>

          <div className="space-y-6 max-w-3xl mx-auto">
            {bookSites.map((site, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-3">{site.name}</h3>
                <p className="text-apple-text-secondary mb-4">
                  {site.description}
                </p>
                <div className="space-y-2">
                  {site.links.map((link, linkIndex) => (
                    <a
                      key={linkIndex}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-apple-blue hover:underline"
                    >
                      网址：{link.label}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 分级阅读书单 */}
      <section className="bg-apple-gray py-16 md:py-24">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 tracking-tight">
            分级阅读书单
          </h2>
          <p className="text-center text-apple-text-secondary mb-8 max-w-2xl mx-auto">
            根据你的英语水平选择合适的书籍，循序渐进提升阅读能力
          </p>

          {/* 搜索和筛选 */}
          <div className="max-w-4xl mx-auto mb-10">
            {/* 搜索框 */}
            <div className="relative mb-6">
              <input
                type="text"
                placeholder="搜索书名、作者或标签..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-5 py-3 pl-12 rounded-xl border border-gray-200 focus:border-apple-blue focus:ring-2 focus:ring-apple-blue/20 outline-none transition-all"
              />
              <svg
                className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 hover:text-gray-600"
                >
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              )}
            </div>

            {/* 分级筛选 Tab */}
            <div className="flex flex-wrap justify-center gap-2">
              {readingLevels.map((level) => (
                <button
                  key={level.id}
                  onClick={() => setSelectedLevel(level.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    selectedLevel === level.id
                      ? "bg-apple-blue text-white"
                      : "bg-white text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  {level.label}
                  {level.description && (
                    <span className="hidden sm:inline text-xs opacity-75 ml-1">
                      ({level.description})
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* 书籍网格 */}
          {filteredItems.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
              {filteredItems.map((item) =>
                item.type === "series" ? (
                  <SeriesCard
                    key={item.id}
                    series={item}
                    onClick={() => setSelectedSeries(item)}
                  />
                ) : (
                  <BookCard
                    key={item.id}
                    book={item}
                    onClick={() => setSelectedBook(item)}
                  />
                ),
              )}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">📚</div>
              <p className="text-gray-500">
                {searchQuery
                  ? `没有找到与 "${searchQuery}" 相关的书籍`
                  : "暂无书籍"}
              </p>
            </div>
          )}

          {/* 书籍数量统计 */}
          <div className="text-center mt-8 text-sm text-gray-500">
            共 {totalBookCount} 本书籍
            {selectedLevel !== "all" &&
              ` · ${readingLevels.find((l) => l.id === selectedLevel)?.label}`}
          </div>
        </div>
      </section>

      {/* 书籍详情弹窗 */}
      {selectedBook && (
        <BookModal book={selectedBook} onClose={() => setSelectedBook(null)} />
      )}

      {/* 系列详情弹窗 */}
      {selectedSeries && (
        <SeriesModal
          series={selectedSeries}
          onClose={() => setSelectedSeries(null)}
        />
      )}

      {/* 提示信息 */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-lg">
            <p className="text-yellow-800 font-semibold mb-3">⚠️ 重要提示</p>
            <ul className="space-y-2 text-yellow-700">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>
                  请确保下载的书籍文件<strong>未加密</strong>
                  ，不要导入苹果图书、Kindle
                  等平台下载的受版权保护（加密）的书籍
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>
                  Readex 支持 EPUB、TXT、PDF、Word (.docx) 四种格式的书籍
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ResourcesPage;
