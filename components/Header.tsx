"use client"

import Link from "next/link"
import { useState } from "react"
import { Wrench, ChevronDown } from "lucide-react"
import ThemeToggle from "./ThemeToggle"

const navItems = [
  { href: "/", label: "Ana Sayfa" },
  { href: "/ozellikler", label: "Özellikler" },
  { href: "/onarim-servisleri", label: "Onarım Servisleri" },
  {
    label: "Markalar",
    dropdown: [
      { href: "/iphone-onarim", label: "iPhone" },
      { href: "/samsung-onarim", label: "Samsung" },
      { href: "/xiaomi-onarim", label: "Xiaomi" },
      { href: "/oppo-onarim", label: "Oppo" },
      { href: "/realme-onarim", label: "Realme" },
      { href: "/vivo-onarim", label: "Vivo" },
      { href: "/huawei-onarim", label: "Huawei" },
    ],
  },
  { href: "/yorumlar", label: "Yorumlar" },
  { href: "/blog", label: "Blog" },
  { href: "/sss", label: "SSS" },
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/70 dark:bg-gray-900/70 shadow-md dark:shadow-none transition-all duration-300">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="bg-gradient-to-br from-blue-500 to-purple-500 p-2.5 rounded-xl group-hover:scale-105 transition-all duration-300 shadow-md">
              <Wrench className="w-7 h-7 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                MasterCep
              </h1>
              <p className="text-xs text-gray-600 dark:text-gray-400 -mt-1 font-medium">Cep Telefonu Onarım Uzmanı</p>
            </div>
          </Link>

          {/* Navigation (Hidden on small screens) */}
          <nav className="hidden md:block">
            <ul className="flex items-center space-x-6">
              {navItems.map((item) => (
                <li key={item.href || item.label} className="relative">
                  {item.dropdown ? (
                    <div
                      className="relative"
                      onMouseEnter={() => setActiveDropdown(item.label)}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      <button className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-500 transition-colors duration-200 flex items-center space-x-1">
                        <span>{item.label}</span>
                        <ChevronDown className="h-4 w-4" />
                      </button>
                      {activeDropdown === item.label && (
                        <div className="absolute top-full left-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg border border-gray-200 dark:border-gray-700 z-50">
                          {item.dropdown.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.href}
                              href={dropdownItem.href}
                              className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-blue-500 transition-colors duration-200"
                            >
                              {dropdownItem.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.href!}
                      className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-500 transition-colors duration-200"
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            {/* Call to Action Button (Hidden on small screens) */}
            <Link
              href="https://wa.me/905521764553"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-2 px-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              WhatsApp'tan Randevu Al
            </Link>

            {/* Theme Toggle */}
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-700 dark:text-gray-300 focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu (Conditional Rendering) */}
      {isMenuOpen && (
        <div className="bg-gray-100 dark:bg-gray-800 py-4 px-4 md:hidden">
          <nav className="mb-4">
            <ul className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <li key={item.href || item.label}>
                  {item.dropdown ? (
                    <div>
                      <button
                        onClick={() => setActiveDropdown(activeDropdown === item.label ? null : item.label)}
                        className="flex items-center justify-between w-full text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-500 transition-colors duration-200"
                      >
                        <span>{item.label}</span>
                        <ChevronDown
                          className={`h-4 w-4 transition-transform duration-200 ${activeDropdown === item.label ? "rotate-180" : ""}`}
                        />
                      </button>
                      {activeDropdown === item.label && (
                        <div className="mt-2 ml-4 space-y-2">
                          {item.dropdown.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.href}
                              href={dropdownItem.href}
                              className="block text-sm text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-500 transition-colors duration-200"
                            >
                              {dropdownItem.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.href!}
                      className="block text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-500 transition-colors duration-200"
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>
          <Link
            href="https://wa.me/905521764553"
            className="block bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-3 px-4 rounded-lg transition-all duration-300 text-center shadow-lg hover:shadow-xl transform hover:scale-105"
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp'tan Randevu Al
          </Link>
          {/* Theme Toggle for Mobile */}
          <div className="mt-4">
            <ThemeToggle />
          </div>
        </div>
      )}
    </header>
  )
}
