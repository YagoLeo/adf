"use client"

import type React from 'react';
import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useLanguage } from "@/components/language-provider"
import { Search, Scan } from 'lucide-react';

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

  const handleScan = async () => {
    try {
      // 检查浏览器是否支持 BarcodeDetector
      if (!('BarcodeDetector' in window)) {
        setError(t('barcode_scanner_not_supported'));
        return;
      }

      setIsScanning(true);
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: 'environment' },
      });
      const videoElement = document.createElement('video');
      videoElement.srcObject = stream;
      await videoElement.play();

      const barcodeDetector = new (window as any).BarcodeDetector();
      const detectBarcode = async () => {
        try {
          const barcodes = await barcodeDetector.detect(videoElement);
          if (barcodes.length > 0) {
            setTrackingNumber(barcodes[0].rawValue);
            stream.getTracks().forEach((track) => track.stop());
            setIsScanning(false);
            router.push(`/track/${encodeURIComponent(barcodes[0].rawValue)}`);
          } else {
            requestAnimationFrame(detectBarcode);
          }
        } catch (error) {
          console.error('Barcode detection error:', error);
          setError(t('barcode_detection_error'));
          stream.getTracks().forEach((track) => track.stop());
          setIsScanning(false);
        }
      };

      detectBarcode();
    } catch (error) {
      console.error('Camera access error:', error);
      setError(t('camera_access_error'));
      setIsScanning(false);
    }
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
        disabled={isScanning}
      >
        <Scan className="mr-2 h-4 w-4" />
        {isScanning ? t('scanning') : t('scan_barcode')}
      </Button>
      {isScanning && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-4 rounded-lg">
            <p className="text-center">{t('scanning_message')}</p>
            <Button onClick={() => setIsScanning(false)} className="mt-4">
              {t('cancel')}
            </Button>
          </div>
        </div>
      )}
    </form>
  );
}

