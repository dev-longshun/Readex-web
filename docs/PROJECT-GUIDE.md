# Readex-web 项目快速指南

> 本文档帮助你快速了解项目结构，以便指挥 AI 进行开发。

---

## 项目概述

这是一个**纯静态网站**，部署在 Vercel/GitHub Pages 上。书籍数据通过本地脚本从 Eagle 素材库提取，生成静态文件后提交到 Git。

---

## 核心架构

```
┌─────────────────┐      ┌─────────────────┐      ┌─────────────────┐
│   Eagle 素材库   │  →   │    提取脚本      │  →   │    前端网站      │
│  (本地书籍管理)   │      │  (Node.js)      │      │   (React)       │
└─────────────────┘      └─────────────────┘      └─────────────────┘
```

---

## 关键文件位置

| 功能             | 文件路径                         | 说明                        |
| ---------------- | -------------------------------- | --------------------------- |
| **书籍提取脚本** | `scripts/extract-from-eagle.js`  | 从 Eagle 提取书籍信息和封面 |
| **书籍数据**     | `src/data/booksData.js`          | 脚本自动生成，前端读取      |
| **封面图片**     | `public/images/books/`           | 按系列分文件夹存放          |
| **资源页面**     | `src/pages/ResourcesPage.jsx`    | 书籍展示页面                |
| **书籍卡片**     | `src/components/BookCard.jsx`    | 单本书籍卡片                |
| **系列卡片**     | `src/components/SeriesCard.jsx`  | 系列书籍卡片（堆叠效果）    |
| **书籍弹窗**     | `src/components/BookModal.jsx`   | 单本书籍详情弹窗            |
| **系列弹窗**     | `src/components/SeriesModal.jsx` | 系列书籍列表弹窗            |

---

## 常用操作指令

### 1. 添加/更新书籍

**场景**：在 Eagle 中添加了新书，需要更新网站

**告诉 AI**：

> "运行书籍提取脚本，更新网站数据"

**实际执行**：

```bash
node scripts/extract-from-eagle.js
```

---

### 2. 添加新的书籍系列

**场景**：要添加一个新系列（如 Harry Potter）

**告诉 AI**：

> "在提取脚本中添加新系列 [系列名]，Eagle 文件夹 ID 是 [ID]"

**需要修改**：`scripts/extract-from-eagle.js` 中的 `targetFolderIds` 配置

---

### 3. 修改书籍展示样式

**场景**：想调整书籍卡片的外观

**告诉 AI**：

> "修改书籍卡片的样式，我想要 [具体需求]"

**涉及文件**：

- `src/components/BookCard.jsx` - 单本书籍卡片
- `src/components/SeriesCard.jsx` - 系列卡片

---

### 4. 修改弹窗内容

**场景**：想调整弹窗显示的信息

**告诉 AI**：

> "修改书籍详情弹窗，添加/删除 [具体内容]"

**涉及文件**：

- `src/components/BookModal.jsx` - 单本书籍弹窗
- `src/components/SeriesModal.jsx` - 系列书籍弹窗

---

### 5. 启动开发服务器

**告诉 AI**：

> "启动网站"

**实际执行**：

```bash
pnpm dev
```

访问：http://localhost:5173/Readex-web/

---

### 6. 部署网站

**告诉 AI**：

> "提交代码并部署"

**实际执行**：

```bash
git add .
git commit -m "更新书籍数据"
git push
```

Vercel 会自动部署。

---

## 配置信息

| 配置项         | 值                                        | 位置                            |
| -------------- | ----------------------------------------- | ------------------------------- |
| Eagle 库路径   | `/Users/longshun/Movies/longshun.library` | `scripts/extract-from-eagle.js` |
| 网站 base 路径 | `/Readex-web`                             | `vite.config.js`                |
| 封面输出目录   | `public/images/books/`                    | `scripts/extract-from-eagle.js` |

---

## 数据流向

```
Eagle 素材库
    ↓ (你在 Eagle 中管理书籍)
    ↓
提取脚本 (scripts/extract-from-eagle.js)
    ↓ (提取书名、作者、简介、封面)
    ↓
├── src/data/booksData.js (书籍数据 JSON)
└── public/images/books/ (封面图片)
    ↓
前端页面读取并展示
    ↓
git push → Vercel 自动部署
```

---

## 快速排错

| 问题       | 可能原因   | 解决方案                                  |
| ---------- | ---------- | ----------------------------------------- |
| 封面不显示 | 路径问题   | 检查 `basePath` 配置                      |
| 新书没出现 | 脚本未运行 | 运行 `node scripts/extract-from-eagle.js` |
| 样式问题   | 组件代码   | 检查对应的 `.jsx` 文件                    |

---

_最后更新：2026-01-17_
