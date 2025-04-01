export type TranslationKey =
  | "home"
  | "services"
  | "about"
  | "contact"
  | "track_shipment"
  | "track_your_shipment"
  | "enter_tracking_number"
  | "enter_tracking_number_description"
  | "secure_tracking"
  | "secure_tracking_description"
  | "detailed_information"
  | "detailed_information_description"
  | "quick_links"
  | "contact_us"
  | "tracking_number"
  | "status"
  | "download_details"
  | "tracking_history"
  | "shipment_details"
  | "shipper_consignee"
  | "date_time"
  | "location"
  | "description"
  | "package_information"
  | "house_bill_number"
  | "house_bill_reference"
  | "goods_description"
  | "weight"
  | "pieces"
  | "pack_type"
  | "goods_value"
  | "cbm"
  | "sac_yn"
  | "container_number"
  | "merchant_arn_abn"
  | "purchaser_abn"
  | "shipper_information"
  | "consignee_information"
  | "name"
  | "address"
  | "phone"
  | "delivery_instructions"
  | "back_to_home"
  | "tracking_details"
  | "no_shipment_found"
  | "check_tracking_number"
  | "please_enter_tracking_number"
  | "account"
  | "kg"
  | "delivered"
  | "in_transit"
  | "picked_up"
  | "processed"
  | "error_fetching_data"

export const translations = {
  en: {
    home: "Home",
    services: "Services",
    about: "About",
    contact: "Contact",
    track_shipment: "Track Shipment",
    track_your_shipment: "Track Your Shipment",
    enter_tracking_number: "Enter your tracking number",
    enter_tracking_number_description: "Enter your tracking number to get detailed information about your shipment",
    secure_tracking: "Secure Tracking",
    secure_tracking_description: "Track your shipment securely with our system",
    detailed_information: "Detailed Information",
    detailed_information_description:
      "View all shipment information including sender details, recipient information, package specifications, and more.",
    quick_links: "Quick Links",
    contact_us: "Contact Us",
    tracking_number: "Tracking Number",
    status: "Status",
    download_details: "Download Details",
    tracking_history: "Tracking History",
    shipment_details: "Shipment Details",
    shipper_consignee: "Shipper & Consignee",
    date_time: "Date & Time",
    location: "Location",
    description: "Description",
    package_information: "Package Information",
    house_bill_number: "House Bill Number",
    house_bill_reference: "House Bill Reference",
    goods_description: "Goods Description",
    weight: "Weight",
    pieces: "Pieces",
    pack_type: "Pack Type",
    goods_value: "Goods Value",
    cbm: "CBM",
    sac_yn: "SAC Y/N",
    container_number: "Container Number",
    merchant_arn_abn: "Merchant ARN/ABN",
    purchaser_abn: "Purchaser ABN",
    shipper_information: "Shipper Information",
    consignee_information: "Consignee Information",
    name: "Name",
    address: "Address",
    phone: "Phone",
    delivery_instructions: "Delivery Instructions",
    back_to_home: "Back to Home",
    tracking_details: "Tracking Details",
    no_shipment_found: "No shipment found with tracking number",
    check_tracking_number: "Please check the tracking number and try again.",
    please_enter_tracking_number: "Please enter a tracking number",
    account: "Account",
    kg: "KG",
    delivered: "Delivered",
    in_transit: "In Transit",
    picked_up: "Picked Up",
    processed: "Processed",
    error_fetching_data: "Error fetching shipment data. Please try again later.",
  },
  zh: {
    home: "首页",
    services: "服务",
    about: "关于我们",
    contact: "联系我们",
    track_shipment: "查询物流",
    track_your_shipment: "查询您的物流",
    enter_tracking_number: "输入您的物流单号",
    enter_tracking_number_description: "输入您的物流单号以获取详细的物流信息",
    secure_tracking: "安全查询",
    secure_tracking_description: "通过我们的系统安全地查询您的物流信息",
    detailed_information: "详细信息",
    detailed_information_description: "查看所有物流信息，包括发件人详情、收件人信息、包裹规格等。",
    quick_links: "快速链接",
    contact_us: "联系我们",
    tracking_number: "物流单号",
    status: "状态",
    download_details: "下载详情",
    tracking_history: "物流跟踪",
    shipment_details: "物流详情",
    shipper_consignee: "发件人和收件人",
    date_time: "日期和时间",
    location: "位置",
    description: "描述",
    package_information: "包裹信息",
    house_bill_number: "提单号",
    house_bill_reference: "提单参考号",
    goods_description: "货物描述",
    weight: "重量",
    pieces: "件数",
    pack_type: "包装类型",
    goods_value: "货物价值",
    cbm: "体积",
    sac_yn: "SAC Y/N",
    container_number: "集装箱号",
    merchant_arn_abn: "商家 ARN/ABN",
    purchaser_abn: "购买者 ABN",
    shipper_information: "发件人信息",
    consignee_information: "收件人信息",
    name: "姓名",
    address: "地址",
    phone: "电话",
    delivery_instructions: "配送说明",
    back_to_home: "返回首页",
    tracking_details: "物流详情",
    no_shipment_found: "未找到该物流单号的物流信息",
    check_tracking_number: "请检查物流单号并重试。",
    please_enter_tracking_number: "请输入物流单号",
    account: "我的账户",
    kg: "公斤",
    delivered: "已送达",
    in_transit: "运输中",
    picked_up: "已取件",
    processed: "已处理",
    error_fetching_data: "获取物流数据时出错。请稍后再试。",
  },
}

