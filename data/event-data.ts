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
      "Simposium: Microbiota y sus aplicaciones en la era de los bióticos",
    subtitle: "2da Jornada Académica",
    organizer: "Yakult / Yakult de Puebla",
    logoTitle: "Simposium Microbiota",
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
    modality: "Presencial / Híbrida / Virtual",
    registrationLink: "#registro",
    contactEmail: "contacto@yakultpuebla.org",
    countdownTargetDate: "2026-09-09T08:30:00-06:00",
  },
  hero: {
    eyebrow: "Yakult presenta",
    title:
      "Microbiota y sus aplicaciones en la era de los bióticos",
    intro:
      "Un encuentro académico para explorar el papel de la microbiota, los probióticos, prebióticos y postbióticos en la salud humana, la nutrición, la inmunidad y la innovación científica.",
    ctaPrimary: "Registrarme",
    ctaSecondary: "Ver programa",
  },
  heroStats: [
    { label: "Fecha", value: "09 de septiembre de 2026", description: "A confirmar con registro oficial." },
    { label: "Ubicación", value: "Puebla, México", description: "Sede por confirmar." },
    { label: "Modalidad", value: "Presencial / Híbrida / Virtual", description: "Flexible para mayor alcance." },
  ] as HeroStat[],
  highlights: [
    { value: "2", label: "Días de programa académico", description: "Sesiones de alto nivel y ponencias magistrales." },
    { value: "8+", label: "Ponentes invitados", description: "Expertos en microbiota, salud y nutrición." },
    { value: "120+", label: "Comunidad académica", description: "Profesionales y estudiantes con enfoque científico." },
    { value: "3", label: "Modalidades", description: "Presencial, híbrida o virtual." },
  ] as MetricCard[],
  about: {
    title: "Acerca del Simposium",
    description:
      "Plataforma académica diseñada para fortalecer el conocimiento científico sobre la microbiota humana y su aplicación en medicina, nutrición, alimentación funcional e innovación tecnológica.",
    bullets: [
      "Actualización científica",
      "Aplicaciones clínicas y nutricionales",
      "Enfoque multidisciplinario",
      "Ponentes especializados",
      "Networking académico",
      "Visión actual sobre probióticos, prebióticos y postbióticos",
    ],
  },
  audience:
    "Dirigido a profesionales de la salud, estudiantes, investigadores, académicos, áreas de nutrición, medicina, biotecnología, industria y público interesado.",
  topics: [
    {
      title: "Microbiota intestinal y salud humana",
      description:
        "Nuevas evidencias sobre microbiota, barrera intestinal y salud metabólica.",
      icon: "🧬",
    },
    {
      title: "Probióticos y evidencia científica",
      description: "Diseños de estudio, resultados clínicos y calidad metodológica.",
      icon: "🧪",
    },
    {
      title: "Prebióticos, postbióticos y nuevas tendencias",
      description:
        "Composición, función, mecanismos y futuro de la investigación.",
      icon: "🌿",
    },
    {
      title: "Sistema inmune y eje intestino-cerebro",
      description:
        "Conexiones fisiológicas emergentes con implicaciones clínicas.",
      icon: "🧠",
    },
    {
      title: "Nutrición, metabolismo y alimentos funcionales",
      description: "Interacciones con desempeño y prevención de enfermedades.",
      icon: "🥗",
    },
    {
      title: "Innovación biotecnológica",
      description:
        "Desarrollo de nuevas plataformas nutricionales y terapéuticas.",
      icon: "🔬",
    },
    {
      title: "Aplicaciones clínicas",
      description:
        "Escenarios de práctica clínica con evidencia aplicable y protocolos.",
      icon: "🩺",
    },
    {
      title: "Salud pública y educación científica",
      description:
        "Transferencia de conocimiento para sociedad, clínicas y academia.",
      icon: "📚",
    },
  ] as Topic[],
  speakers: [
    {
      id: "speaker-1",
      name: "Dra. Nombre del ponente",
      degree: "Médico-investigadora",
      institution: "Institución por confirmar",
      location: "Ciudad por confirmar",
      specialization: "Microbiota intestinal e inmunidad",
      photo: "/images/ponentes/speaker1.jpg",
      photoPlaceholder: "D",
    },
    {
      id: "speaker-2",
      name: "Dr. Nombre del ponente",
      degree: "Nutriólogo clínico",
      institution: "Institución por confirmar",
      location: "Ciudad por confirmar",
      specialization: "Nutrición funcional y prebióticos",
      photo: "/images/ponentes/speaker2.jpg",
      photoPlaceholder: "N",
    },
    {
      id: "speaker-3",
      name: "Dr. Nombre del ponente",
      degree: "Biólogo molecular",
      institution: "Institución por confirmar",
      location: "Ciudad por confirmar",
      specialization: "Biotecnología y postbióticos",
      photo: "/images/ponentes/speaker3.jpg",
      photoPlaceholder: "B",
    },
    {
      id: "speaker-4",
      name: "Dra. Nombre del ponente",
      degree: "Investigadora en salud pública",
      institution: "Institución por confirmar",
      location: "Ciudad por confirmar",
      specialization: "Investigación epidemiológica",
      photo: "/images/ponentes/speaker4.jpg",
      photoPlaceholder: "I",
    },
    {
      id: "speaker-5",
      name: "Dr. Nombre del ponente",
      degree: "Especialista clínico",
      institution: "Institución por confirmar",
      location: "Ciudad por confirmar",
      specialization: "Nutrigenómica aplicada",
      photo: "/images/ponentes/speaker5.jpg",
      photoPlaceholder: "E",
    },
    {
      id: "speaker-6",
      name: "Dra. Nombre del ponente",
      degree: "Científica en biología",
      institution: "Institución por confirmar",
      location: "Ciudad por confirmar",
      specialization: "Modelos microbiológicos",
      photo: "/images/ponentes/speaker6.jpg",
      photoPlaceholder: "C",
    },
  ] as Speaker[],
  program: {
    days: [
      {
        day: "Día 1",
        date: "Por confirmar",
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
            description: "Resumen operativo y anuncios del día 2.",
          },
        ],
      },
      {
        day: "Día 2",
        date: "Por confirmar",
        items: [
          {
            time: "09:00 – 10:00",
            type: "Conferencia",
            title: "Conferencia magistral",
            speaker: "Ponente invitado",
            room: "Auditorio",
            description: "Enfoque aplicado de microbiota en salud pública y clínica.",
          },
          {
            time: "10:00 – 12:00",
            type: "Panel",
            title: "Sesiones temáticas",
            speaker: "Ponentes invitados",
            room: "Salas temáticas",
            description: "Presentación de casos de investigación aplicada.",
          },
          {
            time: "12:00 – 12:30",
            type: "Break",
            title: "Coffee break",
            speaker: "Logística",
            room: "Patio exterior",
            description: "Interacción entre investigadores y profesionales.",
          },
          {
            time: "12:30 – 14:00",
            type: "Panel",
            title: "Panel académico",
            speaker: "Panelista invitado",
            room: "Auditorio",
            description: "Síntesis de evidencia y retos de implementación.",
          },
          {
            time: "14:00 – 15:30",
            type: "Comida",
            title: "Comida de cierre",
            speaker: "Comité organizador",
            room: "Áreas de comedor",
            description: "Evaluación final y networking de cooperación.",
          },
          {
            time: "15:30 – 17:30",
            type: "Clausura",
            title: "Conclusiones y aplicaciones",
            speaker: "Comité científico",
            room: "Auditorio",
            description: "Lecciones aprendidas y próximos pasos de colaboración.",
          },
          {
            time: "17:30 – 18:00",
            type: "Conferencia",
            title: "Clausura del simposium",
            speaker: "Moderación general",
            room: "Auditorio",
            description: "Cierre formal y agradecimiento institucional.",
          },
        ],
      },
    ] as ProgramDay[],
  },
  venue: {
    name: "Oficinas de Yakult de Puebla",
    address: "C. 33 Sur 2505, Sta Cruz los Ángeles, 72400 Heroica Puebla de Zaragoza, Pue.",
    city: "Puebla, México",
    modality: "Presencial / Híbrida / Virtual",
    checkIn: "Check-in: acreditación presencial de 8:30 a 9:00 hrs en recepción del recinto.",
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
