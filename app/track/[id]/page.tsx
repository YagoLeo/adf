"use client"

import { useState, useEffect } from "react"
import { use } from "react"
import Link from "next/link"
import { ArrowLeft, Package, MapPin, User, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Skeleton } from "@/components/ui/skeleton"
import { useLanguage } from "@/components/language-provider"
import { LanguageSwitcher } from "@/components/language-switcher"
import { getShipmentByTrackingNumber } from "@/lib/shipment-service"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertCircle } from "lucide-react"
import type { ShipmentDetails } from "@/types/shipment"

export default function TrackingPage({ params }: { params: { id: string } }) {
  const { t, language } = useLanguage()
  const [loading, setLoading] = useState(true)
  const [shipment, setShipment] = useState<ShipmentDetails | null>(null)
  const [error, setError] = useState<string | null>(null)
  const trackingNumber = decodeURIComponent(use(params).id)

  useEffect(() => {
    // Fetch data from Firebase
    const fetchData = async () => {
      setLoading(true)
      setError(null)

      try {
        // For demo purposes, if the tracking number is "DEMO123", show mock data
        if (trackingNumber === "DEMO123") {
          const shipmentData = await getShipmentByTrackingNumber(trackingNumber)
          if (shipmentData) {
            setShipment(shipmentData)
          }
        } else {
          const shipmentData = await getShipmentByTrackingNumber(trackingNumber)

          if (shipmentData) {
            setShipment(shipmentData)
          } else {
            // If no data is found, set error message
            setError("no_shipment_found")
          }
        }
      } catch (err) {
        console.error("Error fetching shipment data:", err)
        setError("error_fetching_data")
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [trackingNumber])

  // Helper function to translate status
  const translateStatus = (status: string) => {
    if (status === "Delivered") return t("delivered")
    if (status === "In Transit") return t("in_transit")
    if (status === "Picked Up") return t("picked_up")
    if (status === "Processed") return t("processed")
    return status
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="inline-flex items-center text-blue-600 font-medium">
            <ArrowLeft className="mr-2 h-4 w-4" />
            {t("back_to_home")}
          </Link>
          <LanguageSwitcher />
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl font-bold mb-6">{t("tracking_details")}</h1>

          <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
            <div className="bg-blue-600 p-6 text-white">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div>
                  <h2 className="text-xl font-bold">
                    {t("tracking_number")}: {trackingNumber}
                  </h2>
                  {!loading && shipment && (
                    <p className="text-blue-100 mt-1">
                      {t("status")}: {translateStatus(shipment.status)}
                    </p>
                  )}
                </div>
                {!loading && shipment && (
                  <Button variant="outline" className="mt-4 md:mt-0 bg-white text-blue-600 hover:bg-blue-50">
                    <FileText className="mr-2 h-4 w-4" />
                    {t("download_details")}
                  </Button>
                )}
              </div>
            </div>

            {loading ? (
              <div className="p-6 space-y-4">
                <Skeleton className="h-8 w-full max-w-sm" />
                <Skeleton className="h-8 w-full max-w-md" />
                <Skeleton className="h-8 w-full" />
                <Skeleton className="h-8 w-full" />
                <Skeleton className="h-8 w-full max-w-lg" />
              </div>
            ) : error ? (
              <div className="p-6">
                <Alert variant="destructive">
                  <AlertCircle className="h-4 w-4" />
                  <AlertTitle>{t("no_shipment_found")}</AlertTitle>
                  <AlertDescription>{t("check_tracking_number")}</AlertDescription>
                </Alert>
              </div>
            ) : shipment ? (
              <Tabs defaultValue="tracking" className="p-6">
                <TabsList className="mb-6">
                  <TabsTrigger value="tracking">{t("tracking_history")}</TabsTrigger>
                  <TabsTrigger value="shipment">{t("shipment_details")}</TabsTrigger>
                  <TabsTrigger value="parties">{t("shipper_consignee")}</TabsTrigger>
                </TabsList>

                <TabsContent value="tracking" className="space-y-6">
                  <div className="border rounded-lg overflow-hidden">
                    {shipment.trackingEvents && shipment.trackingEvents.length > 0 ? (
                      <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                          <tr>
                            <th
                              scope="col"
                              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                              {t("date_time")}
                            </th>
                            <th
                              scope="col"
                              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                              {t("location")}
                            </th>
                            <th
                              scope="col"
                              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                              {t("status")}
                            </th>
                            <th
                              scope="col"
                              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                              {t("description")}
                            </th>
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                          {shipment.trackingEvents.map((event, index) => (
                            <tr key={index} className={index === 0 ? "bg-blue-50" : ""}>
                              <td className="px-6 py-4 whitespace-nowrap text-sm">
                                <div className="font-medium">{event.date}</div>
                                <div className="text-gray-500">{event.time}</div>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm">{event.location}</td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm">
                                <span
                                  className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                                  ${
                                    event.status === "Delivered"
                                      ? "bg-green-100 text-green-800"
                                      : event.status === "In Transit"
                                        ? "bg-blue-100 text-blue-800"
                                        : "bg-yellow-100 text-yellow-800"
                                  }`}
                                >
                                  {translateStatus(event.status)}
                                </span>
                              </td>
                              <td className="px-6 py-4 text-sm text-gray-500">{event.description}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    ) : (
                      <div className="p-6 text-center text-gray-500">
                        {t("no_tracking_events")}
                      </div>
                    )}
                  </div>
                </TabsContent>

                <TabsContent value="shipment" className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Package className="mr-2 h-5 w-5" />
                        {t("package_information")}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm font-medium text-gray-500">{t("house_bill_number")}</p>
                        <p>{shipment.houseBillNumber}</p>
                      </div>
                      {shipment.houseBillReference && (
                        <div>
                          <p className="text-sm font-medium text-gray-500">{t("house_bill_reference")}</p>
                          <p>{shipment.houseBillReference}</p>
                        </div>
                      )}
                      <div>
                        <p className="text-sm font-medium text-gray-500">{t("goods_description")}</p>
                        <p>{shipment.goodsDescription}</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-500">{t("weight")}</p>
                        <p>
                          {shipment.weightInKG} {t("kg")}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-500">{t("pieces")}</p>
                        <p>{shipment.pieces}</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-500">{t("pack_type")}</p>
                        <p>{shipment.packType}</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-500">{t("goods_value")}</p>
                        <p>
                          {shipment.goodsValue} {shipment.currency}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-500">{t("cbm")}</p>
                        <p>{shipment.cbm}</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-500">{t("sac_yn")}</p>
                        <p>{shipment.sacYN}</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-500">{t("container_number")}</p>
                        <p>{shipment.containerNumber}</p>
                      </div>
                      {shipment.merchantARN && (
                        <div>
                          <p className="text-sm font-medium text-gray-500">{t("merchant_arn_abn")}</p>
                          <p>{shipment.merchantARN}</p>
                        </div>
                      )}
                      {shipment.purchaserABN && (
                        <div>
                          <p className="text-sm font-medium text-gray-500">{t("purchaser_abn")}</p>
                          <p>{shipment.purchaserABN}</p>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="parties" className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center">
                          <User className="mr-2 h-5 w-5" />
                          {t("shipper_information")}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div>
                          <p className="text-sm font-medium text-gray-500">{t("name")}</p>
                          <p>{shipment.shipperName}</p>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-500">{t("address")}</p>
                          <p>{shipment.shipperAddress1}</p>
                          {shipment.shipperAddress2 && <p>{shipment.shipperAddress2}</p>}
                          <p>
                            {shipment.shipperCity}, {shipment.shipperState} {shipment.shipperPostcode}
                          </p>
                          <p>{shipment.shipperCountryCode}</p>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center">
                          <MapPin className="mr-2 h-5 w-5" />
                          {t("consignee_information")}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div>
                          <p className="text-sm font-medium text-gray-500">{t("name")}</p>
                          <p>{shipment.consigneeName}</p>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-500">{t("address")}</p>
                          <p>{shipment.consigneeAddress1}</p>
                          {shipment.consigneeAddress2 && <p>{shipment.consigneeAddress2}</p>}
                          <p>
                            {shipment.consigneeCity}, {shipment.consigneeState} {shipment.consigneePostcode}
                          </p>
                          <p>{shipment.consigneeCountryCode}</p>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-500">{t("phone")}</p>
                          <p>{shipment.consigneePhone}</p>
                        </div>
                        {shipment.deliveryInstructions && (
                          <div>
                            <p className="text-sm font-medium text-gray-500">{t("delivery_instructions")}</p>
                            <p>{shipment.deliveryInstructions}</p>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>
              </Tabs>
            ) : (
              <div className="p-6 text-center">
                <p className="text-red-600">
                  {t("no_shipment_found")}: {trackingNumber}
                </p>
                <p className="mt-2 text-gray-600">{t("check_tracking_number")}</p>
              </div>
            )}
          </div>
        </div>
      </main>

      <footer className="bg-gray-800 text-white mt-12">
        <div className="container mx-auto px-4 py-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-4">Global Logistics</h3>
              <p className="text-gray-300">{t("detailed_information_description")}</p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">{t("quick_links")}</h3>
              <ul className="space-y-2">
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
                Email: info@globallogistics.com
                <br />
                Phone: (123) 456-7890
              </address>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Global Logistics. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

