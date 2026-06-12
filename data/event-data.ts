export type NavItem = {
  id: "inicio" | "acerca" | "temas" | "speakers" | "programa" | "sede" | "registro" | "faq";
  label: string;
  href: string;
};

export type HeroStat = {
  label: string;
  value: string;
  description: string;
};

export type MetricCard = {
  value: string;
  label: string;
  description: string;
};

export type Topic = {
  title: string;
  description: string;
  icon: string;
};

export type Speaker = {
  id: string;
  name: string;
  degree: string;
  institution: string;
  location: string;
  specialization: string;
  photo: string;
  photoPlaceholder: string;
  hasProfile?: boolean;
};

export type ProgramItem = {
  time: string;
  type:
    | "Registro"
    | "Inauguración"
    | "Conferencia"
    | "Panel"
    | "Break"
    | "Comida"
    | "Clausura";
  title: string;
  speaker: string;
  room: string;
  description: string;
};

export type ProgramDay = {
  day: string;
  date: string;
  items: ProgramItem[];
};

export type AccessLevel = {
  name: string;
  description: string;
  price: string;
};

export type FAQItem = {
  question: string;
  answer: string;
};

export const eventData = {
  metadata: {
    title: "Simposium Microbiota y Bióticos | 2da Jornada Académica",
    description:
      'Landing page oficial del Simposium "Microbiota y sus aplicaciones en la era de los bióticos", 2da Jornada Académica.',
    keywords: [
      "microbiota",
      "probióticos",
      "prebióticos",
      "postbióticos",
      "bióticos",
      "salud",
      "Yakult",
      "simposium",
      "jornada académica",
    ],
  },
  brand: {
    eventName:
      "Simposium: Microbiota y sus implicaciones en la era de los bióticos",
    subtitle: "2da Jornada Académica",
    organizer: "Yakult / Yakult de Puebla",
    logoTitle: "2da Jornada Académica",
  },
  navItems: [
    { id: "inicio", label: "Inicio", href: "#inicio" },
    { id: "acerca", label: "Acerca", href: "#acerca" },
    { id: "temas", label: "Temas", href: "#temas" },
    { id: "speakers", label: "Speakers", href: "#speakers" },
    { id: "programa", label: "Programa", href: "#programa" },
    { id: "sede", label: "Sede", href: "#sede" },
    { id: "registro", label: "Registro", href: "#registro" },
    { id: "faq", label: "FAQ", href: "#faq" },
  ] as NavItem[],
  event: {
    date: "09 de septiembre de 2026",
    time: "9:00 AM - 6:00 PM",
    location: "Puebla, México",
    city: "Puebla, México",
    modality: "Presencial y en línea",
    registrationLink: "#registro",
    paymentLink: "https://www.yakultpuebla.com.mx/",
    contactEmail: "contacto@yakultpuebla.org",
    countdownTargetDate: "2026-09-09T08:30:00-06:00",
  },
  hero: {
    eyebrow: "Yakult presenta",
    title:
      "Microbiota y sus implicaciones en la era de los bióticos",
    intro:
      "Una experiencia académica dirigida a profesionales de la salud, residentes y estudiantes interesados en conocer los avances más relevantes sobre microbiota intestinal, nutrición y su impacto en la salud.",
    ctaPrimary: "Registrarme",
    ctaSecondary: "Ver programa",
  },
  heroStats: [
    { label: "Fecha", value: "09 de septiembre de 2026", description: "" },
    { label: "Ubicación", value: "Puebla, México", description: "" },
    { label: "Modalidad", value: "Presencial y en línea", description: "" },
  ] as HeroStat[],
  highlights: [
    { value: "1", label: "Día de evento", description: "" },
    { value: "5", label: "Ponentes invitados", description: "" },
    { value: "500+", label: "Comunidad académica", description: "" },
    { value: "2", label: "Modalidades", description: "" },
  ] as MetricCard[],
  about: {
    title: "Sobre el evento",
    description:
      "Un espacio para compartir conocimiento, ciencia y actualización profesional.\n\n" +
      "La Jornada Académica 2026 reúne a especialistas nacionales e invitados expertos para abordar los avances actuales en microbiota, nutrición y salud integral.\n\n" +
      "A través de conferencias y sesiones académicas, los asistentes podrán actualizar sus conocimientos, conocer nuevas perspectivas científicas y fortalecer su práctica profesional.",
    modalityCards: [
      {
        title: "Presencial",
        description:
          "Vive la experiencia completa de la Jornada Académica junto a especialistas y profesionales de la salud.",
      },
      {
        title: "En línea",
        description:
          "Participa desde cualquier lugar y disfruta del contenido académico del evento.",
      },
    ],
  },
  topics: [
    {
      title: "Microbiota intestinal y salud humana",
      description:
        "",
      icon: "🧬",
    },
    {
      title: "Probióticos y evidencia científica",
      description: "",
      icon: "🧪",
    },
    {
      title: "Prebióticos, postbióticos y nuevas tendencias",
      description:
        "",
      icon: "🌿",
    },
    {
      title: "Sistema inmune y eje intestino-cerebro",
      description:
        "",
      icon: "🧠",
    },
    {
      title: "Nutrición, metabolismo y alimentos funcionales",
      description: "",
      icon: "🥗",
    },
    {
      title: "Innovación biotecnológica",
      description:
        "",
      icon: "🔬",
    },
    {
      title: "Aplicaciones clínicas",
      description:
        "",
      icon: "🩺",
    },
    {
      title: "Salud pública y educación científica",
      description:
        "",
      icon: "📚",
    },
  ] as Topic[],
  speakers: [
    {
      id: "speaker-1",
      name: "Dra. Nombre del ponente",
      degree: "Médico-investigadora",
      institution: "",
      location: "",
      specialization: "Microbiota intestinal e inmunidad",
      photo: "/images/ponentes/speaker1.jpg",
      photoPlaceholder: "D",
    },
    {
      id: "speaker-2",
      name: "Dr. Nombre del ponente",
      degree: "Nutriólogo clínico",
      institution: "",
      location: "",
      specialization: "Nutrición funcional y prebióticos",
      photo: "/images/ponentes/speaker2.jpg",
      photoPlaceholder: "N",
    },
    {
      id: "speaker-3",
      name: "Dr. Nombre del ponente",
      degree: "Biólogo molecular",
      institution: "",
      location: "",
      specialization: "Biotecnología y postbióticos",
      photo: "/images/ponentes/speaker3.jpg",
      photoPlaceholder: "B",
    },
    {
      id: "speaker-4",
      name: "Dra. Nombre del ponente",
      degree: "Investigadora en salud pública",
      institution: "",
      location: "",
      specialization: "Investigación epidemiológica",
      photo: "/images/ponentes/speaker4.jpg",
      photoPlaceholder: "I",
    },
    {
      id: "speaker-5",
      name: "Dr. Nombre del ponente",
      degree: "Especialista clínico",
      institution: "",
      location: "",
      specialization: "Nutrigenómica aplicada",
      photo: "/images/ponentes/speaker5.jpg",
      photoPlaceholder: "E",
    },

  ] as Speaker[],
  program: {
    days: [
      {
        day: "Día del evento",
        date: "09 de septiembre de 2026",
        items: [
          {
            time: "08:00 – 09:00",
            type: "Registro",
            title: "Registro de asistentes",
            speaker: "Equipo organizador",
            room: "Lobby principal",
            description: "Recepción y entrega de material de conferencia.",
          },
          {
            time: "09:00 – 09:30",
            type: "Inauguración",
            title: "Inauguración institucional",
            speaker: "Comité científico",
            room: "Auditorio",
            description: "Bienvenida oficial y presentación de objetivos del simposium.",
          },
          {
            time: "09:30 – 10:30",
            type: "Conferencia",
            title: "Conferencia magistral",
            speaker: "Ponente invitado",
            room: "Auditorio",
            description: "Panorama de la microbiota y sus aplicaciones clínicas.",
          },
          {
            time: "10:30 – 11:00",
            type: "Break",
            title: "Coffee break",
            speaker: "Logística",
            room: "Patio exterior",
            description: "Espacio de networking institucional.",
          },
          {
            time: "11:00 – 13:00",
            type: "Panel",
            title: "Bloque académico",
            speaker: "Ponentes invitados",
            room: "Sala B",
            description: "Talleres temáticos y discusión de casos.",
          },
          {
            time: "13:00 – 14:30",
            type: "Comida",
            title: "Comida de convivencia",
            speaker: "Comité organizador",
            room: "Áreas de comedor",
            description: "Intercambio entre asistentes y networking académico.",
          },
          {
            time: "14:30 – 17:30",
            type: "Panel",
            title: "Mesas temáticas",
            speaker: "Moderadores por mesa",
            room: "Salas simultáneas",
            description: "Debate en paneles científicos por línea de aplicación.",
          },
          {
            time: "17:30 – 18:00",
            type: "Clausura",
            title: "Cierre del día",
            speaker: "Moderación general",
            room: "Auditorio",
            description: "Resumen operativo y cierre formal de la jornada.",
          },
        ],
      },
    ] as ProgramDay[],
  },
  venue: {
    name: "Sede de la Jornada Académica 2026",
    address: "C. 33 Sur 2505, Sta Cruz los Ángeles, 72400 Heroica Puebla de Zaragoza, Pue.",
    city: "Puebla, México",
    modality: "Presencial y en línea",
    mapPlaceholderTitle: "Espacio del evento",
  },
  registration: {
    steps: [
      "Da clic en “Registrarme”.",
      "Completa tus datos.",
      "Selecciona tu modalidad de participación.",
      "Recibe confirmación por correo.",
      "Asiste al evento o accede virtualmente.",
    ],
    primaryCta: "Registrarme ahora",
    secondaryCta: "Solicitar información",
  },
  accessOptions: [
    { name: "Estudiantes", description: "Acceso académico con requisitos de identificación estudiantil.", price: "$50" },
    { name: "Profesionales", description: "Acceso integral a conferencias y materiales.", price: "$75" },
    { name: "Modalidad virtual", description: "Participación remota con acceso a sesiones online.", price: "$100" },
    { name: "Instituciones / grupos", description: "Registro de varios integrantes con coordinación previa.", price: "$150" },
  ] as AccessLevel[],
  faq: [
    {
      question: "¿A quién va dirigido el Simposium?",
      answer:
        "Está dirigido a profesionales de la salud, investigadores, académicos, estudiantes y público interesado en microbiota y salud.",
    },
    {
      question: "¿El evento será presencial, virtual o híbrido?",
      answer:
        "La modalidad será editable en esta landing y se actualizará con la confirmación oficial.",
    },
    {
      question: "¿Dónde se realizará?",
      answer:
        "La sede académica y ciudad de realización se encuentran en la sección Sede y se actualizarán cuando se confirme la ubicación.",
    },
    {
      question: "¿Cómo puedo inscribirme?",
      answer:
        "Haz clic en “Registrarme” y sigue el proceso de pasos en la sección Registro.",
    },
    {
      question: "¿Se entregará constancia?",
      answer:
        "La política de constancias se compartirá en esta sección cuando sea confirmada por la organización.",
    },
    {
      question: "¿Puedo asistir como estudiante?",
      answer:
        "Sí, se contempla acceso para estudiantes y se habilitará su opción en la etapa de registro.",
    },
    {
      question: "¿Dónde puedo pedir informes?",
      answer:
        "Puedes escribir a: contacto@yakultpuebla.org (editable).",
    },
  ] as FAQItem[],
  footer: {
    quickLinks: ["Inicio", "Acerca", "Temas", "Speakers", "Programa", "Registro", "FAQ"],
    social: [
      { name: "Instagram", url: "#" },
      { name: "LinkedIn", url: "#" },
      { name: "YouTube", url: "#" },
    ],
  },
} as const;
