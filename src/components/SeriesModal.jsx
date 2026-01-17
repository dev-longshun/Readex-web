import { useState, useEffect } from "react";
import { readingLevels, bookCategories } from "../data/booksData";

const SeriesModal = ({ series, onClose }) => {
  const [copiedId, setCopiedId] = useState(null);

  // 打开模态窗口时禁止背景滚动
  useEffect(() => {
    if (series) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [series]);

  if (!series) return null;

  // 获取分级和分类信息
  const levelInfo = readingLevels.find((l) => l.id === series.level) || {};
  const categoryInfo =
    bookCategories.find((c) => c.id === series.category) || {};

  // 分级颜色映射
  const levelColors = {
    beginner: "bg-green-100 text-green-700",
    intermediate: "bg-orange-100 text-orange-700",
    advanced: "bg-red-100 text-red-700",
  };

  // 复制下载链接
  const handleCopyLink = async (book) => {
    try {
      let textToCopy = book.downloadLink;
      if (book.extractCode) {
        textToCopy += `\n提取码: ${book.extractCode}`;
      }
      await navigator.clipboard.writeText(textToCopy);
      setCopiedId(book.id);
      setTimeout(() => setCopiedId(null), 2000);
    } catch (err) {
      console.error("复制失败:", err);
    }
  };

  // 点击背景关闭
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const bookCount = series.books?.length || 0;

  return (
    <div
      className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
      onClick={handleBackdropClick}
    >
      <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-hidden shadow-2xl">
        {/* 头部 */}
        <div className="flex items-center justify-between p-4 border-b">
          <div className="flex items-center gap-2">
            <span className="text-xs text-purple-600 font-medium bg-purple-50 px-2 py-1 rounded">
              系列
            </span>
            <h2 className="text-lg font-semibold">{series.title}</h2>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
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
        </div>

        {/* 内容 */}
        <div
          className="overflow-y-auto max-h-[calc(90vh-80px)] overscroll-contain"
          style={{ transform: "translateZ(0)" }}
        >
          {/* 系列信息 */}
          <div className="p-6 border-b bg-gray-50">
            <div className="flex flex-col md:flex-row gap-4">
              {/* 系列封面 */}
              <div className="flex-shrink-0 w-32 md:w-40">
                <div className="aspect-[3/4] bg-gray-100 rounded-lg overflow-hidden relative">
                  {/* 堆叠效果 */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="absolute w-[85%] h-[92%] bg-gray-300 rounded transform rotate-2 translate-x-1" />
                    <div className="absolute w-[92%] h-[96%] bg-gray-200 rounded transform -rotate-1" />
                    <div className="relative w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 rounded overflow-hidden">
                      {series.cover ? (
                        <img
                          src={series.cover}
                          alt={series.title}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full flex flex-col items-center justify-center">
                          <div className="text-4xl mb-2">📚</div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* 系列详情 */}
              <div className="flex-1">
                <p className="text-gray-600 mb-3">{series.author}</p>

                {/* 标签 */}
                <div className="flex flex-wrap gap-2 mb-3">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${levelColors[series.level] || "bg-gray-100 text-gray-600"}`}
                  >
                    {levelInfo.label}
                  </span>
                  {categoryInfo.label && (
                    <span className="px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-700">
                      {categoryInfo.label}
                    </span>
                  )}
                  <span className="px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-600">
                    共 {bookCount} 本
                  </span>
                </div>

                {/* 标签列表 */}
                {series.tags && series.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-3">
                    {series.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                {/* 简介 */}
                {series.description && (
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {series.description}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* 书籍列表 */}
          <div className="p-6">
            <h3 className="text-lg font-semibold mb-4">系列书籍</h3>
            <div className="space-y-4">
              {series.books?.map((book, index) => (
                <div
                  key={book.id}
                  className="flex gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                >
                  {/* 序号 */}
                  <div className="flex-shrink-0 w-8 h-8 bg-apple-blue text-white rounded-full flex items-center justify-center text-sm font-medium">
                    {index + 1}
                  </div>

                  {/* 书籍封面 */}
                  <div className="flex-shrink-0 w-16">
                    <div className="aspect-[3/4] bg-gray-200 rounded overflow-hidden">
                      {book.cover ? (
                        <img
                          src={book.cover}
                          alt={book.title}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
                          <span className="text-2xl">📖</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* 书籍信息 */}
                  <div className="flex-1 min-w-0">
                    <h4 className="font-medium text-gray-900 mb-1 line-clamp-1">
                      {book.title}
                    </h4>
                    {book.description && (
                      <p className="text-sm text-gray-500 line-clamp-2 mb-2">
                        {book.description}
                      </p>
                    )}
                  </div>

                  {/* 复制按钮 */}
                  <div className="flex-shrink-0 flex items-center">
                    <button
                      onClick={() => handleCopyLink(book)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                        copiedId === book.id
                          ? "bg-green-500 text-white"
                          : "bg-apple-blue text-white hover:bg-blue-600"
                      }`}
                    >
                      {copiedId === book.id ? "已复制" : "复制链接"}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeriesModal;
