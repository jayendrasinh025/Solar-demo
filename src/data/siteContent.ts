export type RouteId =
  | 'home'
  | 'about'
  | 'solutions'
  | 'residential'
  | 'commercial'
  | 'industrial'
  | 'ground-mounted'
  | 'battery-hybrid'
  | 'projects'
  | 'calculator'
  | 'contact';

export interface RouteMeta {
  id: RouteId;
  path: string;
  label: string;
  title: string;
  description: string;
}

export const IMAGES = {
  heroArchitecture: '/src/assets/images/hero_solar_architecture_1794745672029.jpg',
  residentialRooftop: '/src/assets/images/residential_rooftop_solar_1794745672196.jpg',
  commercialIndustrial: '/src/assets/images/commercial_industrial_solar_1794745673895.jpg',
  groundMountedPark: '/src/assets/images/ground_mounted_solar_park_1794745674821.jpg',
  batteryHybrid: '/src/assets/images/battery_hybrid_storage_1794745675924.jpg',
};

export const COMPANY_INFO = {
  name: 'Jangid Solar Energy Pvt. Ltd.',
  shortName: 'Jangid Solar',
  website: 'https://jangidsolar.com/',
  phones: ['+91 93138 04410', '+91 93138 04411'],
  whatsappNumber: '919313804410',
  email: 'enquiry@jangidsolar.com',
  corporateOffice: {
    label: 'Corporate Office',
    address:
      'Svayam Sapphire, D-201–203, Anand–Sojitra Road, Opposite Elecon Engineering (Beside Rollcon), Vithal Udyognagar, Vallabh Vidyanagar, Anand – 388120, Gujarat, India',
  },
  registeredOffice: {
    label: 'Registered / GIDC Facility',
    address:
      'Plot No. K-1, 442/5, G.I.D.C., Vithal Udyognagar, Anand – 388121, Gujarat, India',
  },
  regionServed: 'Anand, Gujarat & Pan-India EPC Execution',
};

export const ROUTE_META: Record<RouteId, RouteMeta> = {
  home: {
    id: 'home',
    path: '/',
    label: 'Home',
    title: 'Jangid Solar Energy Pvt. Ltd. — Powering a Brighter Tomorrow',
    description:
      'Intelligent solar EPC solutions for homes, businesses, and industries. Transition to cleaner, smarter energy with Jangid Solar Energy Pvt. Ltd.',
  },
  about: {
    id: 'about',
    path: '/about',
    label: 'About',
    title: 'About Us — Jangid Solar Energy Pvt. Ltd.',
    description:
      'Learn how Jangid Solar Energy Pvt. Ltd. delivers end-to-end solar EPC solutions across residential, commercial, industrial, and ground-mounted applications.',
  },
  solutions: {
    id: 'solutions',
    path: '/solutions',
    label: 'Solutions',
    title: 'Solar EPC Solutions — Jangid Solar Energy Pvt. Ltd.',
    description:
      'Explore comprehensive solar engineering solutions: Residential Rooftop, Commercial, Industrial, Ground-Mounted Solar Parks, and Battery Hybrid Systems.',
  },
  residential: {
    id: 'residential',
    path: '/solutions/residential',
    label: 'Residential Solar',
    title: 'Residential Rooftop Solar Systems — Jangid Solar Energy',
    description:
      'Custom-engineered residential rooftop solar systems designed for architectural harmony, reduced household electricity bills, and long-term reliability.',
  },
  commercial: {
    id: 'commercial',
    path: '/solutions/commercial',
    label: 'Commercial Solar',
    title: 'Commercial Solar Solutions — Jangid Solar Energy Pvt. Ltd.',
    description:
      'Intelligent solar energy installations for corporate offices, retail spaces, hospitals, educational institutions, and commercial buildings.',
  },
  industrial: {
    id: 'industrial',
    path: '/solutions/industrial',
    label: 'Industrial Solar',
    title: 'Industrial Solar EPC Solutions — Jangid Solar Energy Pvt. Ltd.',
    description:
      'Heavy-duty solar power plants for manufacturing facilities, GIDC industrial sheds, warehouses, and processing units.',
  },
  'ground-mounted': {
    id: 'ground-mounted',
    path: '/solutions/ground-mounted',
    label: 'Ground-Mounted Solar',
    title: 'Ground-Mounted Solar Power Plants — Jangid Solar Energy',
    description:
      'Turnkey land-based and utility-scale ground-mounted solar installations engineered for captive power and open-access generation.',
  },
  'battery-hybrid': {
    id: 'battery-hybrid',
    path: '/solutions/battery-hybrid',
    label: 'Battery & Hybrid Systems',
    title: 'Battery Energy Storage & Hybrid Solar — Jangid Solar Energy',
    description:
      'Integrated Battery Energy Storage Systems (BESS) and hybrid solar configurations for uninterrupted power continuity and load management.',
  },
  projects: {
    id: 'projects',
    path: '/projects',
    label: 'Projects',
    title: 'Project Portfolio — Jangid Solar Energy Pvt. Ltd.',
    description:
      'Explore solar EPC installations across Residential, Commercial, Industrial, and Ground-Mounted sectors executed by Jangid Solar Energy Pvt. Ltd.',
  },
  calculator: {
    id: 'calculator',
    path: '/calculator',
    label: 'Calculator',
    title: 'Solar Savings & Capacity Calculator — Jangid Solar Energy',
    description:
      'Estimate your recommended solar system capacity, monthly energy generation, and potential electricity bill savings with transparent engineering assumptions.',
  },
  contact: {
    id: 'contact',
    path: '/contact',
    label: 'Contact',
    title: 'Contact & Consultation — Jangid Solar Energy Pvt. Ltd.',
    description:
      'Connect with Jangid Solar Energy Pvt. Ltd. in Vallabh Vidyanagar, Anand, Gujarat for a site assessment and tailored solar engineering proposal.',
  },
};

export interface SolutionDetail {
  id: RouteId;
  number: string;
  title: string;
  shortTitle: string;
  subtitle: string;
  shortDescription: string;
  overview: string;
  image: string;
  secondaryImage: string;
  applications: string[];
  benefits: {
    title: string;
    description: string;
  }[];
  engineeringSpecs: {
    label: string;
    value: string;
  }[];
  planningSteps: {
    step: string;
    title: string;
    detail: string;
  }[];
}

export const SOLAR_SOLUTIONS_HOME = [
  {
    id: 'residential' as RouteId,
    number: '01',
    title: 'Residential Solar',
    category: 'Home Rooftop Systems',
    description:
      'Custom-engineered rooftop and pergola solar arrays that integrate cleanly with your home architecture while reducing monthly utility bills.',
    image: IMAGES.residentialRooftop,
  },
  {
    id: 'commercial' as RouteId,
    number: '02',
    title: 'Commercial Solar',
    category: 'Offices & Institutions',
    description:
      'Structured rooftop and carport solar systems for corporate buildings, hospitals, campuses, and showrooms seeking predictable daytime power costs.',
    image: IMAGES.heroArchitecture,
  },
  {
    id: 'industrial' as RouteId,
    number: '03',
    title: 'Industrial Solar',
    category: 'Factories & Warehouses',
    description:
      'High-capacity EPC installations engineered for industrial sheds, manufacturing plants, and heavy electrical loads with strict structural compliance.',
    image: IMAGES.commercialIndustrial,
  },
  {
    id: 'ground-mounted' as RouteId,
    number: '04',
    title: 'Ground Mounted Solar',
    category: 'Captive & Utility Scale',
    description:
      'Turnkey land-based photovoltaic power plants with site-specific soil testing, galvanized mounting structures, and grid evacuation infrastructure.',
    image: IMAGES.groundMountedPark,
  },
  {
    id: 'battery-hybrid' as RouteId,
    number: '05',
    title: 'Battery Energy Storage',
    category: 'BESS & Backup Continuity',
    description:
      'Modular energy storage architectures that store daytime solar generation for evening peak loads and seamless backup during grid outages.',
    image: IMAGES.batteryHybrid,
  },
  {
    id: 'battery-hybrid' as RouteId,
    number: '06',
    title: 'Hybrid Solar Systems',
    category: 'Grid + Storage Synchronization',
    description:
      'Bi-directional hybrid inverters combining grid net-metering with dedicated battery banks for critical residential and commercial operations.',
    image: IMAGES.batteryHybrid,
  },
];

export const DETAILED_SOLUTIONS: Record<
  'residential' | 'commercial' | 'industrial' | 'ground-mounted' | 'battery-hybrid',
  SolutionDetail
> = {
  residential: {
    id: 'residential',
    number: '01',
    title: 'Residential Rooftop Solar',
    shortTitle: 'Residential Solar',
    subtitle: 'Architectural solar systems tailored for modern Indian homes, villas, and residential societies.',
    shortDescription:
      'Turn your unshaded terrace into a quiet, dependable clean power station designed around your household consumption profile.',
    overview:
      'Jangid Solar designs and installs residential solar systems that respect both structural integrity and architectural aesthetics. From elevated terrace structures that preserve usable roof space to flush-mounted arrays on sloped roofs, our engineering team manages the complete lifecycle—from shadow analysis and structural fabrication to DISCOM net-metering documentation.',
    image: IMAGES.residentialRooftop,
    secondaryImage: IMAGES.heroArchitecture,
    applications: [
      'Independent bungalows, row houses, and luxury villas',
      'Elevated pergola and usable terrace solar structures',
      'Common-utility loads for residential apartment societies (lifts, water pumps, corridor lighting)',
      'Farmhouses and rural residences requiring grid-interactive or hybrid backup',
    ],
    benefits: [
      {
        title: 'Lower Monthly Electricity Outflow',
        description:
          'Offset daytime household consumption from air conditioning, water heating, and appliances through net-metered solar generation.',
      },
      {
        title: 'Usable Terrace Preservation',
        description:
          'Custom-fabricated elevated mounting structures allow homeowners to retain shaded terrace space underneath the solar array.',
      },
      {
        title: 'End-to-End Net Metering Liaison',
        description:
          'Complete handling of utility application, bi-directional meter coordination, and electrical safety inspection paperwork.',
      },
      {
        title: 'Weather-Resilient Structure',
        description:
          'Hot-dip galvanized and anodized mounting hardware engineered for regional wind loads and monsoon corrosion resistance.',
      },
    ],
    engineeringSpecs: [
      { label: 'System Configurations', value: 'On-Grid Net Metered · Hybrid with Battery' },
      { label: 'Mounting Options', value: 'RCC Ballasted · Elevated Pergola · Sloped Roof Rail' },
      { label: 'Module Technology', value: 'High-Efficiency Mono-PERC / TOPCon Bifacial' },
      { label: 'Monitoring', value: 'App & Web Portal Generation Tracking' },
    ],
    planningSteps: [
      {
        step: '01',
        title: 'Bill & Sanctioned Load Review',
        detail: 'We analyze 12 months of household electricity bills to match system capacity with your consumption and sanctioned load.',
      },
      {
        step: '02',
        title: '3D Shadow & Terrace Layout',
        detail: 'Our site engineers map parapet walls, water tanks, and adjacent buildings to ensure unshaded solar exposure across seasons.',
      },
      {
        step: '03',
        title: 'Precision Installation & Commissioning',
        detail: 'Clean conduit routing, DC/AC surge protection, earthing pits, and utility meter synchronization.',
      },
    ],
  },
  commercial: {
    id: 'commercial',
    number: '02',
    title: 'Commercial Solar Solutions',
    shortTitle: 'Commercial Solar',
    subtitle: 'Smart daytime energy generation for offices, commercial complexes, hospitals, hotels, and educational campuses.',
    shortDescription:
      'Align peak solar generation with peak daytime business operations to stabilize long-term operating expenses.',
    overview:
      'Commercial establishments operate primarily during daylight hours—when air conditioning, lighting, elevators, and IT infrastructure draw maximum power. Jangid Solar engineers commercial photovoltaic systems that directly feed these daytime loads, reducing dependency on high-tariff commercial grid electricity while strengthening corporate sustainability commitments.',
    image: IMAGES.heroArchitecture,
    secondaryImage: IMAGES.commercialIndustrial,
    applications: [
      'Corporate offices, IT parks, and business centers',
      'Hospitals, diagnostic centers, and healthcare campuses',
      'Schools, colleges, and university buildings',
      'Hotels, resorts, retail showrooms, and solar carports',
    ],
    benefits: [
      {
        title: 'Daytime Load Synchronization',
        description:
          'Solar generation curves naturally peak between 10:00 AM and 4:00 PM, matching commercial HVAC and operational demand.',
      },
      {
        title: 'Predictable Energy Budgeting',
        description:
          'Hedge against periodic commercial electricity tariff revisions by generating a substantial share of power on-site.',
      },
      {
        title: 'Architectural & Carport Integration',
        description:
          'Transform open parking lots and commercial rooftops into dual-purpose shaded power generation structures.',
      },
      {
        title: 'Minimal Operational Disruption',
        description:
          'Phased execution and non-intrusive electrical tie-ins scheduled around active business hours.',
      },
    ],
    engineeringSpecs: [
      { label: 'Deployment Types', value: 'RCC Commercial Rooftop · Solar Carports · Facade/Canopy' },
      { label: 'Grid Integration', value: 'LT / HT Synchronization with Protection Relays' },
      { label: 'Safety Compliance', value: 'DC/AC SPD · Dedicated Earthing · Fire-Safe Cable Trays' },
      { label: 'O&M Support', value: 'Scheduled Preventive Maintenance & Remote Diagnostics' },
    ],
    planningSteps: [
      {
        step: '01',
        title: 'Daytime Load & Tariff Audit',
        detail: 'Evaluation of contract demand, time-of-use billing, and transformer capacity.',
      },
      {
        step: '02',
        title: 'Structural & Electrical Engineering',
        detail: 'Detailed single-line diagrams (SLD), cable sizing, and wind-load structural design for flat or metal roofs.',
      },
      {
        step: '03',
        title: 'Turnkey Execution & Handover',
        detail: 'Installation, CEIG/utility approvals where applicable, and facility team training.',
      },
    ],
  },
  industrial: {
    id: 'industrial',
    number: '03',
    title: 'Industrial Solar EPC',
    shortTitle: 'Industrial Solar',
    subtitle: 'High-capacity solar power plants engineered for factories, GIDC manufacturing units, warehouses, and processing plants.',
    shortDescription:
      'Transform expansive industrial sheds and plant rooftops into productive captive energy assets.',
    overview:
      'For manufacturing and industrial enterprises, energy is a critical production input. Based in the industrial hub of Vithal Udyognagar, Anand, Jangid Solar brings deep hands-on EPC experience across factory rooftops, PEB metal sheds, and industrial estates. We engineer robust, safety-first solar installations that withstand industrial environments while delivering dependable captive power.',
    image: IMAGES.commercialIndustrial,
    secondaryImage: IMAGES.groundMountedPark,
    applications: [
      'Engineering, fabrication, and machine manufacturing plants',
      'PEB (Pre-Engineered Building) metal sheet industrial sheds',
      'Cold storages, food processing, and packaging facilities',
      'Chemical, textile, plastic, and pharmaceutical manufacturing units',
    ],
    benefits: [
      {
        title: 'Reduced Production Energy Cost',
        description:
          'Lower per-unit power costs for continuous daytime machinery and plant utility operations.',
      },
      {
        title: 'Non-Penetrative Metal Roof Mounting',
        description:
          'Specialized standing-seam and trapezoidal rail mounting systems that protect industrial roof waterproofing.',
      },
      {
        title: 'Thermal Insulation Co-Benefit',
        description:
          'Rooftop solar arrays absorb direct solar radiation, helping reduce ambient heat build-up inside industrial sheds.',
      },
      {
        title: 'Industrial-Grade Electrical Safety',
        description:
          'Walkways, lifeline safety cables, UV-resistant conduits, and multi-inverter string level monitoring.',
      },
    ],
    engineeringSpecs: [
      { label: 'Roof Compatibility', value: 'PEB Metal Sheet · Standing Seam · Industrial RCC' },
      { label: 'Access & Safety', value: 'FRP Walkways · Safety Lifelines · Module Cleaning Lines' },
      { label: 'Grid Synchronization', value: 'DG-PV Sync Controllers · HT/LT Panel Integration' },
      { label: 'Compliance', value: 'GEDA / DISCOM / CEIG Statutory Documentation Support' },
    ],
    planningSteps: [
      {
        step: '01',
        title: 'Plant Load & Structural Stability Survey',
        detail: 'Assessment of purlin spacing, roof sheet thickness, crane vibration, and HT/LT electrical panels.',
      },
      {
        step: '02',
        title: 'Custom EPC Engineering & Procurement',
        detail: 'Selection of Tier-1 modules, industrial string/central inverters, and corrosion-resistant mounting rails.',
      },
      {
        step: '03',
        title: 'Zero-Downtime Commissioning',
        detail: 'Strict adherence to plant EHS protocols, DG synchronization testing, and statutory commissioning.',
      },
    ],
  },
  'ground-mounted': {
    id: 'ground-mounted',
    number: '04',
    title: 'Ground-Mounted Solar Plants',
    shortTitle: 'Ground-Mounted Solar',
    subtitle: 'Turnkey land-based solar power installations for captive industrial consumption and utility-scale generation.',
    shortDescription:
      'Engineered from soil testing to substation evacuation for organizations with open land parcels or high energy demand.',
    overview:
      'When rooftop area is insufficient for an organization’s energy requirements—or when unused land parcels can be converted into long-term power generation assets—Jangid Solar delivers complete turnkey Ground-Mounted Solar EPC solutions. Our scope spans topographical surveying, geotechnical soil testing, pile foundation work, module mounting structures, inverter stations, and grid evacuation.',
    image: IMAGES.groundMountedPark,
    secondaryImage: IMAGES.commercialIndustrial,
    applications: [
      'Captive solar power plants for high-consumption industries',
      'Open-access and group-captive solar installations',
      'Unused industrial campus land and peripheral buffer zones',
      'Agricultural and decentralized renewable energy projects',
    ],
    benefits: [
      {
        title: 'Unconstrained Capacity Scaling',
        description:
          'Scale system capacity beyond rooftop limits with optimal south-facing tilt angles and row-to-row pitch spacing.',
      },
      {
        title: 'Geotechnical & Structural Precision',
        description:
          'Foundations and hot-dip galvanized structures engineered specifically for local soil bearing capacity and wind zones.',
      },
      {
        title: 'Ease of Cleaning & Maintenance',
        description:
          'Ground-level access pathways enable systematic dry/wet module cleaning and rapid preventive inspections.',
      },
      {
        title: 'Complete Balance of System (BoS)',
        description:
          'Integrated execution including civil foundations, inverter rooms, step-up transformers, cables, and perimeter fencing.',
      },
    ],
    engineeringSpecs: [
      { label: 'Structure Options', value: 'Fixed-Tilt Galvalume / HDG · Seasonal Tilt' },
      { label: 'Civil Engineering', value: 'Geotechnical Soil Testing · Pile / Ramming Foundations' },
      { label: 'Electrical BoS', value: 'String / Central Inverters · Transformer Yard · SCADA' },
      { label: 'Land Planning', value: 'Optimized Pitch Ratio to Minimize Inter-Row Shading' },
    ],
    planningSteps: [
      {
        step: '01',
        title: 'Topographical & Soil Investigation',
        detail: 'Contour mapping, soil resistivity, pull-out testing, and nearest substation evacuation feasibility.',
      },
      {
        step: '02',
        title: 'Civil, Structural & Electrical Design',
        detail: 'Detailed PVsyst yield modeling, foundation piling layout, drainage planning, and HT evacuation engineering.',
      },
      {
        step: '03',
        title: 'Turnkey Construction & Synchronization',
        detail: 'End-to-end civil construction, mechanical erection, electrical testing, and grid synchronization.',
      },
    ],
  },
  'battery-hybrid': {
    id: 'battery-hybrid',
    number: '05',
    title: 'Battery Storage & Hybrid Solutions',
    shortTitle: 'Battery & Hybrid',
    subtitle: 'Intelligent hybrid solar and Battery Energy Storage Systems (BESS) for continuous, resilient power.',
    shortDescription:
      'Combine daytime solar generation with intelligent energy storage for backup reliability and evening load support.',
    overview:
      'Standard on-grid solar systems automatically shut down during utility power outages for grid safety. Hybrid solar systems and Battery Energy Storage Systems (BESS) bridge this gap by combining photovoltaic generation with dedicated battery banks and smart bi-directional inverters. Jangid Solar configures storage solutions for residences, clinics, commercial offices, and industrial critical loads.',
    image: IMAGES.batteryHybrid,
    secondaryImage: IMAGES.residentialRooftop,
    applications: [
      'Residences and farmhouses experiencing periodic grid interruptions',
      'Hospitals, clinics, laboratories, and cold-chain storage units',
      'Commercial offices, server rooms, and banking branches',
      'Industrial critical control lines and peak-load management',
    ],
    benefits: [
      {
        title: 'Seamless Outage Transition',
        description:
          'Automatic switchover keeps essential lighting, medical equipment, servers, and appliances running when the grid goes down.',
      },
      {
        title: 'Evening Solar Self-Consumption',
        description:
          'Store surplus midday solar energy in battery modules and discharge it during evening hours.',
      },
      {
        title: 'Reduced Diesel Generator Dependence',
        description:
          'Cut noise, fumes, and recurring fuel expenses by replacing or supplementing conventional backup generators.',
      },
      {
        title: 'Intelligent Energy Management',
        description:
          'Programmable priority modes (Solar First, Grid + Solar, Backup Reserve) accessible via digital monitoring.',
      },
    ],
    engineeringSpecs: [
      { label: 'System Architecture', value: 'AC-Coupled BESS · DC-Coupled Hybrid Inverters' },
      { label: 'Battery Chemistry', value: 'Lithium Iron Phosphate (LFP) Modular Rack / Wall Units' },
      { label: 'Load Segregation', value: 'Dedicated Critical Load Sub-Panel & Auto-Changeover' },
      { label: 'Protection', value: 'Integrated BMS · Thermal & Overcurrent Protection' },
    ],
    planningSteps: [
      {
        step: '01',
        title: 'Critical Load & Backup Duration Audit',
        detail: 'Identification of essential appliances/machinery, surge starting currents, and required hours of autonomy.',
      },
      {
        step: '02',
        title: 'Inverter & Storage Bank Sizing',
        detail: 'Matching solar array kWp, hybrid inverter kVA rating, and usable battery kWh capacity.',
      },
      {
        step: '03',
        title: 'Critical Sub-Panel Wiring & Testing',
        detail: 'Clean segregation of critical and non-critical circuits followed by simulated grid-failover testing.',
      },
    ],
  },
};

export interface ProjectItem {
  id: string;
  title: string;
  category: 'Residential' | 'Commercial' | 'Industrial' | 'Ground Mounted';
  location: string;
  systemHighlight: string;
  description: string;
  scope: string;
  image: string;
}

export const PORTFOLIO_PROJECTS: ProjectItem[] = [
  {
    id: 'ind-anand-manufacturing',
    title: 'Industrial Manufacturing Facility Rooftop EPC',
    category: 'Industrial',
    location: 'Vithal Udyognagar, Anand, Gujarat',
    systemHighlight: 'Grid-Connected Industrial Rooftop',
    description:
      'Precision-engineered solar installation across industrial manufacturing sheds in Vithal Udyognagar, designed with non-penetrative rail mounting, FRP maintenance walkways, and LT panel synchronization to offset daytime machinery loads.',
    scope: 'Site Survey · Structural Design · Procurement · Installation · Net Metering',
    image: IMAGES.commercialIndustrial,
  },
  {
    id: 'ind-surat-captive',
    title: 'Heavy Industrial Captive Solar Installation',
    category: 'Industrial',
    location: 'Surat Region, Gujarat',
    systemHighlight: '2.5 MW Captive Industrial Plant',
    description:
      'High-capacity industrial solar deployment executed for continuous manufacturing operations, incorporating string-level diagnostics, corrosion-resistant mounting structures, and high-voltage grid synchronization.',
    scope: 'Turnkey EPC · HT Synchronization · Safety Lifelines · O&M Support',
    image: IMAGES.commercialIndustrial,
  },
  {
    id: 'gm-gujarat-utility',
    title: 'Utility & Captive Ground-Mounted Solar Park',
    category: 'Ground Mounted',
    location: 'Gujarat, India',
    systemHighlight: '5 MW Ground-Mounted Array',
    description:
      'Land-based photovoltaic power plant built with geotechnical pile foundations, hot-dip galvanized fixed-tilt module tables, central inverter stations, and dedicated transformer evacuation.',
    scope: 'Soil Testing · Civil Piling · Mechanical Erection · Grid Evacuation',
    image: IMAGES.groundMountedPark,
  },
  {
    id: 'res-vallabh-vidyanagar',
    title: 'Contemporary Residence Elevated Solar Pergola',
    category: 'Residential',
    location: 'Vallabh Vidyanagar, Anand, Gujarat',
    systemHighlight: 'Elevated Usable-Terrace Array',
    description:
      'Custom elevated rooftop solar structure for a modern private residence, preserving shaded terrace space below while powering household air conditioning and daily appliances via DISCOM net metering.',
    scope: '3D Shadow Mapping · Custom Pergola Structure · Bi-Directional Metering',
    image: IMAGES.residentialRooftop,
  },
  {
    id: 'com-corporate-campus',
    title: 'Commercial Office & Institutional Rooftop Array',
    category: 'Commercial',
    location: 'Central Gujarat',
    systemHighlight: 'Daytime HVAC & Office Load Offset',
    description:
      'Architectural solar array integrated onto a multi-story commercial building to match peak daytime air-conditioning and office equipment demand with clean on-site power generation.',
    scope: 'Load Profile Audit · Ballasted RCC Mounting · Remote Monitoring',
    image: IMAGES.heroArchitecture,
  },
  {
    id: 'com-hybrid-storage-facility',
    title: 'Commercial Hybrid & Battery Storage Installation',
    category: 'Commercial',
    location: 'Anand–Vadodara Corridor, Gujarat',
    systemHighlight: 'Hybrid Solar + LFP Battery Backup',
    description:
      'Integrated solar PV and modular battery energy storage system designed to maintain uninterrupted power for critical commercial servers, lighting, and administrative operations.',
    scope: 'Critical Load Segregation · Hybrid Inverter Setup · BESS Commissioning',
    image: IMAGES.batteryHybrid,
  },
  {
    id: 'res-charotar-villa',
    title: 'Private Villa Grid-Interactive Rooftop System',
    category: 'Residential',
    location: 'Anand District, Gujarat',
    systemHighlight: 'Mono-PERC Residential Rooftop',
    description:
      'Clean, low-profile rooftop solar installation engineered for high wind resistance and year-round generation efficiency across Gujarat’s sunny climate.',
    scope: 'Consultation · Rooftop Installation · Utility Net-Metering Liaison',
    image: IMAGES.residentialRooftop,
  },
  {
    id: 'gm-captive-feeder',
    title: 'Decentralized Open-Land Solar Installation',
    category: 'Ground Mounted',
    location: 'Saurashtra & Central Gujarat',
    systemHighlight: 'Land-Based Solar EPC',
    description:
      'Turnkey ground-mounted solar deployment turning unutilized land parcels into structured, easily maintainable clean energy generation feeders.',
    scope: 'Land Contour Survey · Galvanized Table Erection · Commissioning',
    image: IMAGES.groundMountedPark,
  },
];

export const INSTALLATION_PROCESS = [
  {
    number: '01',
    title: 'Consultation',
    description:
      'We review your historical electricity bills, sanctioned load, tariff category, and long-term energy objectives to establish a realistic baseline.',
  },
  {
    number: '02',
    title: 'Site Assessment',
    description:
      'Our engineers conduct a physical inspection of roof or land geometry, structural load capacity, shading obstacles, and electrical termination points.',
  },
  {
    number: '03',
    title: 'System Design',
    description:
      'We prepare 3D module layouts, shadow simulations, structural wind-load drawings, and electrical single-line diagrams tailored to your property.',
  },
  {
    number: '04',
    title: 'Installation',
    description:
      'Certified technicians execute mounting structure erection, Tier-1 module placement, weather-sealed DC/AC cabling, earthing, and surge protection.',
  },
  {
    number: '05',
    title: 'Commissioning',
    description:
      'We perform string testing, inverter synchronization, safety verification, and coordinate bi-directional net-metering or statutory utility approvals.',
  },
  {
    number: '06',
    title: 'Support',
    description:
      'Post-handover digital generation monitoring, scheduled preventive inspections, and responsive local engineering support from our team.',
  },
];
