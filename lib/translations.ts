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
  | "send_shipment"
  | "send_shipment_description"
  | "sender_details"
  | "recipient_details"
  | "next"
  | "previous"
  | "submit_shipment"
  | "submitting"
  | "success"
  | "error"
  | "please_fill_required_fields"
  | "shipment_added_success"
  | "failed_to_add_shipment"
  | "city"
  | "state_province"
  | "postal_code"
  | "country_code"
  | "select_country"
  | "select_pack_type"
  | "carton"
  | "pallet"
  | "box"
  | "envelope"
  | "other"
  | "select_currency"
  | "shipment_info_received"
  | "demo_tracking_number"

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
    send_shipment: "Send Shipment",
    send_shipment_description: "Fill in the form to send your package",
    sender_details: "Sender Details",
    recipient_details: "Recipient Details",
    next: "Next",
    previous: "Previous",
    submit_shipment: "Submit Shipment",
    submitting: "Submitting...",
    success: "Success",
    error: "Error",
    please_fill_required_fields: "Please fill all required fields",
    shipment_added_success: "Shipment added successfully",
    failed_to_add_shipment: "Failed to add shipment",
    city: "City",
    state_province: "State/Province",
    postal_code: "Postal Code",
    country_code: "Country",
    select_country: "Select country",
    select_pack_type: "Select package type",
    carton: "Carton",
    pallet: "Pallet",
    box: "Box",
    envelope: "Envelope",
    other: "Other",
    select_currency: "Select currency",
    shipment_info_received: "Shipment information received",
    demo_tracking_number: "Demo tracking number",
  },
  zh: {
    home: "首页",
    services: "服务",
    scan_qr_code: "扫码查询",
    about: "关于我们",
    contact: "联系我们",
    track_shipment: "查询",
    track_your_shipment: "物流查询",
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
    account: "我的",
    kg: "公斤",
    delivered: "已送达",
    in_transit: "运输中",
    picked_up: "已取件",
    processed: "已处理",
    error_fetching_data: "获取物流数据时出错。请稍后再试。",
    send_shipment: "寄件",
    send_shipment_description: "填写表格寄送您的包裹",
    shipping_account_booking: "寄件账号预约",
    click_to_schedule: "点击预约",
    sender_details: "发件人详情",
    recipient_details: "收件人详情",
    next: "下一步",
    previous: "上一步",
    submit_shipment: "提交寄件",
    submitting: "提交中...",
    success: "成功",
    error: "错误",
    please_fill_required_fields: "请填写所有必填字段",
    shipment_added_success: "寄件信息添加成功",
    failed_to_add_shipment: "添加寄件信息失败",
    city: "城市",
    state_province: "省/州",
    postal_code: "邮编",
    country_code: "国家",
    select_country: "选择国家",
    select_pack_type: "选择包装类型",
    carton: "纸箱",
    pallet: "托盘",
    box: "盒子",
    envelope: "信封",
    other: "其他",
    select_currency: "选择货币",
    shipment_info_received: "已收到寄件信息",
    demo_tracking_number: "演示物流单号",
    company_description: "澳德发物流，从中国到澳洲的物流运输专线",
  },
}

