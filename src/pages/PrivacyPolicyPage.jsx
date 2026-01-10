import { Link } from 'react-router-dom'

const PrivacyPolicyPage = () => {
  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif', lineHeight: '1.8', maxWidth: '800px', margin: '0 auto', padding: '40px 20px', color: '#000' }}>
      {/* 导航栏 */}
      <nav className="mb-8 pb-4 border-b border-gray-300 text-sm">
        <Link to="/" className="text-blue-600 hover:underline mr-4">首页</Link>
        <Link to="/privacy-policy" className="text-gray-900 font-medium mr-4">隐私政策</Link>
        <Link to="/terms-of-service" className="text-blue-600 hover:underline mr-4">用户协议</Link>
        <Link to="/support" className="text-blue-600 hover:underline">技术支持</Link>
      </nav>

      <h1 className="text-3xl font-bold mb-2">Readex 隐私政策</h1>
      <p className="text-gray-600 mb-8">最后更新日期：2025 年 12 月</p>

      <p className="mb-4 leading-relaxed">
        Readex（以下简称"我们"）非常重视您的个人信息和隐私保护。本《Readex
        隐私政策》（以下简称"本政策"）旨在向您说明我们如何使用、存储和保护您的个人信息，以及您所享有的相关权利。请您在使用
        Readex 之前仔细阅读并充分理解本政策的全部内容。
      </p>

      <p className="mb-4 leading-relaxed">
        当您开始或继续使用
        Readex，即表示您已阅读、理解并同意本政策的全部内容。如您不同意本政策的任何内容，请您立即停止使用
        Readex。
      </p>

      <hr className="border-gray-300 my-8" />

      <h2 className="text-xl font-bold mt-10 mb-4">一、我们收集的信息</h2>
      <p className="mb-4">在您使用 Readex 过程中，我们可能收集与服务相关的以下信息类型：</p>
      <ol className="list-decimal pl-6 mb-4 space-y-4">
        <li>
          <strong className="font-semibold">阅读与学习数据</strong>
          <ul className="list-disc pl-6 mt-2 space-y-2">
            <li>您导入的书籍内容（仅存储在本地设备或您的 iCloud 账户中）；</li>
            <li>您收藏的生词、标注、笔记以及学习记录（如词汇列表、语境记录等）；</li>
            <li>阅读相关统计数据（如阅读时长、学习进度等）。</li>
          </ul>
        </li>
        <li>
          <strong className="font-semibold">订阅与购买信息</strong>
          <p className="mt-2">
            您的订阅与购买记录由 Apple 通过 App Store
            进行处理，我们可能会获取与订阅状态相关的必要信息（例如订阅是否有效、到期时间），以便为您提供相应服务。具体信息的处理遵循
            Apple 的相关政策和规则。
          </p>
        </li>
        <li>
          <strong className="font-semibold">客服与反馈信息</strong>
          <p className="mt-2">
            当您通过应用内「联系我们」功能或邮箱与我们沟通时，您可能会主动向我们提供电子邮箱地址、问题描述、截图等信息，我们将仅在处理您的问题和改进服务的必要范围内使用这些信息。
          </p>
        </li>
      </ol>
      <p className="mb-8">
        我们不会主动收集可直接识别您身份的个人信息（如姓名、身份证号码等），除非您在沟通和反馈中主动提供。
      </p>

      <hr className="border-gray-300 my-8" />

      <h2 className="text-xl font-bold mt-10 mb-4">二、我们如何使用信息</h2>
      <p className="mb-4">我们收集和使用上述信息的目的包括但不限于：</p>
      <ol className="list-decimal pl-6 mb-4 space-y-2">
        <li>向您提供 Readex 的基本功能和高级功能；</li>
        <li>记录和展示您的阅读与学习进度，帮助您更好地进行英语学习；</li>
        <li>在您启用 iCloud 同步时，实现跨设备的数据同步；</li>
        <li>处理与订阅和购买相关的验证与服务；</li>
        <li>响应您的咨询、反馈和投诉，提供客服支持；</li>
        <li>在合理范围内对产品进行分析和优化，以提升产品体验和服务质量。</li>
      </ol>
      <p className="mb-8">
        我们不会将您的个人信息用于本政策未载明的其他目的，除非事先征得您的明示同意，或该等使用在法律法规允许的范围内。
      </p>

      <hr className="border-gray-300 my-8" />

      <h2 className="text-xl font-bold mt-10 mb-4">三、数据存储与同步</h2>
      <ol className="list-decimal pl-6 mb-8 space-y-4">
        <li>
          <strong className="font-semibold">本地数据存储</strong>
          <p className="mt-2">
            您的书籍、生词、标注、学习记录等数据默认存储在您使用的设备本地，我们采取合理的技术措施尽力保障本地数据的安全性。
          </p>
        </li>
        <li>
          <strong className="font-semibold">iCloud 同步</strong>
          <p className="mt-2">
            如您选择启用 iCloud 同步功能，相关数据将通过 Apple 提供的 CloudKit
            服务同步至您的个人 iCloud 账户中，并受 Apple
            的相关服务条款及隐私政策约束。我们无法访问或控制您 iCloud
            账户中的数据内容。
          </p>
        </li>
        <li>
          <strong className="font-semibold">服务器存储情况</strong>
          <p className="mt-2">
            目前，我们不会将您的阅读内容、生词及学习记录等数据存储在我们自有的服务器上。
          </p>
        </li>
      </ol>

      <hr className="border-gray-300 my-8" />

      <h2 className="text-xl font-bold mt-10 mb-4">四、第三方服务</h2>
      <p className="mb-4">为向您提供完整功能，Readex 可能会使用以下第三方服务：</p>
      <ol className="list-decimal pl-6 mb-4 space-y-2">
        <li><strong className="font-semibold">Apple StoreKit</strong>：用于处理应用内购买和订阅相关的支付、验证等；</li>
        <li><strong className="font-semibold">Apple CloudKit / iCloud</strong>：用于实现跨设备的数据同步功能；</li>
        <li><strong className="font-semibold">Google ML Kit（离线）</strong>：用于提供离线翻译等本地智能处理能力，相关数据在本地处理，不上传至我们的服务器。</li>
      </ol>
      <p className="mb-8">
        上述第三方服务由各自的提供方独立运营，其对数据的处理受各自的隐私政策约束。建议您查阅相关第三方隐私政策以了解详情。
      </p>

      <hr className="border-gray-300 my-8" />

      <h2 className="text-xl font-bold mt-10 mb-4">五、数据安全</h2>
      <p className="mb-4">我们采取合理且必要的安全措施，以保护您的数据免遭未经授权的访问、披露、使用、修改或丢失，包括但不限于：</p>
      <ol className="list-decimal pl-6 mb-4 space-y-2">
        <li>在系统设计层面尽量减少不必要的数据收集与传输；</li>
        <li>在本地存储和传输过程中采用相应的安全机制；</li>
        <li>使用 Apple 提供的安全框架和系统能力，以提高整体安全性。</li>
      </ol>
      <p className="mb-8">
        尽管我们已经采取了合理且必要的措施，但在现有技术条件下，无法保证数据在所有情况下绝对安全。您理解并接受这属于行业内的客观限制。
      </p>

      <hr className="border-gray-300 my-8" />

      <h2 className="text-xl font-bold mt-10 mb-4">六、您的权利</h2>
      <p className="mb-4">在使用 Readex 过程中，您对自己的数据享有以下权利：</p>
      <ol className="list-decimal pl-6 mb-4 space-y-2">
        <li><strong className="font-semibold">访问与查看</strong>：您可以在应用内查看您的书籍、生词、学习记录等数据；</li>
        <li><strong className="font-semibold">更正与删除</strong>：您可以通过应用内相关功能修改或删除部分数据；如您卸载应用，通常会删除存储在本地设备上的相关数据（具体以操作系统提示为准）；</li>
        <li><strong className="font-semibold">关闭同步</strong>：如您不再希望通过 iCloud 同步数据，可在系统设置或应用中关闭相关同步功能；</li>
        <li><strong className="font-semibold">咨询与投诉</strong>：如您对本政策或您的数据处理有疑问、意见或建议，可以通过本政策列明的方式联系我们。</li>
      </ol>
      <p className="mb-8">
        在法律法规允许的范围内，我们可能会根据您的请求对身份进行合理验证后再予以处理。
      </p>

      <hr className="border-gray-300 my-8" />

      <h2 className="text-xl font-bold mt-10 mb-4">七、儿童隐私保护</h2>
      <p className="mb-8">
        Readex 并非专门为 13 周岁以下儿童设计或提供。如您为 13 周岁以下儿童监护人并认为我们可能在未获得监护人同意的情况下收集了相关儿童的信息，请尽快与我们联系，我们将根据法律法规的要求进行处理（包括删除相关信息等）。
      </p>

      <hr className="border-gray-300 my-8" />

      <h2 className="text-xl font-bold mt-10 mb-4">八、本政策的更新</h2>
      <p className="mb-4">
        我们可能会根据服务的调整或法律法规的变化，不时更新本政策。更新后的版本将通过在应用内适当位置发布的方式进行提示，并自发布之日起生效。
      </p>
      <p className="mb-4">
        如更新内容属于重大变更（例如收集、使用信息的目的或方式发生实质变化），我们将在合理范围内通过更显著的方式提示您（包括但不限于弹窗提醒、应用内消息通知等），并在必要时再次征得您的同意。
      </p>
      <p className="mb-8">
        如您在本政策更新后继续使用 Readex，即视为您接受更新后的政策。
      </p>

      <hr className="border-gray-300 my-8" />

      <h2 className="text-xl font-bold mt-10 mb-4">九、联系我们</h2>
      <p className="mb-4">
        如您对本政策或您的个人信息保护相关事宜有任何疑问、意见或建议，或希望就您的相关权利提出请求，欢迎通过以下方式联系我们：
      </p>
      <ul className="list-disc pl-6 mb-8 space-y-2">
        <li>应用内「设置 → 联系我们」功能</li>
        <li>邮箱：<a href="mailto:1774885197@qq.com" className="text-blue-600 hover:underline">1774885197@qq.com</a></li>
      </ul>
      <p className="mb-8">
        我们将尽快在合理期限内进行回复和处理。
      </p>

      <footer className="mt-16 text-gray-400 text-sm">
        © 2025 Readex. All rights reserved.
      </footer>
    </div>
  )
}

export default PrivacyPolicyPage
