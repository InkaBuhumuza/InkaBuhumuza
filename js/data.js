// Sample data with reproductive history
const cows = [
  {
    id: 1,
    name: "Bikari",
    breed: "Salers",
    dateOfBirth: "2020-03-15",
    owner: "Papa",
    milkCapacity: "10 L/day",
    color: "Black & brown",
    tagNumber: "HF-001",
    profilePicture: "./images/bikari.jpg",
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
        pregnancyDate: "2025-07-17",
        estimatedDelivery: "2026-04-17",
        status: "active"
      }
    ],
    vaccinations: [      
      { date: "2025-11-07", vaccine: "Intermectin Super", administered: "Dr. Deo (No: 65676155)" },
      { date: "2025-07-12", vaccine: "Devenex", administered: "Dr. Deo (No: 65676155)" },
      { date: "2025-04-17", vaccine: "Devenex", administered: "Dr. Deo (No: 65676155)" },
      { date: "2025-01-04", vaccine: "Devenex", administered: "Dr. Deo (No: 65676155)" }      
    ]
  },
  {
    id: 2,
    name: "Mwamakare",
    breed: "Salers",
    dateOfBirth: "2021-11-22",
    owner: "Papa",
    milkCapacity: "10 L/day",
    color: "Dark Brown",
    tagNumber: "JR-012",
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
        status: "active"
      }
    ],
    vaccinations: [
      { date: "2025-11-07", vaccine: "Intermectin Super", administered: "Dr. Deo (No: 65676155)" },
      { date: "2025-03-15", vaccine: "Devenex", administered: "Dr. Deo (No: 65676155)" }
    ]
  },
  {
    id: 3,
    name: "Yamaza Mubumbe",
    breed: "Salers",
    dateOfBirth: "2021-05-08",
    owner: "Papa",
    milkCapacity: "10 L/day",
    color: "Dark Brown",
    tagNumber: "GU-003",
    profilePicture: "./images/yamaza_mubumbe.jpg",
    gallery: [],
    reproductiveHistory: [

      {
        type: "lactation",
        startDate: "2025-10-01", 
        endDate: null,
        status: "active"
      }
    ],
    vaccinations: [
      { date: "2026-02-05", vaccine: "Multivitamine", administered: "Dr. Armel (No: 69121101)" },
      { date: "2025-11-07", vaccine: "Intermectin Super", administered: "Dr. Deo (No: 65676155)" },
      { date: "2025-06-28", vaccine: "Devenex", administered: "Dr. Deo (No: 65676155)" },
      { date: "2025-02-22", vaccine: "Devenex", administered: "Dr. Deo (No: 65676155)" }

    ]
  },
  {
    id: 4,
    name: "Ishuri",
    breed: "Frisonne",
    dateOfBirth: "2023-07-14",
    owner: "Khalid",
    milkCapacity: "-",
    color: "Brown & White",
    tagNumber: "BS-008",
    profilePicture: "./images/ishuri.jpg",
    gallery: [],
    reproductiveHistory: [],
    vaccinations: [
      { date: "2025-03-15", vaccine: "Devenex", administered: "Dr. Deo (No: 65676155)" },
      { date: "2025-07-12", vaccine: "Devenex", administered: "Dr. Deo (No: 65676155)" },
      { date: "2025-11-07", vaccine: "Intermectin Super", administered: "Dr. Deo (No: 65676155)" }
    ]
  },
  {
    id: 5,
    name: "Yamaza Maman",
    breed: "15 juillet 2026",
    dateOfBirth: "2023-05-30",
    owner: "Khalid",
    milkCapacity: "-",
    color: "Brown & White",
    tagNumber: "HF-015",
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
      { date: "2025-01-04", vaccine: "Devenex", administered: "Dr. Deo (No: 65676155)" },
      { date: "2025-04-17", vaccine: "Devenex", administered: "Dr. Deo (No: 65676155)" },
      { date: "2025-07-12", vaccine: "Devenex", administered: "Dr. Deo (No: 65676155)" },
      { date: "2025-11-07", vaccine: "Intermectin Super", administered: "Dr. Deo (No: 65676155)" }
    ]
  },
  {
    id: 6,
    name: "Mukunzi",
    breed: "Salers",
    dateOfBirth: "2022-05-30",
    owner: "Maman",
    milkCapacity: "10 L/day",
    color: "Brown & White",
    tagNumber: "HF-016",
    profilePicture: "./images/mukunzi.jpg",
    gallery: [],
    reproductiveHistory: [
      {
        type: "pregnancy",
        pregnancyDate: "2025-06-14",
        estimatedDelivery: "2026-03-14", // Derivered on 17/02/2026 3 weeks and 3days prior to expected date (possibly the day it got pregnant was wrong)
        status: "complete",
        note: "Delivered on 17/02/2026 — 3 weeks and 3 days earlier than expected. The pregnancy date may have been miscalculated."
      },
      {
        type: "lactation",
        startDate: "2026-02-17", 
        endDate: null,
        status: "active",
        note: "Livré le 17/02/2026 — 3 semaines et 3 jours plus tôt que prévu. La date de la grossesse a peut-être été mal calculée."
      }
    ],
    vaccinations: [
      { date: "2025-05-10", vaccine: "Devenex", administered: "Dr. Deo (No: 65676155)" },
      { date: "2025-11-07", vaccine: "Intermectin Super", administered: "Dr. Deo (No: 65676155)" }
    ]
  },
  {
    id: 7,
    name: "Rwabikari",
    breed: "Salers",
    dateOfBirth: "2023-12-30",
    owner: "Papa",
    milkCapacity: "-",
    color: "Brown & White",
    tagNumber: "Bikari inyana #1",
    profilePicture: "./images/rwabikari2.jpeg",
    gallery: [],
    reproductiveHistory: [],
    vaccinations: [
      { date: "2025-02-22", vaccine: "Devenex", administered: "Dr. Deo (No: 65676155)" },
      { date: "2025-07-12", vaccine: "Devenex", administered: "Dr. Deo (No: 65676155)" },
      { date: "2025-11-07", vaccine: "Intermectin Super", administered: "Dr. Deo (No: 65676155)" },
    ]
  },
  {
    id: 8,
    name: "Yamwamakare",
    breed: "Salers",
    dateOfBirth: "2023-12-30",
    owner: "Papa",
    milkCapacity: "-",
    color: "Brown & White",
    tagNumber: "Mwamakare inyana #1",
    profilePicture: "./images/yamwamakare.jpg",
    gallery: [],
    reproductiveHistory: [],
    vaccinations: [
      { date: "2025-02-22", vaccine: "Devenex", administered: "Dr. Deo (No: 65676155)" },
      { date: "2025-07-12", vaccine: "Devenex", administered: "Dr. Deo (No: 65676155)" },
      { date: "2025-11-07", vaccine: "Intermectin Super", administered: "Dr. Deo (No: 65676155)" },
    ]
  },
  {
    id: 9,
    name: "Yamubumbe",
    breed: "Salers",
    dateOfBirth: "2025-2-30",
    owner: "Papa",
    milkCapacity: "-",
    color: "Brown & White",
    tagNumber: "Mubumbe inyana #1",
    profilePicture: "./images/yamubumbe.jpeg",
    gallery: [],
    reproductiveHistory: [],
    vaccinations: []
  },
  {
    id: 10,
    name: "Yamukunzi or Rwamukunzi",
    breed: "Salers",
    dateOfBirth: "2026-02-17",
    owner: "Maman",
    milkCapacity: "-",
    color: "Brown & White",
    tagNumber: "Mukunzi inyana #1",
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
    location: "Bujumbura",
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
  }
];