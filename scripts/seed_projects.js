const supabase = require("../db/supabase");

const projects = [
  {
    titulo: "Complejo Industrial Norte",
    descripcion:
      "Este ambicioso proyecto consistió en la ejecución integral de las instalaciones eléctricas de media y baja tensión para una nave industrial de 5,000 m² ubicada en el parque industrial más importante de Monterrey. \n\nNuestro equipo de ingeniería diseñó una solución personalizada que incluyó la instalación de una subestación propia de 1000 kVA, garantizando un suministro energético estable y eficiente para las operaciones de manufactura pesada. Se implementaron tableros de distribución certificados bajo normativa NEMA, con sistemas de protección avanzados contra sobrecargas y cortocircuitos. \n\nAdemás, se instaló un sistema de iluminación LED de alta eficiencia con control automatizado, lo que permitió reducir el consumo energético en un 40% respecto a las proyecciones iniciales. La obra se completó en un tiempo récord de 6 meses, cumpliendo estrictamente con la NOM-001-SEDE y los estándares de seguridad industrial más rigurosos, sin registrar incidentes laborales durante todo el proceso.",
    location: "Monterrey, NL",
    date: "2024",
    category: "Instalación Eléctrica",
    metros: 5000,
    duracion: "6 meses",
    tags: ["industrial", "eléctrica", "media tensión"],
    publicado: true,
    despues_url: "/images/CityConstruction.webp",
  },
  {
    titulo: "Torre Corporativa Reforma",
    descripcion:
      "Llevamos a cabo la remodelación estructural y de acabados para las oficinas corporativas de una firma internacional en la Ciudad de México. El proyecto abarcó dos plantas completas, transformando un espacio tradicional en un entorno de trabajo moderno y colaborativo. \n\nSe utilizaron sistemas de drywall acústico de última generación para crear salas de juntas privadas y espacios de concentración, garantizando un aislamiento sonoro superior a 50 dB. Los acabados incluyeron plafones reticulares con diseño arquitectónico, muros con texturas personalizadas y pintura de alta resistencia y bajo VOC. \n\nLa coordinación logística fue clave, ya que los trabajos se realizaron en un edificio ocupado, minimizando las interrupciones para los demás inquilinos. El resultado final fue un espacio elegante y funcional que refleja la identidad corporativa del cliente y mejora la productividad de sus colaboradores.",
    location: "Ciudad de México",
    date: "2023",
    category: "Remodelación",
    metros: 1200,
    duracion: "4 meses",
    tags: ["oficinas", "acabados", "drywall"],
    publicado: true,
    despues_url: "/images/CityConstruction2.webp",
  },
  {
    titulo: "Infraestructura Subterránea",
    descripcion:
      "Este proyecto crítico de mantenimiento mayor implicó la modernización de la red eléctrica subterránea de un complejo hospitalario en Guadalajara. La intervención fue necesaria para reemplazar el cableado de potencia obsoleto y aumentar la capacidad de carga del sistema. \n\nSe realizaron excavaciones precisas y se instalaron nuevas canalizaciones de concreto reforzado, asegurando la protección mecánica de los conductores. Se implementaron registros de inspección estratégicamente ubicados para facilitar el mantenimiento futuro. \n\nEl desafío principal fue mantener la operatividad del hospital durante los trabajos, por lo que se instalaron sistemas de respaldo temporal y se ejecutaron las maniobras de conexión en horarios nocturnos controlados. La obra garantizó la continuidad del servicio eléctrico vital para las áreas de quirófanos y terapia intensiva.",
    location: "Guadalajara, JAL",
    date: "2023",
    category: "Mantenimiento",
    metros: 800,
    duracion: "3 meses",
    tags: ["subterráneo", "mantenimiento", "eléctrica"],
    publicado: true,
    despues_url: "/images/ConstructionFloor.webp",
  },
  {
    titulo: "Centro Logístico Bajío",
    descripcion:
      "Construcción de obra civil para un nuevo centro de distribución logística en Silao, Guanajuato. El proyecto abarcó desde la preparación del terreno hasta la entrega de las plataformas de concreto terminadas. \n\nSe ejecutaron trabajos masivos de terracerías, nivelación y compactación del suelo para soportar las cargas de tráfico pesado de tráileres y montacargas. La losa de concreto hidráulico fue diseñada con refuerzo de fibra metálica y juntas de dilatación estratégicas para prevenir fisuras. \n\nAdicionalmente, se construyeron los sistemas de drenaje pluvial y las cimentaciones para las estructuras metálicas de la nave. La calidad del concreto fue monitoreada constantemente mediante pruebas de laboratorio, asegurando una resistencia superior a f'c=300 kg/cm². Este proyecto es fundamental para la cadena de suministro de la región.",
    location: "Silao, GTO",
    date: "2024",
    category: "Obra Civil",
    metros: 15000,
    duracion: "8 meses",
    tags: ["logística", "obra civil", "concreto"],
    publicado: true,
    despues_url: "/images/WheelLoaderConstructionMachine.webp",
  },
  {
    titulo: "Planta de Manufactura",
    descripcion:
      "Instalación electromecánica para nuevas líneas de producción en una planta automotriz en Querétaro. El proyecto requirió una precisión milimétrica para la conexión de robots industriales y maquinaria de ensamblaje. \n\nNuestro equipo instaló bandejas portacables tipo escalera, cableado de fuerza y control, y tableros de distribución dedicados para cada celda de manufactura. Se realizaron pruebas de aislamiento y continuidad rigurosas antes de la puesta en marcha. \n\nLa colaboración con los ingenieros de planta y los proveedores de maquinaria fue esencial para cumplir con los cronogramas ajustados de producción. El sistema entregado cumple con los estándares internacionales de la industria automotriz, garantizando la seguridad operativa y la eficiencia energética de la nueva línea.",
    location: "Querétaro, QRO",
    date: "2023",
    category: "Industrial",
    metros: 3500,
    duracion: "5 meses",
    tags: ["manufactura", "industrial", "maquinaria"],
    publicado: true,
    despues_url: "/images/Construction2.webp",
  },
  {
    titulo: "Desarrollo Residencial Vertical",
    descripcion:
      "Consultoría y ejecución de las instalaciones hidrosanitarias y eléctricas para un exclusivo edificio residencial de 15 niveles en Puebla. El diseño se enfocó en la eficiencia y el confort de los residentes. \n\nSe implementó un sistema de presión constante con variadores de frecuencia para el suministro de agua potable, eliminando la necesidad de tinacos en la azotea y garantizando una presión uniforme en todos los departamentos. Para el agua caliente, se instaló un sistema centralizado híbrido de calentadores solares y calderas de alta eficiencia. \n\nEn la parte eléctrica, se instaló un sistema de pararrayos y puesta a tierra certificado, así como la infraestructura para medición concentrada. El proyecto destaca por su integración de tecnologías sustentables y su alta calidad de ejecución.",
    location: "Puebla, PUE",
    date: "2024",
    category: "Residencial",
    metros: 8500,
    duracion: "12 meses",
    tags: ["residencial", "hidrosanitaria", "vertical"],
    publicado: true,
    despues_url: "/images/Construction3.webp",
  },
];

async function seed() {
  console.log("🌱 Seeding projects...");

  try {
    // Clear existing projects to ensure fresh data with updated descriptions
    await supabase.from("proyectos").delete().neq("id", 0);

    const { data, error } = await supabase
      .from("proyectos")
      .insert(projects)
      .select();

    if (error) {
      throw error;
    }

    console.log(`✅ Successfully inserted ${data.length} projects.`);
  } catch (error) {
    console.error("❌ Error seeding projects:", error);
  }
}

seed();
