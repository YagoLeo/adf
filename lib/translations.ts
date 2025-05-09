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
  | "logistics_logo"
  | "company_name"
  | "direct_shipping_line"
  | "shipping_time"
  | "service_features"
  | "gold_member"
  | "pending_shipment"
  | "unpaid"
  | "my_address_book"
  | "shipping_service"
  | "online_service"
  | "system_settings"
  | "contact_service_description"
  | "settings_description"
  | "login_title"
  | "login_description"
  | "username"
  | "password"
  | "login"
  | "back"
  | "points"
  | "logout"
  | "faq_title"
  | "faq_tracking_question"
  | "faq_tracking_answer"
  | "faq_delivery_time_question"
  | "faq_delivery_time_answer"
  | "faq_items_question"
  | "faq_items_answer"
  | "faq_shipping_cost_question"
  | "faq_shipping_cost_answer"
  | "faq_lost_package_question"
  | "faq_lost_package_answer"
  | "faq_pickup_time_question"
  | "faq_pickup_time_answer"
  | "from_location"
  | "to_location"
  | "view_details"
  | "scan_qr_code"
  | "scan_barcode"
  | "company_slogan"
  | "company_description"
  | "company_commitment"
  | "safe"
  | "efficient"
  | "convenient"
  | "cross_border_logistics"
  | "shipment_date"
  | "carousel_global_network_title"
  | "carousel_global_network_description"
  | "carousel_safety_title"
  | "carousel_safety_description"
  | "carousel_customs_title"
  | "carousel_customs_description"
  | "quick_send_title"
  | "quick_send_description"
  | "track_order_description"
  | "invalid_credentials"
  | "login_success"
  | "username_taken"
  | "register_success"
  | "auth_error"
  | "register_title"
  | "loading"
  | "register"
  | "need_register"
  | "need_login"

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
    logistics_logo: "Logistics Logo",
    company_name: "ADF Logistics",
    direct_shipping_line: "China - Australia Direct Line",
    shipping_time: "Air: 7-10 days | Sea: 20-30 days",
    service_features: "Professional Logistics · Safe & Fast · Full Tracking",
    gold_member: "Gold Member",
    pending_shipment: "Pending Shipment",
    unpaid: "Unpaid",
    my_address_book: "My Address Book",
    shipping_service: "Shipping Service",
    online_service: "Online Service",
    system_settings: "System Settings",
    contact_service_description: "If you have any questions, please contact our online customer service.",
    settings_description: "System settings content to be improved.",
    login_title: "Login Account",
    login_description: "Login to enjoy more services",
    username: "Username",
    password: "Password",
    login: "Login",
    back: "Back",
    points: "Points",
    logout: "Logout",
    faq_title: "FAQ",
    faq_tracking_question: "How to track my package?",
    faq_tracking_answer: "You can track your package through: 1. Enter tracking number on homepage 2. Scan QR code on package 3. View 'My Orders' in APP",
    faq_delivery_time_question: "How long does shipping from China to Australia take?",
    faq_delivery_time_answer: "Generally air freight takes 7-10 working days, sea freight takes 20-30 working days. Actual time may vary depending on destination, cargo type and customs clearance time.",
    faq_items_question: "What items can you ship?",
    faq_items_answer: "We can ship most daily items including clothing, electronics, food etc. But prohibited items like flammables, controlled knives etc. cannot be shipped. Please check the prohibited items list for details.",
    faq_shipping_cost_question: "How is shipping cost calculated?",
    faq_shipping_cost_answer: "Shipping cost is calculated based on weight or volume (whichever is greater), and destination. You can use our shipping calculator for accurate quotes.",
    faq_lost_package_question: "What if package is lost or damaged?",
    faq_lost_package_answer: "We provide basic insurance for all packages. If lost or damaged, please contact customer service immediately with tracking number and relevant evidence, we will compensate according to insurance terms.",
    faq_pickup_time_question: "What are your pickup times?",
    faq_pickup_time_answer: "Our pickup time is Monday to Saturday 9:00-18:00. You can choose your preferred pickup time slot when placing order.",
    from_location: "From",
    to_location: "To",
    view_details: "View Details",
    scan_qr_code: "Scan QR Code",
    scan_barcode: "Scan Barcode",
    company_slogan: "ADF Logistics, Your Australia Special Line Logistics Expert",
    company_description: "We specialize in providing international logistics services from China to Australia, with a comprehensive logistics network and professional team.",
    company_commitment: "We are committed to providing customers with",
    safe: "safe",
    efficient: "efficient",
    convenient: "convenient",
    cross_border_logistics: "cross-border logistics solutions",
    shipment_date: "Shipment Date",
    carousel_global_network_title: "Global Logistics Network",
    carousel_global_network_description: "Covering major cities in Australia, providing professional and efficient logistics services",
    carousel_safety_title: "Safe and Reliable",
    carousel_safety_description: "Full monitoring to ensure your packages are safe and secure",
    carousel_customs_title: "Fast Customs Clearance",
    carousel_customs_description: "Professional customs clearance team to ensure smooth clearance of goods",
    quick_send_title: "Quick Send",
    quick_send_description: "Schedule Pickup",
    track_order_description: "Real-time Tracking",
    invalid_credentials: "Invalid username or password",
    login_success: "Login successful",
    username_taken: "Username already taken",
    register_success: "Registration successful",
    auth_error: "Authentication error",
    register_title: "Register Account",
    loading: "Loading...",
    register: "Register",
    need_register: "Need an account? Register",
    need_login: "Already have an account? Login"
  },
  zh: {
    home: "首页",
    services: "服务",
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
    logistics_logo: "物流标志",
    company_name: "澳德发物流",
    direct_shipping_line: "中国 - 澳洲专线直达",
    shipping_time: "空运 7-10天 | 海运 20-30天",
    service_features: "专业物流服务 · 安全快捷 · 全程跟踪",
    gold_member: "黄金会员",
    pending_shipment: "待寄出",
    unpaid: "待支付",
    my_address_book: "我的地址簿",
    shipping_service: "寄件服务",
    online_service: "在线客服",
    system_settings: "系统设置",
    contact_service_description: "如果您有任何问题，请随时联系我们的在线客服。",
    settings_description: "系统设置内容待完善。",
    login_title: "登录账户",
    login_description: "登录后享受更多服务",
    username: "用户名",
    password: "密码",
    login: "登录",
    back: "返回",
    points: "积分",
    logout: "退出登录",
    faq_title: "常见问题",
    faq_tracking_question: "如何追踪我的包裹？",
    faq_tracking_answer: "您可以通过以下方式追踪包裹：1. 在首页输入运单号 2. 扫描包裹上的二维码 3. 在APP中查看'我的订单'",
    faq_delivery_time_question: "从中国发货到澳洲需要多久？",
    faq_delivery_time_answer: "一般空运7-10个工作日，海运20-30个工作日。具体时间可能因目的地、货物类型和清关时间而有所不同。",
    faq_items_question: "你们可以寄送哪些物品？",
    faq_items_answer: "我们可以运送大多数日常物品，包括服装、电子产品、食品等。但不能托运违禁品，如易燃物、管制刀具等。详细清单请查看违禁品列表。",
    faq_shipping_cost_question: "如何计算运费？",
    faq_shipping_cost_answer: "运费根据重量或体积（取较大值）计算，另外还要考虑目的地。您可以使用我们的运费计算器获取准确报价。",
    faq_lost_package_question: "包裹丢失或损坏怎么办？",
    faq_lost_package_answer: "我们为所有包裹提供基本保险。如发生丢失或损坏，请立即联系客服，提供运单号和相关证据，我们会按照保险条款进行赔付。",
    faq_pickup_time_question: "你们的取件时间是怎样的？",
    faq_pickup_time_answer: "我们的取件时间为周一至周六 9:00-18:00。您可以在下单时选择希望的取件时间段。",
    from_location: "发货地",
    to_location: "收货地",
    view_details: "查看详情",
    scan_qr_code: "扫描二维码",
    scan_barcode: "扫描条码",
    company_slogan: "澳德发物流，您的澳洲专线物流专家",
    company_description: "我们专业提供中国至澳大利亚的国际物流服务，拥有完善的物流网络和专业的团队。",
    company_commitment: "我们致力于为客户提供",
    safe: "安全",
    efficient: "高效",
    convenient: "便捷",
    cross_border_logistics: "的跨境物流解决方案",
    shipment_date: "发货日期",
    carousel_global_network_title: "全球物流网络",
    carousel_global_network_description: "覆盖澳洲各大城市，提供专业快捷的物流服务",
    carousel_safety_title: "安全可靠",
    carousel_safety_description: "全程监控，让您的包裹安全无忧",
    carousel_customs_title: "快速通关",
    carousel_customs_description: "专业报关团队，确保货物顺利清关",
    quick_send_title: "快速寄件",
    quick_send_description: "预约上门取件",
    track_order_description: "实时跟踪物流进度",
    invalid_credentials: "用户名或密码错误",
    login_success: "登录成功",
    username_taken: "用户名已被使用",
    register_success: "注册成功",
    auth_error: "认证错误",
    register_title: "注册账户",
    loading: "加载中...",
    register: "注册",
    need_register: "需要账户？立即注册",
    need_login: "已有账户？立即登录"
  },
}

