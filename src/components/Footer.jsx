import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-apple-gray border-t border-gray-200">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* 产品信息 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Readex</h3>
            <p className="text-sm text-apple-text-secondary leading-relaxed">
              英语原著阅读学习工具<br />
              在阅读中学习英语，在语境中掌握词汇
            </p>
          </div>

          {/* 快速链接 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">快速链接</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-apple-text-secondary hover:text-apple-blue transition-colors">
                  首页
                </Link>
              </li>
              <li>
                <Link to="/resources" className="text-sm text-apple-text-secondary hover:text-apple-blue transition-colors">
                  书籍资源
                </Link>
              </li>
              <li>
                <Link to="/tutorial" className="text-sm text-apple-text-secondary hover:text-apple-blue transition-colors">
                  使用教程
                </Link>
              </li>
            </ul>
          </div>

          {/* 支持 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">支持</h3>
            <ul className="space-y-2">
              <li>
                <a href="./privacy-policy.html" className="text-sm text-apple-text-secondary hover:text-apple-blue transition-colors">
                  隐私政策
                </a>
              </li>
              <li>
                <a href="./terms-of-service.html" className="text-sm text-apple-text-secondary hover:text-apple-blue transition-colors">
                  用户协议
                </a>
              </li>
              <li>
                <a href="./support.html" className="text-sm text-apple-text-secondary hover:text-apple-blue transition-colors">
                  技术支持
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-300 text-center">
          <p className="text-sm text-apple-text-secondary">
            © 2025 Readex. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
