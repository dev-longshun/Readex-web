// 分级阅读级别定义
export const readingLevels = [
  { id: "all", label: "全部", color: "gray" },
  {
    id: "beginner",
    label: "入门级",
    color: "green",
    description: "词汇量 2000-3000",
  },
  {
    id: "intermediate",
    label: "进阶级",
    color: "orange",
    description: "词汇量 3000-5000",
  },
  { id: "advanced", label: "高级", color: "red", description: "词汇量 5000+" },
];

// 书籍分类定义
export const bookCategories = [
  { id: "classic-children", label: "经典儿童文学" },
  { id: "classic-literature", label: "经典文学" },
  { id: "graded-readers", label: "分级读物" },
  { id: "young-adult", label: "青少年文学" },
  { id: "non-fiction", label: "非虚构" },
];

// 书籍数据（支持单本书籍和系列书籍）
//
// === 单本书籍模板 ===
// {
//   id: "book-xxx",
//   type: "book",
//   title: "书名",
//   author: "作者",
//   cover: "", // 封面图路径，留空则显示占位图
//   description: "简介",
//   level: "beginner", // beginner / intermediate / advanced
//   category: "classic-children", // 分类 ID
//   tags: ["标签1", "标签2"],
//   downloadLink: "网盘链接",
//   extractCode: "", // 提取码，无则留空
// }
//
// === 系列书籍模板 ===
// {
//   id: "series-xxx",
//   type: "series",
//   title: "系列名称",
//   author: "作者",
//   cover: "", // 系列封面，留空则用第一本书封面或占位图
//   description: "系列简介",
//   level: "intermediate", // 系列整体难度
//   category: "young-adult",
//   tags: ["标签1", "标签2"],
//   books: [
//     {
//       id: "series-xxx-1",
//       title: "第一本书名",
//       cover: "",
//       description: "本书简介",
//       downloadLink: "网盘链接",
//       extractCode: "",
//     },
//     // ... 更多书籍
//   ]
// }

export const booksData = [
  // === 示例：系列书籍 ===
  {
    id: "series-001",
    type: "series",
    title: "Harry Potter 系列",
    author: "J.K. Rowling",
    cover: "",
    description:
      "跟随哈利·波特进入霍格沃茨魔法学校，体验魔法世界的冒险。这是一套风靡全球的奇幻文学经典。",
    level: "intermediate",
    category: "young-adult",
    tags: ["奇幻", "魔法", "冒险", "成长"],
    books: [
      {
        id: "hp-1",
        title: "Harry Potter and the Philosopher's Stone",
        cover: "",
        description:
          "哈利·波特在11岁生日时发现自己是一名巫师，开始了在霍格沃茨的魔法学习之旅。",
        downloadLink: "https://example.com/download/hp1",
        extractCode: "",
      },
      {
        id: "hp-2",
        title: "Harry Potter and the Chamber of Secrets",
        cover: "",
        description:
          "霍格沃茨的密室被打开，学生们接连被石化。哈利必须找出真相，阻止邪恶势力。",
        downloadLink: "https://example.com/download/hp2",
        extractCode: "",
      },
      {
        id: "hp-3",
        title: "Harry Potter and the Prisoner of Azkaban",
        cover: "",
        description: "逃犯小天狼星布莱克从阿兹卡班越狱，据说他要追杀哈利。",
        downloadLink: "https://example.com/download/hp3",
        extractCode: "",
      },
    ],
  },

  // === 示例：单本书籍 ===
  {
    id: "book-001",
    type: "book",
    title: "Charlotte's Web",
    author: "E.B. White",
    cover: "",
    description:
      "一只名叫威尔伯的小猪和一只名叫夏洛特的蜘蛛之间的友谊故事。这是一本关于友情、忠诚和生命意义的经典儿童文学作品。",
    level: "beginner",
    category: "classic-children",
    tags: ["儿童文学", "友情", "动物"],
    downloadLink: "https://example.com/download/charlottes-web",
    extractCode: "",
  },
  {
    id: "book-002",
    type: "book",
    title: "The Little Prince",
    author: "Antoine de Saint-Exupéry",
    cover: "",
    description:
      "一个来自小行星的王子访问地球的故事。这本书以儿童的视角探讨了爱、孤独、友谊和人生的意义。",
    level: "beginner",
    category: "classic-children",
    tags: ["童话", "哲理", "经典"],
    downloadLink: "https://example.com/download/little-prince",
    extractCode: "1234",
  },
  {
    id: "book-003",
    type: "book",
    title: "Animal Farm",
    author: "George Orwell",
    cover: "",
    description:
      "一群农场动物推翻人类主人，试图建立一个平等社会的寓言故事。奥威尔通过这个故事讽刺了极权主义。",
    level: "intermediate",
    category: "classic-literature",
    tags: ["政治寓言", "讽刺", "经典"],
    downloadLink: "https://example.com/download/animal-farm",
    extractCode: "",
  },
  {
    id: "book-004",
    type: "book",
    title: "1984",
    author: "George Orwell",
    cover: "",
    description:
      "描绘了一个极权主义统治下的反乌托邦社会。主人公温斯顿·史密斯试图在无处不在的监控下寻找自由和真相。",
    level: "advanced",
    category: "classic-literature",
    tags: ["反乌托邦", "政治", "经典"],
    downloadLink: "https://example.com/download/1984",
    extractCode: "",
  },
  {
    id: "book-005",
    type: "book",
    title: "The Old Man and the Sea",
    author: "Ernest Hemingway",
    cover: "",
    description:
      "一位古巴老渔夫与一条巨大的马林鱼在墨西哥湾搏斗的故事。海明威凭借这部作品获得了诺贝尔文学奖。",
    level: "intermediate",
    category: "classic-literature",
    tags: ["冒险", "人与自然", "诺贝尔奖"],
    downloadLink: "https://example.com/download/old-man-sea",
    extractCode: "",
  },
];

export default booksData;
