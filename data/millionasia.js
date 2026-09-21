export class MillionasiaSiteData {
  constructor() {
    this.brand = {
      name: "臺灣區電線電纜工業同業公會",
      englishName: "Taiwan Electric Wire & Cable Industries Association",
      logo: "/images/logo.jpg"
    }

    this.contact = {
      address: "114 台北市民權東路六段11巷41號3樓",
      phone: "886-2-27930358",
      fax: "886-2-27930113",
      email: "service@taiwancable.org.tw"
    }

    this.navigation = [
      { label: "首頁", to: "/" },
      { label: "關於公會", to: "/about" },
      { label: "會員查詢", to: "/members" },
      { label: "產品分類", to: "/products" },
      { label: "資料中心", to: "/resources" },
      { label: "申請入會", to: "/join" },
      { label: "聯絡我們", to: "/contact" }
    ]

    this.footerNavigation = [
      ...this.navigation.filter((item) => item.to !== "/"),
      { label: "Site Map", to: "/sitemap" }
    ]

    this.ads = {
      top: {
        label: "AD",
        title: "會員品牌曝光專區",
        text: "選單下方橫幅廣告",
        tone: "steel"
      },
      leftMarquee: [
        { label: "AD", title: "導體材料", text: "高純度銅材供應" },
        { label: "AD", title: "線纜設備", text: "智慧製程升級" },
        { label: "AD", title: "檢驗測試", text: "品質認證服務" },
        { label: "AD", title: "工業展會", text: "會員優惠曝光" }
      ],
      newsRotator: [
        { label: "AD", title: "產業合作夥伴", text: "最新消息上方廣告", tone: "steel" },
        { label: "AD", title: "線纜產業研討會", text: "報名與品牌曝光", tone: "red" },
        { label: "AD", title: "智慧製造專區", text: "供應鏈合作版位", tone: "dark" }
      ]
    }

    this.home = {
      heroImages: [
        { src: "/images/hero-cable-section.png", alt: "多款實體電線電纜剖面產品" },
        { src: "/images/hero-cable-lab.png", alt: "高壓電纜剖面與專業檢測設備" },
        { src: "/images/hero-cable-factory.png", alt: "電纜製造工廠與大型成品電纜剖面" }
      ],
      title: "臺灣區電線電纜服務入口",
      lead: "以專業、穩定、可維護的多頁式網站架構，整合會員查詢、產品分類、LME 行情、統計資料、公告與活動。"
    }

    this.newsCategories = ["休市公告", "金屬月刊", "公會公告", "產業動態", "法規標準", "活動訊息"]

    this.latestNews = [
      { date: "2026.09.18", isoDate: "2026-09-18", category: "休市公告", title: "國際金屬市場休市日期公告", text: "彙整近期 LME 與主要國際市場休市資訊。" },
      { date: "2026.09.15", isoDate: "2026-09-15", category: "金屬月刊", title: "2026 年 8 月金屬行情月刊", text: "銅、鋁、鎳與鋅市場行情及產業趨勢摘要。" },
      { date: "2026.09.10", isoDate: "2026-09-10", category: "公會公告", title: "本會會員名錄資料更新作業", text: "請會員確認公司資料、產品分類與聯絡窗口。" },
      { date: "2026.09.05", isoDate: "2026-09-05", category: "產業動態", title: "低碳線纜與智慧電網供應鏈趨勢", text: "整理電力基礎建設與線纜產業近期發展。" },
      { date: "2026.08.28", isoDate: "2026-08-28", category: "法規標準", title: "電線電纜檢驗標準修訂重點", text: "提供產品認證、檢驗與標示規範摘要。" },
      { date: "2026.08.20", isoDate: "2026-08-20", category: "活動訊息", title: "會員廠參訪與供應鏈交流活動", text: "安排製造基地參訪及會員產業交流。" },
      { date: "2026.08.15", isoDate: "2026-08-15", category: "休市公告", title: "中秋節期間市場資訊更新時程", text: "休市期間行情資料將於開市後統一更新。" },
      { date: "2026.08.08", isoDate: "2026-08-08", category: "金屬月刊", title: "2026 年 7 月金屬行情月刊", text: "回顧基本金屬價格走勢與供需變化。" },
      { date: "2026.07.30", isoDate: "2026-07-30", category: "公會公告", title: "年度產銷統計資料填報提醒", text: "請會員廠商依期限完成資料回覆。" },
      { date: "2026.07.22", isoDate: "2026-07-22", category: "產業動態", title: "再生銅材應用與品質管理", text: "關注循環材料在線纜產品的實務應用。" },
      { date: "2026.07.15", isoDate: "2026-07-15", category: "法規標準", title: "電纜阻燃測試規範說明", text: "整理測試程序與會員常見問題。" },
      { date: "2026.07.09", isoDate: "2026-07-09", category: "活動訊息", title: "低碳製造與材料趨勢講座", text: "提供線上直播與會後簡報下載。" }
    ]

    this.members = [
      { id: "1001", city: "桃園", category: ["copper", "power"], name: "太平洋電線電纜股份有限公司", english: "Pacific Electric Wire & Cable Co., Ltd.", phone: "03-4202555", address: "桃園市楊梅區快速路五段858號", categoryText: "銅線材、電力電纜" },
      { id: "1002", city: "台北", category: ["copper"], name: "中華電線電纜股份有限公司", english: "China Wire & Cable Co., Ltd.", phone: "02-25993456", address: "台北市中山北路三段58號", categoryText: "銅線材" },
      { id: "1003", city: "台北", category: ["power", "communication"], name: "華新麗華股份有限公司", english: "Walsin Lihwa Corporation", phone: "02-87262211", address: "台北市信義區松智路1號25樓", categoryText: "電力電纜、通信電纜" },
      { id: "1004", city: "高雄", category: ["power"], name: "華榮電線電纜股份有限公司", english: "Hua Eng Wire & Cable Co., Ltd.", phone: "07-2814161", address: "高雄市前金區中正四路170號", categoryText: "電力電纜" },
      { id: "1005", city: "台南", category: ["power"], name: "大亞電線電纜股份有限公司", english: "TA YA ELECTRIC WIRE & Cable Co., Ltd.", phone: "06-5953131", address: "台南市關廟區中山路2段249號", categoryText: "電力電纜" },
      { id: "1006", city: "台北", category: ["communication"], name: "大同股份有限公司", english: "Tatung Co.", phone: "02-25925252", address: "台北市中山北路三段22號", categoryText: "通信電纜" }
    ]

    this.products = [
      {
        index: "01",
        title: "裸銅線類",
        english: "Copper Wire",
        text: "SCR 銅線及銅條、無氧銅線及銅棒、軟硬絞銅線。",
        items: ["SCR 銅線及銅條", "無氧銅線及銅棒", "軟硬絞銅線"]
      },
      {
        index: "02",
        title: "電力電纜類",
        english: "Power Wire & Cable",
        text: "高壓、低壓、PVC、橡膠絕緣及船舶電纜。",
        items: ["高壓電線電纜", "低壓電線電纜", "橡膠電線電纜", "船舶電纜"]
      },
      {
        index: "03",
        title: "一般通信電纜",
        english: "General Communication Wire & Cable",
        text: "一般通信線與光纖通信電纜分類查詢。",
        items: ["通信電纜類", "光纖通信電纜"]
      },
      {
        index: "04",
        title: "漆包線及紗包線",
        english: "Enamelled (Magnet) Wire",
        text: "馬達、線圈與電子元件使用之磁線材料。",
        items: ["漆包線及紗包線"]
      },
      {
        index: "05",
        title: "電子線",
        english: "Electronic Wire and Cords",
        text: "電子線、電源線與連接用途線材。",
        items: ["電子線及電源線"]
      },
      {
        index: "06",
        title: "鋁電線電纜",
        english: "Aluminum Conductor Wire & Cable",
        text: "鋁導體線材與電纜產品。",
        items: ["鋁電線電纜"]
      },
      {
        index: "07",
        title: "特殊線",
        english: "Special Wire",
        text: "特殊規格、環境與應用條件線材。",
        items: ["特殊線"]
      },
      {
        index: "08",
        title: "其他",
        english: "Others",
        text: "未歸入既有大類之產品與服務。",
        items: ["其他產品與服務"]
      }
    ]

    this.aboutSections = [
      { label: "公會簡介", to: "/about", icon: "building" },
      { label: "組織功能", to: "/about/organization", icon: "network" },
      { label: "公會章程", to: "/about/charter", icon: "document" },
      { label: "公會會務", to: "/about/services", icon: "briefcase" },
      { label: "產業結構", to: "/about/industry", icon: "diagram" },
      { label: "產品類別", to: "/about/products", icon: "cable" }
    ]

    this.about = {
      introduction: {
        overview: [
          "電線電纜公會透過產業資訊平台，協助會員掌握公會會務、產業動態、展覽資訊與國內外商務資料，並串連會員與市場需求。",
          "本會以協調同業關係、增進共同利益、推動產業改良與發展為核心，持續促進產官學研合作與供應鏈交流。"
        ],
        logoMeaning: [
          "公會標誌取自電線電纜橫剖面：中央七個紅色圓形代表七股單芯導體絞合排列，外圍雙圓則象徵絕緣體環繞導體。",
          "圓形也寓意長久、連綿與團結，代表公會匯聚會員、政府、學校及研究機構，共同推動產業與生活品質進步。"
        ],
        profile: [
          ["公會名稱", "臺灣區電線電纜工業同業公會"],
          ["地址", "114 台北市民權東路六段11巷41號3樓"],
          ["電話", "02-27930358（代表號）"],
          ["傳真", "02-27930113"],
          ["Email", "taiwan.cable@msa.hinet.net"]
        ],
        history: [
          { title: "播遷草創期", text: "民國 39 年起，國內開始生產塑膠絕緣線、建築用低壓電線與電纜，逐步奠定產業基礎。" },
          { title: "發展成長期", text: "民國 49 年起引進國際技術合作，電力、通信、高壓橡膠電纜與漆包線等產品陸續投入生產。" },
          { title: "起飛轉型期", text: "產業導入 XLPE 電力電纜、CCP 通信電纜、連續鑄軋銅條與光纖製造研究，產品與技術加速升級。" },
          { title: "成熟突破期", text: "光纖通信、高壓電力線與極細漆包線持續發展，產業朝自動化、專業化與國際標準接軌。" }
        ]
      },
      organization: {
        overview: "本會設理事會、監事會，並依業務性質成立工作小組及委員會，協調會員參與並推展各項會務。",
        bodies: ["會員代表大會", "理事會", "監事會", "會務工作團隊"],
        committees: [
          "常設委員會",
          "產銷拓展委員會",
          "空氣污染防治與技術研究發展委員會",
          "財、稅、法規研究委員會",
          "原物料調查統計委員會",
          "財務計畫委員會",
          "高壓電纜接續材料發展委員會",
          "WTO 因應專案委員會",
          "電纜產業管理資訊委員會",
          "專業小組：裸銅線、電力線、通信線、漆包線、電子線",
          "電線電纜國家標準委員會"
        ]
      },
      charter: {
        reference: "第十二屆第一次會員代表大會修訂，奉內政部 91 年 7 月 12 日台（91）內中社字第 0910022826 號函核備。",
        purpose: "本會以協調同業關係、增進共同利益，並謀劃工業之改良推廣、促進經濟發展為宗旨。",
        chapters: [
          { title: "第一章　總則", range: "第一條至第八條", text: "規範章程依據、名稱、主管機關、宗旨、法人地位、組織區域、會址及辦事處設置。" },
          { title: "第二章　任務", range: "第九條", text: "涵蓋產業調查研究、原料協調、產銷推廣、技術合作、會員權益、人才訓練、公益與政策建議等任務。" },
          { title: "第三章　會員及會員代表", range: "第十條至第二十一條", text: "規範會員資格、入會、退會、代表資格與權利、委託出席、證件及會籍管理。" },
          { title: "第四章　組織及職權", range: "第二十二條至第三十七條", text: "規範理監事名額、選任、任期、解任，以及會員代表大會、理事會、監事會與會務人員職權。" },
          { title: "第五章　會議", range: "第三十八條至第四十六條", text: "規範會員代表大會、理監事會的召集、出席、表決門檻與會議程序。" },
          { title: "第六章　經費及會計", range: "第四十七條至第五十五條", text: "規範入會費、常年會費、事業費、基金、預決算、會計年度與事業會計。" },
          { title: "第七章　附則", range: "第五十六條至第五十八條", text: "規範解散後財產歸屬、未盡事項的法令依據，以及章程通過與修改程序。" }
        ],
        tasks: [
          "國內外電線電纜工業之調查、統計、研究、改良及發展。",
          "有關原料來源之調查及協助調配。",
          "會員生產、運銷之調查、統計及推廣。",
          "技術合作之聯繫及推進。",
          "會員合法權益之維護及業務狀況調查。",
          "促進會員產品聯營外銷及展覽。",
          "會員與會員代表資料建立、動態調查與登記。",
          "會員證照申請、變更、換照及資格證明服務。",
          "同業及勞資糾紛之協助調處。",
          "勞動生產力研究、技能訓練與講習。",
          "會員公益事業及受託服務。",
          "政府經濟政策與工業法令之協助推行、研究及建議。"
        ]
      },
      services: {
        items: [
          "本業調查、統計、研究、改良及發展。",
          "會員所需原料來源調查及協助調配。",
          "會員生產、運銷之調查統計及推廣。",
          "會員技術合作之聯繫及推進。",
          "會員基本資料之建立及動態調查登記。",
          "同業糾紛及勞資糾紛之協助調處。",
          "會員合法權益之維護。",
          "會員產品之拓銷及展覽。",
          "接受機關、團體或會員之委託服務。",
          "政府經濟政策與工業法令之協助推行及研究建議。",
          "勞動力研究、同業員工技訓及講習。",
          "會員公益事業之舉辦。"
        ],
        outlook: "面對市場開放、原物料波動、環保法規與國際競爭，產業持續朝大型化、專業化、自動化與高附加價值產品發展，並透過上下游整合、產銷分工、技術升級及 CNS 與 IEC 標準接軌，強化國際競爭力。"
      }
    }

    this.market = [
      { metal: "Copper", value: "US$/MT 9,860" },
      { metal: "Aluminium", value: "US$/MT 2,540" },
      { metal: "Nickel", value: "US$/MT 19,280" },
      { metal: "Zinc", value: "US$/MT 2,910" }
    ]

    this.downloads = [
      "115年1-2月份 LME 每日行情",
      "114年12月份 LME 每日行情",
      "產銷統計資料彙整"
    ]

    this.membershipSteps = [
      { title: "確認資格", text: "從事電線電纜製造或相關產業服務。" },
      { title: "準備資料", text: "公司登記、工廠登記、產品資料與聯絡窗口。" },
      { title: "送件審查", text: "公會受理後依流程審核與回覆。" },
      { title: "完成入會", text: "完成會費與會員資料建檔。" }
    ]
  }

  getBrand() {
    return this.brand
  }

  getContact() {
    return this.contact
  }

  getNavigation() {
    return this.navigation
  }

  getFooterNavigation() {
    return this.footerNavigation
  }

  getAds() {
    return this.ads
  }

  getMembers() {
    return this.members
  }

  getProducts() {
    return this.products
  }

  getAboutSections() {
    return this.aboutSections
  }

  getAboutContent() {
    return this.about
  }
}

export const millionasia = new MillionasiaSiteData()
