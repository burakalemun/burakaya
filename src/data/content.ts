export interface PersonalInfo {
  name: string;
  avatar: string;
  location: string;
  email: string;
  github: string;
  linkedin: string;
  instagram: string;
  rolesTR: string[];
  rolesEN: string[];
  bioTR: string;
  bioEN: string;
}

export const personal: PersonalInfo = {
  name: 'Burak Kaya',
  avatar: '/avatar.jpg',
  location: 'İstanbul, Türkiye',
  email: 'kayaaaburak11@gmail.com',
  github: 'https://github.com/burakalemun',
  linkedin: 'https://www.linkedin.com/in/burak-kaya-785b14199/',
  instagram: 'https://www.instagram.com/burakayaaa.11/',
  rolesTR: ['iOS Developer', 'Frontend Engineer', 'Tech Enthusiast'],
  rolesEN: ['iOS Developer', 'Frontend Engineer', 'Tech Enthusiast'],
  bioTR: 'Modern teknolojilerle performanslı ve kullanıcı dostu uygulamalar geliştiren bir yazılım tutkunuyum. iOS dünyasında Swift ve SwiftUI, web dünyasında ise React ve modern frameworklerle çalışıyorum.',
  bioEN: 'I am a software enthusiast developing performant and user-friendly applications with modern technologies. I work with Swift and SwiftUI in the iOS world, and React and modern frameworks in the web world.',
};

export const stats = {
  yearsTR: '3+',
  yearsEN: '3+',
  projects: '15',
  commits: '100',
  coffee: '∞',
};

export interface SkillCategory {
  keyTR: string;
  keyEN: string;
  icon: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    keyTR: 'Mobil Geliştirme',
    keyEN: 'Mobile Development',
    icon: '📱',
    skills: ['Swift', 'SwiftUI', 'UIKit', 'Xcode'],
  },
  {
    keyTR: 'Frontend & Web',
    keyEN: 'Frontend & Web',
    icon: '💻',
    skills: ['React', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3'],
  },
  {
    keyTR: 'Backend & Sistem',
    keyEN: 'Backend & Systems',
    icon: '⚙️',
    skills: ['Node.js', 'Go', 'Python', '.NET', 'PostgreSQL'],
  },
  {
    keyTR: 'Araçlar & DevOps',
    keyEN: 'Tools & DevOps',
    icon: '🛠️',
    skills: ['Firebase', 'AWS', 'Docker', 'Git'],
  },
];

export interface Experience {
  company: string;
  roleTR: string;
  roleEN: string;
  period: string;
  current: boolean;
  tasksTR: string[];
  tasksEN: string[];
  tech: string[];
}

export const experiences: Experience[] = [
  {
    company: 'TTProsoft',
    roleTR: 'Front-End Developer (Stajyer)',
    roleEN: 'Front-End Developer (Intern)',
    period: '2024',
    current: false,
    tasksTR: [
      'HTML, CSS ve Bootstrap teknolojilerini kullanarak sıfırdan duyarlı ve modern bir web sitesi tasarladım.'
    ],
    tasksEN: [
      'Designed a responsive and modern website from scratch using HTML, CSS, and Bootstrap technologies.'
    ],
    tech: ['HTML', 'CSS', 'Bootstrap'],
  },
  {
    company: 'Kontrat',
    roleTR: 'Jr. Full Stack Web Developer',
    roleEN: 'Jr. Full Stack Web Developer',
    period: '2024',
    current: false,
    tasksTR: [
      'Web sitesinin kullanıcı arayüzünü JavaScript kullanarak dinamikleştirdim.',
      'MVC (Model-View-Controller) modelini kullanarak .NET ile backend işlemlerini gerçekleştirdim.',
      'Veritabanı işlemleri için PostgreSQL kullandım.'
    ],
    tasksEN: [
      'Made the website user interface dynamic using JavaScript.',
      'Implemented backend processes with .NET using the MVC architecture.',
      'Used PostgreSQL for database operations.'
    ],
    tech: ['JavaScript', '.NET', 'MVC', 'PostgreSQL'],
  },
  {
    company: 'Tırport',
    roleTR: 'Jr. Developer',
    roleEN: 'Jr. Developer',
    period: '2021 — 2023',
    current: false,
    tasksTR: [
      'Tırport V2 sürümünde frontend geliştirme sürecinde yer alarak React ve Material-UI (MUI) ile ekran tasarımlarını oluşturdum.',
      'Şirketin IT süreçleriyle ilgilenerek güvenlik önlemlerini güçlendirmek amacıyla AWS ile entegre bir VPN kurulumu gerçekleştirdim.'
    ],
    tasksEN: [
      'Participated in the frontend development of Tırport V2, creating screen designs with React and Material-UI (MUI).',
      'Managed IT processes and established an AWS-integrated VPN to strengthen security measures.'
    ],
    tech: ['React', 'Material-UI', 'AWS', 'VPN'],
  },
  {
    company: 'AB Plus Bilisim Teknolojileri',
    roleTR: 'Stajyer',
    roleEN: 'Intern',
    period: '2020 — 2021',
    current: false,
    tasksTR: [
      'Adobe XD ile uygulama ekran tasarımları ve web site tasarımları oluşturdum.',
      'Robot oyuncak projesi için mekanik ve elektronik alanlarında da çalışma yaptım.'
    ],
    tasksEN: [
      'Created application screen designs and website designs using Adobe XD.',
      'Worked in mechanical and electronic fields for a robot toy project.'
    ],
    tech: ['Adobe XD', 'UI/UX Design'],
  }
];

export const education = {
  schoolTR: 'Medipol Üniversitesi',
  schoolEN: 'Medipol University',
  departmentTR: 'Bilgisayar Mühendisliği',
  departmentEN: 'Computer Engineering',
  period: '2022 — 2024',
};

export interface Project {
  id: number;
  nameTR: string;
  nameEN: string;
  descTR: string;
  descEN: string;
  storyTR: string;
  storyEN: string;
  tech: string[];
  typeTR: string;
  typeEN: string;
  featuresTR: string[];
  featuresEN: string[];
  technicalTR: string[];
  technicalEN: string[];
  github?: string;
  live?: string;
  web?: string;
  appStore?: string;
  playStore?: string;
  instagram?: string;
  gradient: string;
  screenshots?: string[];
}

export const projects: Project[] = [
  {
    id: 7,
    nameTR: 'QuickMenu',
    nameEN: 'QuickMenu',
    descTR: 'Restoranlar ve kafeler için geliştirilen, QR kod okutularak erişilebilen şık ve modern dijital menü yönetim sistemi.',
    descEN: 'A stylish and modern digital menu management system for restaurants and cafes, accessible by scanning a QR code.',
    typeTR: 'Web Uygulaması',
    typeEN: 'Web Application',
    storyTR: 'İşletmelerin saniyeler içinde menülerini güncelleyebileceği, müşterilerin ise kağıt menü beklemeden sipariş seçebileceği kusursuz bir dijital deneyim tasarlandı.',
    storyEN: 'Designed a seamless digital experience where businesses can update menus in seconds and customers can browse items without waiting for paper menus.',
    tech: ['React', 'TypeScript', 'Tailwind', 'Next.js'],
    featuresTR: ['QR Kod Entegrasyonu', 'Anlık Menü Yönetimi', 'Mobil Uyumlu Tasarım'],
    featuresEN: ['QR Code Integration', 'Real-time Menu Management', 'Mobile-Responsive Design'],
    technicalTR: ['Next.js App Router', 'Server Components', 'Tailwind UI'],
    technicalEN: ['Next.js App Router', 'Server Components', 'Tailwind UI'],
    web: 'https://quick-menu-delta.vercel.app/',
    gradient: 'linear-gradient(135deg, #FF9A9E 0%, #FECFEF 100%)',
    screenshots: [
      '/screenshots/quickmenu-1.jpg',
      '/screenshots/quickmenu-2.jpg',
      '/screenshots/quickmenu-3.jpg'
    ],
  },
  {
    id: 8,
    nameTR: 'BioxLife',
    nameEN: 'BioxLife',
    descTR: 'Sağlık ve biyoteknoloji ürünlerinin satışı için tasarlanmış, Medusa altyapısına sahip tam kapsamlı e-ticaret vitrini.',
    descEN: 'A fully comprehensive e-commerce showcase designed for the sale of health and biotechnology products, built on Medusa infrastructure.',
    typeTR: 'E-Ticaret / Web',
    typeEN: 'E-Commerce / Web',
    storyTR: 'BioxLife markasının dijital kimliğini modern bir arayüzle taçlandırarak, kullanıcı deneyimi odaklı, hızlı ve güvenli bir e-ticaret altyapısı kuruldu.',
    storyEN: 'A fast and secure user-experience focused e-commerce infrastructure was built to crown the digital identity of the BioxLife brand with a modern interface.',
    tech: ['Next.js', 'Medusa.js', 'PostgreSQL', 'Tailwind'],
    featuresTR: ['Tam Kapsamlı Sepet Sistemi', 'Güvenli Ödeme Arayüzü', 'Kategori Yönetimi'],
    featuresEN: ['Comprehensive Cart System', 'Secure Checkout Interface', 'Category Management'],
    technicalTR: ['Medusa Headless Backend', 'Next.js Frontend', 'Supabase Database'],
    technicalEN: ['Medusa Headless Backend', 'Next.js Frontend', 'Supabase Database'],
    web: 'https://biox-life-backend.vercel.app/tr',
    gradient: 'linear-gradient(135deg, #A8EDEA 0%, #FED6E3 100%)',
    screenshots: [
      '/screenshots/bioxlife-1.jpg',
      '/screenshots/bioxlife-2.jpg',
      '/screenshots/bioxlife-3.jpg'
    ],
  },
  {
    id: 1,
    nameTR: 'Moodies',
    nameEN: 'Moodies',
    descTR: 'SwiftUI ile geliştirilen bu günlük ruh hali takip uygulaması, kullanıcıların duygusal durumlarını emoji temelli bir sistemle kaydetmelerini sağlar. SwiftData ile lokal veri saklama, Swift Charts ile haftalık analiz, modern ve sade bir arayüzle desteklenmiştir.',
    descEN: 'A daily mood tracking application developed with SwiftUI that allows users to log their emotional states using an emoji-based system, featuring SwiftData local storage and Swift Charts.',
    typeTR: 'Mobil Uygulama',
    typeEN: 'Mobile Application',
    storyTR: 'Kullanıcıların günlük ruh hallerini hızlıca kaydedebileceği şık bir arayüz tasarlandı. Gelişmiş özellikler (bildirimler, Supabase Auth vb.) yapım aşamasındadır.',
    storyEN: 'Designed a sleek interface for users to quickly log their daily moods. Advanced features like notifications and Supabase Auth are currently in development.',
    tech: ['SwiftUI', 'SwiftData', 'Charts', 'MVVM'],
    featuresTR: ['Emoji Temelli Kayıt', 'Haftalık Analiz Grafikleri', 'Lokal Veri Saklama'],
    featuresEN: ['Emoji-based Logging', 'Weekly Analysis Charts', 'Local Data Storage'],
    technicalTR: ['SwiftData Entegrasyonu', 'MVVM Mimarisi', 'AppStorage Kullanımı'],
    technicalEN: ['SwiftData Integration', 'MVVM Architecture', 'AppStorage Usage'],
    web: 'https://moodies-amber.vercel.app/',
    appStore: 'https://apps.apple.com/',
    gradient: 'linear-gradient(135deg, #F093FB 0%, #F5576C 100%)',
    screenshots: ['/screenshots/bugun-hero.png'],
  },
  {
    id: 2,
    nameTR: '5Coin',
    nameEN: '5Coin',
    descTR: 'Kullanıcıların favori kripto paralarını takip etmelerini ve emir eklemelerini sağlayan, maksimum 5 coin ile sınırlı, CoinGecko ve DexScreener API destekli sade bir uygulama.',
    descEN: 'A simple app allowing users to track up to 5 favorite cryptocurrencies and add trade orders, powered by CoinGecko and DexScreener APIs.',
    typeTR: 'Mobil Uygulama',
    typeEN: 'Mobile Application',
    storyTR: 'Kullanıcı deneyimini optimize etmek için maksimum 5 coin ile sınırlandırılan bu uygulama, anlık fiyat güncellemeleri ve emir yönetimi ile zenginleştirilmiştir.',
    storyEN: 'Limited to 5 coins to optimize user experience, this app is enriched with real-time price updates and order management.',
    tech: ['SwiftUI', 'Combine', 'MVVM'],
    featuresTR: ['Anlık Fiyat Takibi', 'Alım/Satım Emirleri', 'Lokal Favori Kaydı'],
    featuresEN: ['Real-time Price Tracking', 'Buy/Sell Orders', 'Local Favorites Save'],
    technicalTR: ['CoinGecko & DexScreener API', 'Combine Framework', 'UserDefaults & AppStorage'],
    technicalEN: ['CoinGecko & DexScreener API', 'Combine Framework', 'UserDefaults & AppStorage'],
    github: 'https://github.com/burakalemun/5Coin',
    gradient: 'linear-gradient(135deg, #00C6FF 0%, #0072FF 100%)',
    screenshots: [
      '/screenshots/5coin-hero.png',
      '/screenshots/5coin-1.jpg',
      '/screenshots/5coin-2.jpg',
      '/screenshots/5coin-3.jpg',
      '/screenshots/5coin-4.jpg',
      '/screenshots/5coin-5.jpg',
      '/screenshots/5coin-6.jpg'
    ],
  },
  {
    id: 3,
    nameTR: 'WeatherApp',
    nameEN: 'WeatherApp',
    descTR: 'Statik verilerle çalışan, BottomSheet entegrasyonu yapılmış, modüler (HomeView, ForecastCard vb.) ve dinamik bileşenlere sahip modern hava durumu uygulaması.',
    descEN: 'A modern weather application built with static data, featuring BottomSheet integration and a highly modular UI architecture.',
    typeTR: 'Mobil Uygulama',
    typeEN: 'Mobile Application',
    storyTR: 'Hava durumu deneyimini simüle eden bir demo olarak tasarlanmış olup, zengin UI bileşenleri ve BottomSheet etkileşimleri barındırır.',
    storyEN: 'Designed as a demo simulating a weather experience, featuring rich UI components and interactive BottomSheets.',
    tech: ['Swift', 'SwiftUI', 'MVVM'],
    featuresTR: ['Modüler UI Tasarımı', 'BottomSheet Entegrasyonu', 'Hava Durumu Simülasyonu'],
    featuresEN: ['Modular UI Design', 'BottomSheet Integration', 'Weather Simulation'],
    technicalTR: ['Custom SwiftUI Views', 'State Management', 'Statik Veri Modelleme'],
    technicalEN: ['Custom SwiftUI Views', 'State Management', 'Static Data Modeling'],
    github: 'https://github.com/burakalemun/WeatherApp',
    gradient: 'linear-gradient(135deg, #84FAB0 0%, #8FD3F4 100%)',
    screenshots: ['/screenshots/weather-hero.png'],
  },
  {
    id: 4,
    nameTR: 'SuperLig- API',
    nameEN: 'SuperLig- API',
    descTR: 'Go programlama diliyle Süper Lig maç bilgilerini ve istatistiklerini web scraping yöntemiyle çeken ve JSON tabanlı bir API olarak sunan back-end projesi.',
    descEN: 'A Go backend project that uses web scraping to pull Super Lig match data and statistics, serving them as a JSON API.',
    typeTR: 'API / Backend',
    typeEN: 'API / Backend',
    storyTR: 'Futbol istatistiklerini derleyip API üzerinden hızlıca sunabilmek amacıyla geliştirilmiş, web scraping ve JSON yapılandırması odaklı bir çalışmadır.',
    storyEN: 'Developed to compile football statistics and serve them quickly via an API, focusing on web scraping and JSON structuring.',
    tech: ['Go', 'JSON'],
    featuresTR: ['Süper Lig Maç Verileri', 'İstatistik API\'si', 'Anlık Web Scraping'],
    featuresEN: ['Super Lig Match Data', 'Statistics API', 'Real-time Web Scraping'],
    technicalTR: ['Go HTTP Server', 'HTML Parsing', 'JSON Encoding'],
    technicalEN: ['Go HTTP Server', 'HTML Parsing', 'JSON Encoding'],
    github: 'https://github.com/burakalemun/SuperLig-API',
    gradient: 'linear-gradient(135deg, #FDFBFB 0%, #EBEDEE 100%)',
    screenshots: ['/screenshots/goapi-hero.png'],
  },
  {
    id: 5,
    nameTR: 'Task Management App',
    nameEN: 'Task Management App',
    descTR: 'Kullanıcıların görevlerini oluşturup düzenleyebildiği, modern arayüzlü ve tamamen local state yapıları üzerinden çalışan kullanıcı dostu görev yönetim uygulaması.',
    descEN: 'A user-friendly task management app with a modern interface, allowing users to create and edit tasks using pure local state structures.',
    typeTR: 'Mobil Uygulama',
    typeEN: 'Mobile Application',
    storyTR: 'Günlük iş planlamasını basitleştirmek ve SwiftUI yeteneklerini test etmek için yerel veri yapılarıyla tasarlanmış hafif bir projedir.',
    storyEN: 'A lightweight project designed with local data structures to simplify daily task planning and showcase SwiftUI capabilities.',
    tech: ['Swift', 'SwiftUI', 'Xcode'],
    featuresTR: ['Görev Oluşturma/Düzenleme', 'Modern Arayüz', 'Hızlı Kullanım'],
    featuresEN: ['Task Creation/Editing', 'Modern Interface', 'Fast Usage'],
    technicalTR: ['Local State Management', 'SwiftUI Components', 'Native Performance'],
    technicalEN: ['Local State Management', 'SwiftUI Components', 'Native Performance'],
    github: 'https://github.com/burakalemun/Task',
    gradient: 'linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)',
    screenshots: ['/screenshots/task-hero.png'],
  },
  {
    id: 6,
    nameTR: 'FRC - 8070 Cybergriffins',
    nameEN: 'FRC - 8070 Cybergriffins',
    descTR: 'FRC kapsamında 4 haftada robot geliştirdiğimiz projede Java ile robot kontrol sistemi yazıldı, Python ile görüntü işleme yapıldı ve CAD ile montaj süreçlerine katılınıldı.',
    descEN: 'As part of the FRC team, coded the robot control system with Java, performed image processing with Python, and contributed to CAD and assembly processes.',
    typeTR: 'Robotik / Yazılım',
    typeEN: 'Robotics / Software',
    storyTR: 'Zamanın çok kısıtlı olduğu bir robotik yarışmasında mekanik ve yazılım ekibinin köprüsü olarak görev yaptığım, mühendislik disiplinini öğreten bir takım çalışması.',
    storyEN: 'A teamwork experience in a highly time-constrained robotics competition where I acted as a bridge between mechanical and software teams.',
    tech: ['Java', 'Python'],
    featuresTR: ['Robot Kontrol Sistemi', 'Görüntü İşleme (OpenCV)', 'Devre Entegrasyonu'],
    featuresEN: ['Robot Control System', 'Image Processing (OpenCV)', 'Circuit Integration'],
    technicalTR: ['Java WPI Lib', 'Python OpenCV', 'SolidWorks CAD'],
    technicalEN: ['Java WPI Lib', 'Python OpenCV', 'SolidWorks CAD'],
    instagram: 'https://www.instagram.com/cybergriffins/',
    gradient: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 99%, #fecfef 100%)',
    screenshots: ['/screenshots/frc-hero.png'],
  }
];
