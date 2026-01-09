import TutorialSection from '../components/TutorialSection'
import ImagePlaceholder from '../components/ImagePlaceholder'

const TutorialPage = () => {
  return (
    <div className="bg-white">
      {/* 页面标题 */}
      <section className="bg-apple-gray py-16 md:py-24">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            使用教程
          </h1>
          <p className="text-xl text-apple-text-secondary max-w-2xl mx-auto">
            快速上手 Readex，开启你的英语原著阅读之旅
          </p>
        </div>
      </section>

      {/* 第一章：快速入门 */}
      <TutorialSection title="第一章：快速入门">
        <div className="space-y-16">
          {/* 导入书籍 */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">导入你的第一本书</h3>
            <p className="text-lg text-apple-text-secondary mb-8 leading-relaxed">
              Readex 支持 EPUB 和 TXT 两种格式。你可以通过以下方式导入书籍：
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <span className="text-apple-blue mr-3">•</span>
                <span className="text-apple-text-secondary">点击书库右上角的 "+" 按钮</span>
              </li>
              <li className="flex items-start">
                <span className="text-apple-blue mr-3">•</span>
                <span className="text-apple-text-secondary">从"文件" App 中选择书籍文件</span>
              </li>
              <li className="flex items-start">
                <span className="text-apple-blue mr-3">•</span>
                <span className="text-apple-text-secondary">系统会自动提取封面、书名、作者信息</span>
              </li>
            </ul>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ImagePlaceholder title="书库界面" filename="tutorial-01.png" />
              <ImagePlaceholder title="文件选择器" filename="tutorial-02.png" />
            </div>
          </div>

          {/* 开始阅读 */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">开始阅读</h3>
            <p className="text-lg text-apple-text-secondary mb-8 leading-relaxed">
              点击书籍封面即可打开阅读器，享受沉浸式的阅读体验：
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <span className="text-apple-blue mr-3">•</span>
                <span className="text-apple-text-secondary">左右滑动翻页（或点击左右边缘）</span>
              </li>
              <li className="flex items-start">
                <span className="text-apple-blue mr-3">•</span>
                <span className="text-apple-text-secondary">双指捏合可快速调整字体大小</span>
              </li>
              <li className="flex items-start">
                <span className="text-apple-blue mr-3">•</span>
                <span className="text-apple-text-secondary">点击中央区域显示/隐藏阅读菜单</span>
              </li>
            </ul>
            <ImagePlaceholder title="阅读器界面" filename="tutorial-03.png" />
          </div>

          {/* 即时查词 */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">即时查词</h3>
            <p className="text-lg text-apple-text-secondary mb-8 leading-relaxed">
              阅读时遇到生词，单击单词即可查看释义：
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <span className="text-apple-blue mr-3">•</span>
                <span className="text-apple-text-secondary">77 万词条本地词库，无需网络</span>
              </li>
              <li className="flex items-start">
                <span className="text-apple-blue mr-3">•</span>
                <span className="text-apple-text-secondary">自动词形还原（running → run）</span>
              </li>
              <li className="flex items-start">
                <span className="text-apple-blue mr-3">•</span>
                <span className="text-apple-text-secondary">英式/美式音标 + TTS 发音</span>
              </li>
              <li className="flex items-start">
                <span className="text-apple-blue mr-3">•</span>
                <span className="text-apple-text-secondary">整句翻译辅助理解语境</span>
              </li>
            </ul>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ImagePlaceholder title="查词前（单击单词）" filename="tutorial-03.png" />
              <ImagePlaceholder title="查词后（悬浮词卡）" filename="tutorial-04.png" />
            </div>
          </div>

          {/* 收藏生词 */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">收藏生词</h3>
            <p className="text-lg text-apple-text-secondary mb-8 leading-relaxed">
              查词后点击"收藏"按钮，系统会自动记录学习内容：
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <span className="text-apple-blue mr-3">•</span>
                <span className="text-apple-text-secondary">记录单词和释义</span>
              </li>
              <li className="flex items-start">
                <span className="text-apple-blue mr-3">•</span>
                <span className="text-apple-text-secondary">自动保存原文语境（所在的句子）</span>
              </li>
              <li className="flex items-start">
                <span className="text-apple-blue mr-3">•</span>
                <span className="text-apple-text-secondary">标记为"已收藏"（原文中显示为橙色）</span>
              </li>
            </ul>
            <ImagePlaceholder title="生词收藏成功提示" filename="tutorial-05.png" />
          </div>
        </div>
      </TutorialSection>

      {/* 第二章：进阶技巧 */}
      <TutorialSection title="第二章：进阶技巧">
        <div className="space-y-16">
          {/* 径向菜单 */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">径向菜单</h3>
            <p className="text-lg text-apple-text-secondary mb-8 leading-relaxed">
              长按文本区域可呼出快捷操作菜单：
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <span className="text-apple-blue mr-3">•</span>
                <span className="text-apple-text-secondary">查词汇：精确查询当前单词</span>
              </li>
              <li className="flex items-start">
                <span className="text-apple-blue mr-3">•</span>
                <span className="text-apple-text-secondary">查语境：查看整句的翻译和生词</span>
              </li>
              <li className="flex items-start">
                <span className="text-apple-blue mr-3">•</span>
                <span className="text-apple-text-secondary">拖拽方向选择操作</span>
              </li>
            </ul>
            <ImagePlaceholder title="径向菜单（长按后）" filename="tutorial-06.png" />
          </div>

          {/* 阅读设置 */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">阅读设置</h3>
            <p className="text-lg text-apple-text-secondary mb-8 leading-relaxed">
              在阅读器中点击设置图标，可自定义阅读体验：
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <span className="text-apple-blue mr-3">•</span>
                <span className="text-apple-text-secondary">字体大小（9 级调节）</span>
              </li>
              <li className="flex items-start">
                <span className="text-apple-blue mr-3">•</span>
                <span className="text-apple-text-secondary">行距、段距、页边距</span>
              </li>
              <li className="flex items-start">
                <span className="text-apple-blue mr-3">•</span>
                <span className="text-apple-text-secondary">5 种主题预设（护眼、夜间、羊皮纸等）</span>
              </li>
              <li className="flex items-start">
                <span className="text-apple-blue mr-3">•</span>
                <span className="text-apple-text-secondary">翻页模式 / 滚动模式切换</span>
              </li>
            </ul>
            <ImagePlaceholder title="阅读设置界面" filename="tutorial-07.png" />
          </div>

          {/* 章节跳转 */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">章节跳转</h3>
            <p className="text-lg text-apple-text-secondary mb-8 leading-relaxed">
              点击目录图标可快速跳转到任意章节：
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <span className="text-apple-blue mr-3">•</span>
                <span className="text-apple-text-secondary">自动识别 EPUB/TXT 章节结构</span>
              </li>
              <li className="flex items-start">
                <span className="text-apple-blue mr-3">•</span>
                <span className="text-apple-text-secondary">支持中英文章节标题</span>
              </li>
              <li className="flex items-start">
                <span className="text-apple-blue mr-3">•</span>
                <span className="text-apple-text-secondary">点击章节名即可跳转</span>
              </li>
            </ul>
            <ImagePlaceholder title="章节目录" filename="tutorial-08.png" />
          </div>
        </div>
      </TutorialSection>

      {/* 第三章：生词管理 */}
      <TutorialSection title="第三章：生词管理">
        <div className="space-y-16">
          {/* 查看生词列表 */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">查看生词列表</h3>
            <p className="text-lg text-apple-text-secondary mb-8 leading-relaxed">
              在底部标签栏切换到"生词"，即可查看所有收藏的单词：
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <span className="text-apple-blue mr-3">•</span>
                <span className="text-apple-text-secondary">显示单词、音标、词频排名</span>
              </li>
              <li className="flex items-start">
                <span className="text-apple-blue mr-3">•</span>
                <span className="text-apple-text-secondary">按书籍分类筛选</span>
              </li>
              <li className="flex items-start">
                <span className="text-apple-blue mr-3">•</span>
                <span className="text-apple-text-secondary">支持搜索和排序</span>
              </li>
            </ul>
            <ImagePlaceholder title="生词列表" filename="tutorial-09.png" />
          </div>

          {/* 语境详情 */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">语境详情</h3>
            <p className="text-lg text-apple-text-secondary mb-8 leading-relaxed">
              点击生词可查看所有相关的语境记录：
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <span className="text-apple-blue mr-3">•</span>
                <span className="text-apple-text-secondary">显示原文句子和翻译</span>
              </li>
              <li className="flex items-start">
                <span className="text-apple-blue mr-3">•</span>
                <span className="text-apple-text-secondary">记录书籍和章节信息</span>
              </li>
              <li className="flex items-start">
                <span className="text-apple-blue mr-3">•</span>
                <span className="text-apple-text-secondary">高级版支持语境回溯</span>
              </li>
            </ul>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ImagePlaceholder title="生词详情（语境列表）" filename="tutorial-10.png" />
              <ImagePlaceholder title="语境回溯动画" filename="tutorial-11.png" />
            </div>
          </div>
        </div>
      </TutorialSection>

      {/* 第四章：间隔复习 */}
      <TutorialSection title="第四章：间隔复习">
        <div className="space-y-16">
          {/* 复习主页 */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">复习主页</h3>
            <p className="text-lg text-apple-text-secondary mb-8 leading-relaxed">
              切换到"复习"标签，查看今日待复习的生词：
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <span className="text-apple-blue mr-3">•</span>
                <span className="text-apple-text-secondary">显示今日待复习数量</span>
              </li>
              <li className="flex items-start">
                <span className="text-apple-blue mr-3">•</span>
                <span className="text-apple-text-secondary">基于 SM-2 算法智能安排复习计划</span>
              </li>
              <li className="flex items-start">
                <span className="text-apple-blue mr-3">•</span>
                <span className="text-apple-text-secondary">点击"开始复习"进入复习流程</span>
              </li>
            </ul>
            <ImagePlaceholder title="复习主页" filename="tutorial-12.png" />
          </div>

          {/* 复习卡片 */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">复习卡片</h3>
            <p className="text-lg text-apple-text-secondary mb-8 leading-relaxed">
              每张卡片展示一个生词及其语境，你需要根据自己的掌握程度选择反馈：
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <span className="text-apple-blue mr-3">•</span>
                <span className="text-apple-text-secondary">重来：完全不记得，需要重新学习</span>
              </li>
              <li className="flex items-start">
                <span className="text-apple-blue mr-3">•</span>
                <span className="text-apple-text-secondary">困难：有印象，但想不起来</span>
              </li>
              <li className="flex items-start">
                <span className="text-apple-blue mr-3">•</span>
                <span className="text-apple-text-secondary">良好：想起来了，但有些犹豫</span>
              </li>
              <li className="flex items-start">
                <span className="text-apple-blue mr-3">•</span>
                <span className="text-apple-text-secondary">简单：完全记住，非常熟悉</span>
              </li>
              <li className="flex items-start">
                <span className="text-apple-blue mr-3">•</span>
                <span className="text-apple-text-secondary">掌握：永久归档，不再复习</span>
              </li>
            </ul>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ImagePlaceholder title="复习卡片界面" filename="tutorial-13.png" />
              <ImagePlaceholder title="五级反馈选择" filename="tutorial-14.png" />
            </div>
          </div>
        </div>
      </TutorialSection>

      {/* 第五章：iCloud 同步 */}
      <TutorialSection title="第五章：iCloud 同步">
        <div className="space-y-16">
          {/* 开启云同步 */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">开启云同步</h3>
            <p className="text-lg text-apple-text-secondary mb-8 leading-relaxed">
              在"设置"中开启 iCloud 同步，即可在多设备间同步数据：
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <span className="text-apple-blue mr-3">•</span>
                <span className="text-apple-text-secondary">同步生词卡片和语境记录</span>
              </li>
              <li className="flex items-start">
                <span className="text-apple-blue mr-3">•</span>
                <span className="text-apple-text-secondary">同步阅读进度和书籍元数据</span>
              </li>
              <li className="flex items-start">
                <span className="text-apple-blue mr-3">•</span>
                <span className="text-apple-text-secondary">后台自动同步，无需手动操作</span>
              </li>
            </ul>
            <ImagePlaceholder title="设置中的云同步开关" filename="tutorial-15.png" />
          </div>

          {/* 同步状态 */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">同步状态</h3>
            <p className="text-lg text-apple-text-secondary mb-8 leading-relaxed">
              查看同步状态，确保数据已成功上传到云端：
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <span className="text-apple-blue mr-3">•</span>
                <span className="text-apple-text-secondary">最后同步时间</span>
              </li>
              <li className="flex items-start">
                <span className="text-apple-blue mr-3">•</span>
                <span className="text-apple-text-secondary">同步错误提示</span>
              </li>
              <li className="flex items-start">
                <span className="text-apple-blue mr-3">•</span>
                <span className="text-apple-text-secondary">手动触发同步</span>
              </li>
            </ul>
            <ImagePlaceholder title="同步状态显示" filename="tutorial-16.png" />
          </div>
        </div>
      </TutorialSection>

      {/* 结尾提示 */}
      <section className="bg-apple-gray py-16 md:py-24">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
            开始使用 Readex
          </h2>
          <p className="text-xl text-apple-text-secondary max-w-2xl mx-auto mb-8">
            在阅读中学习英语，在语境中掌握词汇
          </p>
          <a
            href="https://apps.apple.com/app/id6757144437"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-apple-blue text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-blue-600 transition-colors"
          >
            从 App Store 下载
          </a>
        </div>
      </section>
    </div>
  )
}

export default TutorialPage
