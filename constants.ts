import { ModuleItem, Professor, StatItem, NavItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'El Programa', href: '#modules' },
  { label: 'Detalles', href: '#details' },
  { label: 'Profesorado', href: '#profesorado' },
  { label: 'Contacto', href: '#contact' },
];

export const STATS: StatItem[] = [
  { value: '10a', label: 'Generación 2026' },
  { value: '400+', label: 'Alumnos Egresados' },
  { value: '9.46', label: 'Valoración Media por Cuestionario Anónimo' },
];

export const MODULES: ModuleItem[] = [
  {
    id: 1,
    title: 'El Concepto y Significado del Lujo',
    topics: ['Atributos del lujo', 'Proceso SADE', 'Luxury Brand Value', 'Diferencias Premium vs Lujo']
  },
  {
    id: 2,
    title: 'El Consumidor del Lujo',
    topics: ['Perfil del consumidor', 'Segmentación', 'Comportamiento generacional']
  },
  {
    id: 3,
    title: 'Actualidad y Tendencias',
    topics: ['Perspectivas del sector', 'Nuevas expresiones', 'Marketing del Lujo']
  },
  {
    id: 4,
    title: 'Comunicación y RRPP',
    topics: ['Estrategias digitales', 'Influencer Marketing', 'Eventos y activaciones', 'Percepción de exclusividad']
  },
  {
    id: 5,
    title: 'La Fórmula del Lujo',
    topics: ['Plan de Marketing', 'Modelos de negocio', 'Estructura de plan de artículos']
  },
  {
    id: 6,
    title: 'Experiencias en el Lujo',
    topics: ['Luxury Customer Journey', 'Excelencia en servicio', 'Claves de la experiencia']
  },
  {
    id: 7,
    title: 'Servicios de Lujo',
    topics: ['Marketing de servicios', 'Venta de servicios', 'Estrategias diferenciales']
  },
  {
    id: 8,
    title: 'Venta Personal y Ceremonias',
    topics: ['Protocolos', 'Relaciones de confianza', 'Argumentación y cierre', 'Descubrir deseos']
  },
  {
    id: 9,
    title: 'Estrategia Comercial',
    topics: ['Canales de distribución', 'Retail vs Wholesale', 'Travel Retail', 'Licencias y Franquicias']
  },
  {
    id: 10,
    title: 'Lujo Omnicanal & E-Commerce',
    topics: ['Realidad digital', 'Plataformas especializadas', 'Omnicanalidad']
  },
  {
    id: 11,
    title: 'Lujo Responsable',
    topics: ['Sustentabilidad', 'RSC', 'Eco-Lujo', 'Cambio de mentalidad']
  },
  {
    id: 12,
    title: 'CRM y Fidelización',
    topics: ['Gestión de relaciones', 'Programas de lealtad', 'Plan de contacto', 'Análisis esenciales']
  },
];

export const FACULTY: Professor[] = [
  {
    name: 'Frank Sánchez',
    role: 'Director del Programa & CEO',
    company: 'Instituto Europeo del Lujo (IELujo)',
    image: 'https://www.ielujo.com/wp-content/uploads/2019/07/1685117491039.jpg',
    linkedin: 'https://www.linkedin.com/in/franks%C3%A1nchezielujoluxurymexico/'
  },
  {
    name: 'Amparo de la Concepción',
    role: 'Directora Académica',
    company: 'IELujo, Ex-Tiffany, Loewe, Dior',
    image: 'https://www.ielujo.com/wp-content/uploads/2023/08/WhatsApp-Image-2023-08-07-at-11.10.57-e1691428317980.jpeg',
    linkedin: 'https://www.linkedin.com/in/amparodelaconcepcion/'
  },
  {
    name: 'Julio César González',
    role: 'Account Director, Global Luxury & Lifestyle, Central America & México',
    company: 'IHG Hotels & Resorts',
    image: 'https://www.ielujo.com/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-18-at-18.47.00.jpeg',
    linkedin: 'https://www.linkedin.com/in/julio-c%C3%A9sar-gonz%C3%A1lez-68053973/'
  },
  {
    name: 'Edgar Embriz',
    role: 'CEO Country General Manager',
    company: 'Swatch Group',
    image: 'https://www.ielujo.com/wp-content/uploads/2026/01/EDGAR-EMBRIZ-RUIZ-MIDO-SWATCH.jpg',
    linkedin: 'https://www.linkedin.com/in/edgar-e-embriz-ruiz-9a4711120/'
  },
  {
    name: 'Jesús Arellano Roque',
    role: 'Head of Public Relations',
    company: 'StayOnSocial',
    image: 'https://www.ielujo.com/wp-content/uploads/2024/12/Jesus-Arellano.jpeg',
    linkedin: 'https://www.linkedin.com/in/jesusarellanoroque/'
  },
  {
    name: 'Miguel Angel Gardetti',
    role: 'Director',
    company: 'Centro de Estudios para el Lujo Sustentable',
    image: 'https://www.ielujo.com/wp-content/uploads/2024/12/WhatsApp-Image-2024-12-11-at-16.39.13.jpeg',
    linkedin: 'https://www.linkedin.com/in/miguel-angel-gardetti-ph-d-992a3316/'
  },
  {
    name: 'Adrián Aguirre Robles',
    role: 'Customer Experience and Operations Director',
    company: 'ALE MARINE',
    image: 'https://www.ielujo.com/wp-content/uploads/2026/01/Adrian-Aguirre.png',
    linkedin: 'https://www.linkedin.com/in/adri%C3%A1n-aguirre-robles-bb25a51a/'
  }
];