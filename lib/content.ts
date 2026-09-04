export type PracticeArea = {
  slug: string;
  name: string;
  shortName: string;
  eyebrow: string;
  summary: string;
  services: string[];
};

export type Editorial = {
  slug: string;
  title: string;
  category: string;
  date: string;
  displayDate: string;
  author: string;
  authorRole: string;
  summary: string;
  image: string;
  imageAlt: string;
  readingTime: string;
  body: string[];
  quote?: string;
};

export type LegalAnalysis = {
  slug: string;
  title: string;
  author: string;
  authorRole: string;
  date: string;
  displayDate: string;
  area: string;
  readingTime: string;
  cover: string;
  coverAlt: string;
  summary: string;
  content: string[];
  seoTitle: string;
  seoDescription: string;
  relatedSlugs: string[];
  cta: string;
};

export type Professional = {
  slug: string;
  name: string;
  role: string;
  photo?: string;
  biography: string[];
  areas: string[];
  education: string[];
  experience: string[];
  academicActivity: string[];
  publicationSlugs: string[];
  relatedActuationSlugs: string[];
};

export type PublicSource = {
  outlet: string;
  title: string;
  url: string;
  date?: string;
};

export type PublicActuation = {
  slug: string;
  title: string;
  area: string;
  date: string;
  summary: string;
  intervention: string;
  context: string;
  professionalSlugs: string[];
  sources: PublicSource[];
};

export const practiceAreas: PracticeArea[] = [
  {
    slug: 'derecho-penal-y-litigio-penal-estrategico',
    name: 'Derecho Penal y Litigio Penal Estratégico',
    shortName: 'Derecho Penal',
    eyebrow: 'Defensa, representación y estrategia probatoria',
    summary: 'Representamos personas investigadas o procesadas penalmente, así como víctimas que requieren una intervención jurídica especializada.',
    services: [
      'Defensa penal',
      'Representación judicial de víctimas',
      'Investigación e indagación',
      'Audiencias preliminares',
      'Juicio oral',
      'Estrategia probatoria',
      'Recursos ordinarios y extraordinarios',
      'Casación penal',
      'Extinción de dominio',
      'Derecho penal económico',
      'Asesoría preventiva y análisis de riesgos penales',
    ],
  },
  {
    slug: 'derecho-publico',
    name: 'Derecho Público',
    shortName: 'Derecho Público',
    eyebrow: 'Relaciones jurídicas con el Estado',
    summary: 'Asesoramos y representamos personas, organizaciones y empresas en sus relaciones jurídicas con el Estado y ante la jurisdicción de lo contencioso administrativo.',
    services: [
      'Derecho administrativo',
      'Actos administrativos',
      'Contratación estatal',
      'Responsabilidad extracontractual del Estado',
      'Medios de control ante la jurisdicción contencioso-administrativa',
      'Procedimientos administrativos',
      'Derecho constitucional',
      'Acciones de tutela',
      'Derechos de petición',
      'Asesoría a entidades, organizaciones y particulares frente a actuaciones administrativas',
    ],
  },
  {
    slug: 'derecho-laboral-y-seguridad-social',
    name: 'Derecho Laboral y Seguridad Social',
    shortName: 'Derecho Laboral',
    eyebrow: 'Trabajadores, empleadores y organizaciones',
    summary: 'Prestamos asesoría jurídica y representación judicial tanto a trabajadores como a empleadores y organizaciones.',
    services: [
      'Derecho laboral individual',
      'Derecho laboral colectivo',
      'Contratos de trabajo',
      'Terminación de relaciones laborales',
      'Procesos ordinarios laborales',
      'Seguridad social',
      'Pensiones',
      'Fuero sindical',
      'Procesos de levantamiento de fuero sindical',
      'Negociación colectiva',
      'Asesoría laboral empresarial',
      'Prevención y gestión de contingencias laborales',
    ],
  },
  {
    slug: 'justicia-transicional-y-jep',
    name: 'Justicia Transicional y JEP',
    shortName: 'Justicia Transicional',
    eyebrow: 'Jurisdicción Especial para la Paz',
    summary: 'Contamos con experiencia en litigio estratégico dentro de escenarios de justicia transicional y ante la Jurisdicción Especial para la Paz — JEP.',
    services: [
      'Representación ante Salas y Secciones de la JEP',
      'Participación de víctimas',
      'Acreditación',
      'Preparación y presentación de informes',
      'Presentación y controversia de pruebas',
      'Audiencias y diligencias judiciales',
      'Representación de comparecientes',
      'Seguimiento de macrocasos',
      'Derechos de las víctimas',
      'Justicia restaurativa',
      'Verdad, justicia, reparación y garantías de no repetición',
    ],
  },
  {
    slug: 'derecho-privado-y-corporativo',
    name: 'Derecho Privado y Corporativo',
    shortName: 'Derecho Corporativo',
    eyebrow: 'Personas, empresas y patrimonio',
    summary: 'Acompañamos jurídicamente a personas y empresas en la prevención y resolución de controversias privadas y empresariales.',
    services: [
      'Derecho civil',
      'Obligaciones y contratos',
      'Responsabilidad civil',
      'Litigios contractuales',
      'Derecho societario',
      'Asesoría empresarial',
      'Elaboración y revisión de contratos',
      'Conflictos societarios',
      'Insolvencia',
      'Sucesiones',
      'Asuntos de familia',
      'Prevención de riesgos jurídicos empresariales',
    ],
  },
  {
    slug: 'solucion-estrategica-de-controversias',
    name: 'Solución Estratégica de Controversias',
    shortName: 'Solución de Controversias',
    eyebrow: 'Alternativas al proceso judicial',
    summary: 'Analizamos las alternativas disponibles para identificar cuándo una controversia puede resolverse mediante negociación o mecanismos alternativos de solución de conflictos.',
    services: [
      'Negociación',
      'Conciliación',
      'Mediación',
      'Amigable composición',
      'Arbitraje',
      'Acuerdos transaccionales',
      'Prevención de controversias',
    ],
  },
];

export const legacyAreaRedirects: Record<string, string> = {
  'derecho-penal': 'derecho-penal-y-litigio-penal-estrategico',
  'derecho-laboral': 'derecho-laboral-y-seguridad-social',
  'derecho-disciplinario': 'derecho-publico',
  'derecho-electoral': 'derecho-publico',
  'litigio-jep': 'justicia-transicional-y-jep',
  'derecho-empresarial': 'derecho-privado-y-corporativo',
};

export const whyPaba = [
  { title: 'Experiencia', text: 'Trayectoria profesional en representación judicial, asesoría jurídica y litigio en diferentes jurisdicciones y escenarios institucionales.' },
  { title: 'Estrategia', text: 'Cada asunto es analizado individualmente para identificar riesgos, alternativas jurídicas, escenarios procesales y la estrategia más adecuada para la protección de los intereses del cliente.' },
  { title: 'Rigor jurídico', text: 'Nuestras actuaciones se fundamentan en el estudio detallado de los hechos, las pruebas, la legislación y la jurisprudencia aplicable.' },
  { title: 'Acompañamiento', text: 'Mantenemos una comunicación clara con nuestros clientes sobre el desarrollo del asunto, sus alternativas y las decisiones estratégicas que deben adoptarse.' },
];

export const workProcess = [
  { title: 'Análisis inicial', text: 'Estudiamos los antecedentes, hechos, documentos y situación jurídica planteada por el cliente.' },
  { title: 'Diagnóstico jurídico', text: 'Identificamos los problemas jurídicos, riesgos, fortalezas, debilidades y alternativas disponibles.' },
  { title: 'Construcción de estrategia', text: 'Definimos los objetivos jurídicos y diseñamos la estrategia procesal, probatoria o negocial correspondiente.' },
  { title: 'Representación y ejecución', text: 'Implementamos la estrategia mediante las actuaciones judiciales, administrativas, contractuales o extrajudiciales necesarias.' },
  { title: 'Seguimiento', text: 'Informamos al cliente sobre las principales actuaciones, decisiones y escenarios que se presentan durante el desarrollo del asunto.' },
];

export const siteFaqs = [
  { question: '¿Cómo puedo solicitar una consulta?', answer: 'Puede comunicarse con nuestra firma mediante el formulario de contacto, correo electrónico, teléfono o WhatsApp. Nuestro equipo realizará una valoración inicial para determinar la naturaleza del asunto y la posibilidad de asumir su representación.' },
  { question: '¿La firma atiende asuntos fuera de Bogotá?', answer: 'Sí. Nuestra sede se encuentra en Bogotá D. C., pero prestamos representación y asesoría jurídica en diferentes regiones de Colombia, de acuerdo con las características de cada asunto.' },
  { question: '¿La valoración inicial garantiza que la firma asumirá mi caso?', answer: 'No. La valoración inicial permite conocer las características generales del asunto. La aceptación de una representación profesional requiere previamente verificar su viabilidad, alcance, eventuales conflictos de interés y condiciones de contratación.' },
  { question: '¿Cómo se determinan los honorarios?', answer: 'Los honorarios profesionales dependen, entre otros factores, de la naturaleza del asunto, su complejidad, duración estimada, actuaciones requeridas y equipo profesional necesario. Las condiciones económicas se establecen previamente mediante una propuesta de servicios profesionales.' },
  { question: '¿Puedo realizar una consulta virtual?', answer: 'Sí. Podemos realizar reuniones virtuales cuando la naturaleza del asunto lo permita.' },
  { question: '¿La información suministrada es confidencial?', answer: 'Sí. La información recibida en desarrollo de la relación profesional es tratada conforme a los deberes legales y éticos aplicables, particularmente los relacionados con el secreto profesional y la protección de datos personales.' },
];

export const legalAnalysisCategories = [
  'Derecho Penal',
  'Derecho Probatorio',
  'Derecho Público',
  'Derecho Laboral',
  'Justicia Transicional y JEP',
  'Derechos Humanos',
  'Derecho Corporativo',
  'Jurisprudencia y actualidad jurídica',
] as const;

export const editorials: Editorial[] = [
  {
    slug: 'jep-y-participacion-de-las-victimas',
    title: 'La JEP y la participación de las víctimas del conflicto',
    category: 'Justicia Transicional y JEP',
    date: '2025-08-15',
    displayDate: '15 de agosto de 2025',
    author: 'Paba & Asociados Abogados Consultores S.A.S.',
    authorRole: 'Firma jurídica',
    summary: 'Una introducción a la Jurisdicción Especial para la Paz y a las posibilidades de participación de las víctimas.',
    image: '/editorial-jep.jpg',
    imageAlt: 'Personas reunidas en un espacio de diálogo y acompañamiento',
    readingTime: '4 min de lectura',
    body: [
      'La Jurisdicción Especial para la Paz (JEP) es uno de los pilares del Sistema Integral de Verdad, Justicia, Reparación y No Repetición creado tras los acuerdos de paz en Colombia. Su objetivo es juzgar los crímenes más graves del conflicto armado y ofrecer una justicia restaurativa que priorice los derechos de las víctimas.',
      'Las víctimas de delitos ocurridos en el marco del conflicto pueden participar para aportar información, relatar su situación y solicitar acompañamiento jurídico durante el proceso.',
      'Una preparación jurídica cuidadosa ayuda a organizar los hechos y la documentación, proteger la voz de quienes participan y presentar las solicitudes ante el escenario especializado correspondiente.',
    ],
    quote: 'La participación informada empieza por comprender el proceso y el lugar que cada persona ocupa en él.',
  },
  {
    slug: 'derechos-trabajador-despido-sin-justa-causa',
    title: 'Derechos del trabajador ante un despido sin justa causa en Colombia',
    category: 'Derecho Laboral',
    date: '2025-08-15',
    displayDate: '15 de agosto de 2025',
    author: 'Paba & Asociados Abogados Consultores S.A.S.',
    authorRole: 'Firma jurídica',
    summary: 'Puntos iniciales para comprender una terminación laboral y organizar la información antes de solicitar asesoría.',
    image: '/editorial-laboral.jpg',
    imageAlt: 'Conversación de asesoría alrededor de una mesa',
    readingTime: '4 min de lectura',
    body: [
      'La legislación colombiana contempla consecuencias cuando un empleador termina un contrato sin una causa legal aplicable. El análisis depende del tipo de contrato, el tiempo trabajado y las circunstancias de la terminación.',
      'Además de una eventual indemnización, una revisión puede incluir salarios, prestaciones pendientes y situaciones que involucren derechos fundamentales.',
      'Conservar el contrato, las comunicaciones, los comprobantes y una cronología precisa facilita una valoración inicial del asunto.',
    ],
  },
  {
    slug: 'actuacion-ante-denuncia-penal-injusta',
    title: 'Actuación frente a una denuncia penal que se considera injusta',
    category: 'Derecho Penal',
    date: '2025-08-15',
    displayDate: '15 de agosto de 2025',
    author: 'Paba & Asociados Abogados Consultores S.A.S.',
    authorRole: 'Firma jurídica',
    summary: 'Acciones prudentes para proteger derechos y preparar una defensa desde las primeras etapas.',
    image: '/editorial-penal.jpg',
    imageAlt: 'Profesional escuchando una consulta jurídica',
    readingTime: '4 min de lectura',
    body: [
      'Recibir una denuncia puede producir incertidumbre, incluso cuando se considera que carece de fundamento. Mantener la calma y entender la etapa en la que se encuentra la actuación es el primer paso.',
      'No conviene ignorar comunicaciones oficiales ni entregar versiones improvisadas. Una defensa puede revisar la denuncia, organizar información, solicitar elementos relevantes y preparar las actuaciones necesarias.',
      'La consulta temprana permite tomar decisiones con contexto y proteger las garantías procesales desde el inicio.',
    ],
  },
];

export const legacyEditorialRedirects: Record<string, string> = {
  'que-es-la-jep-y-como-puede-ayudarte': 'jep-y-participacion-de-las-victimas',
  'que-hacer-ante-denuncia-penal-injusta': 'actuacion-ante-denuncia-penal-injusta',
};

// El documento oficial no suministra artículos para publicar todavía.
export const legalAnalyses: LegalAnalysis[] = [];

export const professionals: Professional[] = [
  {
    slug: 'jeison-orlando-paba-reyes',
    name: 'Jeison Orlando Paba Reyes',
    role: 'Director / Socio',
    biography: [
      'Abogado litigante y defensor de derechos humanos con amplia experiencia profesional en representación judicial, litigio estratégico y asesoría jurídica.',
      'Su práctica profesional se ha desarrollado especialmente en las áreas de Derecho Penal, Derecho Público, Derechos Humanos, Justicia Transicional y litigio estratégico, con experiencia en actuaciones ante autoridades judiciales y administrativas y en la representación de víctimas y personas vinculadas a procesos judiciales de alta complejidad.',
    ],
    areas: ['Derecho Penal', 'Derecho Público', 'Derechos Humanos', 'Justicia Transicional', 'Litigio Estratégico'],
    education: [],
    experience: [],
    academicActivity: ['Paralelamente al ejercicio profesional, desarrolla actividad académica y docente universitaria en áreas relacionadas con el Derecho, la argumentación, la hermenéutica jurídica y el Derecho Probatorio.'],
    publicationSlugs: [],
    relatedActuationSlugs: [],
  },
];

export const publicActuations: PublicActuation[] = [
  {
    slug: 'proceso-penal-centro-andino',
    title: 'Proceso penal relacionado con el Centro Andino',
    area: 'Derecho Penal',
    date: 'Cobertura pública entre 2018 y 2021',
    summary: 'Actuaciones de defensa penal registradas en publicaciones de medios nacionales dentro de un proceso de conocimiento público.',
    intervention: 'Intervención profesional como abogado defensor, de acuerdo con las declaraciones y referencias publicadas por los medios enlazados.',
    context: 'La cobertura pública registra distintas decisiones y actuaciones procesales relacionadas con personas investigadas por el atentado al Centro Andino. Esta ficha se limita a identificar la intervención profesional documentada por fuentes abiertas y no formula afirmaciones sobre información sometida a reserva.',
    professionalSlugs: [],
    sources: [
      { outlet: 'Noticias RCN', title: 'Cinco personas vinculadas con atentado al Andino fueron recapturadas', url: 'https://www.noticiasrcn.com/colombia/cinco-personas-vinculadas-con-atentado-al-andino-fueron-recapturadas-358113', date: '8 de junio de 2020' },
      { outlet: 'El Tiempo', title: 'Otro libre: ¿se desmorona caso del atentado al Andino?', url: 'https://www.eltiempo.com/unidad-investigativa/otro-libre-se-desmorona-caso-del-atentado-al-centro-comercial-andino-565065', date: '5 de febrero de 2021' },
      { outlet: 'RCN Radio', title: '“Es un segundo montaje judicial”: procesados por atentado en Centro Andino', url: 'https://www.rcnradio.com/judicial/es-un-segundo-montaje-judicial-procesados-por-atentado-en-centro-andino' },
      { outlet: 'Noticias Caracol', title: 'Dejan en libertad a los 11 señalados de cometer atentado del centro comercial Andino', url: 'https://www.noticiascaracol.com/colombia/bogota/dejan-en-libertad-a-los-11-senalados-de-cometer-atentado-del-centro-comercial-andino', date: '24 de agosto de 2018' },
    ],
  },
];

export const confidentialityNotice = 'La información publicada en esta sección corresponde exclusivamente a asuntos de conocimiento público. La firma protege la confidencialidad y reserva profesional de sus clientes.';

export function getArea(slug: string) { return practiceAreas.find((area) => area.slug === slug); }
export function getEditorial(slug: string) { return editorials.find((item) => item.slug === slug); }
export function getLegalAnalysis(slug: string) { return legalAnalyses.find((item) => item.slug === slug); }
export function getProfessional(slug: string) { return professionals.find((item) => item.slug === slug); }
export function getPublicActuation(slug: string) { return publicActuations.find((item) => item.slug === slug); }
