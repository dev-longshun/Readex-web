import { readingLevels } from "../data/booksData";

const BookCard = ({ book, onClick }) => {
  // 获取分级信息
  const levelInfo = readingLevels.find((l) => l.id === book.level) || {};

  // 分级颜色映射
  const levelColors = {
    beginner: "bg-green-100 text-green-700",
    intermediate: "bg-orange-100 text-orange-700",
    advanced: "bg-red-100 text-red-700",
  };

  return (
    <div
      onClick={onClick}
      className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer group"
    >
      {/* 封面图 */}
      <div className="aspect-[3/4] bg-gray-100 relative overflow-hidden">
        {book.cover ? (
          <img
            src={book.cover}
            alt={book.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          // 默认占位图
          <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
            <div className="text-6xl mb-3">📖</div>
            <div className="text-sm text-gray-400 text-center px-4 line-clamp-2">
              {book.title}
            </div>
          </div>
        )}

        {/* 分级标签 */}
        <div
          className={`absolute top-3 right-3 px-2 py-1 rounded-full text-xs font-medium ${levelColors[book.level] || "bg-gray-100 text-gray-600"}`}
        >
          {levelInfo.label}
        </div>
      </div>

      {/* 书籍信息 */}
      <div className="p-4">
        <h3 className="font-semibold text-gray-900 line-clamp-2 mb-1 group-hover:text-apple-blue transition-colors">
          {book.title}
        </h3>
        <p className="text-sm text-gray-500 line-clamp-1">{book.author}</p>
      </div>
    </div>
  );
};

export default BookCard;
