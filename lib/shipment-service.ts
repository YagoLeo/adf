import { db } from "@/lib/firebase"
import { collection, doc, getDoc, getDocs, query, where, setDoc } from "firebase/firestore"
import type { ShipmentDetails } from "@/types/shipment"

// Collection name in Firestore
const SHIPMENTS_COLLECTION = "shipments"

/**
 * Fetch a shipment by its tracking number (House Bill Number)
 * @param trackingNumber The tracking number to search for
 * @returns The shipment details or null if not found
 */
export async function getShipmentByTrackingNumber(trackingNumber: string): Promise<ShipmentDetails | null> {
  try {
    // Create a reference to the specific document using the tracking number as the document ID
    const shipmentRef = doc(db, SHIPMENTS_COLLECTION, trackingNumber)
    const shipmentDoc = await getDoc(shipmentRef)

    if (shipmentDoc.exists()) {
      // Convert Firestore timestamp to Date if needed
      const data = shipmentDoc.data() as ShipmentDetails

      // If createdAt and updatedAt are Firestore timestamps, convert them to Date objects
      if (data.createdAt && "toDate" in data.createdAt) {
        data.createdAt = data.createdAt.toDate()
      }

      if (data.updatedAt && "toDate" in data.updatedAt) {
        data.updatedAt = data.updatedAt.toDate()
      }

      return data
    }

    // If the document doesn't exist with the tracking number as ID,
    // try querying where houseBillNumber field equals the tracking number
    const q = query(collection(db, SHIPMENTS_COLLECTION), where("houseBillNumber", "==", trackingNumber))

    const querySnapshot = await getDocs(q)

    if (!querySnapshot.empty) {
      const doc = querySnapshot.docs[0]
      const data = doc.data() as ShipmentDetails

      // Convert timestamps if needed
      if (data.createdAt && "toDate" in data.createdAt) {
        data.createdAt = data.createdAt.toDate()
      }

      if (data.updatedAt && "toDate" in data.updatedAt) {
        data.updatedAt = data.updatedAt.toDate()
      }

      return data
    }

    return null
  } catch (error) {
    console.error("Error fetching shipment:", error)
    // Return mock data for demo purposes when Firestore is not available
    if (trackingNumber === "DEMO123") {
      return getMockShipmentData(trackingNumber)
    }
    return null
  }
}

/**
 * Sample function to add a shipment to Firestore (for admin use)
 * @param shipment The shipment details to add
 * @returns The ID of the created document
 */
export async function addShipment(shipment: ShipmentDetails): Promise<string> {
  try {
    // In a real application, you would add validation here
    const shipmentRef = doc(db, SHIPMENTS_COLLECTION, shipment.houseBillNumber)
    await setDoc(shipmentRef, {
      ...shipment,
      createdAt: new Date(),
      updatedAt: new Date(),
    })

    return shipment.houseBillNumber
  } catch (error) {
    console.error("Error adding shipment:", error)
    // For demo purposes, just return the tracking number
    return shipment.houseBillNumber
  }
}

// Mock data for demo purposes when Firestore is not available
function getMockShipmentData(trackingNumber: string): ShipmentDetails {
  return {
    houseBillNumber: trackingNumber,
    shipperName: "Demo Shipper",
    shipperAddress1: "123 Shipper St",
    shipperCity: "Shipper City",
    shipperState: "Shipper State",
    shipperCountryCode: "US",
    shipperPostcode: "12345",
    consigneeName: "Demo Consignee",
    consigneeAddress1: "456 Consignee Ave",
    consigneeCity: "Consignee City",
    consigneePostcode: "67890",
    consigneeState: "Consignee State",
    consigneeCountryCode: "CN",
    consigneePhone: "123-456-7890",
    goodsDescription: "Demo Goods",
    weightInKG: 10,
    pieces: 2,
    packType: "Box",
    goodsValue: 100,
    currency: "USD",
    cbm: 0.5,
    sacYN: "N",
    containerNumber: "CONT123456",
    status: "In Transit",
    trackingEvents: [
      {
        date: new Date().toISOString().split("T")[0],
        time: "10:00",
        location: "Origin Facility",
        status: "Processed",
        description: "Shipment information received",
      },
      {
        date: new Date().toISOString().split("T")[0],
        time: "14:30",
        location: "Origin Facility",
        status: "In Transit",
        description: "Shipment has departed from origin facility",
      },
    ],
  }
}

