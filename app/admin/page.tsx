"use client"

import { ShipmentForm } from "@/components/admin/shipment-form"
import { useLanguage } from "@/components/language-provider"

export default function AdminPage() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">物流管理系统</h1>
        <ShipmentForm />
      </div>
    </div>
  )
}

