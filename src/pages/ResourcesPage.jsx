const ResourcesPage = () => {
  const bookSites = [
    {
      name: 'Z-Library',
      description: '世界最大的数字图书馆，提供海量的免费电子书下载。',
      links: [
        { url: 'https://zh.zlib.li/', label: 'zh.zlib.li' },
        { url: 'https://zh.fin101.ru/', label: 'zh.fin101.ru（无需魔法）' },
      ]
    },
    {
      name: 'Project Gutenberg',
      description: '全球最大的公版书库，提供超过 70,000 本免费电子书，EPUB 结构标准，兼容性好。',
      links: [
        { url: 'https://www.gutenberg.org/', label: 'gutenberg.org' },
      ]
    },
    {
      name: 'Standard Ebooks',
      description: '基于公版书进行精心排版和设计的高质量电子书，阅读体验极佳。',
      links: [
        { url: 'https://standardebooks.org/', label: 'standardebooks.org' },
      ]
    },
  ]

  const readingLevels = [
    { level: '入门级', description: '适合英语初学者，词汇量 2000-3000' },
    { level: '进阶级', description: '适合有一定基础的学习者，词汇量 3000-5000' },
    { level: '高级', description: '适合高阶学习者，词汇量 5000+，接近母语水平' },
  ]

  return (
    <div className="bg-white">
      {/* 页面标题 */}
      <section className="bg-apple-gray py-16 md:py-24">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            书籍资源
          </h1>
          <p className="text-xl text-apple-text-secondary max-w-2xl mx-auto">
            精选免费电子书下载网站 · 分级阅读书单
          </p>
        </div>
      </section>

      {/* 书籍下载网站导航 */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 tracking-tight">
            书籍下载网站
          </h2>
          <p className="text-center text-apple-text-secondary mb-12 max-w-2xl mx-auto">
            以下网站提供大量免费电子书资源，支持 EPUB 格式下载
          </p>

          <div className="space-y-6 max-w-3xl mx-auto">
            {bookSites.map((site, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-3">{site.name}</h3>
                <p className="text-apple-text-secondary mb-4">
                  {site.description}
                </p>
                <div className="space-y-2">
                  {site.links.map((link, linkIndex) => (
                    <a
                      key={linkIndex}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-apple-blue hover:underline"
                    >
                      网址：{link.label}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 分级阅读书单 */}
      <section className="bg-apple-gray py-16 md:py-24">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 tracking-tight">
            分级阅读书单
          </h2>
          <p className="text-center text-apple-text-secondary mb-12 max-w-2xl mx-auto">
            根据你的英语水平选择合适的书籍，循序渐进提升阅读能力
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {readingLevels.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 text-center hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl mb-4">📚</div>
                <h3 className="text-xl font-semibold mb-3">{item.level}</h3>
                <p className="text-apple-text-secondary mb-6">
                  {item.description}
                </p>
                <div className="inline-block bg-apple-blue/10 text-apple-blue px-4 py-2 rounded-full text-sm font-medium">
                  敬请期待
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 提示信息 */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-lg">
            <p className="text-yellow-800 font-semibold mb-3">⚠️ 重要提示</p>
            <ul className="space-y-2 text-yellow-700">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>请确保下载的书籍文件<strong>未加密</strong>，不要导入苹果图书、Kindle 等平台下载的受版权保护（加密）的书籍</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Readex 支持 EPUB 和 TXT 两种格式的书籍</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ResourcesPage
