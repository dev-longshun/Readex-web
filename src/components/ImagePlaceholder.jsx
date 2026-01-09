const ImagePlaceholder = ({ title, filename, width = '100%', height = '400px' }) => {
  return (
    <div
      className="bg-gray-200 rounded-2xl flex items-center justify-center relative overflow-hidden"
      style={{ width, height }}
    >
      <div className="text-center p-8">
        <svg className="w-16 h-16 mx-auto mb-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        <p className="text-lg font-medium text-gray-600 mb-2">{title}</p>
        <p className="text-sm text-gray-500">请将截图命名为</p>
        <p className="text-sm font-mono text-apple-blue mt-1 bg-gray-300 inline-block px-3 py-1 rounded">
          {filename}
        </p>
      </div>
    </div>
  )
}

export default ImagePlaceholder
