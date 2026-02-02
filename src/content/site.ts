export const site = {
  name: "Dellcreek Developers Limited",
  tagline: "Where Real Estate gets Real",
  description:
    "We are engaged in the Real Estate business of buying and selling of properties, construction and selling of apartments to our consumers all around the country.",
  location: "Kenya",
  contact: {
    email: "dellcreekltd@gmail.com",
    phones: ["0715 73 11 11", "0783 73 11 11"],
    address: "Krishna Centre, Suite F14, 4th Flr, Woodvale Groove, Westlands",
  },
} as const;

export const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/land-for-sale", label: "Land for Sale" },
  { href: "/services", label: "Services" },
  { href: "/csr", label: "CSR" },
  { href: "/contact", label: "Contact" },
] as const;

export type ProjectStatus = "Ongoing" | "Completed";

export type Media = {
  images?: string[]; // public paths
  videos?: string[]; // public paths
};

export type Project = {
  name: string;
  status: ProjectStatus;
  locationSummary?: string;
  details: string[];
  pricing?: string[]; // keep formatting as in profile (e.g. "4.5M • 50×100 plots")
  size?: string[]; // e.g. "10 Acres", "1 Acre", etc.
  media?: Media;
};

export const primePlotAreas = [
  "Thika",
  "Nyahururu",
  "Laikipia",
  "Nanyuki",
  "Naivasha",
  "Karen",
  "Isinya",
] as const;

export const ongoingProjects: Project[] = [
  {
    name: "Peridian Court",
    status: "Ongoing",
    locationSummary: "Located along Kigango Road, 2km from Gretsa University.",
    details: [
      "Gated for maximum security",
      "Water and Electricity on site",
      "Close to Social Amenities such as schools, hospitals, Ananas Mall etc...",
      "Ideal for residential (apartments, hostels, stand alone houses...)",
    ],
    pricing: ["4.5M • 50×100 plots (from)"],
    media: {
      images: [
        "/peridian/DJI_0128.jpg",
        "/peridian/DJI_0133.jpg",
        "/peridian/DJI_0137.jpg",
        "/peridian/DJI_0150.jpg",
      ],
    },
  },
  {
    name: "Estateview",
    status: "Ongoing",
    locationSummary: "1km from BAT, Thika. Touching the tarmac Road (BAT-Delmonte Bypass).",
    details: [
      "Graded Access roads",
      "Water and Electricity on site",
      "Close to social amenities",
    ],
    pricing: ["7.5M • 100×100 plots (from)"],
    media: {
      images: [
        "/estateview/DJI_0160.jpg",
        "/estateview/DJI_0166.jpg",
        "/estateview/DJI_0175.jpg",
        "/estateview/DJI_0177.jpg",
      ],
    },
  },
  {
    name: "Towncreek Estate",
    status: "Ongoing",
    locationSummary: "Next to JCC Church, Thika. Few meters from Gatitu Junction and Thika town.",
    details: [
      "Ideal for Residential & Commercial Purposes",
      "Very close to Chania Estate",
    ],
    size: ["10 Acres"],
    pricing: ["70M • 1 Acre"],
    media: {
      images: [
        "/towncreek/DJI_0193.jpg",
        "/towncreek/DJI_0194.jpg",
        "/towncreek/DJI_0204.jpg",
        "/towncreek/DJI_0209.jpg",
      ],
    },
  },
  {
    name: "Karen Hills",
    status: "Ongoing",
    details: [
      "Borehole & Reserve tanks Available",
      "Heavy-duty cabro pavements",
      "Well lit Sreet lights",
      "Stormwater Drainage",
    ],
    pricing: ["85M • 1 Acre"],
    media: {
      images: [
        "/photos/Karen hills.png",
        "/photos/Karen hills 2.png",
        "/photos/karenhills 3.png",
      ],
    },
  },
  {
    name: "Kambiti, Makuyu",
    status: "Ongoing",
    details: ["Suitable for agribusiness", "Water & Electricity on site"],
    size: ["86 Acres", "1 Acre"],
    pricing: ["1.3M • 1 Acre"],
    media: {
      images: [
        "/photos/kambiti_land_aerial_1.png",
        "/photos/kambiti_land_aerial_2.png",
      ],
    },
  },
  {
    name: "Isinya, Kajiado",
    status: "Ongoing",
    locationSummary: "1.5km from Isinya-Kajiado road. Behind UMMA University.",
    details: ["Suitable for Agribusiness", "Water & Electricity on site"],
    size: ["88 Acres", "1 Acre"],
    pricing: ["3.5M • 1 Acre"],
    media: {
      images: ["/photos/isinya_kajiado_aerial.png"],
    },
  },
  {
    name: "Kiritiri, Embu",
    status: "Ongoing",
    locationSummary: "2KM from Kiritiri town",
    details: ["Suitable for agribusiness", "Water & Electricity on site"],
    size: ["42 Acres", "1 Acre"],
    pricing: ["1.5M • 1 Acre"],
    media: {
      images: [
        "/photos/kiritiri_land_aerial_1.png",
        "/photos/kiritiri_land_aerial_2.png",
      ],
    },
  },
  {
    name: "Kariamu, Nyahururu",
    status: "Ongoing",
    locationSummary: "5km from Kariamu Town",
    details: ["Suitable for agribusines", "Water & Electricity on site"],
    size: ["300 Acres", "1 Acre"],
    pricing: ["1.5M • 1 Acre"],
    media: {
      images: [
        "/photos/kariamu_nyahururu_aerial.png",
        "/photos/kariamu_nyahururu_ground.png",
      ],
    },
  },
  {
    name: "Narumoru, Laikipia",
    status: "Ongoing",
    locationSummary:
      "400 meters from the tarmac road. 7km from Narumoru town. Neighbouring Narumoru River Lodge.",
    details: [
      "Suitable for Agribusiness and Holiday homes",
      "Water & Electricity on site",
    ],
    size: ["200 Acres", "1 Acre"],
    pricing: ["1.5M • 1 Acre"],
    media: {
      videos: ["/Videos/nelions ridge, naromoru.mp4"],
      images: [
        "/photos/narumoru_laikipia_aerial.png",
        "/photos/narumoru_laikipia_ground.png",
      ],
    },
  },
  {
    name: "Kilgoris, Narok",
    status: "Ongoing",
    locationSummary: "Located in Transmara, Kilgoris",
    details: ["Suitable for Agribusiness", "Water & Electricity on site"],
    size: ["300 Acres", "1 Acre"],
    pricing: ["575,000 • 1 Acre"],
    media: {
      images: [
        "/photos/kilgoris_narok_ground.png",
        "/photos/kilgoris_narok_aerial.png",
      ],
    },
  },
  {
    name: "Maraigushu, Naivasha",
    status: "Ongoing",
    locationSummary: "5km from Nairobi-Nakuru Highway",
    details: ["Suitable for agribusiness", "Water & Electricity on site"],
    size: ["106 Acres", "1 Acre"],
    pricing: ["2.5M • 1 Acre"],
    media: {
      images: [
        "/photos/maraigushu_naivasha_ground.png",
        "/photos/maraigushu_naivasha_aerial.png",
      ],
    },
  },
  {
    name: "Mananja",
    status: "Ongoing",
    locationSummary: "8km from Meru-Nairobi Highway",
    details: ["Suitable for Agribusiness or subdivision", "Water & Electricity"],
    size: ["85 Acres", "1 Acre"],
    pricing: ["1 M • 1 Acre"],
    media: {
      images: [
        "/mananja/5773629566152199047.jpg",
        "/mananja/5773629566152199047 (1).jpg",
        "/mananja/5773629566152199048.jpg",
        "/mananja/5773629566152199049.jpg",
        "/mananja/5773629566152199050.jpg",
        "/mananja/5773629566152199051.jpg",
      ],
      videos: ["/Videos/mananja machakos.mp4"],
    },
  },
] as const;

export const completedConstructionProjects = [
  {
    name: "Construction of modern petrol stations",
    image: "/photos/project_modern_petrol_station.png",
  },
  {
    name: "Construction of NAKEL Energy chain of petrol stations",
    image: "/photos/project_nakel_energy_station.png",
  },
  {
    name: "Construction of KERRA and KURA projects",
    image: "/photos/project_road_repair_final.png",
  },
  {
    name: "County Governments Projects",
    image: "/photos/county government projects.jpeg",
  },
] as const;

export const completedPropertySales = [
  {
    name: "Sale of Mombasa Road (2 Acres)",
    image: "/photos/project_mombasa_road_sale.png",
  },
  {
    name: "Sale of KCC, Nyahururu (5 Acres)",
    image: "/photos/project_kcc_nyahururu_sale.png",
  },
] as const;

export type Service = {
  title: string;
  description: string;
};

export const services: Service[] = [
  {
    title: "Buying and selling of properties",
    description:
      "We are engaged in the Real Estate business of buying and selling of properties to our consumers all around the country.",
  },
  {
    title: "Construction and selling of apartments",
    description:
      "We provide construction and selling of apartments to our consumers all around the country.",
  },
  {
    title: "Fund sourcing and joint ventures",
    description:
      "We liase with international investors and offer joint venture in construction of commercial, industrial and even residential properties.",
  },
  {
    title: "Property development",
    description:
      "We are a dynamic real estate company that will take real estate frontiers by storm.",
  },
  {
    title: "Petrol station specialists",
    description: "Company capabilities include petrol station specialists.",
  },
];

export const productsOffered = ["Land", "Houses", "Petrol stations", "Warehouses"] as const;

export const futurePlan = [
  "Sale of Land",
  "Construction of apartments",
  "Construction of Petrol stations",
  "Construction of Warehouses",
] as const;

export const targetMarket = ["Middle to upper class individuals", "International investors"] as const;

export const vision =
  "To become the leading institution in providing long lasting structures and facilities, petroleum equipment that help mankind in making life easier with modern technology leading to an empowered society";

export const mission =
  "To provide first class service and products that will grow and elevate the livelihood of mankind, and to building structures that shine using modern construction machineries";

export const csrStatement =
  "Protect, restore and promote sustainable use of terrestrial ecosystems, sustainably manage forests, combat desertification, and halt and reverse land degradation and halt biodiversity loss";

