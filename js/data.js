// Sample data with reproductive history
const cows = [
        {
    id: 1,
    name: "Kirezi",
    breed: "Bought=22-05-2026",
    dateOfBirth: "2023-03-15",
    owner: "Pilote",
    milkCapacity: "15 L/day",
    color: "Black & White", //  to be determined
    tagNumber: "📌 Buhumuza, Bought 22-05-2026 ~ 3.5M",
    profilePicture: "./images/yanje2.jpg",
    gallery: [],
    reproductiveHistory: [
      {
        type: "pregnancy",
        pregnancyDate: "2026-06-3", // yasubiweko
        estimatedDelivery: "2027-03-03",
        status: "active",
        note:"Ngo yoba yarimye amezi 2 imbere yuko tuyigura| Yasubiweko le 3 June 2026"
      }
    ],
    vaccinations: []
  },
    {
    id: 2,
    name: "Bigoro",
    breed: "Bought=24-02-2026",
    dateOfBirth: "2024-03-15",
    owner: "Pilote",
    milkCapacity: "5 L/day",
    color: "White & Brown", //  to be determined
    tagNumber: "📌 Senyeri, Bought 24-02-2026 ~ 3.5M",
    profilePicture: "./images/yanje.jpg",
    gallery: [],
    reproductiveHistory: [
      {
        type: "pregnancy",
        pregnancyDate: "2026-05-26",
        estimatedDelivery: "2027-02-26",
        status: "active",
        note:"Ngo yoba yarimye imbere yuko tuyigura le 24-01-2026, yasubiweko le 26-05-2026"
      }
    ],
    vaccinations: [
      {date: "2026-03-18", vaccine:"Devenex",  administered: "Dr. Deo (No: 65676155)"},
      { date: "2026-03-09", vaccine: "Intermectin Ivermectin 1% injection", administered: "Dr. Deo (No: 65676155)" }
    ]
  },
  {
    id: 3,
    name: "Bikari",
    breed: "17 avril 2026",
    dateOfBirth: "2020-03-15",
    owner: "Papa",
    milkCapacity: "5 L/day",
    color: "Black & brown",
    tagNumber: "📌 Buhumuza, HF-001",
    profilePicture: "./images/bikari.jpg",
    gallery: [],
    reproductiveHistory: [
      {
        type: "lactation",
        startDate: "-",
        endDate: "2025-06-28",
        status: "completed"
      },
      {
        type: "pregnancy",
        pregnancyDate: "2025-07-17",
        estimatedDelivery: "2026-06-19",
        status: "completed"
      },
      {
        type: "lactation",
        startDate: "2026-06-19",
        endDate: "",
        status: "active"
      }
    ],
    vaccinations: [ 
      { date: "2026-03-14", vaccine: "Devenex", administered: "-" }, 
      { date: "2026-02-06", vaccine: "Bernir", administered: "Dr. Armel" },
      { date: "2025-11-07", vaccine: "Intermectin Super", administered: "Dr. Deo (No: 65676155)" },
      { date: "2025-07-12", vaccine: "Devenex", administered: "Dr. Deo (No: 65676155)" },
      { date: "2025-04-17", vaccine: "Devenex", administered: "Dr. Deo (No: 65676155)" },
      { date: "2025-01-04", vaccine: "Devenex", administered: "Dr. Deo (No: 65676155)" }      
    ]
  },
  {
    id: 4,
    name: "Mwamakare",
    breed: "lact. 27 avril 2026",
    dateOfBirth: "2021-11-22",
    owner: "Papa",
    milkCapacity: "5 L/day",
    color: "Dark Brown",
    tagNumber: "📌 Senyeri, JR-012",
    profilePicture: "./images/mwamakare.jpg",
    gallery: [],
    reproductiveHistory: [
      {
        type: "lactation",
        startDate: "-",
        endDate: "2025-06-28 ",
        status: "completed"
      },

      {
        type: "pregnancy",
        pregnancyDate: "2025-07-11",
        estimatedDelivery: "2026-04-11",
        status: "completed"
      },
      {
        type: "lactation",
        startDate: "2026-04-27",
        endDate: null,
        status: "active",
        note: "yavyaye irengeranye idwizibiri namisi 2, yavyaye le 27/04/2026"
      }

    ],
    vaccinations: [
      {date: "2026-03-18", vaccine:"Devenex",  administered: "Dr. Deo (No: 65676155)"},
      { date: "2026-03-09", vaccine: "Intermectin Ivermectin 1% injection", administered: "Dr. Deo (No: 65676155)" },
      { date: "2026-02-06", vaccine: "Bernir", administered: "Dr. Deo" },
      { date: "2025-11-07", vaccine: "Intermectin Super", administered: "Dr. Deo (No: 65676155)" },
      { date: "2025-03-15", vaccine: "Devenex", administered: "Dr. Deo (No: 65676155)" }
    ]
  },
  {
    id: 5,
    name: "Yamaza Mubumbe",
    breed: "2026-09-10",
    dateOfBirth: "2021-05-08",
    owner: "Papa",
    milkCapacity: "5 L/day",
    color: "Dark Brown",
    tagNumber: "📌 Buhumuza, GU-003",
    profilePicture: "./images/yamaza_mubumbe.jpg",
    gallery: [],
    reproductiveHistory: [



      {
        type: "lactation",
        startDate: "2025-08-20", 
        endDate: "2025-11-10",
        status: "completed",
        note: "Yavyaye yamubumbe mukw'umunani 2025"
      },
      {
        type: "pregnancy",
        pregnancyDate: "2026-1-10",
        estimatedDelivery: "2026-09-10",
        status: "active",
        note:"yimye haheze amwzi ~3 yacukije"
      }
    ],
    vaccinations: [
      { date: "2026-03-14", vaccine: "Devenex", administered: "-" }, 
      { date: "2026-02-05", vaccine: "Multivitamine + Bernir", administered: "Dr. Armel (No: 69121101)" },
      { date: "2025-11-07", vaccine: "Intermectin Super", administered: "Dr. Deo (No: 65676155)" },
      { date: "2025-06-28", vaccine: "Devenex", administered: "Dr. Deo (No: 65676155)" },
      { date: "2025-02-22", vaccine: "Devenex", administered: "Dr. Deo (No: 65676155)" }

    ]
  },
  {
    id: 6,
    name: "Ishuri",
    breed: "Frisonne",
    dateOfBirth: "2023-07-14",
    owner: "Khalid",
    milkCapacity: "-",
    color: "Brown & White",
    tagNumber: "📌 Buhumuza, BS-008",
    profilePicture: "./images/ishuri2.jpg",
    gallery: [
{
    id: 1,
    url: "./images/ishuri.jpg",
    comment: "Taken August 2025, Isenyeri"
  },
    {
    id: 2,
    url: "./images/ishuri2.jpg",
    comment: "Taken May 2026, Buhumuza"
  }],
    reproductiveHistory: [],
    vaccinations: [
      { date: "2026-03-14", vaccine: "ntiyatewe, vyaranse ko bayifata", administered: "-" }, 
      { date: "2026-02-06", vaccine: "Bernir", administered: "Dr. Armel" },
      { date: "2025-03-15", vaccine: "Devenex", administered: "Dr. Deo (No: 65676155)" },
      { date: "2025-07-12", vaccine: "Devenex", administered: "Dr. Deo (No: 65676155)" },
      { date: "2025-11-07", vaccine: "Intermectin Super", administered: "Dr. Deo (No: 65676155)" }
    ]
  },
  {
    id: 7,
    name: "Yamaza Maman",
    breed: "15 juillet 2026",
    dateOfBirth: "2023-05-30",
    owner: "Khalid",
    milkCapacity: "-",
    color: "Light Brown & White",
    tagNumber: "📌 Buhumuza, HF-015",
    profilePicture: "./images/yamaza_maman.jpg",
    gallery: [],
    reproductiveHistory: [
      {
        type: "pregnancy",
        pregnancyDate: "2025-10-15",
        estimatedDelivery: "2026-07-15",
        status: "active"
      }
    ],
    vaccinations: [
      { date: "2026-03-14", vaccine: "Devenex", administered: "-" }, 
      { date: "2025-01-04", vaccine: "Devenex", administered: "Dr. Deo (No: 65676155)" },
      { date: "2025-04-17", vaccine: "Devenex", administered: "Dr. Deo (No: 65676155)" },
      { date: "2025-07-12", vaccine: "Devenex", administered: "Dr. Deo (No: 65676155)" },
      { date: "2025-11-07", vaccine: "Intermectin Super", administered: "Dr. Deo (No: 65676155)" },
      { date: "2026-02-06", vaccine: "Bernir", administered: "Dr. Armel" }

    ]
  },
  {
    id: 8,
    name: "Mukunzi",
    breed: "lact. 17-02-1016",
    dateOfBirth: "2022-05-30",
    owner: "Maman",
    milkCapacity: "5 L/day",
    color: "Brown",
    tagNumber: "📌 Buhumuza, HF-016",
    profilePicture: "./images/mukunzi.jpg",
    gallery: [],
    reproductiveHistory: [
      {
        type: "pregnancy",
        pregnancyDate: "2025-05-14",
        estimatedDelivery: "2026-02-14", // Derivered on 17/02/2026 3 weeks and 3days prior to expected date (possibly the day it got pregnant was wrong)
        status: "complete",
        note: "Delivered on 17/02/2026 — 4 days later than expected."
      },
      {
        type: "lactation",
        startDate: "2026-02-17", 
        endDate: null,
        status: "active",
        note: "Vêlée le 17/02/2026 — 4 jours apres que prévu."
      }
    ],
    vaccinations: [
      { date: "2026-03-14", vaccine: "Devenex", administered: "-" }, 
      { date: "2025-05-10", vaccine: "Devenex", administered: "Dr. Deo (No: 65676155)" },
      { date: "2025-11-07", vaccine: "Intermectin Super", administered: "Dr. Deo (No: 65676155)" },
      { date: "2026-02-06", vaccine: "Bernir", administered: "Dr. Armel" }

    ]
  },
  {
    id: 9,
    name: "Rwabikari",
    breed: "Salers",
    dateOfBirth: "2024-12-30",
    owner: "Papa",
    milkCapacity: "-",
    color: "Black",
    tagNumber: "📌 Buhumuza, Bikari inyana #1",
    profilePicture: "./images/rwabikari2.jpeg",
    gallery: [],
    reproductiveHistory: [],
    vaccinations: [
      { date: "2026-03-14", vaccine: "Devenex", administered: "-" }, 
      { date: "2025-02-22", vaccine: "Devenex", administered: "Dr. Deo (No: 65676155)" },
      { date: "2025-07-12", vaccine: "Devenex", administered: "Dr. Deo (No: 65676155)" },
      { date: "2025-11-07", vaccine: "Intermectin Super", administered: "Dr. Deo (No: 65676155)" },
      { date: "2026-02-06", vaccine: "Bernir", administered: "Dr. Armel" }
    ]
  },
  {
    id: 10,
    name: "Yamwamakare",
    breed: "Salers",
    dateOfBirth: "2024-12-30",
    owner: "Papa",
    milkCapacity: "-",
    color: "Dark Brown & White",
    tagNumber: "📌 Buhumuza, Mwamakare inyana #1",
    profilePicture: "./images/yamwamakare.jpg",
    gallery: [],
    reproductiveHistory: [],
    vaccinations: [
      { date: "2026-03-14", vaccine: "Devenex", administered: "-" }, 
      { date: "2025-02-22", vaccine: "Devenex", administered: "Dr. Deo (No: 65676155)" },
      { date: "2025-07-12", vaccine: "Devenex", administered: "Dr. Deo (No: 65676155)" },
      { date: "2025-11-07", vaccine: "Intermectin Super", administered: "Dr. Deo (No: 65676155)" },
      { date: "2026-02-06", vaccine: "Bernir", administered: "Dr. Armel" }
    ]
  },
  {
    id: 11,
    name: "Yamubumbe",
    breed: "BD: Août 2025",
    dateOfBirth: "2025-08-20",
    owner: "Papa",
    color: "Black, Brown & White",
    tagNumber: "📌 Buhumuza, Mubumbe inyana #1",
    profilePicture: "./images/yamubumbe.jpeg",
    gallery: ["./images/yamubumbe.jpeg"],
    reproductiveHistory: [],
    vaccinations: [
      { date: "2026-03-15", vaccine: "Devenex", administered: "-" }
    ]
  },
  {
    id: 12,
    name: "Yamukunzi",
    breed: "BD: 17 février 2026",
    dateOfBirth: "2026-02-17",
    owner: "Maman",
    milkCapacity: "-",
    color: "Brown", //  to be determined
    tagNumber: "📌 Buhumuza, Mukunzi inyana #1",
    profilePicture: "./images/yamukunzi1.jpg",
    gallery: [],
    reproductiveHistory: [],
    vaccinations: []
  },
  {
    id: 13,
    name: "Munyarwanda",
    breed: "Bought: 7/03/2026",
    dateOfBirth: "-",
    owner: "Khalid",
    milkCapacity: "-",
    color: "-", //  to be determined
    tagNumber: "📌 Senyeri, Bought: 7/03/2026 ~2.6M",
    profilePicture: "./images/khalid.jpeg",
    gallery: [],
    reproductiveHistory: [],
    vaccinations: [
    {date: "2026-03-18", vaccine:"Devenex",  administered: "Dr. Deo (No: 65676155)"},
    { date: "2026-03-09", vaccine: "Intermectin Ivermectin 1% injection", administered: "Dr. Deo (No: 65676155)" }
    ]
  },
  {
    id: 14,
    name: "Majambere",
    breed: "Lact. 30-04-2026",
    dateOfBirth: "-",
    owner: "Gloria",
    milkCapacity: "5 L/day",
    color: "White and Black", //  to be determined
    tagNumber: "📌 Buhumuza, Buhumuza   ~6.5M",
    profilePicture: "./images/majambere.jpg",
    gallery: [],
    reproductiveHistory: [

      {
        type: "pregnancy",
        pregnancyDate: "2025-09-20",
        estimatedDelivery: "2026-06-20", 
        status: "complete",
        note: "Expected to give birth in around May",
      },
      {
        type: "lactation",
        startDate: "2026-04-30",
        endDate: null,
        status: "active",
        note: "yavyaye le 30/04/2026 ivyara ishuri"
      }
    ],
    vaccinations: [
    { date: "2026-03-14", vaccine: "Devenex", administered: "-" }

    ]
  },
  {
    id: 15,
    name: "Keza",
    breed: "BD: 27 avril 2026",
    dateOfBirth: "2026-04-27",
    owner: "Papa",
    milkCapacity: "-",
    color: "-", //  to be determined
    tagNumber: "📌 Senyeri, mwamakare inyana #2",
    profilePicture: "./images/yamwamakare1.jpg",
    gallery: [],
    reproductiveHistory: [],
    vaccinations: []
  },
  {
  id: 16,
  name: "Rwamajambere",
  breed: "BD: 30 avril 2026",
  dateOfBirth: "2026-04-30",
  owner: "Gloria",
  milkCapacity: "-",
  color: "White and Black",
  tagNumber: "📌 Buhumuza, Ishuri ya Majambere",
  profilePicture: "./images/yamajambere1.jpg",
  gallery: [
          {
    id: 1,
    url:  "./gallery/m1.jpg",
    comment: "Taken 1st of May 2026, Buhumuza"
  },
  {
     id: 2,
    url:  "./images/yamajambere1.jpg",
    comment: "Taken 19th of May 2026, Buhumuza"
  }
  ],
  reproductiveHistory: [],
  vaccinations: []
  },
  {
  id: 17,
  name:"Rwabishaza",
  breed: "BT: 27 May 2026",
  dateOfBirth: "-",
  owner: "Khalid",
  milkCapacity: "-",
  color: "White and Black", //  to be determined
  tagNumber: "📌 Senyeri, BT ~3M",
  profilePicture: "./images/ishurikhalid.jpg",
  gallery: [],
  reproductiveHistory: [],
  vaccinations: []
  },
{
  id: 18,
  name:"bikari inyana #2",
  breed: "BD: 19 June 2026",
  dateOfBirth: "2026-06-19",
  owner: "Papa",
  milkCapacity: "-",
  color: "White and Black", //  to be determined
  tagNumber: "📌 Buhumuza, bikari inyana #2",
  profilePicture: "",
  gallery: [],
  reproductiveHistory: [],
  vaccinations: []
  }
];

// Initial doctors data
const doctors = [
  {
    id: 1,
    name: "Dr. Deo",
    phone: "65676155",
    location: "Mugero",
    comment: "Vétérinaire principal de la ferme Mugero"
  },
  {
    id: 2,
    name: "Dr. Armel",
    phone: "69121101 ",
    location: "Cankuzo (bpae)",
    comment: "Vétérinaire principal de la ferme Buhumuza. Aratanga insemination yama race: Frisonne Pie-Noir, bbb (bleu blanc belge) na Jersey "
  }
];

// Farm gallery
const farmGallery = [
  {
    id: 1,
    url: "./gallery/buhumuza-05-2026_imisi_yambere.jpeg",
    comment: "Yafashwe na papa aturukije mundwi yambere ziri Buhumuza 05/02/2026"
  },
  {
    id: 2,
    url: "./gallery/yamubumbe-05-02-2026.jpeg",
    comment: "yamubumbe iBuhumuza le 05/02/2026 zigishika"
  },
  {
    id: 3,
    url: "./gallery/senyeri.jpg",
    comment: "Pilote, Papa baturukije, photo Mubumbe, Senyeri Juillet 2025"
  }, 
  {
    id: 4,
    url: "./gallery/Murugo_senyeri.jpg",
    comment: "Murugo I senyeri zuhirwa, muri Photo: Pilote, Papa, Maman, Mbonimpa, Nduwayo, Senyeri Juillet 2025"
  }, 
  {
    id: 5,
    url: "./gallery/kuragira.jpg",
    comment: "Pilote Kuragira, Senyeri Juillet 2025"
  }, 
  {
    id: 6,
    url: "./gallery/kuragira2.jpg",
    comment: "Pilote Kuragira, Senyeri Juillet 2025"
  }, 
  {
    id: 7,
    url: "./gallery/Bikari_yaturutse.jpg",
    comment: "Bikari, Senyeri Juillet 2025"
  },
  {
    id: 8,
    url: "./gallery/blessing_ninyana.jpg",
    comment: "Blessing arikumwe n'inyana, Senyeri Juillet 2025"
  }, 
  {
    id: 9,
    url: "./gallery/m3.jpg",
    comment: "Inka ya Gloria rwamajambere yavutse le 30/04/2026- photo taken 1/05/2026"
  },
  {
    id: 10,
    url: "./gallery/m1.jpg",
    comment: "Rwamajambere yavutse le 30/04/2026 - photo taken 1/05/2026"
  },
  {
    id: 11,
    url: "./images/yamukunzi.jpg",
    comment: "Rwamajambere na yamukunzi mukiraro - photo taken 19/05/2026"
  }
];
