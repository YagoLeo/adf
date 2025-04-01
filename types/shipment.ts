export interface TrackingEvent {
  date: string
  time: string
  location: string
  status: string
  description: string
}

export interface ShipmentDetails {
  houseBillNumber: string
  houseBillReference?: string
  shipperName: string
  shipperAddress1: string
  shipperAddress2?: string
  shipperCity: string
  shipperState: string
  shipperCountryCode: string
  shipperPostcode: string
  consigneeName: string
  consigneeAddress1: string
  consigneeAddress2?: string
  consigneeCity: string
  consigneePostcode: string
  consigneeState: string
  consigneeCountryCode: string
  consigneePhone: string
  deliveryInstructions?: string
  goodsDescription: string
  weightInKG: number
  pieces: number
  packType: string
  goodsValue: number
  currency: string
  cbm: number
  sacYN: string
  merchantARN?: string
  purchaserABN?: string
  containerNumber: string
  status: string
  trackingEvents: TrackingEvent[]
  createdAt?: Date
  updatedAt?: Date
}

