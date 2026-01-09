# Readex 官网

> Readex - 英语原著阅读学习工具的官方网站

## 技术栈

- React 18
- Vite 5
- React Router v6
- TailwindCSS 3

## 开发

### 安装依赖

```bash
pnpm install
```

### 启动开发服务器

```bash
pnpm dev
```

访问 http://localhost:5173

### 构建生产版本

```bash
pnpm build
```

构建产物会输出到 `dist/` 目录

## 部署

### 部署到 GitHub Pages

1. 构建项目

```bash
pnpm build
```

2. 将 `dist/` 目录下的所有文件复制到 `Readex-doc/docs/` 目录

```bash
cp -r dist/* ../Readex-doc/docs/
```

3. 提交并推送到 GitHub

```bash
cd ../Readex-doc
git add docs/
git commit -m "update website"
git push
```

## 截图占位

目前所有截图都使用占位图组件。要替换为实际截图：

1. 使用 iPhone 模拟器或真机截图
2. 按以下命名规则保存截图：

```
tutorial-01.png - 书库界面
tutorial-02.png - 文件选择器
tutorial-03.png - 阅读器界面
tutorial-04.png - 悬浮词卡
tutorial-05.png - 生词收藏成功提示
tutorial-06.png - 径向菜单
tutorial-07.png - 阅读设置界面
tutorial-08.png - 章节目录
tutorial-09.png - 生词列表
tutorial-10.png - 生词详情（语境列表）
tutorial-11.png - 语境回溯动画
tutorial-12.png - 复习主页
tutorial-13.png - 复习卡片界面
tutorial-14.png - 五级反馈选择
tutorial-15.png - 设置中的云同步开关
tutorial-16.png - 同步状态显示
```

3. 将截图放到 `src/assets/images/` 目录

4. 修改 `TutorialPage.jsx`，将 `<ImagePlaceholder />` 替换为 `<img />` 标签

示例：

```jsx
// 替换前
<ImagePlaceholder title="书库界面" filename="tutorial-01.png" />

// 替换后
<img
  src="/src/assets/images/tutorial-01.png"
  alt="书库界面"
  className="w-full rounded-2xl shadow-lg"
/>
```

## 项目结构

```
Readex-web/
├── src/
│   ├── pages/
│   │   ├── HomePage.jsx          # 首页
│   │   └── TutorialPage.jsx      # 使用教程
│   ├── components/
│   │   ├── Header.jsx            # 导航栏
│   │   ├── Footer.jsx            # 页脚
│   │   ├── TutorialSection.jsx   # 教程章节组件
│   │   └── ImagePlaceholder.jsx  # 占位图组件
│   ├── assets/
│   │   └── images/               # 截图存放目录
│   ├── App.jsx                   # 主应用
│   ├── main.jsx                  # 入口文件
│   └── index.css                 # 全局样式
├── index.html
├── vite.config.js
├── tailwind.config.js
├── package.json
└── README.md
```

## 设计规范

- Apple 官网风格：简约、大留白、清晰层级
- 主色：#007aff（Apple Blue）
- 背景：#ffffff、#f5f5f7（Apple 浅灰）
- 文字：#1d1d1f（深灰）、#86868b（浅灰）
- 圆角：16px（rounded-2xl）
- 阴影：柔和的阴影效果
