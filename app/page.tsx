"use client"

import { useState, useCallback, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { SearchForm } from '@/components/search-form';
import { useLanguage } from '@/components/language-provider';
import { LanguageSwitcher } from '@/components/language-switcher';
import {
  User,
  Search,
  Package,
  Menu,
  X,
  Headphones,
  Users,
  Grid,
  Truck,
  MapPin,
} from 'lucide-react';
import { ShipmentForm } from '@/components/shipment-form';
import { HeroCarousel } from '@/components/hero-carousel';
import '../styles/container.css';
import type { TranslationFunction } from '@/types/language';

// Add mock data after imports
const mockOrders = [
  {
    id: 1,
    trackingNumber: 'ADF2023001',
    status: 'pending',
    date: '2023-12-01',
    from: 'Sydney',
    to: 'Melbourne',
    items: 'Books',
    timeline: [
      { time: '2023-12-01 09:00', status: '订单创建', location: 'Sydney' },
      { time: '2023-12-01 14:00', status: '等待揽收', location: 'Sydney' },
    ],
  },
  {
    id: 2,
    trackingNumber: 'ADF2023002',
    status: 'collecting',
    date: '2023-12-02',
    from: 'Brisbane',
    to: 'Perth',
    items: 'Electronics',
  },
  {
    id: 3,
    trackingNumber: 'ADF2023003',
    status: 'shipping',
    date: '2023-12-03',
    from: 'Melbourne',
    to: 'Adelaide',
    items: 'Clothing',
  },
  {
    id: 4,
    trackingNumber: 'ADF2023004',
    status: 'delivered',
    date: '2023-12-04',
    from: 'Perth',
    to: 'Sydney',
    items: 'Food',
  },
];

const mockAddressBook = [
  {
    id: 1,
    name: 'Home',
    address: '123 Main St, Sydney NSW 2000',
    phone: '0400000001',
  },
  {
    id: 2,
    name: 'Office',
    address: '456 Business Ave, Melbourne VIC 3000',
    phone: '0400000002',
  },
];

export default function HomePage() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center">
            <Image
              src="/icon.jpg?height=40&width=40"
              alt={t('logistics_logo')}
              width={40}
              height={40}
              className="mr-2"
            />
            <h1 className="text-xl font-bold">{t('company_name')}</h1>
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
        {activeTab === 'home' && (
          <div className="flex flex-col gap-6">
            {/* Hero Carousel */}
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              <HeroCarousel />
            </div>

            {/* Track Shipment */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="mb-4">
                <h2 className="text-lg font-medium text-gray-900 mb-1">
                  {t('track_shipment')}
                </h2>
                <p className="text-sm text-gray-500">{t('enter_tracking_number')}</p>
              </div>
              <SearchForm />
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-2 gap-4">
              <button
                onClick={() => setActiveTab('send')}
                className="flex flex-col items-center justify-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <Package className="w-8 h-8 text-blue-600 mb-2" />
                <span className="text-gray-900 font-medium">{t('quick_send_title')}</span>
                <span className="text-xs text-gray-500 mt-1">{t('quick_send_description')}</span>
              </button>
              <button
                onClick={() => setActiveTab('query')}
                className="flex flex-col items-center justify-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <Search className="w-8 h-8 text-blue-600 mb-2" />
                <span className="text-gray-900 font-medium">{t('track_your_shipment')}</span>
                <span className="text-xs text-gray-500 mt-1">
                  {t('track_order_description')}
                </span>
              </button>
            </div>

            {/* Contact Info */}
            <div className="bg-white rounded-xl p-6">
              <div className="text-center md:border-l md:pl-4">
                <p className="text-sm text-gray-600">
                  {t('direct_shipping_line')}
                  <br />
                  {t('shipping_time')}
                </p>
              </div>

              <div className="mt-3 pt-3 border-t text-center">
                <p className="text-xs text-blue-600">
                  {t('service_features')}
                </p>
              </div>
            </div>
          </div>
        )}
        {activeTab === 'send' && <SendContent t={t} />}
        {activeTab === 'query' && <QueryContent t={t} />}
        {activeTab === 'profile' && <ProfileContent t={t} />}
      </main>

      {/* Bottom Navigation - Mobile Only */}
      <nav className="md:hidden flex justify-around items-center py-3 bg-white border-t sticky bottom-0">
        <button
          className={`flex flex-col items-center ${
            activeTab === 'home' ? 'text-blue-600' : 'text-gray-500'
          }`}
          onClick={() => setActiveTab('home')}
        >
          <Truck className="w-6 h-6" />
          <span className="text-xs mt-1">{t('home')}</span>
        </button>
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

function SendContent({ t }: { t: TranslationFunction }) {
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

function HomeContent({ t }: { t: TranslationFunction }) {
  return (
    <div className="flex flex-col items-center justify-center h-full gap-8">
      {/* Banner */}
      <div className="relative w-full h-48 bg-gradient-to-br from-blue-600 via-blue-500 to-blue-400 rounded-xl overflow-hidden shadow-lg">
        <div className="absolute inset-0 bg-pattern opacity-10"></div>
        <div className="absolute inset-0 p-8 text-white">
          <div className="h-full flex flex-col justify-center items-center text-center relative z-10">
            <h3 className="text-xl font-semibold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-100">
              {t('company_slogan')}
            </h3>
            <p className="text-base max-w-2xl leading-relaxed text-blue-50 font-medium">
              {t('company_description')}
              <br />
              {t('company_commitment')}
              <span className="text-yellow-300">{t('safe')}</span>
              、<span className="text-yellow-300">{t('efficient')}</span>、
              <span className="text-yellow-300">{t('convenient')}</span>
              {t('cross_border_logistics')}
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/10 to-transparent"></div>
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
    </div>
  );
}

function QueryContent({ t }: { t: TranslationFunction }) {
  return (
    <div className="flex flex-col items-center justify-center h-full gap-8">
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
      </div>
    </div>
  );
}

function ProfileContent({ t }: { t: TranslationFunction }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [selectedSection, setSelectedSection] = useState<string | null>(null);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [loginForm, setLoginForm] = useState({ username: '', password: '' });
  const [isClient, setIsClient] = useState(false);

  // Move quickActions definition here
  const quickActions = [
    {
      id: 'addresses',
      icon: MapPin,
      label: t('my_address_book'),
      color: 'blue',
      content: () => (
        <div className="p-4">
          {mockAddressBook.map((address) => (
            <div
              key={address.id}
              className="bg-white rounded-lg border p-4 mb-4 shadow-sm"
            >
              <h3 className="text-lg font-medium">{address.name}</h3>
              <p className="text-sm text-gray-500">{address.address}</p>
              <p className="text-sm text-gray-500">{address.phone}</p>
            </div>
          ))}
        </div>
      ),
    },
    {
      id: 'express',
      icon: Truck,
      label: t('shipping_service'),
      color: 'green',
      content: () => (
        <div className="p-4">
          <ShipmentForm />
        </div>
      ),
    },
    {
      id: 'service',
      icon: Headphones,
      label: t('online_service'),
      color: 'orange',
      content: () => (
        <div className="p-4">
          <p className="text-sm text-gray-500">
            {t('contact_service_description')}
          </p>
        </div>
      ),
    },
    {
      id: 'settings',
      icon: Grid,
      label: t('system_settings'),
      color: 'purple',
      content: () => (
        <div className="p-4">
          <p className="text-sm text-gray-500">{t('settings_description')}</p>
        </div>
      ),
    },
  ];

  // Add this to prevent hydration mismatch
  useEffect(() => {
    setIsClient(true);
    const loggedIn = localStorage.getItem('isLoggedIn') === 'true';
    if (loggedIn) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogout = useCallback(() => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
    setShowLoginForm(false);
  }, []);

  // Don't render anything until we're on the client
  if (!isClient) {
    return <div className="min-h-[400px] bg-gray-50"></div>;
  }

  // Show blurred content with login prompt
  if (!isLoggedIn && !showLoginForm) {
    return (
      <div className="relative">
        {/* Login Prompt Overlay */}
        <div className="absolute inset-0 bg-gray-900/60 backdrop-blur-sm flex items-center justify-center z-10 rounded-lg">
          <button
            onClick={() => setShowLoginForm(true)}
            className="bg-white px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
          >
            <User className="w-12 h-12 text-blue-600 mx-auto mb-2" />
            <span className="text-lg font-medium text-blue-600">
              点击登录查看更多信息
            </span>
          </button>
        </div>

        {/* Blurred Background Content */}
        <div className="filter blur-sm">
          <MainContent
            activeView={null}
            selectedSection={selectedSection}
            quickActions={quickActions}
            expandedFaq={expandedFaq}
            onBackClick={() => setSelectedSection(null)}
            onSectionClick={setSelectedSection}
            onFaqClick={setExpandedFaq}
            handleLogout={handleLogout}
            t={t}
          />
        </div>
      </div>
    );
  }

  // Show login form
  if (!isLoggedIn && showLoginForm) {
    return (
      <div className="bg-white rounded-xl p-8 shadow-lg max-w-md mx-auto">
        <div className="text-center mb-6">
          <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <User className="w-10 h-10 text-blue-600" />
          </div>
          <h2 className="text-xl font-medium">{t('login_title')}</h2>
          <p className="text-sm text-gray-500 mt-1">{t('login_description')}</p>
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (loginForm.username && loginForm.password) {
              localStorage.setItem('isLoggedIn', 'true');
              setIsLoggedIn(true);
            }
          }}
          className="space-y-4"
        >
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {t('username')}
            </label>
            <input
              type="text"
              className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              value={loginForm.username}
              onChange={(e) =>
                setLoginForm((prev) => ({ ...prev, username: e.target.value }))
              }
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {t('password')}
            </label>
            <input
              type="password"
              className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              value={loginForm.password}
              onChange={(e) =>
                setLoginForm((prev) => ({ ...prev, password: e.target.value }))
              }
              required
            />
          </div>
          <div className="pt-4">
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              {t('login')}
            </button>
          </div>
          <button
            type="button"
            onClick={() => setShowLoginForm(false)}
            className="w-full py-2 text-gray-600 hover:text-gray-800"
          >
            {t('back')}
          </button>
        </form>
      </div>
    );
  }

  // Show section content if selected
  if (selectedSection) {
    const section = quickActions.find(
      (action) => action.id === selectedSection
    );
    if (!section) return null;

    return (
      <div className="bg-gray-50 min-h-full">
        <div className="flex items-center mb-6">
          <button
            onClick={() => setSelectedSection(null)}
            className="p-2 hover:bg-gray-100 rounded-lg mr-2"
          >
            <X className="w-6 h-6" />
          </button>
          <h2 className="text-xl font-medium">{section.label}</h2>
        </div>
        {section.content()}
      </div>
    );
  }

  // Main content (logged in view)
  return (
    <MainContent
      activeView={null}
      selectedSection={selectedSection}
      quickActions={quickActions}
      expandedFaq={expandedFaq}
      onBackClick={() => setSelectedSection(null)}
      onSectionClick={setSelectedSection}
      onFaqClick={setExpandedFaq}
      handleLogout={handleLogout}
      t={t}
    />
  );
}

// Updated MainContent component
function MainContent({
  activeView,
  selectedSection,
  quickActions,
  expandedFaq,
  onSectionClick,
  onFaqClick,
  handleLogout,
  t,
  onBackClick,
}: {
  activeView: string | null;
  selectedSection: string | null;
  quickActions: any[];
  expandedFaq: number | null;
  onSectionClick: (section: string | null) => void;
  onFaqClick: (index: number | null) => void;
  handleLogout: () => void;
  t: TranslationFunction;
  onBackClick: () => void;
}) {
  const [activeOrderTab, setActiveOrderTab] = useState('all');

  // Mock user data
  const user = {
    name: '言',
    avatar: '/avatar.png',
    level: t('gold_member'),
    points: 0,
  };

  // Mock order statistics
  const orderStats = [
    { id: 'pending', label: t('pending_shipment'), count: 0 },
    { id: 'unpaid', label: t('unpaid'), count: 0 },
    { id: 'shipping', label: t('in_transit'), count: 0 },
    { id: 'delivered', label: t('delivered'), count: 0 },
  ];

  // Filter orders based on active tab
  const getFilteredOrders = () => {
    if (activeOrderTab === 'all') return mockOrders;
    return mockOrders.filter((order) => order.status === activeOrderTab);
  };

  const handleOrderStatusClick = (statusType: string) => {
    onSectionClick('orders');
    setActiveOrderTab(statusType);
  };

  // Show order details page if orders section is selected
  if (selectedSection === 'orders') {
    return (
      <div className="bg-white rounded-lg shadow-sm">
        <div className="flex items-center border-b p-4">
          <button
            onClick={() => onSectionClick(null)}
            className="p-2 hover:bg-gray-100 rounded-lg mr-2"
          >
            <X className="w-6 h-6" />
          </button>
          <h2 className="text-xl font-medium">
            {orderStats.find((stat) => stat.id === activeOrderTab)?.label ||
              '所有订单'}
          </h2>
        </div>

        <div className="flex gap-2 p-4 border-b bg-gray-50">
          {orderStats.map((stat) => (
            <button
              key={stat.id}
              className={`px-4 py-2 rounded-full text-sm transition-colors ${
                activeOrderTab === stat.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-white border hover:border-blue-600'
              }`}
              onClick={() => setActiveOrderTab(stat.id)}
            >
              {stat.label} ({stat.count})
            </button>
          ))}
        </div>

        <div className="p-4 space-y-4">
          {getFilteredOrders().map((order) => (
            <div
              key={order.id}
              className="bg-white rounded-lg border p-4 hover:shadow-md transition-shadow"
            >
              <div className="flex justify-between items-start mb-3">
                <div>
                  <span className="text-sm text-gray-500">{t('tracking_number')}</span>
                  <div className="font-medium">{order.trackingNumber}</div>
                </div>
                <div className="text-right">
                  <span className="text-sm text-gray-500">{t('shipment_date')}</span>
                  <div className="font-medium">{order.date}</div>
                </div>
              </div>

              <div className="flex items-center gap-3 py-3 border-t border-b">
                <div className="flex-1">
                  <div className="text-sm text-gray-500 mb-1">{t('from_location')}</div>
                  <div className="font-medium">{order.from}</div>
                </div>
                <svg
                  className="w-5 h-5 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
                <div className="flex-1">
                  <div className="text-sm text-gray-500 mb-1">{t('to_location')}</div>
                  <div className="font-medium">{order.to}</div>
                </div>
              </div>

              {order.timeline && (
                <div className="mt-3 pt-3">
                  <div className="text-sm text-gray-500 mb-2">{t('tracking_history')}</div>
                  <div className="space-y-3">
                    {order.timeline.slice(0, 1).map((event, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-blue-600 mt-2"></div>
                        <div>
                          <div className="text-sm font-medium">
                            {event.status}
                          </div>
                          <div className="text-xs text-gray-500">
                            {event.time} · {event.location}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="mt-4 flex justify-end">
                <button className="text-blue-600 text-sm hover:text-blue-700">
                  {t('view_details')} →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {/* User Profile Card */}
      <div className="bg-white rounded-lg p-4 shadow-sm">
        <div className="flex items-center space-x-4">
          <div className="w-16 h-16 rounded-full overflow-hidden">
            <Image
              src={user.avatar}
              alt={user.name}
              width={64}
              height={64}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-medium">{user.name}</h3>
              <button
                onClick={handleLogout}
                className="text-red-600 text-sm hover:text-red-700"
              >
                {t('logout')}
              </button>
            </div>
            <div className="flex items-center space-x-2 mt-1">
              <span className="text-sm text-yellow-600">{user.level}</span>
              <span className="text-sm text-gray-500">{t('points')}: {user.points}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Order Statistics */}
      <div className="bg-white rounded-lg p-4 shadow-sm">
        <div className="grid grid-cols-4 gap-2">
          {orderStats.map((stat) => (
            <button
              key={stat.id}
              className="flex flex-col items-center p-3 rounded-lg hover:bg-gray-50 transition-colors"
              onClick={() => handleOrderStatusClick(stat.id)}
            >
              <span className="text-xl font-semibold">{stat.count}</span>
              <span className="text-sm">{stat.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-4 gap-4">
        {quickActions.map((action) => (
          <button
            key={action.id}
            onClick={() => onSectionClick(action.id)}
            className="flex flex-col items-center p-2"
          >
            <div
              className={`w-12 h-12 bg-${action.color}-100 rounded-lg flex items-center justify-center mb-1`}
            >
              <action.icon className={`w-6 h-6 text-${action.color}-500`} />
            </div>
            <span className="text-sm">{action.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}