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
    throw new Error("Failed to fetch shipment data")
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
    throw new Error("Failed to add shipment data")
  }
}

