"use client"

import type React from 'react';
import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useLanguage } from "@/components/language-provider"
import { Search, Scan } from 'lucide-react';
import { ScanModal } from './scan-modal';

export function SearchForm() {
  const { t } = useLanguage();
  const [trackingNumber, setTrackingNumber] = useState('');
  const [error, setError] = useState('');
  const [isScanning, setIsScanning] = useState(false);
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!trackingNumber.trim()) {
      setError(t('please_enter_tracking_number'));
      return;
    }

    // Clear any previous errors
    setError('');

    // Navigate to the tracking result page
    router.push(`/track/${encodeURIComponent(trackingNumber)}`);
  };

  const handleScan = () => {
    setIsScanning(true);
  };

  const handleScanSuccess = (result: string) => {
    setIsScanning(false);
    setTrackingNumber(result);
    router.push(`/track/${encodeURIComponent(result)}`);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <div className="relative">
          <Input
            id="tracking-number"
            type="text"
            placeholder={t('enter_tracking_number')}
            value={trackingNumber}
            onChange={(e) => setTrackingNumber(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-lg"
          />
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
        </div>
        {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
        <p className="mt-1 text-xs text-gray-500">
          {t('demo_tracking_number')}: TSH2025274
        </p>
      </div>
      <Button type="submit" className="w-full">
        {t('track_shipment')}
      </Button>
      <Button
        type="button"
        variant="outline"
        className="w-full"
        onClick={handleScan}
      >
        <Scan className="mr-2 h-4 w-4" />
        {t('scan_barcode')}
      </Button>
      {isScanning && (
        <ScanModal
          onClose={() => setIsScanning(false)}
          onScanSuccess={handleScanSuccess}
        />
      )}
    </form>
  );
}

