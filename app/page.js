'use client'

import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()

  const parseCSVAndOpenPreview = (file) => {
    if (!file || file.type !== 'text/csv') {
      alert('Please upload a valid .csv file')
      return
    }

    const reader = new FileReader()
    reader.onload = function (e) {
      const csvText = e.target.result

      // Use localStorage for persistence
      localStorage.setItem('uploadedCSV', csvText)

      router.push('/preview')
    }
    reader.readAsText(file)
  }

  const handleFileInput = (e) => {
    parseCSVAndOpenPreview(e.target.files[0])
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-950 text-gray-200 p-6">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-5xl font-extrabold drop-shadow-lg">CSV File Viewer</h1>
        <p className="mt-4 max-w-xl mx-auto text-lg font-semibold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-600 drop-shadow-lg animate-textGlow">
          Upload and preview large CSV files with blazing fast performance. Search, paginate, and explore your data without lag.
        </p>
      </div>

      <div className="max-w-4xl mx-auto mb-12 border border-cyan-400 rounded-xl">
        <div className="bg-gray-800 p-6 rounded-xl shadow-lg text-gray-200">
          <h2 className="text-2xl font-semibold mb-4 text-center">Upload Your CSV File</h2>

          <div className="flex flex-col items-center justify-center border-4 border-gray-600 p-12 rounded-lg mb-6">
            <p className="text-lg mb-2 font-medium text-center">
              Upload a CSV file to get started
            </p>
            <label className="cursor-pointer inline-block bg-cyan-600 text-white px-6 py-3 rounded hover:bg-cyan-700">
              Browse
              <input
                type="file"
                accept=".csv"
                onChange={handleFileInput}
                className="hidden"
              />
            </label>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { icon: '🚀', title: 'Fast Parsing', desc: 'We stream the CSV data to preview large files without freezing the browser.' },
          { icon: '🔍', title: 'Powerful Search', desc: 'Easily search your data instantly using our real-time search bar.' },
          { icon: '📊', title: 'Clean Preview', desc: 'Preview all rows and columns in a structured and paginated table.' }
        ].map(({ icon, title, desc }, idx) => (
          <div
            key={idx}
            className="
              relative overflow-hidden rounded-xl p-6 shadow-md text-center border border-cyan-400 text-cyan-400
              bg-gray-900/80 backdrop-blur cursor-pointer
              before:absolute before:left-0 before:bottom-0 before:h-0 before:w-full
              before:bg-[#0ff] before:opacity-70
              before:drop-shadow-[0_0_10px_#0ff]
              before:transition-[height] before:duration-500 before:ease-in-out
              hover:before:h-full
              hover:text-white hover:drop-shadow-[0_0_8px_0ff]
            "
          >
            <h3 className="relative text-xl font-semibold mb-2 z-10">{icon} {title}</h3>
            <p className="relative text-sm z-10">{desc}</p>
          </div>
        ))}
      </div>
    </main>
  )
}
