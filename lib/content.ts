export type PracticeArea = {
  slug: string;
  name: string;
  shortName: string;
  eyebrow: string;
  summary: string;
  intro: string;
  audience: string[];
  services: string[];
  process: { title: string; text: string }[];
  faqs: { question: string; answer: string }[];
};

export type Editorial = {
  slug: string;
  title: string;
  category: string;
  date: string;
  displayDate: string;
  author: string;
  summary: string;
  image: string;
  imageAlt: string;
  body: string[];
  quote?: string;
};

export type Professional = {
  slug: string;
  name: string;
  role: string;
  photo: string;
  biography: string[];
  studies: string[];
  areaSlugs: string[];
  experience: string[];
  publicationSlugs: string[];
  caseSlugs: string[];
  mediaUrls: string[];
  linkedin?: string;
  email?: string;
};

export const practiceAreas: PracticeArea[] = [
  {
    slug: 'derecho-penal',
    name: 'Derecho Penal',
    shortName: 'Penal',
    eyebrow: 'Defensa y representación',
    summary: 'Defensa ante acusaciones, representación de víctimas, extinción de dominio y cumplimiento penal corporativo.',
    intro: 'Paba & Asociados acompaña a personas, víctimas y organizaciones durante las distintas etapas de un proceso penal, con una estrategia construida desde el análisis temprano del expediente.',
    audience: ['Personas investigadas o acusadas', 'Víctimas que requieren representación', 'Empresas ante riesgos o investigaciones penales', 'Personas naturales o jurídicas en procesos complejos'],
    services: ['Asistencia en diligencias, allanamientos y capturas', 'Defensa en indagación, investigación y juicio oral', 'Representación de víctimas ante Fiscalía y jueces', 'Procesos de extinción de dominio y recuperación de bienes', 'Denuncias penales y quejas disciplinarias', 'Cumplimiento penal e investigaciones internas'],
    process: [
      { title: 'Lectura del riesgo', text: 'Revisamos la etapa procesal, los hechos disponibles y las decisiones urgentes.' },
      { title: 'Estrategia probatoria', text: 'Definimos objetivos, evidencia relevante y una ruta de actuación comprensible.' },
      { title: 'Representación', text: 'Acompañamos diligencias, audiencias y actuaciones con seguimiento continuo.' },
    ],
    faqs: [
      { question: '¿Debo esperar a una citación para buscar defensa?', answer: 'No. Una revisión temprana permite entender el alcance de la situación y preparar una respuesta informada.' },
      { question: '¿Representan tanto a víctimas como a personas investigadas?', answer: 'Sí. La firma publica servicios de representación de víctimas y de defensa para personas investigadas o acusadas.' },
    ],
  },
  {
    slug: 'derecho-laboral',
    name: 'Derecho Laboral y Seguridad Social',
    shortName: 'Laboral',
    eyebrow: 'Personas, empresas y sindicatos',
    summary: 'Prevención y solución de conflictos laborales individuales, colectivos y de seguridad social.',
    intro: 'La firma asesora a trabajadores, empleadores y sindicatos, tanto en la prevención de contingencias como en reclamaciones y litigios laborales.',
    audience: ['Trabajadores ante despidos o derechos vulnerados', 'Empleadores que buscan relaciones laborales sólidas', 'Sindicatos y organizaciones', 'Personas con asuntos de pensión, salud o afiliación'],
    services: ['Derecho laboral individual y colectivo', 'Elaboración y revisión de contratos', 'Defensa ante despidos y reclamaciones', 'Consultoría empresarial y derecho sindical', 'Prestaciones, incapacidades y pensiones'],
    process: [
      { title: 'Revisión documental', text: 'Organizamos contratos, comunicaciones, pagos y antecedentes relevantes.' },
      { title: 'Cálculo y escenario', text: 'Identificamos derechos, obligaciones y alternativas de negociación o litigio.' },
      { title: 'Gestión del conflicto', text: 'Representamos la conversación, reclamación o proceso que corresponda.' },
    ],
    faqs: [
      { question: '¿Atienden a trabajadores y empleadores?', answer: 'Sí. El servicio publicado contempla asesoría para trabajadores, empleadores y sindicatos.' },
      { question: '¿Pueden revisar un despido sin justa causa?', answer: 'Sí. La revisión determina el contexto contractual, los pagos y las alternativas disponibles para el caso concreto.' },
    ],
  },
  {
    slug: 'derecho-disciplinario',
    name: 'Derecho Disciplinario',
    shortName: 'Disciplinario',
    eyebrow: 'Actuaciones y control disciplinario',
    summary: 'Orientación estratégica para personas vinculadas a actuaciones disciplinarias y asuntos de función pública.',
    intro: 'La firma incluye el derecho disciplinario dentro de su práctica. Cada consulta requiere identificar la autoridad, etapa y términos aplicables antes de definir una ruta.',
    audience: ['Servidores y exservidores públicos', 'Personas notificadas de una actuación', 'Equipos que requieren análisis preventivo', 'Organizaciones relacionadas con función pública'],
    services: ['Valoración inicial de la actuación', 'Revisión de documentos y términos', 'Preparación de una estrategia de respuesta', 'Acompañamiento jurídico durante el trámite'],
    process: [
      { title: 'Identificación', text: 'Precisamos autoridad, etapa, términos y alcance de la actuación.' },
      { title: 'Revisión', text: 'Estudiamos los documentos y hechos suministrados por el cliente.' },
      { title: 'Actuación', text: 'Definimos y ejecutamos la ruta jurídica que corresponda al caso.' },
    ],
    faqs: [{ question: '¿Qué debo llevar a la consulta?', answer: 'La comunicación recibida, los documentos relacionados y una cronología breve de los hechos.' }],
  },
  {
    slug: 'derecho-electoral',
    name: 'Derecho Electoral',
    shortName: 'Electoral',
    eyebrow: 'Análisis jurídico electoral',
    summary: 'Asesoría en situaciones jurídicas relacionadas con procesos electorales y decisiones de autoridades.',
    intro: 'Paba & Asociados incluye el derecho electoral entre sus áreas de experiencia. La atención comienza con la revisión de la situación, los documentos y los plazos relevantes.',
    audience: ['Personas y organizaciones con una consulta electoral', 'Equipos que requieren revisión preventiva', 'Personas afectadas por una decisión electoral'],
    services: ['Diagnóstico jurídico inicial', 'Revisión documental y normativa', 'Definición de opciones de actuación', 'Acompañamiento según el alcance acordado'],
    process: [
      { title: 'Consulta', text: 'Entendemos el hecho, la decisión o el proceso que origina la necesidad.' },
      { title: 'Análisis', text: 'Revisamos documentación, competencia y oportunidad de las alternativas.' },
      { title: 'Ruta', text: 'Presentamos un plan de trabajo claro antes de iniciar actuaciones.' },
    ],
    faqs: [{ question: '¿Por qué es importante consultar pronto?', answer: 'En asuntos electorales pueden existir términos breves. Una valoración temprana ayuda a identificar el calendario aplicable.' }],
  },
  {
    slug: 'litigio-jep',
    name: 'Litigio Estratégico ante la JEP',
    shortName: 'JEP',
    eyebrow: 'Justicia transicional',
    summary: 'Acompañamiento a víctimas y comparecientes ante salas, secciones y Tribunal para la Paz.',
    intro: 'La firma presta asesoría y representación ante la Jurisdicción Especial para la Paz, con respeto por los derechos humanos, el debido proceso y la dimensión humana de cada historia.',
    audience: ['Víctimas del conflicto armado', 'Comparecientes ante la JEP', 'Organizaciones sociales que acompañan procesos', 'Personas que necesitan estructurar solicitudes o pruebas'],
    services: ['Representación ante salas, secciones y Tribunal para la Paz', 'Acompañamiento en audiencias y diligencias', 'Preparación de informes, solicitudes y pruebas', 'Defensa de derechos procesales y participación de víctimas', 'Seguimiento estratégico del proceso'],
    process: [
      { title: 'Escucha y contexto', text: 'Comprendemos la historia, el rol procesal y las necesidades de la persona u organización.' },
      { title: 'Estructuración', text: 'Ordenamos información, solicitudes y evidencia dentro del marco de la JEP.' },
      { title: 'Acompañamiento', text: 'Representamos y damos seguimiento a las actuaciones acordadas.' },
    ],
    faqs: [{ question: '¿Atienden a víctimas y comparecientes?', answer: 'Sí. El servicio publicado por la firma contempla acompañamiento para ambos roles procesales.' }],
  },
  {
    slug: 'derecho-publico',
    name: 'Derecho Público y Contratación Estatal',
    shortName: 'Derecho Público',
    eyebrow: 'Relaciones con el Estado',
    summary: 'Asesoría en contratación estatal, actos administrativos, derechos de petición y análisis normativo.',
    intro: 'La práctica acompaña a entidades, particulares, contratistas y empresas en sus relaciones jurídicas con el Estado y ante autoridades administrativas.',
    audience: ['Entidades y servidores públicos', 'Contratistas y proveedores del Estado', 'Ciudadanos ante trámites o conflictos administrativos', 'Empresas con relaciones contractuales o regulatorias'],
    services: ['Contratación estatal y análisis normativo', 'Conceptos y actos administrativos', 'Derechos de petición y respuestas', 'Representación ante autoridades y jurisdicción contenciosa', 'Consultoría para cumplimiento de deberes públicos'],
    process: [
      { title: 'Mapa institucional', text: 'Identificamos entidad, competencia, acto y antecedentes documentales.' },
      { title: 'Análisis', text: 'Revisamos el marco aplicable y los efectos de cada alternativa.' },
      { title: 'Intervención', text: 'Preparamos conceptos, solicitudes o representación, según el caso.' },
    ],
    faqs: [{ question: '¿Asesoran a particulares y entidades?', answer: 'Sí. La firma publica atención tanto a entidades como a particulares en sus relaciones con el Estado.' }],
  },
  {
    slug: 'derecho-empresarial',
    name: 'Derecho Privado y Empresarial',
    shortName: 'Empresarial',
    eyebrow: 'Empresas y patrimonio',
    summary: 'Contratos, sociedades, litigios civiles, sucesiones, insolvencia y responsabilidad empresarial.',
    intro: 'La firma asesora a personas, emprendedores y empresas en asuntos civiles, comerciales, societarios y patrimoniales con un enfoque práctico.',
    audience: ['Empresas que requieren apoyo corporativo', 'Emprendedores que formalizan su operación', 'Personas con conflictos civiles o patrimoniales', 'Clientes con sucesiones, deudas o reclamaciones contractuales'],
    services: ['Derecho comercial y societario', 'Procesos civiles y contractuales', 'Familia, sucesiones y responsabilidad', 'Contratos civiles y comerciales', 'Insolvencia de personas y empresas', 'Métodos alternativos de solución de conflictos'],
    process: [
      { title: 'Diagnóstico', text: 'Revisamos documentos, relaciones jurídicas y exposición al riesgo.' },
      { title: 'Alternativas', text: 'Comparamos prevención, negociación, conciliación o litigio.' },
      { title: 'Ejecución', text: 'Implementamos la alternativa acordada y mantenemos seguimiento.' },
    ],
    faqs: [{ question: '¿Trabajan prevención además de litigio?', answer: 'Sí. La oferta publicada incluye consultoría, contratos, prevención y representación judicial.' }],
  },
];

export const editorials: Editorial[] = [
  {
    slug: 'que-es-la-jep-y-como-puede-ayudarte',
    title: '¿Qué es la JEP y cómo puede ayudarte si eres víctima del conflicto?',
    category: 'Justicia Transicional y JEP',
    date: '2025-08-15',
    displayDate: '15 de agosto de 2025',
    author: 'Paba & Asociados',
    summary: 'Una introducción a la Jurisdicción Especial para la Paz y a las posibilidades de participación de las víctimas.',
    image: '/editorial-jep.jpg',
    imageAlt: 'Grupo diverso de personas reunidas en un gesto de apoyo',
    body: [
      'La Jurisdicción Especial para la Paz (JEP) es uno de los pilares del Sistema Integral de Verdad, Justicia, Reparación y No Repetición creado tras los acuerdos de paz en Colombia. Su objetivo es juzgar los crímenes más graves del conflicto armado y ofrecer una justicia restaurativa que priorice los derechos de las víctimas.',
      'Las víctimas de delitos ocurridos en el marco del conflicto pueden participar para aportar información, relatar su caso y solicitar acompañamiento jurídico durante el proceso.',
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
    author: 'Paba & Asociados',
    summary: 'Puntos iniciales para entender una terminación laboral y organizar la información antes de buscar asesoría.',
    image: '/editorial-laboral.jpg',
    imageAlt: 'Conversación de asesoría alrededor de una mesa',
    body: [
      'La legislación colombiana contempla consecuencias cuando un empleador termina un contrato sin una causa legal aplicable. El análisis depende del tipo de contrato, el tiempo trabajado y las circunstancias de la terminación.',
      'Además de una eventual indemnización, una revisión puede incluir salarios, prestaciones pendientes y situaciones que involucren derechos fundamentales.',
      'Conservar el contrato, las comunicaciones, los comprobantes y una cronología precisa facilita una valoración inicial del caso.',
    ],
  },
  {
    slug: 'que-hacer-ante-denuncia-penal-injusta',
    title: '¿Qué hacer si recibes una denuncia penal que consideras injusta?',
    category: 'Derecho Penal',
    date: '2025-08-15',
    displayDate: '15 de agosto de 2025',
    author: 'Paba & Asociados',
    summary: 'Acciones prudentes para proteger tus derechos y preparar una defensa desde las primeras etapas.',
    image: '/editorial-penal.jpg',
    imageAlt: 'Profesional escuchando a una persona durante una consulta',
    body: [
      'Recibir una denuncia puede producir incertidumbre, incluso cuando consideras que carece de fundamento. Mantener la calma y entender la etapa en la que se encuentra la actuación es el primer paso.',
      'No conviene ignorar comunicaciones oficiales ni entregar versiones improvisadas. Una defensa puede revisar la denuncia, organizar información, solicitar elementos relevantes y preparar las actuaciones necesarias.',
      'La consulta temprana permite tomar decisiones con contexto y proteger las garantías procesales desde el inicio.',
    ],
  },
];

export const mediaCoverage = [
  { outlet: 'RCN Radio', title: '“Es un segundo montaje judicial”: procesados por atentado en Centro Andino', url: 'https://www.rcnradio.com/judicial/es-un-segundo-montaje-judicial-procesados-por-atentado-en-centro-andino' },
  { outlet: 'El Heraldo', title: 'Defensa de víctimas, profesión peligrosa', url: 'https://www.elheraldo.co/region/2012/08/31/defensa-de-victimas-profesion-peligro/' },
  { outlet: 'El Tiempo', title: 'Otro libre: ¿se desmorona caso del atentado al Andino?', url: 'https://www.eltiempo.com/unidad-investigativa/otro-libre-se-desmorona-caso-del-atentado-al-centro-comercial-andino-565065' },
  { outlet: 'Noticias Caracol', title: 'Dejan en libertad a los 11 señalados de cometer atentado del Centro Andino', url: 'https://www.noticiascaracol.com/colombia/bogota/dejan-en-libertad-a-los-11-senalados-de-cometer-atentado-del-centro-comercial-andino' },
  { outlet: 'Voz Digital', title: 'Ejército Nacional acribilló jóvenes mientras dormían', url: 'https://www.youtube.com/watch?v=QGl6ZjFfnIQ' },
  { outlet: 'Noticias RCN', title: 'Cinco personas vinculadas con atentado al Andino fueron recapturadas', url: 'https://www.noticiasrcn.com/colombia/cinco-personas-vinculadas-con-atentado-al-andino-fueron-recapturadas-358113' },
] as const;

// Intencionalmente vacío hasta que la firma valide identidades, fotografías y credenciales.
// La ruta dinámica y el modelo ya están preparados para incorporar perfiles verificados.
export const professionals: Professional[] = [];

export const publicCases = [
  {
    slug: 'proceso-penal-centro-andino',
    title: 'Proceso penal relacionado con el Centro Andino',
    area: 'Derecho Penal',
    date: 'Cobertura pública entre 2018 y 2021',
    image: '/hero-office.jpg',
    imageAlt: 'Profesionales revisando documentación jurídica',
    summary: 'Una lectura documental de la cobertura periodística que el sitio vigente de la firma vincula con su trayectoria.',
    context: 'Diversos medios nacionales registraron decisiones judiciales y actuaciones dentro del proceso relacionado con el atentado al Centro Andino.',
    challenge: 'Los procesos penales de alta exposición pública exigen rigor técnico, prudencia comunicativa y respeto por la reserva y la presunción de inocencia.',
    strategy: 'Esta ficha reúne únicamente fuentes públicas enlazadas por la firma. La demo omite identidades, detalles reservados y cualquier afirmación que no esté documentada.',
    result: 'Las fuentes relacionadas registran decisiones distintas en varias etapas del proceso. Para preservar exactitud, el detalle se consulta directamente en cada publicación.',
    lawyerSlugs: [] as string[],
    relatedEditorialSlugs: ['que-hacer-ante-denuncia-penal-injusta'] as string[],
    sources: mediaCoverage.filter((item) => ['RCN Radio', 'El Tiempo', 'Noticias Caracol', 'Noticias RCN'].includes(item.outlet)),
  },
] as const;

export function getArea(slug: string) { return practiceAreas.find((area) => area.slug === slug); }
export function getEditorial(slug: string) { return editorials.find((item) => item.slug === slug); }
export function getCase(slug: string) { return publicCases.find((item) => item.slug === slug); }
export function getProfessional(slug: string) { return professionals.find((item) => item.slug === slug); }
