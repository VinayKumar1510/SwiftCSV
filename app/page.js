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
      localStorage.setItem('uploadedCSV', csvText)
      router.push('/preview')
    }
    reader.readAsText(file)
  }

  const handleFileInput = (e) => {
    parseCSVAndOpenPreview(e.target.files[0])
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-gray-200 p-6">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-5xl font-extrabold drop-shadow-[0_0_20px_rgba(0,255,255,0.7)] text-cyan-400">
          CSV File Viewer
        </h1>
        <p className="mt-4 max-w-xl mx-auto text-lg font-semibold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-purple-500 drop-shadow-[0_0_10px_rgba(255,0,255,0.5)]">
          Upload and preview large CSV files with blazing fast performance. Search, paginate, and explore your data without lag.
        </p>
      </div>

      <div className="max-w-4xl mx-auto mb-12 border border-cyan-400 rounded-xl bg-[#1a1a2e]/70 backdrop-blur">
        <div className="p-6 rounded-xl shadow-lg text-gray-200">
          <h2 className="text-2xl font-semibold mb-4 text-center text-cyan-300">Upload Your CSV File</h2>

          <div className="flex flex-col items-center justify-center border-4 border-cyan-700 p-12 rounded-lg mb-6">
            <p className="text-lg mb-2 font-medium text-center text-cyan-200">
              Upload a CSV file to get started
            </p>
            <label className="cursor-pointer inline-block bg-fuchsia-600 text-white px-6 py-3 rounded hover:bg-fuchsia-700 transition duration-300 shadow-md shadow-fuchsia-500/50">
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
          { icon: '🚀', title: 'Fast Parsing', desc: 'Stream and parse large files without freezing your browser.' },
          { icon: '🔍', title: 'Powerful Search', desc: 'Instantly filter and search data on the fly.' },
          { icon: '📊', title: 'Clean Preview', desc: 'View your CSV in a structured, responsive table.' }
        ].map(({ icon, title, desc }, idx) => (
          <div
            key={idx}
            className="
        group relative overflow-hidden rounded-xl p-6 text-center border border-cyan-700 text-cyan-400
        bg-[#1f1f2e] shadow-[0_0_20px_#00ffff33] transition-transform hover:scale-110
        hover:shadow-[0_0_25px_#00ffff99]
      "
          >
            <div
              className="
          absolute bottom-0 left-0 w-full h-0 bg-gradient-to-t from-cyan-700 to-transparent opacity-40
          group-hover:h-full transition-all duration-500 ease-in-out z-0
        "
            ></div>
            <div className="relative z-10">
              <h3 className="text-xl font-semibold mb-2">{icon} {title}</h3>
              <p className="text-sm">{desc}</p>
            </div>
          </div>
        ))}
      </div>

    </main>
  )
}
