import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import wechatQrcode from "../assets/images/wechat-group-qrcode.png";

const HomePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  // 使用 Set 记录展开的问题 ID，允许多个同时展开
  const [expandedIds, setExpandedIds] = useState(new Set());

  // FAQ 分类
  const categories = [
    { id: "all", name: "全部" },
    { id: "import", name: "导入书籍" },
    { id: "reading", name: "阅读功能" },
    { id: "review", name: "生词复习" },
    { id: "sync", name: "iCloud同步" },
  ];

  // FAQ 数据
  const faqData = [
    // 导入书籍类
    {
      id: 1,
      category: "import",
      question: "如何导入书籍？",
      answer:
        '点击书库右上角的 "+" 按钮，在"文件" App 中选择已保存的 EPUB 或 TXT 格式的书籍文件即可导入。请确保书籍文件未加密。',
    },
    {
      id: 2,
      category: "import",
      question: "支持哪些格式？",
      answer:
        "Readex 目前支持 EPUB、TXT、PDF、Word (.docx) 四种格式的书籍。EPUB 格式可以获得更好的排版效果。",
    },
    {
      id: 3,
      category: "import",
      question: "为什么无法导入？",
      answer:
        '请检查：1) 书籍文件是否加密（如从苹果图书、Kindle 下载的书籍通常有加密保护）；2) 文件是否已保存到 iPhone 的"文件" App 中。',
    },
    {
      id: 4,
      category: "import",
      question: "从哪里下载免费书籍？",
      answer:
        '推荐使用 Z-Library、Project Gutenberg、Standard Ebooks 等网站，提供大量免费 EPUB 格式书籍。详见"书籍资源"页面。',
    },
    {
      id: 5,
      category: "import",
      question: "可以导入多少本书？",
      answer:
        "Readex 对书籍数量没有限制，你可以根据自己的需求导入任意数量的书籍。",
    },
    // 阅读功能类
    {
      id: 6,
      category: "reading",
      question: "如何查词？",
      answer:
        "阅读时单击单词即可查看释义，无需长按或其他操作。系统会自动识别并显示单词的释义、音标和例句。",
    },
    {
      id: 7,
      category: "reading",
      question: "查词需要联网吗？",
      answer:
        "不需要。Readex 内置了 77 万词条的本地词库，查词、发音、翻译均可离线使用。",
    },
    {
      id: 8,
      category: "reading",
      question: "如何调整阅读设置？",
      answer:
        '点击阅读器空白区域唤出 Overlay 菜单，点击"设置"按钮即可调整字体大小、行距、主题等。',
    },
    {
      id: 9,
      category: "reading",
      question: "支持哪些主题？",
      answer:
        "目前提供 3 种主题：原始、护眼、夜间。你可以在阅读设置中切换。",
    },
    {
      id: 10,
      category: "reading",
      question: "如何跳转章节？",
      answer: "点击阅读器的目录图标，在章节列表中点击任意章节即可快速跳转。",
    },
    {
      id: 11,
      category: "reading",
      question: "生词会自动收藏吗？",
      answer:
        "会。查词后系统会自动收藏生词，无需手动点击。生词会按书籍分类，方便管理。",
    },
    {
      id: 12,
      category: "reading",
      question: "如何返回书库？",
      answer: "点击阅读器左上角的返回按钮即可返回书库。阅读进度会自动保存。",
    },
    // 生词复习类
    {
      id: 13,
      category: "review",
      question: "复习机制是什么？",
      answer:
        "Readex 使用 SM-2 间隔重复算法，根据你的记忆程度自动安排复习时间。掌握程度越低，复习频率越高。",
    },
    {
      id: 14,
      category: "review",
      question: "如何开始复习？",
      answer:
        '切换到底部的"复习"标签，点击"语境回顾"即可进入复习流程。系统会显示待复习的语境数量。',
    },
    {
      id: 15,
      category: "review",
      question: "五级反馈是什么意思？",
      answer:
        "重来（完全不记得）、困难（有印象但想不起来）、良好（想起来了但犹豫）、简单（完全记住）、掌握（永久归档）。",
    },
    {
      id: 16,
      category: "review",
      question: "复习频率如何计算？",
      answer:
        "根据 SM-2 算法，首次复习间隔为 1 天，之后根据你的反馈动态调整。简单反馈会大幅延长复习间隔。",
    },
    {
      id: 17,
      category: "review",
      question: "语境回溯功能有什么用？",
      answer:
        "点击生词可以查看所有相关的语境记录。点击语境可以直接跳转到原文位置。",
    },
    // iCloud同步类
    {
      id: 18,
      category: "sync",
      question: "如何开启 iCloud 同步？",
      answer:
        '在"设置"中找到"iCloud 同步"选项，打开开关即可。首次开启会自动上传数据到云端。',
    },
    {
      id: 19,
      category: "sync",
      question: "同步哪些数据？",
      answer:
        "iCloud 同步包括：生词卡片、语境记录、阅读进度、书籍元数据等。书籍文件本身不同步。",
    },
    {
      id: 20,
      category: "sync",
      question: "同步失败怎么办？",
      answer:
        "请检查：1) 是否登录了 iCloud 账户；2) 是否有足够的 iCloud 存储空间；3) 网络连接是否正常。",
    },
    {
      id: 21,
      category: "sync",
      question: "多设备如何同步？",
      answer:
        "在所有设备上登录同一个 iCloud 账户，开启 iCloud 同步功能即可。数据会在后台自动同步。",
    },
  ];

  // 过滤问题
  const filteredQuestions = faqData.filter((item) => {
    const matchesCategory =
      selectedCategory === "all" || item.category === selectedCategory;
    if (!searchQuery.trim()) return matchesCategory;
    const query = searchQuery.toLowerCase();
    const matchesSearch =
      item.question.toLowerCase().includes(query) ||
      item.answer.toLowerCase().includes(query);
    return matchesCategory && matchesSearch;
  });

  // 切换分类时收起所有展开的问题
  const handleCategoryChange = (categoryId) => {
    setSelectedCategory(categoryId);
    setExpandedIds(new Set());
  };

  // 切换展开/收起
  const toggleExpand = (id) => {
    const newExpanded = new Set(expandedIds);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpandedIds(newExpanded);
  };

  // ESC 键关闭模态窗口
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isModalOpen) {
        setIsModalOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isModalOpen]);

  return (
    <div className="bg-white">
      {/* Hero 区域 */}
      <section className="bg-apple-gray py-20 md:py-32">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            Readex
          </h1>
          <p className="text-xl md:text-2xl text-apple-text-secondary mb-4">
            英语原著阅读学习工具
          </p>
          <p className="text-lg text-apple-text-secondary mb-12 max-w-2xl mx-auto">
            在阅读中学习英语，在语境中掌握词汇
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/resources"
              className="inline-block bg-apple-blue text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-blue-600 transition-colors"
            >
              书籍资源
            </Link>
            <Link
              to="/tutorial"
              className="inline-block bg-apple-text-primary text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-800 transition-colors"
            >
              查看使用教程
            </Link>
          </div>

          {/* 微信引流卡片 */}
          <div className="mt-12 max-w-2xl mx-auto">
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div
                  className="flex-shrink-0 cursor-pointer hover:opacity-80 transition-opacity"
                  onClick={() => setIsModalOpen(true)}
                >
                  <img
                    src={wechatQrcode}
                    alt="微信群二维码（点击放大）"
                    className="w-32 h-auto md:w-40 rounded-xl object-contain"
                  />
                  <p className="text-xs text-center text-apple-text-secondary mt-2">
                    点击放大
                  </p>
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-xl font-semibold mb-2">加入微信交流群</h3>
                  <p className="text-apple-text-secondary mb-3">
                    分享书单 · 反馈问题 · 交流学习心得
                  </p>
                  <p className="text-sm text-apple-text-secondary">
                    关注公众号{" "}
                    <span className="font-medium text-apple-text-primary">
                      『键盘慢点敲』
                    </span>{" "}
                    获取最新动态
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 常见问题解答 - 手风琴列表 */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 tracking-tight">
            常见问题解答
          </h2>
          <p className="text-center text-apple-text-secondary mb-8 max-w-2xl mx-auto">
            快速找到你需要的答案
          </p>

          {/* 搜索框 */}
          <div className="max-w-xl mx-auto mb-6">
            <div className="relative">
              <input
                type="text"
                placeholder="搜索问题..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-5 py-3 pl-11 bg-apple-gray rounded-xl text-apple-text-primary placeholder-apple-text-secondary focus:outline-none focus:ring-2 focus:ring-apple-blue transition-all text-sm"
              />
              <svg
                className="w-4 h-4 absolute left-4 top-1/2 transform -translate-y-1/2 text-apple-text-secondary"
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
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-apple-text-secondary hover:text-apple-text-primary"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
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
          </div>

          {/* 分类筛选 */}
          <div className="flex gap-2 justify-center mb-8 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => handleCategoryChange(cat.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === cat.id
                    ? "bg-apple-blue text-white"
                    : "bg-apple-gray text-apple-text-secondary hover:bg-gray-200"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* 问题列表 - 手风琴 */}
          <div className="max-w-3xl mx-auto">
            {filteredQuestions.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-apple-text-secondary">没有找到相关问题</p>
              </div>
            ) : (
              <div className="space-y-2">
                {filteredQuestions.map((faq) => (
                  <div
                    key={faq.id}
                    className="bg-apple-gray rounded-xl overflow-hidden"
                  >
                    <button
                      onClick={() => toggleExpand(faq.id)}
                      className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-gray-200/50 transition-colors"
                    >
                      <div className="flex items-center gap-3 flex-1 min-w-0">
                        <span className="text-xs px-2 py-0.5 bg-white rounded-full text-apple-text-secondary flex-shrink-0">
                          {categories.find((c) => c.id === faq.category)?.name}
                        </span>
                        <span className="text-sm font-medium text-apple-text-primary truncate">
                          {faq.question}
                        </span>
                      </div>
                      <svg
                        className={`w-5 h-5 text-apple-text-secondary flex-shrink-0 ml-2 transition-transform ${
                          expandedIds.has(faq.id) ? "rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                    {expandedIds.has(faq.id) && (
                      <div className="px-5 pb-4">
                        <div className="pt-2 border-t border-gray-200">
                          <p className="text-sm text-apple-text-secondary leading-relaxed whitespace-pre-line">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* 没有找到答案 */}
          <div className="max-w-3xl mx-auto mt-8 text-center">
            <p className="text-apple-text-secondary text-sm">
              没有找到答案？
              <a
                href="https://github.com/dev-longshun/Readex-doc/issues"
                target="_blank"
                rel="noopener noreferrer"
                className="text-apple-blue hover:underline ml-1"
              >
                在 GitHub 提交问题
              </a>{" "}
              或加入微信群咨询
            </p>
          </div>
        </div>
      </section>

      {/* 二维码放大模态框 */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="relative max-w-md w-full bg-white rounded-2xl p-6 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute -top-3 -right-3 w-10 h-10 bg-gray-900 hover:bg-gray-700 text-white rounded-full flex items-center justify-center transition-colors shadow-lg"
              onClick={() => setIsModalOpen(false)}
              aria-label="关闭"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <img
              src={wechatQrcode}
              alt="微信群二维码"
              className="w-full h-auto rounded-xl"
            />
            <p className="text-center text-apple-text-secondary mt-4 text-sm">
              微信扫一扫，加入交流群
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePage;
