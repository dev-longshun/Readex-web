import { Link } from 'react-router-dom'
import { useState } from 'react'
import wechatQrcode from '../assets/images/wechat-group-qrcode.png'

const HomePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  return (
    <div className="bg-white">
      {/* Hero 区域 */}
      <section className="bg-apple-gray py-20 md:py-32">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            Readex
          </h1>
          <p className="text-xl md:text-2xl text-apple-text-secondary mb-4">
            英语原著阅读学习工具
          </p>
          <p className="text-lg text-apple-text-secondary mb-12 max-w-2xl mx-auto">
            在阅读中学习英语，在语境中掌握词汇
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/resources"
              className="inline-block bg-apple-blue text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-blue-600 transition-colors"
            >
              书籍资源
            </Link>
            <Link
              to="/tutorial"
              className="inline-block bg-apple-text-primary text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-800 transition-colors"
            >
              查看使用教程
            </Link>
          </div>

          {/* 微信引流卡片 */}
          <div className="mt-12 max-w-2xl mx-auto">
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm">
              <div className="flex flex-col md:flex-row items-center gap-6">
                {/* 二维码 */}
                <div
                  className="flex-shrink-0 cursor-pointer hover:opacity-80 transition-opacity"
                  onClick={() => setIsModalOpen(true)}
                >
                  <img
                    src={wechatQrcode}
                    alt="微信群二维码（点击放大）"
                    className="w-32 h-auto md:w-40 rounded-xl object-contain"
                  />
                  <p className="text-xs text-center text-apple-text-secondary mt-2">
                    点击放大
                  </p>
                </div>

                {/* 引导文案 */}
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-xl font-semibold mb-2">加入微信交流群</h3>
                  <p className="text-apple-text-secondary mb-3">
                    分享书单 · 反馈问题 · 交流学习心得
                  </p>
                  <p className="text-sm text-apple-text-secondary">
                    关注公众号 <span className="font-medium text-apple-text-primary">『键盘慢点敲』</span> 获取最新动态
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 核心功能占位 */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 tracking-tight">
            核心功能
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: '沉浸式阅读', desc: '仿真翻页效果，自定义排版，多主题支持' },
              { title: '即时查词', desc: '单击即查，77 万词条本地词库，词形还原' },
              { title: '生词收藏', desc: '自动记录语境，按书籍分类管理' },
              { title: '间隔复习', desc: '基于 SM-2 算法智能安排复习计划' },
              { title: '学习统计', desc: '阅读时长、复习次数可视化展示' },
              { title: 'iCloud 同步', desc: '多设备数据自动同步，无缝切换' },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-apple-gray rounded-2xl p-8 hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-apple-text-secondary">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 更多内容开发中 */}
      <section className="bg-apple-gray py-16 md:py-24">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
            更多内容
          </h2>
          <p className="text-xl text-apple-text-secondary mb-8">
            详细的功能介绍、定价方案等内容正在开发中
          </p>
          <p className="text-apple-text-secondary">
            敬请期待 · 欢迎查看使用教程了解 Readex 的核心功能
          </p>
        </div>
      </section>

      {/* 二维码放大模态框 */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="relative max-w-md w-full bg-white rounded-2xl p-6 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* 关闭按钮 */}
            <button
              className="absolute -top-3 -right-3 w-10 h-10 bg-gray-900 hover:bg-gray-700 text-white rounded-full flex items-center justify-center transition-colors shadow-lg"
              onClick={() => setIsModalOpen(false)}
              aria-label="关闭"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <img
              src={wechatQrcode}
              alt="微信群二维码"
              className="w-full h-auto rounded-xl"
            />
            <p className="text-center text-apple-text-secondary mt-4 text-sm">
              微信扫一扫，加入交流群
            </p>
          </div>
        </div>
      )}
    </div>
  )
}

export default HomePage
