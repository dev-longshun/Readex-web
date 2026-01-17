// 更新类型顺序和配置
const changelogTypes = {
  feat: { label: "新增", icon: "✨", color: "green", order: 1 },
  optimize: { label: "优化", icon: "⚡️", color: "blue", order: 2 },
  fix: { label: "修复", icon: "🐛", color: "orange", order: 3 },
  chore: { label: "其他", icon: "🔧", color: "gray", order: 4 },
};

// 更新日志原始数据
const changelogDataRaw = [
  {
    version: "1.0.6",
    date: "2026-01-14",
    items: [
      { type: "feat", content: "新增滚动模式下右滑退出阅读功能" },
      { type: "feat", content: "新增版本更新检测与自动弹窗提示" },
      { type: "optimize", content: "优化网络词典页面内容展示" },
    ],
  },
  {
    version: "1.0.5",
    date: "2026-01-12",
    items: [
      { type: "feat", content: "新增 Word 文档 (.docx) 格式支持" },
      { type: "feat", content: "智能排版联动与设备预设优化" },
      { type: "feat", content: "查词卡片模块支持自定义排序" },
      { type: "optimize", content: "优化阅读器安全区感知排版" },
      { type: "fix", content: "修复下拉退出手势误触问题" },
      { type: "fix", content: "修复 TXT 书籍目录跳转失败问题" },
      { type: "fix", content: "修复单栏模式往前翻页到上一章失败问题" },
    ],
  },
  {
    version: "1.0.4",
    date: "2026-01-10",
    items: [
      { type: "feat", content: "新增使用教程入口" },
      { type: "feat", content: "新增 Apple Books 风格转场动画" },
      { type: "optimize", content: "优化阅读器关闭动画和下拉退出体验" },
      { type: "optimize", content: "增强 TXT 章节识别能力" },
      { type: "optimize", content: "优化 EPUB 章节解析性能" },
      { type: "fix", content: "修复订阅状态显示异常问题" },
      { type: "fix", content: "修复阅读进度概率性丢失问题" },
    ],
  },
  {
    version: "1.0.3",
    date: "2026-01-08",
    items: [
      { type: "feat", content: "新增滚动阅读模式" },
      { type: "optimize", content: "优化滚动模式页边距和主题适配" },
      { type: "optimize", content: "优化阅读设置体验" },
      { type: "feat", content: "新增查词自动收藏开关" },
      { type: "optimize", content: "完善云同步冲突解决机制" },
      { type: "fix", content: "修复滚动模式多项显示问题" },
      { type: "fix", content: "修复深色模式 UI 显示问题" },
    ],
  },
  {
    version: "1.0.2",
    date: "2026-01-07",
    items: [
      { type: "feat", content: "新增书籍格式说明入口" },
      { type: "optimize", content: "优化深色模式 UI 适配" },
      { type: "optimize", content: "优化学习记录时间选择器样式" },
      { type: "fix", content: "修复升级界面定价卡片不显示问题" },
      { type: "fix", content: "修复单栏模式翻页背面颜色问题" },
    ],
  },
  {
    version: "1.0.1",
    date: "2025-12-31",
    items: [
      { type: "chore", content: "移除内置示例书籍" },
    ],
  },
];

// 对每个版本的 items 按类型排序：新增 → 优化 → 修复 → 其他
const changelogData = changelogDataRaw.map((version) => ({
  ...version,
  items: [...version.items].sort((a, b) => {
    const orderA = changelogTypes[a.type]?.order ?? 99;
    const orderB = changelogTypes[b.type]?.order ?? 99;
    return orderA - orderB;
  }),
}));

export { changelogData, changelogTypes };
