"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"

interface HeaderProps {
  brandName?: string;
  themeColor?: string;
  primaryColor?: string;
  faviconUrl?: string | null;
  lineUrl?: string | null;
}

export default function Header({ 
  brandName = "ClickDrive",
  themeColor = "#2196f3",
  primaryColor = "#0066cc",
  faviconUrl = null,
  lineUrl = null
}: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 w-full bg-gradient-to-r from-gray-50 via-blue-50/50 to-gray-50 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center">
            {faviconUrl && (
              <div className="w-8 h-8 mr-3 relative">
                <Image
                  src={faviconUrl}
                  alt={`${brandName} favicon`}
                  fill
                  className="object-contain"
                  sizes="32px"
                />
              </div>
            )}
            <span className="text-2xl font-bold mr-2">{brandName}</span>
            <span className="text-xs text-gray-600 leading-tight">
              HP/webサイト/<br />
              制作会社
            </span>
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#" className="font-medium flex items-center hover:opacity-80" style={{ color: themeColor }}>
              {brandName}とは
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </Link>
            <Link href="#" className="font-medium flex items-center hover:opacity-80" style={{ color: themeColor }}>
              活用
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </Link>
            <Link href="#" className="font-medium flex items-center hover:opacity-80" style={{ color: themeColor }}>
              その他
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </Link>
            <a
              href={lineUrl || "https://lin.ee/llRUGcG"}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white px-6 py-2 rounded-full font-medium hover:bg-green-600 transition-colors inline-flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12c0 4.95 3.66 9.03 8.42 9.68.29.07.42-.13.42-.29v-1.02c-3.44.75-4.17-1.66-4.17-1.66-.56-1.43-1.37-1.81-1.37-1.81-1.12-.76.08-.75.08-.75 1.24.09 1.89 1.27 1.89 1.27 1.1 1.89 2.89 1.34 3.59 1.03.11-.8.43-1.34.78-1.65-2.74-.31-5.62-1.37-5.62-6.1 0-1.35.48-2.45 1.27-3.31-.13-.31-.55-1.56.12-3.26 0 0 1.04-.33 3.4 1.27.99-.27 2.04-.41 3.09-.41 1.05 0 2.11.14 3.09.41 2.36-1.6 3.4-1.27 3.4-1.27.67 1.7.25 2.95.12 3.26.79.86 1.27 1.96 1.27 3.31 0 4.74-2.89 5.79-5.64 6.09.44.38.84 1.13.84 2.28v3.38c0 .16.13.36.43.29C20.34 21.03 24 16.95 24 12c0-5.52-4.48-10-10-10z"/>
              </svg>
              LINE相談
            </a>
            <a
              href="https://www.cldv.jp/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white px-6 py-2 rounded-full font-medium hover:opacity-90 transition-opacity inline-flex items-center gap-2"
              style={{ backgroundColor: primaryColor }}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              会員登録
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-3 space-y-3">
            <Link 
              href="#" 
              className="block py-2 font-medium hover:opacity-80"
              style={{ color: themeColor }}
              onClick={() => setIsMenuOpen(false)}
            >
              {brandName}とは
            </Link>
            <Link 
              href="#" 
              className="block py-2 font-medium hover:opacity-80"
              style={{ color: themeColor }}
              onClick={() => setIsMenuOpen(false)}
            >
              活用
            </Link>
            <Link 
              href="#" 
              className="block py-2 font-medium hover:opacity-80"
              style={{ color: themeColor }}
              onClick={() => setIsMenuOpen(false)}
            >
              その他
            </Link>
            <a
              href={lineUrl || "https://lin.ee/llRUGcG"}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-green-500 text-white px-6 py-3 rounded-full font-medium hover:bg-green-600 transition-colors text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              LINE相談
            </a>
            <a
              href="https://www.cldv.jp/"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-white px-6 py-3 rounded-full font-medium hover:opacity-90 transition-opacity text-center"
              style={{ backgroundColor: primaryColor }}
              onClick={() => setIsMenuOpen(false)}
            >
              会員登録
            </a>
          </div>
        </div>
      )}
    </header>
  )
}