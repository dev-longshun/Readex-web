import { readingLevels } from "../data/booksData";

const SeriesCard = ({ series, onClick }) => {
  // 获取分级信息
  const levelInfo = readingLevels.find((l) => l.id === series.level) || {};

  // 分级颜色映射
  const levelColors = {
    beginner: "bg-green-100 text-green-700",
    intermediate: "bg-orange-100 text-orange-700",
    advanced: "bg-red-100 text-red-700",
  };

  const bookCount = series.books?.length || 0;

  return (
    <div
      onClick={onClick}
      className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer group"
    >
      {/* 堆叠封面效果 */}
      <div className="aspect-[3/4] bg-gray-100 relative overflow-hidden">
        {/* 背景层（模拟堆叠） */}
        <div className="absolute inset-0 flex items-center justify-center">
          {/* 第三层 */}
          <div className="absolute w-[85%] h-[92%] bg-gray-300 rounded-lg transform rotate-3 translate-x-2 -translate-y-1" />
          {/* 第二层 */}
          <div className="absolute w-[90%] h-[94%] bg-gray-200 rounded-lg transform -rotate-2 -translate-x-1" />
          {/* 第一层（主封面） */}
          <div className="relative w-[95%] h-[96%] bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg overflow-hidden shadow-md">
            {series.cover ? (
              <img
                src={series.cover}
                alt={series.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center">
                <div className="text-5xl mb-2">📚</div>
                <div className="text-xs text-gray-400 text-center px-3 line-clamp-2">
                  {series.title}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* 分级标签 */}
        <div
          className={`absolute top-3 right-3 px-2 py-1 rounded-full text-xs font-medium ${levelColors[series.level] || "bg-gray-100 text-gray-600"} z-10`}
        >
          {levelInfo.label}
        </div>

        {/* 书籍数量标签 */}
        <div className="absolute bottom-3 left-3 px-2 py-1 rounded-full text-xs font-medium bg-black/60 text-white z-10">
          {bookCount} 本
        </div>
      </div>

      {/* 系列信息 */}
      <div className="p-4">
        <div className="flex items-center gap-1 mb-1">
          <span className="text-xs text-purple-600 font-medium">系列</span>
        </div>
        <h3 className="font-semibold text-gray-900 line-clamp-2 mb-1 group-hover:text-apple-blue transition-colors">
          {series.title}
        </h3>
        <p className="text-sm text-gray-500 line-clamp-1">{series.author}</p>
      </div>
    </div>
  );
};

export default SeriesCard;
