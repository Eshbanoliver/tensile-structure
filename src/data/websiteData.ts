export interface ProductItem {
  id: string;
  slug: string;
  name: string;
  category: string;
  shortDesc: string;
  fullDesc: string;
  image: string;
  thumb: string;
  features?: string[];
  applications?: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  image: string;
  bigImage: string;
}

export interface TestimonialItem {
  id: string;
  author: string;
  location: string;
  initial: string;
  quote: string;
}

export interface BlogItem {
  id: string;
  slug: string;
  title: string;
  date: string;
  author: string;
  category: string;
  image: string;
  excerpt: string;
  content: string;
}

export const COMPANY_INFO = {
  name: "Future Tensile Structure Pvt. Ltd.",
  shortName: "Future Tensile Structure",
  tagline: "Top Tensile Structure Manufacturers in Udaipur",
  address: "2nd Floor, Madaar Plaza, Thokar Chouraha Ayad Road, Udaipur – 313001, Rajasthan, India",
  phones: [
    { display: "+91-988-788-9777", raw: "+919887889777" },
    { display: "+91-905-791-1777", raw: "+919057911777" }
  ],
  whatsapp: "+919887889777",
  email: "info@futuretensilestructure.com",
  hours: "Monday To Saturday, 9.00 AM - 6.00 PM",
  experienceYears: "16+",
  socials: {
    facebook: "https://www.facebook.com/p/Future-Tensile-Structure-61562439236794/",
    youtube: "https://www.youtube.com/@futuretensilestructure",
    instagram: "https://www.instagram.com/futuretensilestructurepvt.ltd"
  }
};

export const HERO_SLIDERS = [
  {
    id: "1",
    title: "Car Parking Tensile Structure",
    subtitle: "Modern Tensile Shades Built for Vehicle Protection",
    image: "https://www.futuretensilestructure.com/uploaded-files/banner-image/thumbs/Car-Parking-Tensile-Structure-thumbs-1500X722.webp",
    mobileImage: "https://www.futuretensilestructure.com/uploaded-files/banner-image/thumbs/Car-Parking-Tensile-Structure-thumbs-700X337.webp",
  },
  {
    id: "2",
    title: "Walkway Tensile Structure",
    subtitle: "Smart Tensile Structures for Seamless Pedestrian Access",
    image: "https://www.futuretensilestructure.com/uploaded-files/banner-image/thumbs/Walkway-Tensile-Structure-thumbs-1500X722.webp",
    mobileImage: "https://www.futuretensilestructure.com/uploaded-files/banner-image/thumbs/Walkway-Tensile-Structure-thumbs-700X337.webp",
  },
  {
    id: "3",
    title: "Gazebo Tensile Structure",
    subtitle: "Iconic Tensile Gazebos Elevating Outdoor Experiences",
    image: "https://www.futuretensilestructure.com/uploaded-files/banner-image/thumbs/Gazebo-Tensile-Structure-thumbs-1500X722.webp",
    mobileImage: "https://www.futuretensilestructure.com/uploaded-files/banner-image/thumbs/Gazebo-Tensile-Structure-thumbs-700X337.webp",
  }
];

export const PRODUCTS_LIST: ProductItem[] = [
  {
    id: "p1",
    slug: "tensile-structure",
    name: "Tensile Structure",
    category: "Tensile Structure",
    shortDesc: "Tired of dull concrete slabs boxing in your beautiful open spaces? Modern architecture demands smart, flexible shading that breathes life into any environment. At Future Tensile Structure Pvt. Ltd., we make dynamic Tensile Structure in Udaipur...",
    fullDesc: "Future Tensile Structure Pvt. Ltd. offers premium tensile structure solutions designed for durability, flexibility, and modern architectural appeal. Ideal for car parking, walkways, commercial spaces, and outdoor areas, these structures are made using high-quality fabric and strong frameworks for long-lasting performance and weather resistance.",
    image: "https://www.futuretensilestructure.com/uploaded-files/category/images/thumbs/Tensile-Structure69aaa01f5b612-home-thumb-big.jpg",
    thumb: "https://www.futuretensilestructure.com/uploaded-files/category/images/thumbs/Tensile-Structure69aaa01f5b612-home-thumb-big.jpg"
  },
  {
    id: "p2",
    slug: "car-parking-tensile-structure",
    name: "Car Parking Tensile Structure",
    category: "Parking Shades",
    shortDesc: "Leaving cars out in the open sun is a bad idea. Rain, heat, and dust ruin expensive paint jobs faster than you might think. You need a real shield. At Future Tensile Structure Pvt. Ltd., we provide premium Car Parking Tensile Structure in Udaipur...",
    fullDesc: "Protect your vehicles with state-of-the-art Car Parking Tensile Structures. Engineered with UV-resistant fabric and high-strength galvanized steel frames, our parking shades safeguard against extreme sun, hail, rain, and debris while adding modern elegance to commercial hubs and residential properties.",
    image: "https://www.futuretensilestructure.com/uploaded-files/category/images/thumbs/Car-Parking-Tensile-Structure69aa88f715548-home-thumb-big.jpg",
    thumb: "https://www.futuretensilestructure.com/uploaded-files/category/images/thumbs/Car-Parking-Tensile-Structure-small.jpg"
  },
  {
    id: "p3",
    slug: "garden-tensile-umbrella",
    name: "Garden Tensile Umbrella",
    category: "Outdoor Leisure",
    shortDesc: "Revamping an exposed patio or a sun-drenched lawn demands a smart, elegant solution. Traditional fabric parasols snap in the wind and fade rapidly, leaving your outdoor seating area looking neglected. At Future Tensile Structure Pvt. Ltd., we engineer stunning...",
    fullDesc: "Our heavy-duty Garden Tensile Umbrellas combine sleek aesthetic design with rugged structural resilience. Designed to withstand wind forces while providing 100% shade and waterproof protection for gardens, resorts, and outdoor cafes.",
    image: "https://www.futuretensilestructure.com/uploaded-files/category/images/thumbs/Garden-Tensile-Umbrella69aa88d1c2f34-home-thumb-big.jpg",
    thumb: "https://www.futuretensilestructure.com/uploaded-files/category/images/thumbs/Garden-Tensile-Umbrella69aa88d1c2f34-home-thumb-big.jpg"
  },
  {
    id: "p4",
    slug: "tensile-fabric-structure",
    name: "Tensile Fabric Structure",
    category: "Fabric Structures",
    shortDesc: "Custom designed architectural fabric structures tailored to any geometric form or environmental condition.",
    fullDesc: "Tensile Fabric Structures represent the height of lightweight architecture. Engineered with PVDF and PTFE membrane materials, these structures offer column-free wide spans, daylight translucency, and exceptional tensile strength.",
    image: "https://www.futuretensilestructure.com/uploaded-files/category/images/thumbs/Tensile-Fabric-Structure-small.jpg",
    thumb: "https://www.futuretensilestructure.com/uploaded-files/category/images/thumbs/Tensile-Fabric-Structure-small.jpg"
  },
  {
    id: "p5",
    slug: "tensile-membrane-structure",
    name: "Tensile Membrane Structure",
    category: "Architectural Membranes",
    shortDesc: "High-grade architectural membrane systems designed for resorts, auditoriums, and public complexes.",
    fullDesc: "Our Tensile Membrane Structures feature sophisticated membrane technology engineered to resist severe weather, thermal expansion, and mechanical tension while delivering breathtaking aesthetic silhouettes.",
    image: "https://www.futuretensilestructure.com/uploaded-files/category/images/thumbs/Tensile-Membrane-Structure-small.jpg",
    thumb: "https://www.futuretensilestructure.com/uploaded-files/category/images/thumbs/Tensile-Membrane-Structure-small.jpg"
  },
  {
    id: "p6",
    slug: "tensile-architecture-structure",
    name: "Tensile Architecture Structure",
    category: "Architectural",
    shortDesc: "Iconic structural landmarks combining tensioned steel cables and membrane sails.",
    fullDesc: "Bespoke architectural creations engineered for civic plazas, luxury resorts, and corporate headquarters looking for striking visual identity and climate-controlled shade solutions.",
    image: "https://www.futuretensilestructure.com/uploaded-files/category/images/thumbs/Tensile-Architecture-Structure-small.jpg",
    thumb: "https://www.futuretensilestructure.com/uploaded-files/category/images/thumbs/Tensile-Architecture-Structure-small.jpg"
  },
  {
    id: "p7",
    slug: "outdoor-tensile-structure",
    name: "Outdoor Tensile Structure",
    category: "Outdoor Leisure",
    shortDesc: "Future Tensile Structure Pvt. Ltd. transforms completely bare and unusable exterior zones into stunning, all-weather lounges...",
    fullDesc: "Turn outdoor courtyards, terraces, and open lawns into comfortable year-round environments with customized outdoor tensile shade solutions engineered for maximum longevity.",
    image: "https://www.futuretensilestructure.com/uploaded-files/category/images/thumbs/Outdoor-Tensile-Structure-large.jpg",
    thumb: "https://www.futuretensilestructure.com/uploaded-files/category/images/thumbs/Outdoor-Tensile-Structure-large.jpg"
  },
  {
    id: "p8",
    slug: "industrial-tensile-shed",
    name: "Industrial Tensile Shed",
    category: "Industrial Sheds",
    shortDesc: "Future Tensile Structure Pvt. Ltd. understands that expanding your factory or warehouse operations shouldn't require waiting months...",
    fullDesc: "Rapid-deploy industrial fabric sheds ideal for manufacturing units, warehouse inventory storage, and temporary logistics bays requiring high clearance and wide pillar-free spans.",
    image: "https://www.futuretensilestructure.com/uploaded-files/category/images/thumbs/Industrial-Tensile-Shed-large.jpg",
    thumb: "https://www.futuretensilestructure.com/uploaded-files/category/images/thumbs/Industrial-Tensile-Shed-large.jpg"
  },
  {
    id: "p9",
    slug: "terrace-tensile-shed",
    name: "Terrace Tensile Shed",
    category: "Roofing Sheds",
    shortDesc: "Future Tensile Structure Pvt. Ltd. brings an extraordinary transformation to unused rooftops. Leaving your top floor completely bare...",
    fullDesc: "Convert unutilized terrace rooftops into elegant lounge spaces, open-air cafes, or private gardens protected from heat, UV exposure, and heavy rains.",
    image: "https://www.futuretensilestructure.com/uploaded-files/category/images/thumbs/Terrace-Tensile-Shed-large.jpg",
    thumb: "https://www.futuretensilestructure.com/uploaded-files/category/images/thumbs/Terrace-Tensile-Shed-large.jpg"
  },
  {
    id: "p10",
    slug: "tensile-pagoda-tent",
    name: "Tensile Pagoda Tent",
    category: "Tents & Canopies",
    shortDesc: "Future Tensile Structure Pvt. Ltd. designs premium modular canopies that elevate any outdoor gathering instantly...",
    fullDesc: "Distinctive high-peak Pagoda Tensile Tents designed for luxury events, resort outdoor pavilions, and VIP exhibition spaces.",
    image: "https://www.futuretensilestructure.com/uploaded-files/category/images/thumbs/Tensile-Pagoda-Tent-large.jpg",
    thumb: "https://www.futuretensilestructure.com/uploaded-files/category/images/thumbs/Tensile-Pagoda-Tent-large.jpg"
  },
  { id: "p11", slug: "ptfe-tensile-membrane-structure", name: "PTFE Tensile Membrane Structure", category: "Membrane Structures", shortDesc: "Highest durability PTFE coated glass fiber membrane structures engineered for 30+ year lifespan.", fullDesc: "PTFE Tensile Membrane Structures feature extreme thermal resistance, self-cleaning fluoropolymer coating, and unmatched fire rating.", image: "https://www.futuretensilestructure.com/uploaded-files/category/images/thumbs/Tensile-Membrane-Structure-small.jpg", thumb: "https://www.futuretensilestructure.com/uploaded-files/category/images/thumbs/Tensile-Membrane-Structure-small.jpg" },
  { id: "p12", slug: "tensile-roofing", name: "Tensile Roofing", category: "Roofing Solutions", shortDesc: "Reflective tensile fabric roofing designed to reduce interior temperatures and block harmful solar heat.", fullDesc: "Custom tensile roofing solutions suitable for sports arenas, industrial complexes, and commercial entry points.", image: "https://www.futuretensilestructure.com/uploaded-files/category/images/thumbs/Tensile-Structure69aaa01f5b612-home-thumb-big.jpg", thumb: "https://www.futuretensilestructure.com/uploaded-files/category/images/thumbs/Tensile-Structure69aaa01f5b612-home-thumb-big.jpg" },
  { id: "p13", slug: "gazebo-tensile-structure", name: "Gazebo Tensile Structure", category: "Outdoor Leisure", shortDesc: "Modular and stylish gazebo units perfect for outdoor dining and resort relaxation zones.", fullDesc: "Premium Gazebo Tensile Structures offering dynamic architectural geometry, water resistance, and cooling ambient shade.", image: "https://www.futuretensilestructure.com/uploaded-files/banner-image/thumbs/Gazebo-Tensile-Structure-thumbs-1500X722.webp", thumb: "https://www.futuretensilestructure.com/uploaded-files/banner-image/thumbs/Gazebo-Tensile-Structure-thumbs-700X337.webp" },
  { id: "p14", slug: "walkway-tensile-structure", name: "Walkway Tensile Structure", category: "Pedestrian Canopies", shortDesc: "Smart walkway shades for hospitals, school campuses, corporate parks, and transit terminals.", fullDesc: "Covered pedestrian walkways engineered to provide weather-protected transit corridors across expansive properties.", image: "https://www.futuretensilestructure.com/uploaded-files/banner-image/thumbs/Walkway-Tensile-Structure-thumbs-1500X722.webp", thumb: "https://www.futuretensilestructure.com/uploaded-files/banner-image/thumbs/Walkway-Tensile-Structure-thumbs-700X337.webp" },
  { id: "p15", slug: "entrance-tensile-structure", name: "Entrance Tensile Structure", category: "Canopies", shortDesc: "Grand entry canopies designed to create a striking architectural impression for corporate hubs.", fullDesc: "Turn simple doorways into grand architectural statements with custom arched and cantilevered entry canopies.", image: "https://www.futuretensilestructure.com/uploaded-files/category/images/thumbs/Tensile-Architecture-Structure-small.jpg", thumb: "https://www.futuretensilestructure.com/uploaded-files/category/images/thumbs/Tensile-Architecture-Structure-small.jpg" },
  { id: "p16", slug: "stadium-tensile-structure", name: "Stadium Tensile Structure", category: "Wide Span", shortDesc: "Massive column-free stadium roof covers using tensioned cable networks and PTFE membranes.", fullDesc: "Turnkey stadium roof structures capable of spanning thousands of square meters without sightline obstructions.", image: "https://www.futuretensilestructure.com/uploaded-files/category/images/thumbs/Tensile-Structure69aaa01f5b612-home-thumb-big.jpg", thumb: "https://www.futuretensilestructure.com/uploaded-files/category/images/thumbs/Tensile-Structure69aaa01f5b612-home-thumb-big.jpg" },
  { id: "p17", slug: "swimming-pool-tensile-cover", name: "Swimming Pool Tensile Cover", category: "Leisure Covers", shortDesc: "UV protective pool shades keeping water temperatures pleasant and swimmers protected.", fullDesc: "Sleek pool covers that safeguard users against direct sun glare and keep pool water free from environmental leaves and dust.", image: "https://www.futuretensilestructure.com/uploaded-files/category/images/thumbs/Outdoor-Tensile-Structure-large.jpg", thumb: "https://www.futuretensilestructure.com/uploaded-files/category/images/thumbs/Outdoor-Tensile-Structure-large.jpg" },
  { id: "p18", slug: "royal-resort-tent-house", name: "Royal Resort Tent House", category: "Luxury Tents", shortDesc: "Luxury resort glamping tent structures designed with modern insulation for AC comfort.", fullDesc: "Turnkey resort accommodation tents combining traditional aesthetic charm with high-performance structural steel and insulated fabric.", image: "https://www.futuretensilestructure.com/uploaded-files/category/images/thumbs/Tensile-Pagoda-Tent-large.jpg", thumb: "https://www.futuretensilestructure.com/uploaded-files/category/images/thumbs/Tensile-Pagoda-Tent-large.jpg" },
  { id: "p19", slug: "pvc-tensile-structure", name: "PVC Tensile Structure", category: "Fabric Structures", shortDesc: "Economical and versatile PVC coated polyester fabric structures for diverse commercial applications.", fullDesc: "Flexible, vibrant, and fire-retardant PVC fabric structures engineered for cost-effective shading.", image: "https://www.futuretensilestructure.com/uploaded-files/category/images/thumbs/Tensile-Fabric-Structure-small.jpg", thumb: "https://www.futuretensilestructure.com/uploaded-files/category/images/thumbs/Tensile-Fabric-Structure-small.jpg" },
  { id: "p20", slug: "tensile-dome-structure", name: "Tensile Dome Structure", category: "Specialty Structures", shortDesc: "Semi-spherical geometric domes providing pillarless interior volume for venues and exhibitions.", fullDesc: "Iconic dome tensioned structures providing grand volumetric capacity and dramatic visual impact.", image: "https://www.futuretensilestructure.com/uploaded-files/category/images/thumbs/Tensile-Architecture-Structure-small.jpg", thumb: "https://www.futuretensilestructure.com/uploaded-files/category/images/thumbs/Tensile-Architecture-Structure-small.jpg" },
  { id: "p21", slug: "canopy-tensile-structure", name: "Canopy Tensile Structure", category: "Canopies", shortDesc: "Versatile canopy structures tailored for open plazas, gas stations, and entry gates.", fullDesc: "Architectural tensioned fabric canopies providing sleek lines, rainwater management, and solar shading.", image: "https://www.futuretensilestructure.com/uploaded-files/category/images/thumbs/Outdoor-Tensile-Structure-large.jpg", thumb: "https://www.futuretensilestructure.com/uploaded-files/category/images/thumbs/Outdoor-Tensile-Structure-large.jpg" },
  { id: "p22", slug: "reverse-tensile-structure", name: "Reverse Tensile Structure", category: "Conical Shades", shortDesc: "Inverted cone structure designed to collect rainwater while delivering a captivating aesthetic.", fullDesc: "Functional reverse conical tensile shades serving dual purposes of shade provision and integrated rainwater harvesting.", image: "https://www.futuretensilestructure.com/uploaded-files/category/images/thumbs/Garden-Tensile-Umbrella69aa88d1c2f34-home-thumb-big.jpg", thumb: "https://www.futuretensilestructure.com/uploaded-files/category/images/thumbs/Garden-Tensile-Umbrella69aa88d1c2f34-home-thumb-big.jpg" },
  { id: "p23", slug: "umbrella-tensile-structure", name: "Umbrella Tensile Structure", category: "Umbrellas", shortDesc: "Heavy-duty fixed single-column umbrella shades engineered for severe wind loads.", fullDesc: "Permanent commercial umbrella structures engineered for hotel patios, public squares, and cafe gardens.", image: "https://www.futuretensilestructure.com/uploaded-files/category/images/thumbs/Garden-Tensile-Umbrella69aa88d1c2f34-home-thumb-big.jpg", thumb: "https://www.futuretensilestructure.com/uploaded-files/category/images/thumbs/Garden-Tensile-Umbrella69aa88d1c2f34-home-thumb-big.jpg" },
  { id: "p24", slug: "tensile-cone-structure", name: "Tensile Cone Structure", category: "Conical Shades", shortDesc: "Classic conical tension membrane design offering maximum central height and elegant slopes.", fullDesc: "High-peak cone structures engineered to handle extreme wind tension while casting expansive shade footprints.", image: "https://www.futuretensilestructure.com/uploaded-files/category/images/thumbs/Tensile-Membrane-Structure-small.jpg", thumb: "https://www.futuretensilestructure.com/uploaded-files/category/images/thumbs/Tensile-Membrane-Structure-small.jpg" },
  { id: "p25", slug: "tensile-shed", name: "Tensile Shed", category: "Roofing Sheds", shortDesc: "Durable and rapid-assembly fabric sheds for multi-purpose utility protection.", fullDesc: "Engineered tensile sheds designed for commercial yards, loading docks, and utility compounds.", image: "https://www.futuretensilestructure.com/uploaded-files/category/images/thumbs/Industrial-Tensile-Shed-large.jpg", thumb: "https://www.futuretensilestructure.com/uploaded-files/category/images/thumbs/Industrial-Tensile-Shed-large.jpg" },
  { id: "p26", slug: "car-parking-shed", name: "Car Parking Shed", category: "Parking Shades", shortDesc: "Reliable vehicle protection sheds built with durable steel posts and UV fabric.", fullDesc: "Multi-vehicle parking sheds ideal for residential housing societies and commercial office complexes.", image: "https://www.futuretensilestructure.com/uploaded-files/category/images/thumbs/Car-Parking-Tensile-Structure69aa88f715548-home-thumb-big.jpg", thumb: "https://www.futuretensilestructure.com/uploaded-files/category/images/thumbs/Car-Parking-Tensile-Structure-small.jpg" },
  { id: "p27", slug: "auditorium-tensile-structure", name: "Auditorium Tensile Structure", category: "Wide Span", shortDesc: "Column-free acoustic and thermal canopy systems for outdoor auditoriums and amphitheaters.", fullDesc: "Wide-span tensile roofing tailored for open-air theaters and public gathering spaces.", image: "https://www.futuretensilestructure.com/uploaded-files/category/images/thumbs/Tensile-Architecture-Structure-small.jpg", thumb: "https://www.futuretensilestructure.com/uploaded-files/category/images/thumbs/Tensile-Architecture-Structure-small.jpg" },
  { id: "p28", slug: "tensile-skylark-structure", name: "Tensile Skylark Structure", category: "Specialty Structures", shortDesc: "Dynamic wing-like architectural form delivering modern luxury visual appeal.", fullDesc: "Bespoke skylark tensile forms designed to anchor luxury estate entrances and resort focal points.", image: "https://www.futuretensilestructure.com/uploaded-files/category/images/thumbs/Tensile-Structure69aaa01f5b612-home-thumb-big.jpg", thumb: "https://www.futuretensilestructure.com/uploaded-files/category/images/thumbs/Tensile-Structure69aaa01f5b612-home-thumb-big.jpg" },
  { id: "p29", slug: "inverted-umbrella-tensile-structure", name: "Inverted Umbrella Tensile Structure", category: "Umbrellas", shortDesc: "Inverted tension umbrella shade with center column rainwater drainage.", fullDesc: "Single-mast inverted umbrella systems ideal for central courtyard gathering points.", image: "https://www.futuretensilestructure.com/uploaded-files/category/images/thumbs/Garden-Tensile-Umbrella69aa88d1c2f34-home-thumb-big.jpg", thumb: "https://www.futuretensilestructure.com/uploaded-files/category/images/thumbs/Garden-Tensile-Umbrella69aa88d1c2f34-home-thumb-big.jpg" },
  { id: "p30", slug: "tensile-light-weight-structure", name: "Tensile Light Weight Structure", category: "Lightweight", shortDesc: "Ultra lightweight tensioned membrane systems minimizing foundation weight requirements.", fullDesc: "Engineered lightweight tensile solutions for retrofitting existing building roofs and balcony cantilevers.", image: "https://www.futuretensilestructure.com/uploaded-files/category/images/thumbs/Tensile-Fabric-Structure-small.jpg", thumb: "https://www.futuretensilestructure.com/uploaded-files/category/images/thumbs/Tensile-Fabric-Structure-small.jpg" },
  { id: "p31", slug: "fabric-canopy-structure", name: "Fabric Canopy Structure", category: "Canopies", shortDesc: "Flexible architectural fabric canopies custom tailored to any layout requirement.", fullDesc: "Weatherproof fabric canopies delivering high UV shading and structural durability.", image: "https://www.futuretensilestructure.com/uploaded-files/category/images/thumbs/Outdoor-Tensile-Structure-large.jpg", thumb: "https://www.futuretensilestructure.com/uploaded-files/category/images/thumbs/Outdoor-Tensile-Structure-large.jpg" }
];

export const PROJECT_GALLERY: ProjectItem[] = [
  {
    id: "proj1",
    title: "Single Bay Fabric Parking Shade",
    category: "Parking Shades",
    image: "https://www.futuretensilestructure.com/uploaded-files/gallery/thumbs/gallery_69a2813d34b93-gallery-thumb-small.jpg",
    bigImage: "https://www.futuretensilestructure.com/uploaded-files/gallery/thumbs/gallery_69a2813d34b93-gallery-thumb-big.jpg"
  },
  {
    id: "proj2",
    title: "Double Span Fabric Parking Shade",
    category: "Parking Shades",
    image: "https://www.futuretensilestructure.com/uploaded-files/gallery/thumbs/gallery_69a282027045f-gallery-thumb-small.jpg",
    bigImage: "https://www.futuretensilestructure.com/uploaded-files/gallery/thumbs/gallery_69a282027045f-gallery-thumb-big.jpg"
  },
  {
    id: "proj3",
    title: "Steel Frame Parking Shade Structure",
    category: "Parking Shades",
    image: "https://www.futuretensilestructure.com/uploaded-files/gallery/thumbs/gallery_69a282e5c97f2-gallery-thumb-small.jpg",
    bigImage: "https://www.futuretensilestructure.com/uploaded-files/gallery/thumbs/gallery_69a282e5c97f2-gallery-thumb-big.jpg"
  },
  {
    id: "proj4",
    title: "Wall Mounted Fabric Parking Shade",
    category: "Parking Shades",
    image: "https://www.futuretensilestructure.com/uploaded-files/gallery/thumbs/gallery_69a28337c80f3-gallery-thumb-small.jpg",
    bigImage: "https://www.futuretensilestructure.com/uploaded-files/gallery/thumbs/gallery_69a28337c80f3-gallery-thumb-big.jpg"
  },
  {
    id: "proj5",
    title: "Driveway Side Fabric Parking Shade",
    category: "Parking Shades",
    image: "https://www.futuretensilestructure.com/uploaded-files/gallery/thumbs/gallery_69a28374e9f42-gallery-thumb-small.jpg",
    bigImage: "https://www.futuretensilestructure.com/uploaded-files/gallery/thumbs/gallery_69a28374e9f42-gallery-thumb-big.jpg"
  },
  {
    id: "proj6",
    title: "Row Style Parking Shade Structure",
    category: "Parking Shades",
    image: "https://www.futuretensilestructure.com/uploaded-files/gallery/thumbs/gallery_69a28386a0c13-gallery-thumb-small.jpg",
    bigImage: "https://www.futuretensilestructure.com/uploaded-files/gallery/thumbs/gallery_69a28386a0c13-gallery-thumb-big.jpg"
  },
  {
    id: "proj7",
    title: "Arched Polycarbonate Parking Shade Structure",
    category: "Polycarbonate",
    image: "https://www.futuretensilestructure.com/uploaded-files/gallery/thumbs/gallery_69a283a40dfd0-gallery-thumb-small.jpg",
    bigImage: "https://www.futuretensilestructure.com/uploaded-files/gallery/thumbs/gallery_69a283a40dfd0-gallery-thumb-big.jpg"
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "t1",
    author: "Rajesh Sharma",
    location: "Jaipur, Rajasthan",
    initial: "R",
    quote: "We wanted a unique outdoor dining space for our heritage resort, and the team delivered an absolutely stunning white shed structure. The gazebo tensile structures they installed not only look premium but have easily withstood the intense summer heat. Highly professional execution from start to finish."
  },
  {
    id: "t2",
    author: "Amit Patel",
    location: "Ahmedabad, Gujarat",
    initial: "A",
    quote: "Finding a reliable contractor for a large-scale car parking tensile structure was crucial for our new corporate hub. They provided a brilliant design that maximized our parking area and offered excellent weather protection for employee vehicles. Their installation was swift and didn't disrupt our daily operations."
  },
  {
    id: "t3",
    author: "Meena Verma",
    location: "Lucknow, UP",
    initial: "M",
    quote: "The new walkway tensile structure connecting our campus buildings has been a wonderful addition for the students, especially during the heavy monsoons. The engineering is top-notch, and the aesthetic blends perfectly with our school's modern architecture. We are incredibly pleased with the overall quality and safety."
  },
  {
    id: "t4",
    author: "Vikram Singh",
    location: "Bhopal, MP",
    initial: "V",
    quote: "As a leading tensile structure manufacturer, their technical expertise is truly unmatched. We collaborated on a complex stadium and airport tensile roofing project, and their attention to structural compliances and material quality was impressive. They managed to deliver the massive project exactly on schedule."
  },
  {
    id: "t5",
    author: "Anjali Menon",
    location: "Kochi, Kerala",
    initial: "A",
    quote: "Heavy seasonal rainfall is always a major concern for us, but the custom tensile shed they engineered for our open-air commercial plaza has been flawless. The heavy-duty fabric and robust steel framework give us complete peace of mind. Excellent after-sales support and clear communication throughout."
  },
  {
    id: "t6",
    author: "Sanjay Gupta",
    location: "Udaipur, Rajasthan",
    initial: "S",
    quote: "We needed a striking semi-permanent venue to host luxury weddings. The tensile dome structure they designed is nothing short of spectacular. It creates a massive, pillar-less interior space that our high-end clients absolutely love. The fabrication quality and architectural beauty truly justify our investment."
  }
];

export const BLOGS_LIST: BlogItem[] = [
  {
    id: "b1",
    slug: "how-long-does-a-walkway-tensile-structure-last-a-complete-maintenance-guide",
    title: "How Long Does A Walkway Tensile Structure Last? A Complete Maintenance Guide",
    date: "10 February, 2026",
    author: "Future Tensile Team",
    category: "Maintenance & Engineering",
    image: "https://www.futuretensilestructure.com/uploaded-files/blog/images/thumbs/how-long-does-a-walkway-tensile-structure-last-a-complete-maintenance-guide69a27623a6bc6-blog.jpg",
    excerpt: "Walkway tensile structures are an increasingly popular choice for connecting buildings, protecting pedestrians from rain and sun, and adding modern aesthetic value...",
    content: `Walkway tensile structures are engineered for long lifespans, typically lasting between 15 to 30 years depending on the fabric membrane material used (PVC, PVDF, or PTFE). Proper installation and regular maintenance routines are essential to maximize durability.

Key factors influencing lifespan:
1. Membrane Fabric Quality (PVDF vs PTFE)
2. Structural Steel Frame Galvanization & Powder Coating
3. Tension Cable Calibration and Tightening
4. Routine Cleaning to Remove Atmospheric Pollution

By keeping tension cables properly adjusted and removing debris regularly, property owners can ensure their walkway tensile structure maintains its vibrant aesthetic and weather resistance for decades.`
  },
  {
    id: "b2",
    slug: "are-you-ready-to-upgrade-your-resort-with-a-gazebo-tensile-structure",
    title: "Are You Ready To Upgrade Your Resort With A Gazebo Tensile Structure?",
    date: "10 February, 2026",
    author: "Future Tensile Team",
    category: "Resort Architecture",
    image: "https://www.futuretensilestructure.com/uploaded-files/blog/images/thumbs/are-you-ready-to-upgrade-your-resort-with-a-gazebo-tensile-structure69a275d4555ca-blog.jpg",
    excerpt: "Hospitality and resort destinations require outdoor structures that combine weather protection with captivating visual appeal. Learn how tensile gazebos transform guest experiences...",
    content: `In modern hospitality management, outdoor dining and leisure spaces serve as major revenue drivers. Gazebo Tensile Structures deliver column-free open-air dining pavilions that protect guests from sun glares and rain while offering uninterrupted views.

Benefits for Resort Owners:
- All-weather outdoor dining capacity
- Rapid modular installation without heavy masonry construction
- High UV reflectance for comfortable ambient cooling
- Distinctive architectural shapes that look stunning in promotional photography`
  },
  {
    id: "b3",
    slug: "how-a-car-parking-tensile-structure-boosts-the-value-of-commercial-properties",
    title: "How A Car Parking Tensile Structure Boosts The Value Of Commercial Properties?",
    date: "10 February, 2026",
    author: "Future Tensile Team",
    category: "Commercial Real Estate",
    image: "https://www.futuretensilestructure.com/uploaded-files/blog/images/thumbs/how-a-car-parking-tensile-structure-boosts-the-value-of-commercial-properties69a2755d30bfa-blog.jpg",
    excerpt: "Leaving tenant and visitor vehicles exposed to extreme solar heat damages car interiors and paint. Discover how Tensile Parking Shades add tangible property value...",
    content: `Commercial real estate investors understand that tenant satisfaction begins at the parking lot. Car Parking Tensile Structures protect vehicles against UV thermal breakdown, hail, and tree sap while elevating property curb appeal.

Why Commercial Properties Choose Tensile Shades:
- High vehicle capacity coverage with minimal ground column obstruction
- Long-term ROI through reduced asset maintenance
- Modern architectural aesthetic that attracts premium corporate tenants`
  }
];

export const STATISTICS_COUNTERS = [
  { count: 200, label: "Happy Clients", suffix: "+" },
  { count: 254, label: "Completed Projects", suffix: "+" },
  { count: 25, label: "Year Of Experience", suffix: "+" },
  { count: 300, label: "Cities Served", suffix: "+" }
];

export const MISSION_VISION_VALUES = [
  {
    title: "Mission",
    desc: "To provide innovative, durable, and sustainable tensile shading solutions that empower architects and developers.",
    icon: "Target"
  },
  {
    title: "Vision",
    desc: "To lead the Indian tensile industry by becoming the most trusted partner for turnkey infrastructure.",
    icon: "Eye"
  },
  {
    title: "Value",
    desc: "Integrity in materials, transparency in pricing, and a commitment to engineering excellence.",
    icon: "ShieldCheck"
  },
  {
    title: "Goal",
    desc: "To expand our footprint across Rajasthan, Gujarat, and beyond, delivering 100% client satisfaction.",
    icon: "Flag"
  }
];
