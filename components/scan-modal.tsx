'use client';

import { useEffect, useRef } from 'react';
import { Html5QrcodeScanner, Html5QrcodeSupportedFormats } from 'html5-qrcode';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/components/language-provider';

interface ScanModalProps {
  onClose: () => void;
  onScanSuccess: (code: string) => void;
}

export function ScanModal({ onClose, onScanSuccess }: ScanModalProps) {
  const { t } = useLanguage();
  const scannerRef = useRef<Html5QrcodeScanner | null>(null);

  useEffect(() => {
    scannerRef.current = new Html5QrcodeScanner(
      'reader',
      {
        fps: 10,
        qrbox: { width: 250, height: 250 },
        aspectRatio: 1.0,
        formatsToSupport: [
          Html5QrcodeSupportedFormats.CODE_128,
          Html5QrcodeSupportedFormats.EAN_13,
          Html5QrcodeSupportedFormats.CODE_39,
          Html5QrcodeSupportedFormats.QR_CODE,
        ],
      },
      false
    );

    scannerRef.current.render(
      (decodedText) => {
        if (scannerRef.current) {
          scannerRef.current.clear();
          onScanSuccess(decodedText);
        }
      },
      (error) => {
        console.log(error);
      }
    );

    return () => {
      if (scannerRef.current) {
        scannerRef.current.clear();
      }
    };
  }, [onScanSuccess]);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-4 rounded-lg max-w-lg w-full mx-4">
        <div id="reader" className="w-full"></div>
        <Button onClick={onClose} className="mt-4 w-full">
          {t('cancel')}
        </Button>
      </div>
    </div>
  );
}
