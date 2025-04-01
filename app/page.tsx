"use client"

import Image from "next/image"
import Link from "next/link"
import { SearchForm } from "@/components/search-form"
import { useLanguage } from "@/components/language-provider"
import { LanguageSwitcher } from "@/components/language-switcher"

export default function Home() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center">
            <Image
              src="/placeholder.svg?height=40&width=40"
              alt="Logistics Logo"
              width={40}
              height={40}
              className="mr-2"
            />
            <h1 className="text-xl font-bold">澳德发物流</h1>
          </div>
          <div className="flex items-center gap-4">
            <nav className="hidden md:flex space-x-4">
              <Link href="/" className="text-blue-600 font-medium">
                {t("home")}
              </Link>
              <Link href="#" className="text-gray-600 hover:text-blue-600">
                {t("services")}
              </Link>
              <Link href="#" className="text-gray-600 hover:text-blue-600">
                {t("about")}
              </Link>
              <Link href="#" className="text-gray-600 hover:text-blue-600">
                {t("contact")}
              </Link>
            </nav>
            <LanguageSwitcher />
            <button className="md:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-menu"
              >
                <line x1="4" x2="20" y1="12" y2="12"></line>
                <line x1="4" x2="20" y1="6" y2="6"></line>
                <line x1="4" x2="20" y1="18" y2="18"></line>
              </svg>
            </button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
            <div className="bg-blue-600 p-6 text-white">
              <h2 className="text-2xl font-bold mb-2">{t("track_your_shipment")}</h2>
              <p className="text-blue-100">{t("enter_tracking_number_description")}</p>
            </div>
            <div className="p-6">
              <SearchForm />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-blue-600"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-lg">{t("secure_tracking")}</h3>
                  <p className="text-gray-600">{t("secure_tracking_description")}</p>
                </div>
              </div>
              <p className="text-gray-600">{t("secure_tracking_description")}</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-blue-600"
                  >
                    <rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect>
                    <line x1="3" x2="21" y1="9" y2="9"></line>
                    <line x1="9" x2="9" y1="21" y2="9"></line>
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-lg">{t("detailed_information")}</h3>
                  <p className="text-gray-600">{t("detailed_information_description")}</p>
                </div>
              </div>
              <p className="text-gray-600">{t("detailed_information_description")}</p>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-gray-800 text-white mt-12">
        <div className="container mx-auto px-4 py-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-4">澳德发物流</h3>
              <p className="text-gray-300">{t("detailed_information_description")}</p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">{t("quick_links")}</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-300 hover:text-white">
                    {t("track_shipment")}
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-300 hover:text-white">
                    {t("services")}
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-300 hover:text-white">
                    {t("contact_us")}
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">{t("contact")}</h3>
              <address className="text-gray-300 not-italic">
                123 Logistics Way
                <br />
                Shipping City, SC 12345
                <br />
                Email: info@globallogistics.com
                <br />
                Phone: (123) 456-7890
              </address>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} 澳德发物流. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg md:hidden">
        <div className="flex justify-around">
          <Link href="/" className="flex flex-col items-center py-2 px-4 text-blue-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
              <polyline points="9 22 9 12 15 12 15 22"></polyline>
            </svg>
            <span className="text-xs">{t("home")}</span>
          </Link>
          <Link href="/track" className="flex flex-col items-center py-2 px-4 text-gray-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </svg>
            <span className="text-xs">{t("track_shipment")}</span>
          </Link>
          <Link href="/account" className="flex flex-col items-center py-2 px-4 text-gray-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
            <span className="text-xs">{t("account")}</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

