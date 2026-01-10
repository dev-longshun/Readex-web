import { Link } from 'react-router-dom'

const TermsOfServicePage = () => {
  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif', lineHeight: '1.8', maxWidth: '800px', margin: '0 auto', padding: '40px 20px', color: '#000' }}>
      <nav className="mb-8 pb-4 text-sm">
        <Link to="/" className="text-blue-600 hover:underline mr-4">首页</Link>
        <Link to="/privacy-policy" className="text-blue-600 hover:underline mr-4">隐私政策</Link>
        <Link to="/terms-of-service" className="text-gray-900 font-medium mr-4">用户协议</Link>
        <Link to="/support" className="text-blue-600 hover:underline">技术支持</Link>
      </nav>

      <h1 className="text-3xl font-bold mb-2">Readex 用户协议</h1>
      <p className="text-gray-600 mb-8">最后更新日期：2025 年 12 月</p>

      <p className="mb-4">欢迎使用 Readex！</p>

      <p className="mb-4 leading-relaxed">
        本《Readex 用户协议》（以下简称"本协议"）系由您（或称"用户"）与 Readex
        开发团队（或称"我们"）就您使用 Readex 服务所订立。在使用 Readex
        服务之前，请您务必仔细阅读并充分理解本协议各项条款。一旦您开始使用或继续使用
        Readex，即视为您已阅读、理解并同意接受本协议的全部内容。
      </p>

      <p className="mb-8 leading-relaxed">
        如您不同意本协议任何内容，您应立即停止使用 Readex
        服务。如您对本协议有任何疑问，欢迎通过应用内「联系我们」功能与我们沟通反馈。
      </p>

      <hr className="my-8 border-gray-300" />

      <h2 className="text-xl font-bold mt-10 mb-4">一、基础约定</h2>
      <ol className="list-decimal pl-6 mb-8 space-y-4">
        <li>
          <strong className="font-semibold">协议范围</strong>
          <p className="mt-2">
            本协议包括我们根据法律法规制定并不时发布的其他协议、政策、规则、公告、声明等，上述内容均为本协议的组成部分，您应一并遵守。
          </p>
        </li>
        <li>
          <strong className="font-semibold">服务范围</strong>
          <p className="mt-2">
            我们通过 iOS / iPadOS 应用程序向您提供 Readex
            服务，具体服务内容以我们实时发布的功能为准。
          </p>
        </li>
        <li>
          <strong className="font-semibold">修改与更新</strong>
          <p className="mt-2">
            在法律允许的范围内，我们有权根据需要适时修改本协议。更新后的协议将在应用内公布，并自公布之日起生效。如您不同意修改内容，您有权停止使用
            Readex 服务；如您继续使用，即视为接受修改后的协议。
          </p>
        </li>
      </ol>

      <hr className="my-8 border-gray-300" />

      <h2 className="text-xl font-bold mt-10 mb-4">二、服务内容</h2>
      <ol className="list-decimal pl-6 mb-8 space-y-2">
        <li>
          Readex 是一款英语阅读学习应用，您可以通过 Readex
          导入书籍、查词翻译、收藏生词、记录语境，在阅读过程中提升英语能力。
        </li>
        <li>
          Readex 提供高级版（付费）服务，具体会员权益及收费标准以应用内展示为准。
        </li>
        <li>
          您理解并同意，Readex
          的具体内容、功能和形式由我们根据实际情况自行决定并进行更新、调整。我们有权在合理范围内增加、变更、中断或停止部分或全部服务内容和功能。
        </li>
      </ol>

      <hr className="my-8 border-gray-300" />

      <h2 className="text-xl font-bold mt-10 mb-4">三、账号规则</h2>
      <ol className="list-decimal pl-6 mb-8 space-y-2">
        <li>
          使用 Readex 的部分功能需要通过 Apple ID 登录，您应确保 Apple ID
          账号的安全性和合法使用。
        </li>
        <li>
          您可以通过同一 Apple ID 在所有 iPhone 和 iPad 设备上同步相关数据。
        </li>
        <li>
          您的账户仅限您本人出于合法的、非商业目的使用。您不得以转让、出租、出借、售卖、分享或任何其他方式将账户提供给他人使用。
        </li>
      </ol>

      <hr className="my-8 border-gray-300" />

      <h2 className="text-xl font-bold mt-10 mb-4">四、付费服务</h2>
      <ol className="list-decimal pl-6 mb-8 space-y-4">
        <li>
          购买 Readex
          高级版后，您可以在对应服务期限内使用相关高级功能，具体功能以应用内说明为准。
        </li>
        <li>
          所有付费交易均通过 Apple App Store 处理，费用将从您的 Apple ID
          账户中扣除。
        </li>
        <li>
          <strong className="font-semibold">自动续费说明</strong>
          <p className="mt-2">
            订阅到期前 24 小时内，系统会自动在您的 Apple ID
            账户中扣费并延长订阅周期。如需取消自动续费，请在当前订阅期结束前至少
            24 小时，在「设置 → [您的姓名] → 订阅」中管理或取消订阅。
          </p>
        </li>
        <li>
          如您需要申请退款，请根据 Apple 的相关政策，通过 App Store 提交申请或联系
          Apple 客服，由 Apple 进行审核和处理。
        </li>
      </ol>

      <hr className="my-8 border-gray-300" />

      <h2 className="text-xl font-bold mt-10 mb-4">五、用户行为规范</h2>
      <ol className="list-decimal pl-6 mb-8 space-y-4">
        <li>
          您应合理、合法地使用 Readex 服务，不得利用 Readex
          从事任何违法违规或不当行为。
        </li>
        <li>
          您不得利用 Readex 从事包括但不限于以下行为：
          <ul className="list-disc pl-6 mt-2 space-y-2">
            <li>超出授权范围或恶意使用服务；</li>
            <li>从事任何可能危害计算机网络安全的行为；</li>
            <li>对 Readex 软件进行反向工程、反向编译或反向汇编；</li>
            <li>违反法律法规或公序良俗的其他行为。</li>
          </ul>
        </li>
      </ol>

      <hr className="my-8 border-gray-300" />

      <h2 className="text-xl font-bold mt-10 mb-4">六、知识产权</h2>
      <ol className="list-decimal pl-6 mb-8 space-y-2">
        <li>
          我们对 Readex
          软件本身（包括但不限于软件程序、界面设计、图标、文案等）享有完整的著作权和其他合法权益。
        </li>
        <li>
          您导入的书籍内容的著作权及相关权利归原版权方所有，Readex
          仅在您设备与账户范围内为您提供阅读和学习工具，不对该内容享有任何权利。
        </li>
        <li>
          词典数据及相关内容的版权归相应词典版权方或权利人所有，Readex
          仅在取得合法授权的基础上为您提供查询和展示服务。
        </li>
      </ol>

      <hr className="my-8 border-gray-300" />

      <h2 className="text-xl font-bold mt-10 mb-4">七、免责声明</h2>
      <p className="mb-4">
        在法律允许的范围内，您理解并同意，在下列情形下，我们无需承担相应责任：
      </p>
      <ul className="list-disc pl-6 mb-8 space-y-2">
        <li>
          因地震、洪水、战争、政府行为等不可抗力原因导致的服务中断、障碍或数据丢失；
        </li>
        <li>
          因计算机病毒、黑客攻击、系统不稳定、第三方服务故障、网络供应商原因、设备故障或维护等导致的服务中断、延迟或数据丢失；
        </li>
        <li>
          翻译、词典等功能仅供学习与参考之用，可能受技术条件等限制而存在一定程度的不准确或不完整，由此产生的后果由您自行判断与承担；
        </li>
        <li>
          Readex 不对 Apple
          及其他第三方服务提供商的行为负责，包括但不限于其账户安全、计费、退款、网络服务等相关事项。
        </li>
      </ul>

      <hr className="my-8 border-gray-300" />

      <h2 className="text-xl font-bold mt-10 mb-4">八、法律适用与争议解决</h2>
      <ol className="list-decimal pl-6 mb-8 space-y-2">
        <li>
          本协议的订立、效力、解释、变更、履行及争议解决，均适用中华人民共和国法律（不包含冲突规范）。
        </li>
        <li>
          因本协议或使用 Readex
          服务所引起的或与之相关的任何争议，双方应首先友好协商解决；协商不成的，任何一方均可向我们所在地有管辖权的人民法院提起诉讼。
        </li>
      </ol>

      <hr className="my-8 border-gray-300" />

      <h2 className="text-xl font-bold mt-10 mb-4">九、联系我们</h2>
      <p className="mb-4">
        如您对本协议或 Readex
        服务有任何疑问、投诉、意见或建议，欢迎通过以下方式联系我们：
      </p>
      <ul className="list-disc pl-6 mb-8 space-y-2">
        <li>应用内「设置 → 联系我们」功能</li>
        <li>邮箱：<a href="mailto:1774885197@qq.com" className="text-blue-600 hover:underline">1774885197@qq.com</a></li>
      </ul>

      <hr className="my-8 border-gray-300" />

      <footer className="mt-16 text-gray-400 text-sm">
        © 2025 Readex. All rights reserved.
      </footer>
    </div>
  )
}

export default TermsOfServicePage
