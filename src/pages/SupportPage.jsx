import { Link } from 'react-router-dom'

const SupportPage = () => {
  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif', lineHeight: '1.8', maxWidth: '800px', margin: '0 auto', padding: '40px 20px', color: '#000' }}>
      <nav className="mb-8 pb-4 text-sm">
        <Link to="/" className="text-blue-600 hover:underline mr-4">首页</Link>
        <Link to="/privacy-policy" className="text-blue-600 hover:underline mr-4">隐私政策</Link>
        <Link to="/terms-of-service" className="text-blue-600 hover:underline mr-4">用户协议</Link>
        <Link to="/support" className="text-gray-900 font-medium">技术支持</Link>
      </nav>

      <h1 className="text-3xl font-bold mb-2">技术支持</h1>
      <p className="mb-8">感谢您选择 Readex 作为您的英语原著阅读工具。</p>

      <div className="bg-gray-50 p-5 mb-8" style={{ background: '#f5f5f5', padding: '20px', margin: '20px 0' }}>
        <p className="font-semibold mb-2">联系我们</p>
        <p className="mb-2">如果您在使用过程中遇到问题或有任何建议，欢迎通过邮件联系我们：</p>
        <p className="mb-2">📧 <a href="mailto:1774885197@qq.com" className="text-blue-600 hover:underline">1774885197@qq.com</a></p>
        <p className="text-sm text-gray-600">
          请在邮件标题中注明「Readex
          反馈」，并简要描述您遇到的问题（包括机型、系统版本、App
          版本及操作步骤等），以便我们更快定位问题。我们通常会在 24 小时内回复。
        </p>
      </div>

      <hr className="my-8 border-gray-300" />

      <h2 className="text-xl font-bold mt-10 mb-4">常见问题（FAQ）</h2>

      <h3 className="text-lg font-semibold mt-8 mb-4">一、书籍导入与管理</h3>

      <div className="mb-5">
        <p className="font-semibold mb-2">Q：当前支持哪些格式的电子书？</p>
        <p className="text-gray-700 leading-relaxed">
          A：Readex 目前支持 EPUB 与 TXT
          格式的电子书，并针对这两种格式进行了优化处理，可自动提取封面、作者信息并识别章节目录。
        </p>
      </div>

      <div className="mb-5">
        <p className="font-semibold mb-2">Q：如何将书籍导入 App？</p>
        <p className="text-gray-700 mb-2">A：您可以通过以下方式导入书籍：</p>
        <ol className="list-decimal pl-6 text-gray-700 space-y-2">
          <li>
            <strong className="font-medium">系统"文件"App 导入</strong>：在 Readex
            书库页点击右上角"+"，选择"从文件导入"，在系统"文件"App
            中选择对应文件即可。
          </li>
          <li>
            <strong className="font-medium">系统分享菜单</strong>：在微信、QQ 或 Safari
            中打开电子书文件，点击"分享"或"用其他应用打开"，在应用列表中选择
            Readex。
          </li>
          <li>
            <strong className="font-medium">AirDrop 导入</strong>：从 Mac 或其他设备通过 AirDrop
            将文件发送到您的 iPhone／iPad，在系统弹出的打开方式中选择 Readex。
          </li>
        </ol>
      </div>

      <div className="mb-5">
        <p className="font-semibold mb-2">Q：TXT 书籍出现乱码怎么办？</p>
        <p className="text-gray-700 leading-relaxed">
          A：Readex 内置编码识别功能（支持 UTF-8／GBK／Big5
          等常见编码），一般会自动匹配合适编码。如果个别 TXT
          文件仍出现乱码，建议先在电脑上将文件转换为 UTF-8 编码后，再重新导入。
        </p>
      </div>

      <h3 className="text-lg font-semibold mt-8 mb-4">二、查词与生词本</h3>

      <div className="mb-5">
        <p className="font-semibold mb-2">Q：离线状态下可以查词和整句翻译吗？</p>
        <p className="text-gray-700 leading-relaxed">
          A：可以。Readex 内置 ECDICT（约 77 万词条）与 COCA 高频词库（约 2
          万词条），并集成本地离线 AI
          翻译模型，在无网络连接时也可以完成单词查询和整句翻译。仅当您主动使用「在线第三方词典」功能时，才会发起网络请求。
        </p>
      </div>

      <div className="mb-5">
        <p className="font-semibold mb-2">Q：为什么有些单词查不到？</p>
        <p className="text-gray-700 leading-relaxed">
          A：Readex
          已覆盖大部分常用词汇，但部分生僻的人名、地名或专有名词可能暂不在内置词库中。我们会持续迭代和扩充词库。您也可以在查词窗口继续向下滑动打开使用网络词典或者欧路词典，即可实现程序内第三方查词。
        </p>
      </div>

      <div className="mb-5">
        <p className="font-semibold mb-2">Q："语境记忆"功能是什么？</p>
        <p className="text-gray-700 leading-relaxed">
          A：当您在阅读中查词时，Readex
          会自动保存该单词所在的完整例句。在之后的复习中，您既可以看到单词释义，也可以回顾当时阅读时的原句语境，帮助您在真实语境中记忆单词，而不是单纯背诵释义。
        </p>
      </div>

      <h3 className="text-lg font-semibold mt-8 mb-4">三、数据同步与订阅</h3>

      <div className="mb-5">
        <p className="font-semibold mb-2">Q：更换设备后，数据还能同步吗？</p>
        <p className="text-gray-700 mb-2">A：如果您已升级至 Readex Pro，可以使用 iCloud 云同步功能：</p>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>生词卡片、阅读进度、复习记录等数据会通过 CloudKit 在您的设备之间同步。</li>
          <li>书籍文件会通过 iCloud Drive 同步。</li>
          <li>请确保所有设备登录相同的 Apple ID，并在系统设置中为 Readex 打开 iCloud
            Drive 相关权限。
          </li>
        </ul>
      </div>

      <div className="mb-5">
        <p className="font-semibold mb-2">Q：如何恢复之前购买的订阅？</p>
        <p className="text-gray-700 mb-2">A：在 App 内"设置"页面，点击顶部的"恢复购买"按钮即可。请确认：</p>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>当前设备登录的 Apple ID 与购买订阅时使用的账号一致；</li>
          <li>网络连接正常；</li>
          <li>订阅仍处于有效期内。</li>
        </ul>
      </div>

      <h3 className="text-lg font-semibold mt-8 mb-4">四、隐私与数据安全</h3>

      <div className="mb-5">
        <p className="font-semibold mb-2">Q：你们会上传或查看我的阅读内容和个人数据吗？</p>
        <p className="text-gray-700 mb-2">A：不会。Readex 高度重视用户隐私和数据安全。</p>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li><strong className="font-medium">免费版用户</strong>：所有数据（包括书籍文件、生词本、阅读记录等）仅保存在您的本地设备中，我们无法访问。
          </li>
          <li><strong className="font-medium">Pro 用户</strong>：数据仅在您的设备与您个人的 iCloud
            账号之间同步。开发者无法查看、存储或修改您的个人数据。
          </li>
        </ul>
      </div>

      <hr className="my-8 border-gray-300" />

      <h2 className="text-xl font-bold mt-10 mb-4">相关条款</h2>
      <ul className="list-disc pl-6 mb-8 space-y-2">
        <li><Link to="/privacy-policy" className="text-blue-600 hover:underline">隐私政策 (Privacy Policy)</Link></li>
        <li><Link to="/terms-of-service" className="text-blue-600 hover:underline">用户协议 (Terms of Service)</Link></li>
      </ul>

      <hr className="my-8 border-gray-300" />

      <footer className="mt-16 text-gray-400 text-sm">
        © 2025 Readex. All rights reserved.
      </footer>
    </div>
  )
}

export default SupportPage
