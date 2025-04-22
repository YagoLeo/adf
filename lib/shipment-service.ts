import { supabase } from "@/lib/supabase"
import type { ShipmentDetails } from "@/types/shipment"

// Table name in Supabase
const LOGISTICS_TABLE = "logistics_items"

/**
 * Fetch a shipment by its tracking number (House Bill Number)
 * @param trackingNumber The tracking number to search for
 * @returns The shipment details or null if not found
 */
export async function getShipmentByTrackingNumber(trackingNumber: string): Promise<ShipmentDetails | null> {
  try {
    // First try to find by houseBillNumber
    const { data: shipment, error } = await supabase
      .from(LOGISTICS_TABLE)
      .select('*')
      .eq('house_bill_number', trackingNumber)
      .single()

    if (error) {
      console.error("Error fetching shipment:", error)
      return null
    }

    if (shipment) {
      // 转换数据格式以匹配 ShipmentDetails 类型
      return {
        houseBillNumber: shipment.house_bill_number,
        shipperName: shipment.shipper_name,
        shipperAddress1: shipment.shipper_address1,
        shipperCity: shipment.shipper_city,
        shipperState: shipment.shipper_state,
        shipperCountryCode: shipment.shipper_country_code,
        shipperPostcode: shipment.shipper_postcode,
        consigneeName: shipment.consignee_name,
        consigneeAddress1: shipment.consignee_address1,
        consigneeCity: shipment.consignee_city,
        consigneePostcode: shipment.consignee_postcode,
        consigneeState: shipment.consignee_state,
        consigneeCountryCode: shipment.consignee_country_code,
        consigneePhone: shipment.consignee_phone,
        goodsDescription: shipment.goods_description,
        weightInKG: shipment.weight_in_kg,
        pieces: shipment.pieces,
        packType: shipment.pack_type,
        goodsValue: shipment.goods_value,
        currency: shipment.currency,
        cbm: shipment.cbm,
        sacYN: shipment.sac_yn,
        containerNumber: shipment.container_number,
        status: shipment.status,
        trackingEvents: [] // 如果需要跟踪事件，可以另外查询
      } as ShipmentDetails
    }

    return null
  } catch (error) {
    console.error("Error fetching shipment:", error)
    // Return mock data for demo purposes when Supabase is not available
    if (trackingNumber === "DEMO123") {
      return getMockShipmentData(trackingNumber)
    }
    return null
  }
}

/**
 * Sample function to add a shipment to Supabase (for admin use)
 * @param shipment The shipment details to add
 * @returns The ID of the created document
 */
export async function addShipment(shipment: ShipmentDetails): Promise<string> {
  try {
    const { data, error } = await supabase
      .from(LOGISTICS_TABLE)
      .insert([{
        house_bill_number: shipment.houseBillNumber,
        shipper_name: shipment.shipperName,
        shipper_address1: shipment.shipperAddress1,
        shipper_city: shipment.shipperCity,
        shipper_state: shipment.shipperState,
        shipper_country_code: shipment.shipperCountryCode,
        shipper_postcode: shipment.shipperPostcode,
        consignee_name: shipment.consigneeName,
        consignee_address1: shipment.consigneeAddress1,
        consignee_city: shipment.consigneeCity,
        consignee_postcode: shipment.consigneePostcode,
        consignee_state: shipment.consigneeState,
        consignee_country_code: shipment.consigneeCountryCode,
        consignee_phone: shipment.consigneePhone,
        goods_description: shipment.goodsDescription,
        weight_in_kg: shipment.weightInKG,
        pieces: shipment.pieces,
        pack_type: shipment.packType,
        goods_value: shipment.goodsValue,
        currency: shipment.currency,
        cbm: shipment.cbm,
        sac_yn: shipment.sacYN,
        container_number: shipment.containerNumber,
        status: shipment.status || 'pending'
      }])
      .select()
      .single()

    if (error) {
      console.error("Error adding shipment:", error)
      throw error
    }

    return data.house_bill_number
  } catch (error) {
    console.error("Error adding shipment:", error)
    // For demo purposes, just return the tracking number
    return shipment.houseBillNumber
  }
}

// Mock data for demo purposes when Supabase is not available
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
    status: "in_transit",
    trackingEvents: []
  }
}

