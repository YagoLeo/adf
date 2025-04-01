"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { useToast } from "@/hooks/use-toast"
import { addShipment } from "@/lib/shipment-service"
import type { ShipmentDetails } from "@/types/shipment"

export function ShipmentForm() {
  const { toast } = useToast()
  const [loading, setLoading] = useState(false)

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
    pieces: 0,
    packType: "",
    goodsValue: 0,
    currency: "USD",
    cbm: 0,
    sacYN: "N",
    merchantARN: "",
    purchaserABN: "",
    containerNumber: "",
    status: "In Transit",
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!formData.houseBillNumber) {
      toast({
        title: "Error",
        description: "House Bill Number is required",
        variant: "destructive",
      })
      return
    }

    try {
      setLoading(true)

      // Create a complete shipment object with required fields
      const shipmentData: ShipmentDetails = {
        ...(formData as ShipmentDetails),
        trackingEvents: [
          {
            date: new Date().toISOString().split("T")[0],
            time: new Date().toTimeString().split(" ")[0].substring(0, 5),
            location: `${formData.shipperCity || ""}, ${formData.shipperCountryCode || ""}`,
            status: "Processed",
            description: "Shipment information received",
          },
        ],
      }

      await addShipment(shipmentData)

      toast({
        title: "Success",
        description: "Shipment added successfully",
      })

      // Reset form
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
        pieces: 0,
        packType: "",
        goodsValue: 0,
        currency: "USD",
        cbm: 0,
        sacYN: "N",
        merchantARN: "",
        purchaserABN: "",
        containerNumber: "",
        status: "In Transit",
        trackingEvents: [],
      })
    } catch (error) {
      console.error("Error adding shipment:", error)
      toast({
        title: "Error",
        description: "Failed to add shipment",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Add New Shipment</CardTitle>
        <CardDescription>Enter the shipment details to add to the database</CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Basic Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="houseBillNumber">House Bill Number *</Label>
                <Input
                  id="houseBillNumber"
                  name="houseBillNumber"
                  value={formData.houseBillNumber}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="houseBillReference">House Bill Reference</Label>
                <Input
                  id="houseBillReference"
                  name="houseBillReference"
                  value={formData.houseBillReference}
                  onChange={handleChange}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="containerNumber">Container Number</Label>
                <Input
                  id="containerNumber"
                  name="containerNumber"
                  value={formData.containerNumber}
                  onChange={handleChange}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="status">Status</Label>
                <Input id="status" name="status" value={formData.status} onChange={handleChange} />
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-medium">Shipper Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="shipperName">Shipper Name</Label>
                <Input id="shipperName" name="shipperName" value={formData.shipperName} onChange={handleChange} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="shipperAddress1">Address Line 1</Label>
                <Input
                  id="shipperAddress1"
                  name="shipperAddress1"
                  value={formData.shipperAddress1}
                  onChange={handleChange}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="shipperAddress2">Address Line 2</Label>
                <Input
                  id="shipperAddress2"
                  name="shipperAddress2"
                  value={formData.shipperAddress2}
                  onChange={handleChange}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="shipperCity">City</Label>
                <Input id="shipperCity" name="shipperCity" value={formData.shipperCity} onChange={handleChange} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="shipperState">State/Province</Label>
                <Input id="shipperState" name="shipperState" value={formData.shipperState} onChange={handleChange} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="shipperPostcode">Postal Code</Label>
                <Input
                  id="shipperPostcode"
                  name="shipperPostcode"
                  value={formData.shipperPostcode}
                  onChange={handleChange}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="shipperCountryCode">Country Code</Label>
                <Input
                  id="shipperCountryCode"
                  name="shipperCountryCode"
                  value={formData.shipperCountryCode}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-medium">Consignee Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="consigneeName">Consignee Name</Label>
                <Input id="consigneeName" name="consigneeName" value={formData.consigneeName} onChange={handleChange} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="consigneeAddress1">Address Line 1</Label>
                <Input
                  id="consigneeAddress1"
                  name="consigneeAddress1"
                  value={formData.consigneeAddress1}
                  onChange={handleChange}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="consigneeAddress2">Address Line 2</Label>
                <Input
                  id="consigneeAddress2"
                  name="consigneeAddress2"
                  value={formData.consigneeAddress2}
                  onChange={handleChange}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="consigneeCity">City</Label>
                <Input id="consigneeCity" name="consigneeCity" value={formData.consigneeCity} onChange={handleChange} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="consigneeState">State/Province</Label>
                <Input
                  id="consigneeState"
                  name="consigneeState"
                  value={formData.consigneeState}
                  onChange={handleChange}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="consigneePostcode">Postal Code</Label>
                <Input
                  id="consigneePostcode"
                  name="consigneePostcode"
                  value={formData.consigneePostcode}
                  onChange={handleChange}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="consigneeCountryCode">Country Code</Label>
                <Input
                  id="consigneeCountryCode"
                  name="consigneeCountryCode"
                  value={formData.consigneeCountryCode}
                  onChange={handleChange}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="consigneePhone">Phone</Label>
                <Input
                  id="consigneePhone"
                  name="consigneePhone"
                  value={formData.consigneePhone}
                  onChange={handleChange}
                />
              </div>
              <div className="space-y-2 col-span-2">
                <Label htmlFor="deliveryInstructions">Delivery Instructions</Label>
                <Textarea
                  id="deliveryInstructions"
                  name="deliveryInstructions"
                  value={formData.deliveryInstructions}
                  onChange={handleChange}
                  rows={3}
                />
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-medium">Package Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="goodsDescription">Goods Description</Label>
                <Textarea
                  id="goodsDescription"
                  name="goodsDescription"
                  value={formData.goodsDescription}
                  onChange={handleChange}
                  rows={2}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="packType">Package Type</Label>
                <Input id="packType" name="packType" value={formData.packType} onChange={handleChange} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="weightInKG">Weight (KG)</Label>
                <Input
                  id="weightInKG"
                  name="weightInKG"
                  type="number"
                  step="0.01"
                  value={formData.weightInKG}
                  onChange={handleChange}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="pieces">Pieces</Label>
                <Input id="pieces" name="pieces" type="number" value={formData.pieces} onChange={handleChange} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="cbm">CBM</Label>
                <Input id="cbm" name="cbm" type="number" step="0.01" value={formData.cbm} onChange={handleChange} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="goodsValue">Goods Value</Label>
                <Input
                  id="goodsValue"
                  name="goodsValue"
                  type="number"
                  step="0.01"
                  value={formData.goodsValue}
                  onChange={handleChange}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="currency">Currency</Label>
                <Input id="currency" name="currency" value={formData.currency} onChange={handleChange} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="sacYN">SAC Y/N</Label>
                <Input id="sacYN" name="sacYN" value={formData.sacYN} onChange={handleChange} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="merchantARN">Merchant ARN/ABN</Label>
                <Input id="merchantARN" name="merchantARN" value={formData.merchantARN} onChange={handleChange} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="purchaserABN">Purchaser ABN</Label>
                <Input id="purchaserABN" name="purchaserABN" value={formData.purchaserABN} onChange={handleChange} />
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button type="submit" disabled={loading}>
            {loading ? "Adding..." : "Add Shipment"}
          </Button>
        </CardFooter>
      </form>
    </Card>
  )
}

