'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <nav className="w-full bg-gray-900 bg-opacity-90 backdrop-blur-md shadow-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                {/* Logo */}
                <Link href="/">
                    <div className="text-2xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-600 bg-clip-text text-transparent select-none drop-shadow-lg cursor-pointer">
                        SwiftCSV
                    </div>
                </Link>

                {/* Desktop Menu */}
                <ul className="hidden md:flex space-x-8 text-gray-300 font-semibold">
                    <li>
                        <Link href="/" className="hover:text-cyan-400 transition-colors">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href="/about" className="hover:text-cyan-400 transition-colors">
                            About
                        </Link>
                    </li>
                    <li>
                        <Link href="/contact" className="hover:text-cyan-400 transition-colors">
                            Contact
                        </Link>
                    </li>
                </ul>

                {/* GitHub Button (hidden on mobile to keep hamburger visible) */}
                <a
                    href="https://github.com/Vinaykumar1510"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hidden md:inline-flex
    relative items-center px-6 py-2 rounded-md font-semibold text-black
    bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600
    shadow-[0_0_10px_rgb(14,165,233),0_0_20px_rgb(59,130,246)]
    hover:shadow-[0_0_20px_rgb(14,165,233),0_0_40px_rgb(147,197,253)]
    transition-shadow duration-500 ease-in-out
    before:absolute before:inset-0 before:rounded-md
    before:bg-gradient-to-r before:from-cyan-400 before:via-blue-400 before:to-purple-500
    before:opacity-50 before:blur-sm before:scale-95 hover:before:scale-105
    before:transition-transform before:duration-500 before:ease-in-out
    focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2
    select-none
  "
                    aria-label="GitHub Profile"
                >
                    GitHub
                </a>


                {/* Hamburger Button - only on mobile */}
                <button
                    className="md:hidden text-gray-300 focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    {isOpen ? (
                        // Close icon
                        <svg
                            className="w-8 h-8"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            viewBox="0 0 24 24"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        // Hamburger icon
                        <svg
                            className="w-8 h-8"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            viewBox="0 0 24 24"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M3 12h18M3 6h18M3 18h18" />
                        </svg>
                    )}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden px-6 pb-4 space-y-2 text-gray-300 font-semibold bg-gray-900 bg-opacity-90 backdrop-blur-md">
                    <Link href="/" onClick={() => setIsOpen(false)} className="block py-2 hover:text-cyan-400">
                        Home
                    </Link>
                    <Link href="/about" onClick={() => setIsOpen(false)} className="block py-2 hover:text-cyan-400">
                        About
                    </Link>
                    <Link href="/contact" onClick={() => setIsOpen(false)} className="block py-2 hover:text-cyan-400">
                        Contact
                    </Link>
                    <a
                        href="https://github.com/Vinaykumar1510"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block py-2 hover:text-cyan-400"
                        onClick={() => setIsOpen(false)}
                    >
                        GitHub
                    </a>
                </div>
            )}
        </nav>
    )
}
