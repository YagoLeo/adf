"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { SearchForm } from "@/components/search-form"
import { useLanguage } from "@/components/language-provider"
import { LanguageSwitcher } from "@/components/language-switcher"
import { User, Search, Package, Menu, X, Headphones, Users, Grid, Truck, MapPin } from "lucide-react"
import { ShipmentForm } from "@/components/shipment-form"

export default function HomePage() {
  const { t } = useLanguage()
  const [activeTab, setActiveTab] = useState("send")
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Header */}
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
              <Link href="#" className="text-gray-600 hover:text-blue-600" onClick={() => setActiveTab("send")}>
                {t("send_shipment")}
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
            <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-white py-2 px-4 shadow-md">
            <nav className="flex flex-col space-y-3">
              <Link href="/" className="text-blue-600 font-medium py-2">
                {t("home")}
              </Link>
              <Link
                href="#"
                className="text-gray-600 hover:text-blue-600 py-2"
                onClick={() => {
                  setActiveTab("send")
                  setMenuOpen(false)
                }}
              >
                {t("send_shipment")}
              </Link>
              <Link href="#" className="text-gray-600 hover:text-blue-600 py-2">
                {t("services")}
              </Link>
              <Link href="#" className="text-gray-600 hover:text-blue-600 py-2">
                {t("about")}
              </Link>
              <Link href="#" className="text-gray-600 hover:text-blue-600 py-2">
                {t("contact")}
              </Link>
            </nav>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1 container mx-auto px-4 py-6">
        {activeTab === "home" && <HomeContent t={t} />}
        {activeTab === "send" && <SendContent t={t} />}
        {activeTab === "query" && <QueryContent t={t} />}
        {activeTab === "profile" && <ProfileContent t={t} />}
      </main>

      {/* Bottom Navigation - Mobile Only */}
      <nav className="md:hidden flex justify-around items-center py-3 bg-white border-t">
        <button
          className={`flex flex-col items-center ${activeTab === "send" ? "text-blue-600" : "text-gray-500"}`}
          onClick={() => setActiveTab("send")}
        >
          <Package className="w-6 h-6" />
          <span className="text-xs mt-1">{t("send_shipment")}</span>
        </button>
        <button
          className={`flex flex-col items-center ${activeTab === "query" ? "text-blue-600" : "text-gray-500"}`}
          onClick={() => setActiveTab("query")}
        >
          <Search className="w-6 h-6" />
          <span className="text-xs mt-1">{t("track_shipment")}</span>
        </button>
        <button
          className={`flex flex-col items-center ${activeTab === "home" ? "text-blue-600" : "text-gray-500"}`}
          onClick={() => setActiveTab("home")}
        >
          <Truck className="w-6 h-6" />
          <span className="text-xs mt-1">{t("services")}</span>
        </button>
        <button
          className={`flex flex-col items-center ${activeTab === "profile" ? "text-blue-600" : "text-gray-500"}`}
          onClick={() => setActiveTab("profile")}
        >
          <User className="w-6 h-6" />
          <span className="text-xs mt-1">{t("account")}</span>
        </button>
      </nav>

      {/* Footer - Desktop Only */}
      <footer className="hidden md:block bg-gray-800 text-white mt-12">
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
                    {t("send_shipment")}
                  </Link>
                </li>
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
                Email: info@australogistics.com
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
    </div>
  )
}

function SendContent({ t }: { t: (key: string) => string }) {
  return (
    <div className="flex flex-col gap-6">
      {/* Banner */}
      <div className="relative h-40 bg-blue-600 rounded-lg overflow-hidden shadow-sm md:shadow-md">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-400 flex items-center p-6">
          <div className="text-white">
            <h2 className="text-2xl font-bold">{t("send_shipment")}</h2>
            <p className="mt-2">{t("send_shipment_description")}</p>
          </div>
        </div>
      </div>

      {/* Shipment Form */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <ShipmentForm />
      </div>
    </div>
  )
}

function HomeContent({ t }: { t: (key: string) => string }) {
  return (
    <div className="flex flex-col gap-6">
      {/* Desktop Hero Section */}
      <div className="hidden md:block bg-white rounded-lg shadow-md overflow-hidden mb-8">
        <div className="bg-blue-600 p-6 text-white">
          <h2 className="text-2xl font-bold mb-2">{t("track_your_shipment")}</h2>
          <p className="text-blue-100">{t("enter_tracking_number_description")}</p>
        </div>
        <div className="p-6">
          <SearchForm />
        </div>
      </div>

      {/* Mobile Sections */}
      <div className="md:hidden flex flex-col gap-4">
        {/* User Profile Section */}
        <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
            <User className="w-8 h-8 text-gray-500" />
          </div>
          <div className="text-lg font-medium">{t("account")}</div>
        </div>

        {/* Promotional Banner */}
        <div className="relative h-32 bg-blue-600 rounded-lg overflow-hidden shadow-sm">
          <div className="absolute inset-0 flex items-center p-4 text-white">
            <div className="flex-1">
              <div className="text-xl font-bold">{t("track_your_shipment")}</div>
              <div className="text-sm mt-1">{t("enter_tracking_number_description")}</div>
            </div>
            <div className="w-1/3 h-full relative">
              <div className="absolute bottom-0 right-0">
                <Image src="/placeholder.svg?height=100&width=100" alt="Delivery person" width={100} height={100} />
              </div>
            </div>
          </div>
        </div>

        {/* Quick Search Form */}
        <div className="bg-white rounded-lg p-4 shadow-sm">
          <SearchForm />
        </div>

        {/* Quick Access */}
        <div className="bg-white rounded-lg p-4 shadow-sm">
          <h3 className="text-lg font-medium mb-4">{t("quick_links")}</h3>
          <div className="grid grid-cols-3 gap-4">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-2">
                <Package className="w-6 h-6 text-blue-500" />
              </div>
              <span className="text-sm">{t("track_shipment")}</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-2">
                <Truck className="w-6 h-6 text-orange-500" />
              </div>
              <span className="text-sm">{t("services")}</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-2">
                <MapPin className="w-6 h-6 text-green-500" />
              </div>
              <span className="text-sm">{t("contact")}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Features Grid */}
      <div className="hidden md:grid md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <div className="bg-blue-100 p-3 rounded-full mr-4">
              <Package className="h-6 w-6 text-blue-600" />
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
              <Grid className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <h3 className="font-bold text-lg">{t("detailed_information")}</h3>
              <p className="text-gray-600">{t("detailed_information_description")}</p>
            </div>
          </div>
          <p className="text-gray-600">{t("detailed_information_description")}</p>
        </div>
      </div>

      {/* Service Options - Mobile & Desktop */}
      <div className="bg-white rounded-lg p-4 shadow-sm md:shadow-md">
        <h3 className="text-lg font-medium mb-4">{t("services")}</h3>
        <div className="grid grid-cols-3 md:grid-cols-4 gap-4">
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-2">
              <Truck className="w-6 h-6 text-blue-500" />
            </div>
            <span className="text-sm">{t("track_shipment")}</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-2">
              <Package className="w-6 h-6 text-green-500" />
            </div>
            <span className="text-sm">{t("send_shipment")}</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-2">
              <Users className="w-6 h-6 text-purple-500" />
            </div>
            <span className="text-sm">{t("about")}</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-2">
              <Headphones className="w-6 h-6 text-red-500" />
            </div>
            <span className="text-sm">{t("contact_us")}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

function QueryContent({ t }: { t: (key: string) => string }) {
  return (
    <div className="flex flex-col items-center justify-center h-full p-4">
      <div className="bg-white rounded-lg p-6 w-full max-w-md shadow-sm md:shadow-md">
        <h2 className="text-xl font-bold mb-4 text-center">{t("track_your_shipment")}</h2>
        <SearchForm />
      </div>
    </div>
  )
}

function ProfileContent({ t }: { t: (key: string) => string }) {
  return (
    <div className="flex flex-col gap-4">
      {/* User Profile */}
      <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm md:shadow-md">
        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
          <User className="w-8 h-8 text-gray-500" />
        </div>
        <div>
          <div className="text-lg font-medium">{t("account")}</div>
          <div className="text-sm text-gray-500">{t("track_your_shipment")}</div>
        </div>
      </div>

      {/* My Services */}
      <div className="bg-white rounded-lg p-4 shadow-sm md:shadow-md">
        <h3 className="text-lg font-medium mb-4">{t("services")}</h3>
        <div className="grid grid-cols-4 gap-4">
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-2">
              <Package className="w-6 h-6 text-blue-500" />
            </div>
            <span className="text-xs">{t("send_shipment")}</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-2">
              <Search className="w-6 h-6 text-green-500" />
            </div>
            <span className="text-xs">{t("track_shipment")}</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-2">
              <Grid className="w-6 h-6 text-orange-500" />
            </div>
            <span className="text-xs">{t("services")}</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-2">
              <Headphones className="w-6 h-6 text-purple-500" />
            </div>
            <span className="text-xs">{t("contact_us")}</span>
          </div>
        </div>
      </div>

      {/* Settings */}
      <div className="bg-white rounded-lg p-4 shadow-sm md:shadow-md">
        <h3 className="text-lg font-medium mb-4">{t("quick_links")}</h3>
        <div className="space-y-4">
          <div className="flex justify-between items-center p-2 border-b">
            <span>{t("send_shipment")}</span>
            <span className="text-gray-400">〉</span>
          </div>
          <div className="flex justify-between items-center p-2 border-b">
            <span>{t("track_shipment")}</span>
            <span className="text-gray-400">〉</span>
          </div>
          <div className="flex justify-between items-center p-2 border-b">
            <span>{t("services")}</span>
            <span className="text-gray-400">〉</span>
          </div>
          <div className="flex justify-between items-center p-2 border-b">
            <span>{t("about")}</span>
            <span className="text-gray-400">〉</span>
          </div>
          <div className="flex justify-between items-center p-2">
            <span>{t("contact")}</span>
            <span className="text-gray-400">〉</span>
          </div>
        </div>
      </div>
    </div>
  )
}

