"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useLanguage } from "@/components/language-provider"

export function SearchForm() {
  const { t } = useLanguage()
  const [trackingNumber, setTrackingNumber] = useState("")
  const [error, setError] = useState("")
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!trackingNumber.trim()) {
      setError(t("please_enter_tracking_number"))
      return
    }

    // Clear any previous errors
    setError("")

    // Navigate to the tracking result page
    router.push(`/track/${encodeURIComponent(trackingNumber)}`)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="tracking-number" className="block text-sm font-medium text-gray-700 mb-1">
          {t("tracking_number")}
        </label>
        <Input
          id="tracking-number"
          type="text"
          placeholder={t("enter_tracking_number")}
          value={trackingNumber}
          onChange={(e) => setTrackingNumber(e.target.value)}
          className="w-full"
        />
        {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
      </div>
      <Button type="submit" className="w-full md:w-auto">
        {t("track_shipment")}
      </Button>
    </form>
  )
}

