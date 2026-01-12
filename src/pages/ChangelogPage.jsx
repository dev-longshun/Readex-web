import { Link } from "react-router-dom";
import { useState } from "react";
import { changelogData, changelogTypes } from "../data/changelogData";

const ChangelogPage = () => {
  // 最新版本默认展开，使用 Set 记录展开的版本
  const [expandedVersions, setExpandedVersions] = useState(new Set([changelogData[0].version]));

  // 格式化日期显示
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return `${year}年${month}月${day}日`;
  };

  // 切换展开/收起
  const toggleVersion = (version) => {
    const newExpanded = new Set(expandedVersions);
    if (newExpanded.has(version)) {
      newExpanded.delete(version);
    } else {
      newExpanded.add(version);
    }
    setExpandedVersions(newExpanded);
  };

  // 获取类型对应的样式类
  const getTypeStyles = (type) => {
    const colorMap = {
      green: "bg-green-100 text-green-700",
      blue: "bg-blue-100 text-blue-700",
      orange: "bg-orange-100 text-orange-700",
      gray: "bg-gray-100 text-gray-700",
    };
    const typeInfo = changelogTypes[type] || changelogTypes.chore;
    return {
      className: colorMap[typeInfo.color] || colorMap.gray,
      icon: typeInfo.icon,
      label: typeInfo.label,
    };
  };

  // 统计各类型数量
  const getCounts = (items) => {
    return items.reduce((acc, item) => {
      acc[item.type] = (acc[item.type] || 0) + 1;
      return acc;
    }, {});
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Header 区域 */}
      <section className="bg-apple-gray py-16 md:py-24">
        <div className="container-custom">
          <Link
            to="/"
            className="inline-flex items-center text-sm text-apple-text-secondary hover:text-apple-text-primary mb-6 transition-colors"
          >
            <svg
              className="w-4 h-4 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            返回首页
          </Link>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            更新日志
          </h1>
          <p className="text-lg text-apple-text-secondary max-w-2xl">
            持续改进，为你带来更好的阅读体验
          </p>
        </div>
      </section>

      {/* 版本列表 - 手风琴 */}
      <section className="py-12 md:py-16">
        <div className="container-custom max-w-3xl">
          <div className="space-y-3">
            {changelogData.map((version) => {
              const isExpanded = expandedVersions.has(version.version);
              const counts = getCounts(version.items);

              return (
                <div
                  key={version.version}
                  className="bg-white rounded-xl border border-gray-200 overflow-hidden"
                >
                  {/* 版本头部 - 可点击展开/收起 */}
                  <button
                    onClick={() => toggleVersion(version.version)}
                    className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-lg font-bold text-apple-text-primary">
                        v{version.version}
                      </span>
                      <span className="text-sm text-apple-text-secondary">
                        {formatDate(version.date)}
                      </span>
                      {/* 更新统计 */}
                      <div className="flex items-center gap-2 text-xs text-apple-text-secondary">
                        {counts.feat > 0 && (
                          <span className="flex items-center gap-1">
                            <span>✨</span>
                            <span>{counts.feat}</span>
                          </span>
                        )}
                        {counts.optimize > 0 && (
                          <span className="flex items-center gap-1">
                            <span>⚡️</span>
                            <span>{counts.optimize}</span>
                          </span>
                        )}
                        {counts.fix > 0 && (
                          <span className="flex items-center gap-1">
                            <span>🐛</span>
                            <span>{counts.fix}</span>
                          </span>
                        )}
                      </div>
                    </div>
                    <svg
                      className={`w-5 h-5 text-apple-text-secondary transition-transform ${
                        isExpanded ? "rotate-180" : ""
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

                  {/* 展开内容 */}
                  {isExpanded && (
                    <div className="px-5 pb-5">
                      <div className="pt-2 border-t border-gray-100">
                        <ul className="space-y-2.5 pt-2">
                          {version.items.map((item, index) => {
                            const typeStyles = getTypeStyles(item.type);
                            return (
                              <li
                                key={index}
                                className="flex items-start gap-3"
                              >
                                <span className="text-base flex-shrink-0 mt-0.5">
                                  {typeStyles.icon}
                                </span>
                                <span
                                  className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium flex-shrink-0 ${typeStyles.className}`}
                                >
                                  {typeStyles.label}
                                </span>
                                <span className="text-sm text-apple-text-primary leading-relaxed">
                                  {item.content}
                                </span>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* 底部提示 */}
          <div className="mt-12 text-center">
            <p className="text-apple-text-secondary text-sm">
              有问题或建议？
              <a
                href="https://github.com/dev-longshun/Readex-doc/issues"
                target="_blank"
                rel="noopener noreferrer"
                className="text-apple-blue hover:underline ml-1"
              >
                在 GitHub 反馈
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ChangelogPage;
