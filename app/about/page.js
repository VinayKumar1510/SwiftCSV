export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-gray-200 p-6 flex flex-col items-center px-4 sm:px-6 md:px-8 py-12 sm:py-16">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-600 bg-clip-text text-transparent mb-8 drop-shadow-lg text-center">
        About SwiftCSV
      </h1>

      <section className="max-w-xl sm:max-w-2xl md:max-w-4xl text-center space-y-6 mx-auto px-2 sm:px-0">
        <p className="text-base sm:text-lg leading-relaxed">
          <strong>SwiftCSV</strong> is a cutting-edge web application designed to empower you with the ability to effortlessly
          upload, preview, and explore large CSV files — all without any lag or delays. Whether you’re a data analyst,
          developer, or just someone working with big datasets, SwiftCSV makes your workflow smooth and efficient.
        </p>

        <p className="text-base sm:text-lg leading-relaxed">
          We understand how cumbersome handling large CSV files can be, so SwiftCSV leverages advanced techniques like
          chunked rendering and optimized search to deliver blazing fast performance right in your browser.
        </p>

        <p className="text-base sm:text-lg leading-relaxed">
          Our intuitive interface includes features like drag-and-drop CSV upload, seamless data preview, powerful search,
          and pagination — ensuring you have all the tools you need at your fingertips.
        </p>

        <p className="text-base sm:text-lg leading-relaxed">
          Join thousands of users who trust <strong>SwiftCSV</strong> to simplify their data processing needs. We are
          committed to making data handling effortless and accessible.
        </p>
      </section>

      <div className="mt-10 sm:mt-12 max-w-4xl w-full flex flex-col sm:flex-row justify-center gap-6 sm:gap-8 px-2 sm:px-0">
        <div className="flex-1 bg-gradient-to-tr from-cyan-700 via-blue-700 to-purple-700 rounded-lg p-6 shadow-lg hover:shadow-cyan-500/50 transition-shadow duration-500 cursor-default">
          <h2 className="text-xl sm:text-2xl font-semibold mb-3 text-cyan-300 text-center sm:text-left">Fast Upload</h2>
          <p className="text-center sm:text-left">Upload large CSV files instantly with drag-and-drop support and efficient parsing.</p>
        </div>

        <div className="flex-1 bg-gradient-to-tr from-cyan-700 via-blue-700 to-purple-700 rounded-lg p-6 shadow-lg hover:shadow-blue-500/50 transition-shadow duration-500 cursor-default">
          <h2 className="text-xl sm:text-2xl font-semibold mb-3 text-blue-300 text-center sm:text-left">Smooth Preview</h2>
          <p className="text-center sm:text-left">Preview all your data seamlessly without any lag or freezing, no matter the size.</p>
        </div>

        <div className="flex-1 bg-gradient-to-tr from-cyan-700 via-blue-700 to-purple-700 rounded-lg p-6 shadow-lg hover:shadow-purple-500/50 transition-shadow duration-500 cursor-default">
          <h2 className="text-xl sm:text-2xl font-semibold mb-3 text-purple-300 text-center sm:text-left">Powerful Search</h2>
          <p className="text-center sm:text-left">Search and paginate your CSV data instantly to find exactly what you need.</p>
        </div>
      </div>
    </main>
  )
}
