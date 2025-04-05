"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { SearchForm } from "@/components/search-form"
import { useLanguage } from "@/components/language-provider"
import { LanguageSwitcher } from "@/components/language-switcher"
import { User, Search, Package, Menu, X, Headphones, Users, Grid, Truck, MapPin } from "lucide-react"
import { ShipmentForm } from "@/components/shipment-form"
import '../styles/container.css';

export default function HomePage() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState('query');
  const [menuOpen, setMenuOpen] = useState(false);

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
                {t('home')}
              </Link>
              <Link
                href="#"
                className="text-gray-600 hover:text-blue-600"
                onClick={() => setActiveTab('send')}
              >
                {t('send_shipment')}
              </Link>
              <Link href="#" className="text-gray-600 hover:text-blue-600">
                {t('services')}
              </Link>
              <Link href="#" className="text-gray-600 hover:text-blue-600">
                {t('about')}
              </Link>
              <Link href="#" className="text-gray-600 hover:text-blue-600">
                {t('contact')}
              </Link>
            </nav>
            <LanguageSwitcher />
            <button
              className="md:hidden"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-white py-2 px-4 shadow-md">
            <nav className="flex flex-col space-y-3">
              <Link href="/" className="text-blue-600 font-medium py-2">
                {t('home')}
              </Link>
              <Link
                href="#"
                className="text-gray-600 hover:text-blue-600 py-2"
                onClick={() => {
                  setActiveTab('send');
                  setMenuOpen(false);
                }}
              >
                {t('send_shipment')}
              </Link>
              <Link href="#" className="text-gray-600 hover:text-blue-600 py-2">
                {t('services')}
              </Link>
              <Link href="#" className="text-gray-600 hover:text-blue-600 py-2">
                {t('about')}
              </Link>
              <Link href="#" className="text-gray-600 hover:text-blue-600 py-2">
                {t('contact')}
              </Link>
            </nav>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1 container mx-auto px-4 py-6 overflow-y-auto">
        {activeTab === 'home' && <HomeContent t={t} />}
        {activeTab === 'send' && <SendContent t={t} />}
        {activeTab === 'query' && <QueryContent t={t} />}
        {activeTab === 'profile' && <ProfileContent t={t} />}
      </main>

      {/* Bottom Navigation - Mobile Only */}
      <nav className="md:hidden flex justify-around items-center py-3 bg-white border-t sticky bottom-0">
        {/* <button
          className={`flex flex-col items-center ${
            activeTab === 'home' ? 'text-blue-600' : 'text-gray-500'
          }`}
          onClick={() => setActiveTab('home')}
        >
          <Truck className="w-6 h-6" />
          <span className="text-xs mt-1">{t('home')}</span>
        </button> */}
        <button
          className={`flex flex-col items-center ${
            activeTab === 'query' ? 'text-blue-600' : 'text-gray-500'
          }`}
          onClick={() => setActiveTab('query')}
        >
          <Search className="w-6 h-6" />
          <span className="text-xs mt-1">{t('track_shipment')}</span>
        </button>
        <button
          className={`flex flex-col items-center ${
            activeTab === 'send' ? 'text-blue-600' : 'text-gray-500'
          }`}
          onClick={() => setActiveTab('send')}
        >
          <Package className="w-6 h-6" />
          <span className="text-xs mt-1">{t('send_shipment')}</span>
        </button>
        <button
          className={`flex flex-col items-center ${
            activeTab === 'profile' ? 'text-blue-600' : 'text-gray-500'
          }`}
          onClick={() => setActiveTab('profile')}
        >
          <User className="w-6 h-6" />
          <span className="text-xs mt-1">{t('account')}</span>
        </button>
      </nav>

      {/* Footer - Desktop Only */}
      <footer className="hidden md:block bg-gray-800 text-white mt-12">
        <div className="container mx-auto px-4 py-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-4">澳德发物流</h3>
              <p className="text-gray-300">
                {t('detailed_information_description')}
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">{t('quick_links')}</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-300 hover:text-white">
                    {t('send_shipment')}
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-300 hover:text-white">
                    {t('track_shipment')}
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-300 hover:text-white">
                    {t('services')}
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-300 hover:text-white">
                    {t('contact_us')}
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">{t('contact')}</h3>
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
            <p>
              &copy; {new Date().getFullYear()} 澳德发物流. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function SendContent({ t }: { t: (key: string) => string }) {
  return (
    <div className="flex flex-col gap-6">
      {/* Banner */}
      <div className="relative h-24 bg-blue-600 rounded-lg overflow-hidden shadow-sm md:shadow-md">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-400 flex items-center p-6">
          <div className="text-white">
            <h2 className="text-2xl font-bold">{t('send_shipment')}</h2>
            <p className="mt-2">{t('send_shipment_description')}</p>
          </div>
        </div>
      </div>

      {/* Shipment Form */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <ShipmentForm />
      </div>
    </div>
  );
}

function HomeContent({ t }: { t: (key: string) => string }) {
  return (
    <div className="flex flex-col gap-4">
      {/* Mobile Layout */}
      <div className="md:hidden">
        {/* Title */}
        <h1 className="text-2xl font-bold text-center mb-4">澳德发物流</h1>

        {/* Tracking Title */}
        <h2 className="text-lg mb-3">{t('track_your_shipment')}</h2>

        {/* Tracking Input */}
        <div className="bg-white rounded-lg p-4 shadow-sm mb-4">
          <input
            type="text"
            placeholder={t('enter_tracking_number')}
            className="w-full p-3 border rounded-lg mb-3"
          />
          <button className="w-full bg-blue-600 text-white py-3 rounded-lg mb-3">
            {t('scan_qr_code')}
          </button>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:block">
        {/* Desktop Hero Section */}
        <div className="hidden md:block bg-white rounded-lg shadow-md overflow-hidden mb-8">
          <div className="bg-blue-600 p-6 text-white">
            <h2 className="text-2xl font-bold mb-2">
              {t('track_your_shipment')}
            </h2>
            <p className="text-blue-100">
              {t('enter_tracking_number_description')}
            </p>
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
            <div className="text-lg font-medium">{t('account')}</div>
          </div>

          {/* Promotional Banner */}
          <div className="relative h-32 bg-blue-600 rounded-lg overflow-hidden shadow-sm">
            <div className="absolute inset-0 flex items-center p-4 text-white">
              <div className="flex-1">
                <div className="text-xl font-bold">
                  {t('track_your_shipment')}
                </div>
                <div className="text-sm mt-1">
                  {t('enter_tracking_number_description')}
                </div>
              </div>
              <div className="w-1/3 h-full relative">
                <div className="absolute bottom-0 right-0">
                  <Image
                    src="/placeholder.svg?height=100&width=100"
                    alt="Delivery person"
                    width={100}
                    height={100}
                  />
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
            <h3 className="text-lg font-medium mb-4">{t('quick_links')}</h3>
            <div className="grid grid-cols-3 gap-4">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-2">
                  <Package className="w-6 h-6 text-blue-500" />
                </div>
                <span className="text-sm">{t('track_shipment')}</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-2">
                  <Truck className="w-6 h-6 text-orange-500" />
                </div>
                <span className="text-sm">{t('services')}</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-2">
                  <MapPin className="w-6 h-6 text-green-500" />
                </div>
                <span className="text-sm">{t('contact')}</span>
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
                <h3 className="font-bold text-lg">{t('secure_tracking')}</h3>
                <p className="text-gray-600">
                  {t('secure_tracking_description')}
                </p>
              </div>
            </div>
            <p className="text-gray-600">{t('secure_tracking_description')}</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <Grid className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-bold text-lg">
                  {t('detailed_information')}
                </h3>
                <p className="text-gray-600">
                  {t('detailed_information_description')}
                </p>
              </div>
            </div>
            <p className="text-gray-600">
              {t('detailed_information_description')}
            </p>
          </div>
        </div>

        {/* Service Options - Mobile & Desktop */}
        <div className="bg-white rounded-lg p-4 shadow-sm md:shadow-md">
          <h3 className="text-lg font-medium mb-4">{t('services')}</h3>
          <div className="grid grid-cols-3 md:grid-cols-4 gap-4">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-2">
                <Truck className="w-6 h-6 text-blue-500" />
              </div>
              <span className="text-sm">{t('track_shipment')}</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-2">
                <Package className="w-6 h-6 text-green-500" />
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-2">
                <Users className="w-6 h-6 text-purple-500" />
              </div>
              <span className="text-sm">{t('about')}</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-2">
                <Headphones className="w-6 h-6 text-red-500" />
              </div>
              <span className="text-sm">{t('contact_us')}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function QueryContent({ t }: { t: (key: string) => string }) {
  return (
    <div className="flex flex-col items-center justify-center h-full gap-8">
      {/* Banner */}
      <div className="relative w-full h-40 bg-gradient-to-r from-blue-600 to-blue-400 rounded-lg overflow-hidden">
        <div className="absolute inset-0 p-6 text-white flex flex-col justify-center items-center text-center">
          <h2 className="text-3xl font-bold mb-3 tracking-wide">澳德发物流</h2>
          <h3 className="text-xl font-semibold mb-2">您的澳洲专线物流专家</h3>
          <p className="text-sm max-w-2xl">
            专业提供中国至澳大利亚的国际物流服务，拥有完善的物流网络和专业的团队。
            我们致力于为客户提供安全、高效、便捷的跨境物流解决方案。
          </p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md overflow-hidden w-full pb-8">
        <div className="bg-blue-600 p-6 text-white text-center">
          <h2 className="text-2xl font-bold mb-2">
            {t('track_your_shipment')}
          </h2>
          <p className="text-blue-100">
            {t('enter_tracking_number_description')}
          </p>
        </div>
        <div className="p-6">
          <SearchForm />
        </div>
        {/* QR Code Scanner Section */}
        <div className="flex flex-col items-center px-6">
          <button className="bg-green-600 text-white py-3 px-6 rounded-lg flex items-center justify-center gap-2 hover:bg-green-700 transition-colors w-full max-w-md">
            <Search className="w-4 h-4" />
            {t('scan_qr_code')}
          </button>
        </div>
      </div>

      {/* Banner */}
      <div className="relative w-full h-20 bg-gradient-to-r from-blue-600 to-blue-400 rounded-lg overflow-hidden">
        <div className="absolute inset-0 p-6 text-white flex flex-col justify-center items-center text-center">
          <p className="text-xl font-bold mb-3 tracking-wide">
            寄件｜查询｜预约
          </p>
        </div>
      </div>

      {/* Website URL */}
      <div className="w-full text-center p-4 bg-white rounded-lg shadow-sm">
        <a
          href="https://adf.eagur.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800 font-medium"
        >
          访问我们的网站：https://adf.eagur.com
        </a>
      </div>
    </div>
  );
}

function ProfileContent({ t }: { t: (key: string) => string }) {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: '如何追踪我的包裹？',
      answer:
        "您可以通过以下方式追踪包裹：1. 在首页输入运单号 2. 扫描包裹上的二维码 3. 在APP中查看'我的订单'",
    },
    {
      question: '从中国发货到澳洲需要多久？',
      answer:
        '一般空运7-10个工作日，海运20-30个工作日。具体时间可能因目的地、货物类型和清关时间而有所不同。',
    },
    {
      question: '你们可以寄送哪些物品？',
      answer:
        '我们可以运送大多数日常物品，包括服装、电子产品、食品等。但不能托运违禁品，如易燃物、管制刀具等。详细清单请查看违禁品列表。',
    },
    {
      question: '如何计算运费？',
      answer:
        '运费根据重量或体积（取较大值）计算，另外还要考虑目的地。您可以使用我们的运费计算器获取准确报价。',
    },
    {
      question: '包裹丢失或损坏怎么办？',
      answer:
        '我们为所有包裹提供基本保险。如发生丢失或损坏，请立即联系客服，提供运单号和相关证据，我们会按照保险条款进行赔付。',
    },
    {
      question: '你们的取件时间是怎样的？',
      answer:
        '我们的取件时间为周一至周六 9:00-18:00。您可以在下单时选择希望的取件时间段。',
    },
  ];

  return (
    <div className="flex flex-col gap-4">
      {/* User Profile */}
      <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm md:shadow-md">
        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
          <User className="w-8 h-8 text-gray-500" />
        </div>
        <div>
          <div className="text-lg font-medium">{t('account')}</div>
          <div className="text-sm text-gray-500">
            {t('track_your_shipment')}
          </div>
        </div>
      </div>

      {/* My Services */}
      <div className="bg-white rounded-lg p-4 shadow-sm md:shadow-md">
        <h3 className="text-lg font-medium mb-4">{t('services')}</h3>
        <div className="grid grid-cols-4 gap-4">
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-2">
              <Package className="w-6 h-6 text-blue-500" />
            </div>
            <span className="text-xs">{t('send_shipment')}</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-2">
              <Search className="w-6 h-6 text-green-500" />
            </div>
            <span className="text-xs">{t('track_shipment')}</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-2">
              <Grid className="w-6 h-6 text-orange-500" />
            </div>
            <span className="text-xs">{t('services')}</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-2">
              <Headphones className="w-6 h-6 text-purple-500" />
            </div>
            <span className="text-xs">{t('contact_us')}</span>
          </div>
        </div>
      </div>

      {/* Customer Service FAQ */}
      <div className="bg-white rounded-lg p-4 shadow-sm md:shadow-md">
        <h3 className="text-lg font-medium mb-4">客服常见问题</h3>
        <div className="space-y-2">
          {faqs.map((faq, index) => (
            <div key={index} className="border rounded-lg overflow-hidden">
              <button
                className="w-full px-4 py-3 text-left bg-gray-50 hover:bg-gray-100 flex justify-between items-center"
                onClick={() =>
                  setExpandedFaq(expandedFaq === index ? null : index)
                }
              >
                <span className="font-medium">{faq.question}</span>
                <span className="transform transition-transform duration-200">
                  {expandedFaq === index ? '−' : '+'}
                </span>
              </button>
              {expandedFaq === index && (
                <div className="px-4 py-3 bg-white text-gray-600">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Company Introduction */}
      <div className="bg-white rounded-lg p-4 shadow-sm">
        <h3 className="font-medium mb-2">澳德发物流</h3>
        <p className="text-gray-600">{t('company_description')}</p>
      </div>
    </div>
  );
}

