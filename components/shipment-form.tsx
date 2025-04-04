"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { useToast } from "@/hooks/use-toast"
import { addShipment } from "@/lib/shipment-service"
import type { ShipmentDetails } from "@/types/shipment"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useLanguage } from "@/components/language-provider"

export function ShipmentForm() {
  const { t } = useLanguage()
  const { toast } = useToast()
  const [loading, setLoading] = useState(false)
  const [step, setStep] = useState(1)

  const [formData, setFormData] = useState<Partial<ShipmentDetails>>({
    houseBillNumber: "",
    houseBillReference: "",
    shipperName: "",
    shipperAddress1: "",
    shipperAddress2: "",
    shipperCity: "",
    shipperState: "",
    shipperCountryCode: "",
    shipperPostcode: "",
    consigneeName: "",
    consigneeAddress1: "",
    consigneeAddress2: "",
    consigneeCity: "",
    consigneePostcode: "",
    consigneeState: "",
    consigneeCountryCode: "",
    consigneePhone: "",
    deliveryInstructions: "",
    goodsDescription: "",
    weightInKG: 0,
    pieces: 1,
    packType: "",
    goodsValue: 0,
    currency: "USD",
    cbm: 0,
    sacYN: "N",
    merchantARN: "",
    purchaserABN: "",
    containerNumber: "",
    status: "Processed",
    trackingEvents: [],
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target

    // Handle numeric fields
    if (["weightInKG", "pieces", "goodsValue", "cbm"].includes(name)) {
      setFormData({
        ...formData,
        [name]: Number.parseFloat(value) || 0,
      })
    } else {
      setFormData({
        ...formData,
        [name]: value,
      })
    }
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const goToNextStep = () => {
    setStep(step + 1)
    window.scrollTo(0, 0)
  }

  const goToPrevStep = () => {
    setStep(step - 1)
    window.scrollTo(0, 0)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!formData.shipperName || !formData.consigneeName || !formData.goodsDescription) {
      toast({
        title: t("error"),
        description: t("please_fill_required_fields"),
        variant: "destructive",
      })
      return
    }

    try {
      setLoading(true)

      // Generate a tracking number if not provided
      const trackingNumber = formData.houseBillNumber || `AUS${Date.now().toString().substring(7)}`

      // Create a complete shipment object with required fields
      const shipmentData: ShipmentDetails = {
        ...(formData as ShipmentDetails),
        houseBillNumber: trackingNumber,
        trackingEvents: [
          {
            date: new Date().toISOString().split("T")[0],
            time: new Date().toTimeString().split(" ")[0].substring(0, 5),
            location: `${formData.shipperCity || ""}, ${formData.shipperCountryCode || ""}`,
            status: "Processed",
            description: t("shipment_info_received"),
          },
        ],
      }

      await addShipment(shipmentData)

      toast({
        title: t("success"),
        description: `${t("shipment_added_success")} - ${t("tracking_number")}: ${trackingNumber}`,
      })

      // Reset form and go back to step 1
      setFormData({
        houseBillNumber: "",
        houseBillReference: "",
        shipperName: "",
        shipperAddress1: "",
        shipperAddress2: "",
        shipperCity: "",
        shipperState: "",
        shipperCountryCode: "",
        shipperPostcode: "",
        consigneeName: "",
        consigneeAddress1: "",
        consigneeAddress2: "",
        consigneeCity: "",
        consigneePostcode: "",
        consigneeState: "",
        consigneeCountryCode: "",
        consigneePhone: "",
        deliveryInstructions: "",
        goodsDescription: "",
        weightInKG: 0,
        pieces: 1,
        packType: "",
        goodsValue: 0,
        currency: "USD",
        cbm: 0,
        sacYN: "N",
        merchantARN: "",
        purchaserABN: "",
        containerNumber: "",
        status: "Processed",
        trackingEvents: [],
      })
      setStep(1)
    } catch (error) {
      console.error("Error adding shipment:", error)
      toast({
        title: t("error"),
        description: t("failed_to_add_shipment"),
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="w-full">
      <div className="mb-6">
        <div className="flex justify-between items-center">
          <div className={`flex-1 h-1 ${step >= 1 ? "bg-blue-500" : "bg-gray-200"}`}></div>
          <div className={`flex-1 h-1 ${step >= 2 ? "bg-blue-500" : "bg-gray-200"}`}></div>
          <div className={`flex-1 h-1 ${step >= 3 ? "bg-blue-500" : "bg-gray-200"}`}></div>
        </div>
        <div className="flex justify-between mt-2">
          <div className="text-sm font-medium text-center">{t("sender_details")}</div>
          <div className="text-sm font-medium text-center">{t("recipient_details")}</div>
          <div className="text-sm font-medium text-center">{t("shipment_details")}</div>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        {step === 1 && (
          <Card>
            <CardHeader>
              <CardTitle>{t("sender_details")}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="shipperName">{t("name")} *</Label>
                <Input
                  id="shipperName"
                  name="shipperName"
                  value={formData.shipperName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="shipperAddress1">{t("address")} 1 *</Label>
                <Input
                  id="shipperAddress1"
                  name="shipperAddress1"
                  value={formData.shipperAddress1}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="shipperAddress2">{t("address")} 2</Label>
                <Input
                  id="shipperAddress2"
                  name="shipperAddress2"
                  value={formData.shipperAddress2}
                  onChange={handleChange}
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="shipperCity">{t("city")} *</Label>
                  <Input
                    id="shipperCity"
                    name="shipperCity"
                    value={formData.shipperCity}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="shipperState">{t("state_province")} *</Label>
                  <Input
                    id="shipperState"
                    name="shipperState"
                    value={formData.shipperState}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="shipperPostcode">{t("postal_code")} *</Label>
                  <Input
                    id="shipperPostcode"
                    name="shipperPostcode"
                    value={formData.shipperPostcode}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="shipperCountryCode">{t("country_code")} *</Label>
                  <Select onValueChange={(value) => handleSelectChange("shipperCountryCode", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder={t("select_country")} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="AU">Australia</SelectItem>
                      <SelectItem value="CN">China</SelectItem>
                      <SelectItem value="US">United States</SelectItem>
                      <SelectItem value="UK">United Kingdom</SelectItem>
                      <SelectItem value="SG">Singapore</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="pt-4">
                <Button type="button" onClick={goToNextStep} className="w-full">
                  {t("next")}
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {step === 2 && (
          <Card>
            <CardHeader>
              <CardTitle>{t("recipient_details")}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="consigneeName">{t("name")} *</Label>
                <Input
                  id="consigneeName"
                  name="consigneeName"
                  value={formData.consigneeName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="consigneeAddress1">{t("address")} 1 *</Label>
                <Input
                  id="consigneeAddress1"
                  name="consigneeAddress1"
                  value={formData.consigneeAddress1}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="consigneeAddress2">{t("address")} 2</Label>
                <Input
                  id="consigneeAddress2"
                  name="consigneeAddress2"
                  value={formData.consigneeAddress2}
                  onChange={handleChange}
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="consigneeCity">{t("city")} *</Label>
                  <Input
                    id="consigneeCity"
                    name="consigneeCity"
                    value={formData.consigneeCity}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="consigneeState">{t("state_province")} *</Label>
                  <Input
                    id="consigneeState"
                    name="consigneeState"
                    value={formData.consigneeState}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="consigneePostcode">{t("postal_code")} *</Label>
                  <Input
                    id="consigneePostcode"
                    name="consigneePostcode"
                    value={formData.consigneePostcode}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="consigneeCountryCode">{t("country_code")} *</Label>
                  <Select onValueChange={(value) => handleSelectChange("consigneeCountryCode", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder={t("select_country")} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="AU">Australia</SelectItem>
                      <SelectItem value="CN">China</SelectItem>
                      <SelectItem value="US">United States</SelectItem>
                      <SelectItem value="UK">United Kingdom</SelectItem>
                      <SelectItem value="SG">Singapore</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="consigneePhone">{t("phone")} *</Label>
                <Input
                  id="consigneePhone"
                  name="consigneePhone"
                  value={formData.consigneePhone}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="deliveryInstructions">{t("delivery_instructions")}</Label>
                <Textarea
                  id="deliveryInstructions"
                  name="deliveryInstructions"
                  value={formData.deliveryInstructions}
                  onChange={handleChange}
                  rows={3}
                />
              </div>
              <div className="flex justify-between gap-4 pt-4">
                <Button type="button" onClick={goToPrevStep} variant="outline" className="w-full">
                  {t("previous")}
                </Button>
                <Button type="button" onClick={goToNextStep} className="w-full">
                  {t("next")}
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {step === 3 && (
          <Card>
            <CardHeader>
              <CardTitle>{t("package_information")}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="goodsDescription">{t("goods_description")} *</Label>
                <Textarea
                  id="goodsDescription"
                  name="goodsDescription"
                  value={formData.goodsDescription}
                  onChange={handleChange}
                  rows={2}
                  required
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="packType">{t("pack_type")}</Label>
                  <Select onValueChange={(value) => handleSelectChange("packType", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder={t("select_pack_type")} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Carton">{t("carton")}</SelectItem>
                      <SelectItem value="Pallet">{t("pallet")}</SelectItem>
                      <SelectItem value="Box">{t("box")}</SelectItem>
                      <SelectItem value="Envelope">{t("envelope")}</SelectItem>
                      <SelectItem value="Other">{t("other")}</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="pieces">{t("pieces")}</Label>
                  <Input
                    id="pieces"
                    name="pieces"
                    type="number"
                    value={formData.pieces}
                    onChange={handleChange}
                    min="1"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="weightInKG">{t("weight")} (KG)</Label>
                  <Input
                    id="weightInKG"
                    name="weightInKG"
                    type="number"
                    step="0.01"
                    value={formData.weightInKG}
                    onChange={handleChange}
                    min="0"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="cbm">{t("cbm")}</Label>
                  <Input
                    id="cbm"
                    name="cbm"
                    type="number"
                    step="0.01"
                    value={formData.cbm}
                    onChange={handleChange}
                    min="0"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="goodsValue">{t("goods_value")}</Label>
                  <Input
                    id="goodsValue"
                    name="goodsValue"
                    type="number"
                    step="0.01"
                    value={formData.goodsValue}
                    onChange={handleChange}
                    min="0"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="currency">{t("currency")}</Label>
                  <Select
                    onValueChange={(value) => handleSelectChange("currency", value)}
                    defaultValue={formData.currency}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder={t("select_currency")} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="USD">USD</SelectItem>
                      <SelectItem value="AUD">AUD</SelectItem>
                      <SelectItem value="CNY">CNY</SelectItem>
                      <SelectItem value="EUR">EUR</SelectItem>
                      <SelectItem value="GBP">GBP</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="flex justify-between gap-4 pt-4">
                <Button type="button" onClick={goToPrevStep} variant="outline" className="w-full">
                  {t("previous")}
                </Button>
                <Button type="submit" disabled={loading} className="w-full">
                  {loading ? t("submitting") : t("submit_shipment")}
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
      </form>
    </div>
  )
}

