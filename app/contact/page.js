import { FaEnvelope, FaPhoneAlt, FaGithub, FaLinkedin } from 'react-icons/fa'

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gradient-to-tr from-gray-900 via-gray-800 to-gray-900 text-gray-300 flex flex-col items-center px-4 sm:px-6 md:px-8 py-16 sm:py-20">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-600 bg-clip-text text-transparent mb-10 sm:mb-12 drop-shadow-lg select-none text-center">
        Contact Me
      </h1>

      <section className="max-w-xl sm:max-w-3xl w-full bg-gradient-to-tr from-gray-800 via-gray-700 to-gray-900 rounded-2xl p-8 sm:p-12 shadow-lg ring-1 ring-cyan-600/30 hover:ring-cyan-500/60 transition-all duration-700 mx-auto">
        <p className="mb-8 sm:mb-10 text-center text-base sm:text-lg tracking-wide leading-relaxed">
          Have questions, want to collaborate, or just say hi? Reach out via any of the contacts below.{' '}
          I&apos;m always excited to connect!
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-10">
          <div className="flex items-center space-x-5 bg-gradient-to-br from-cyan-900 to-blue-900 rounded-xl p-5 sm:p-6 shadow-lg hover:shadow-cyan-500/70 transition-shadow duration-500 cursor-default">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 sm:h-10 sm:w-10 text-cyan-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.8}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5.121 17.804A9 9 0 1112 21a9.003 9.003 0 01-6.879-3.196z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-cyan-300">Name</h3>
              <p className="text-gray-300 text-sm sm:text-base">Vinay Kumar</p>
            </div>
          </div>

          <a
            href="mailto:vinaysharaya1@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-5 bg-gradient-to-br from-blue-900 to-purple-900 rounded-xl p-5 sm:p-6 shadow-lg hover:shadow-blue-500/70 transition-shadow duration-500"
          >
            <FaEnvelope className="text-cyan-400 text-4xl sm:text-5xl" />
            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-blue-300">Email</h3>
              <p className="text-gray-300 text-sm sm:text-base hover:underline">vinaysharaya1@gmail.com</p>
            </div>
          </a>

          <div className="flex items-center space-x-5 bg-gradient-to-br from-purple-900 to-cyan-900 rounded-xl p-5 sm:p-6 shadow-lg hover:shadow-purple-500/70 transition-shadow duration-500 cursor-default">
            <FaPhoneAlt className="text-purple-400 text-4xl sm:text-5xl" />
            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-purple-300">Phone</h3>
              <p className="text-gray-300 text-sm sm:text-base">+91 79887 22405</p>
            </div>
          </div>

          <a
            href="https://github.com/Vinaykumar1510"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-5 bg-gradient-to-br from-cyan-900 to-blue-900 rounded-xl p-5 sm:p-6 shadow-lg hover:shadow-cyan-500/70 transition-shadow duration-500"
          >
            <FaGithub className="text-cyan-400 text-4xl sm:text-5xl" />
            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-cyan-300">GitHub</h3>
              <p className="text-gray-300 text-sm sm:text-base hover:underline">github.com/Vinaykumar1510</p>
            </div>
          </a>

          <a
            href="https://www.linkedin.com/in/vinay-kumar-419b09292/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-5 bg-gradient-to-br from-blue-900 to-purple-900 rounded-xl p-5 sm:p-6 shadow-lg hover:shadow-blue-500/70 transition-shadow duration-500"
          >
            <FaLinkedin className="text-blue-400 text-4xl sm:text-5xl" />
            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-blue-300">LinkedIn</h3>
              <p className="text-gray-300 text-sm sm:text-base hover:underline">My LinkedIn</p>
            </div>
          </a>
        </div>
      </section>
    </main>
  )
}
