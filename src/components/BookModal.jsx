import { useState, useEffect } from "react";
import { readingLevels, bookCategories } from "../data/booksData";

const BookModal = ({ book, onClose }) => {
  const [copied, setCopied] = useState(false);

  // 打开模态窗口时禁止背景滚动
  useEffect(() => {
    if (book) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [book]);

  if (!book) return null;

  // 获取分级和系列信息
  const levelInfo = readingLevels.find((l) => l.id === book.level) || {};
  const categoryInfo = bookCategories.find((c) => c.id === book.category) || {};

  // 分级颜色映射
  const levelColors = {
    beginner: "bg-green-100 text-green-700",
    intermediate: "bg-orange-100 text-orange-700",
    advanced: "bg-red-100 text-red-700",
  };

  // 复制下载链接
  const handleCopyLink = async () => {
    try {
      let textToCopy = book.downloadLink;
      if (book.extractCode) {
        textToCopy += `\n提取码: ${book.extractCode}`;
      }
      await navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
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

  return (
    <div
      className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
      onClick={handleBackdropClick}
    >
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden shadow-2xl">
        {/* 头部 */}
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-lg font-semibold">书籍详情</h2>
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
          className="p-6 overflow-y-auto max-h-[calc(90vh-140px)] overscroll-contain"
          style={{ transform: "translateZ(0)" }}
        >
          <div className="flex flex-col md:flex-row gap-6">
            {/* 封面 */}
            <div className="flex-shrink-0 w-full md:w-48">
              <div className="aspect-[3/4] bg-gray-100 rounded-lg overflow-hidden">
                {book.cover ? (
                  <img
                    src={book.cover}
                    alt={book.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
                    <div className="text-6xl mb-3">📖</div>
                    <div className="text-sm text-gray-400 text-center px-4 line-clamp-2">
                      {book.title}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* 信息 */}
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {book.title}
              </h3>
              <p className="text-gray-600 mb-4">{book.author}</p>

              {/* 标签 */}
              <div className="flex flex-wrap gap-2 mb-4">
                <span
                  className={`px-3 py-1 rounded-full text-sm font-medium ${levelColors[book.level] || "bg-gray-100 text-gray-600"}`}
                >
                  {levelInfo.label}
                </span>
                {categoryInfo.label && (
                  <span className="px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-700">
                    {categoryInfo.label}
                  </span>
                )}
              </div>

              {/* 标签列表 */}
              {book.tags && book.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {book.tags.map((tag, index) => (
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
              {book.description && (
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-500 mb-2">
                    简介
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    {book.description}
                  </p>
                </div>
              )}

              {/* 下载按钮 */}
              <div className="space-y-3">
                <button
                  onClick={handleCopyLink}
                  className={`w-full py-3 px-4 rounded-xl font-medium transition-all duration-200 flex items-center justify-center gap-2 ${
                    copied
                      ? "bg-green-500 text-white"
                      : "bg-apple-blue text-white hover:bg-blue-600"
                  }`}
                >
                  {copied ? (
                    <>
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
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      已复制到剪贴板
                    </>
                  ) : (
                    <>
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
                          d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"
                        />
                      </svg>
                      复制下载链接
                    </>
                  )}
                </button>

                {book.extractCode && (
                  <p className="text-center text-sm text-gray-500">
                    提取码:{" "}
                    <span className="font-mono font-semibold text-gray-700">
                      {book.extractCode}
                    </span>
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookModal;
