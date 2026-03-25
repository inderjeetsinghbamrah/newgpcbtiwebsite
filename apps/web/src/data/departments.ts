export interface FacultyMember {
  name: string;
  designation: string;
  qualification: string;
  areaOfInterest: string;
  email: string;
  phone: string;
  photo?: string;
  isHod?: boolean;
}

export interface Lab {
  name: string;
  equipment: string[];
  description: string;
}

export interface SyllabusLink {
  batch: string;
  url: string;
}

export type DepartmentSegment = "engineering" | "pharmacy" | "common";

export interface Department {
  id: string;
  title: string;
  shortName: string;
  icon: string;
  segment: DepartmentSegment;
  established: string;
  seats: number;
  duration: string;
  introduction: string;
  hodMessage: string;
  keyFeatures: string[];
  keySkills: string[];
  programOutcomes: string[];
  faculty: FacultyMember[];
  labs: Lab[];
  syllabusLinks: SyllabusLink[];
}

const departments: Department[] = [
  // ─── ENGINEERING DEPARTMENTS ───────────────────────────────
  {
    id: "arch",
    title: "Architectural Assistantship",
    shortName: "ARCH",
    icon: "🏛️",
    segment: "engineering",
    established: "1985",
    seats: 40,
    duration: "3 Years (6 Semesters)",
    introduction:
        "The Department of Architectural Assistantship trains students in architectural drafting, building design, construction supervision, and interior design. Students learn to assist architects and civil engineers in preparing drawings, 3D models, and project documentation using modern CAD tools. The program blends creativity with technical precision, preparing graduates for careers in architecture firms, construction companies, and urban planning bodies.",
    hodMessage:
        "Architecture shapes the built environment around us. Our department aims to develop skilled professionals who can bridge the gap between architectural vision and construction reality. We emphasize hands-on drafting, model-making, and site exposure. — HOD, Architectural Assistantship",
    keyFeatures: [
      "Dedicated architectural drafting studio",
      "AutoCAD, SketchUp, and Revit software labs",
      "Model-making and 3D printing workshop",
      "Regular site visits to architectural landmarks",
      "Interior design and landscape design modules",
      "Building construction material display gallery",
    ],
    keySkills: [
      "Architectural Drafting & Detailing",
      "AutoCAD, SketchUp & Revit BIM",
      "Building Construction Techniques",
      "Interior Design Fundamentals",
      "Model Making & 3D Visualization",
      "Estimation & Quantity Surveying",
      "Town Planning & Landscape Design",
    ],
    programOutcomes: [
      "Prepare architectural drawings and construction details using CAD",
      "Assist in building design and documentation processes",
      "Understand structural systems and building materials",
      "Create physical and digital architectural models",
      "Apply building bye-laws and NBC codes",
      "Work professionally in architecture and construction firms",
    ],
    faculty: [
      {
        name: "Er. Amarjit Singh",
        designation: "Head of Department",
        qualification: "M.Arch, B.Arch",
        areaOfInterest: "Building Design, Urban Planning",
        email: "amarjit.arch@gpcbathinda.ac.in",
        phone: "+91-98140-XXXXX",
        isHod: true,
      },
      {
        name: "Er. Priya Sharma",
        designation: "Lecturer",
        qualification: "B.Arch, M.Tech (Construction Mgmt)",
        areaOfInterest: "Interior Design, CAD Drafting",
        email: "priya.arch@gpcbathinda.ac.in",
        phone: "+91-94170-XXXXX",
      },
      {
        name: "Er. Vikram Patel",
        designation: "Lecturer",
        qualification: "B.Arch",
        areaOfInterest: "Building Construction, Estimation",
        email: "vikram.arch@gpcbathinda.ac.in",
        phone: "+91-98760-XXXXX",
      },
    ],
    labs: [
      {
        name: "Architectural Drafting Studio",
        description: "Spacious studio with drafting tables, T-squares, and drawing instruments for manual drafting exercises.",
        equipment: ["Drafting Tables", "T-Squares", "Mini Drafter", "Drawing Instruments", "Tracing Paper Rolls"],
      },
      {
        name: "CAD Lab",
        description: "Computer lab with AutoCAD, SketchUp Pro, Revit, and Lumion for digital design and rendering.",
        equipment: ["HP Workstations", "AutoCAD 2024", "SketchUp Pro", "Revit BIM", "Lumion Renderer"],
      },
      {
        name: "Model Making Workshop",
        description: "Workshop for creating architectural scale models using various materials and 3D printing.",
        equipment: ["3D Printer", "Laser Cutter", "Foam Board Cutter", "Scale Models Kit", "Balsa Wood Tools"],
      },
    ],
    syllabusLinks: [
      { batch: "2024-27 Batch", url: "#" },
      { batch: "2023-26 Batch", url: "#" },
      { batch: "2022-25 Batch", url: "#" },
    ],
  },
  {
    id: "civil",
    title: "Civil Engineering",
    shortName: "CE",
    icon: "🏗️",
    segment: "engineering",
    established: "1985",
    seats: 60,
    duration: "3 Years (6 Semesters)",
    introduction:
        "The Department of Civil Engineering is a founding department established in 1985. It provides comprehensive training in structural engineering, surveying, building construction, transportation, and environmental engineering. Students gain extensive field experience through surveys, site visits, and practical projects. The department has a strong alumni network in both government and private construction sectors.",
    hodMessage:
        "Civil Engineering builds the foundation of civilization. Our department prepares students to design, construct, and manage infrastructure projects with the latest tools and techniques. From AutoCAD to field surveying, we ensure our graduates are industry-ready. — Er. Harjinder Singh, HOD",
    keyFeatures: [
      "Extensive surveying equipment and total stations",
      "Concrete and material testing facilities",
      "AutoCAD and STAAD Pro software labs",
      "Regular site visits to construction projects",
      "Collaboration with PWD and municipal bodies",
      "Environmental engineering demonstration units",
    ],
    keySkills: [
      "Surveying & Leveling (Total Station, GPS)",
      "AutoCAD & STAAD Pro Drafting",
      "Concrete Mix Design & Testing",
      "Estimating & Costing",
      "Building Construction Techniques",
      "Soil Investigation & Testing",
      "Water Supply & Sanitation Design",
    ],
    programOutcomes: [
      "Conduct surveys and prepare engineering drawings using modern tools",
      "Design structural elements and analyze building systems",
      "Test construction materials and ensure quality standards",
      "Prepare estimates and manage construction projects",
      "Apply environmental engineering principles for sustainable development",
      "Work professionally in construction and infrastructure sectors",
    ],
    faculty: [
      {
        name: "Er. Harjinder Singh",
        designation: "Head of Department",
        qualification: "M.Tech (Structural Engineering), B.Tech",
        areaOfInterest: "Structural Engineering, Concrete Technology",
        email: "harjinder.civil@gpcbathinda.ac.in",
        phone: "+91-98140-XXXXX",
        isHod: true,
      },
      {
        name: "Er. Parveen Kumar",
        designation: "Senior Lecturer",
        qualification: "M.Tech (Transportation Engineering)",
        areaOfInterest: "Transportation, Highway Design",
        email: "parveen.civil@gpcbathinda.ac.in",
        phone: "+91-94170-XXXXX",
      },
      {
        name: "Er. Sunita Rani",
        designation: "Lecturer",
        qualification: "M.Tech (Environmental Engineering)",
        areaOfInterest: "Water Supply, Environmental Engineering",
        email: "sunita.civil@gpcbathinda.ac.in",
        phone: "+91-98760-XXXXX",
      },
      {
        name: "Er. Balwinder Singh",
        designation: "Workshop Instructor",
        qualification: "B.Tech (Civil)",
        areaOfInterest: "Surveying, Building Drawing",
        email: "balwinder.civil@gpcbathinda.ac.in",
        phone: "+91-98550-XXXXX",
      },
    ],
    labs: [
      {
        name: "Survey Lab",
        description: "Equipped with theodolites, total stations, GPS equipment, and leveling instruments.",
        equipment: ["Total Station", "Theodolite", "Auto Level", "GPS Receiver", "Chains & Tapes"],
      },
      {
        name: "Soil Mechanics Lab",
        description: "Lab for testing soil properties including shear strength, compaction, and permeability.",
        equipment: ["Triaxial Shear Apparatus", "Proctor Compaction", "Permeability Apparatus", "Hydrometer", "Atterberg Limit Set"],
      },
      {
        name: "Concrete Lab",
        description: "Lab for concrete mix design, cube testing, and aggregate analysis.",
        equipment: ["Compression Testing Machine", "Cube Moulds", "Slump Cone", "Vicat Apparatus", "Sieve Shaker"],
      },
      {
        name: "Material Testing Lab",
        description: "Lab for testing properties of construction materials like steel, bricks, and timber.",
        equipment: ["UTM Machine", "Brick Testing Machine", "Impact Tester", "Hardness Tester", "Flexure Test Setup"],
      },
      {
        name: "CAD Lab",
        description: "Computer lab with AutoCAD and STAAD Pro for civil engineering design and drafting.",
        equipment: ["HP Workstations", "AutoCAD 2024", "STAAD Pro", "Google SketchUp", "Plotters"],
      },
    ],
    syllabusLinks: [
      { batch: "2024-27 Batch", url: "#" },
      { batch: "2023-26 Batch", url: "#" },
      { batch: "2022-25 Batch", url: "#" },
    ],
  },
  {
    id: "cse",
    title: "Computer Science & Engineering",
    shortName: "CSE",
    icon: "💻",
    segment: "engineering",
    established: "1998",
    seats: 60,
    duration: "3 Years (6 Semesters)",
    introduction:
        "The Department of Computer Science & Engineering was established in 1998 and has since been at the forefront of technical education in the field of computing. The department offers a comprehensive diploma program that covers programming, databases, networking, web technologies, and modern software development practices. With state-of-the-art labs and experienced faculty, students receive both theoretical knowledge and practical skills necessary for the IT industry.",
    hodMessage:
        "Welcome to the Department of Computer Science & Engineering. Our mission is to nurture technically competent professionals who can contribute meaningfully to the ever-evolving IT industry. We emphasize hands-on learning, industry exposure, and holistic development. I encourage every student to leverage the resources available and strive for excellence. — Er. Rajesh Kumar, HOD",
    keyFeatures: [
      "Fully air-conditioned computer labs with latest hardware",
      "High-speed internet connectivity across the department",
      "Regular industry expert lectures and workshops",
      "Active coding club and hackathon participation",
      "Dedicated placement training programs",
      "Smart classrooms with projector facilities",
    ],
    keySkills: [
      "Programming in C, C++, Java, Python",
      "Web Development (HTML, CSS, JavaScript, React)",
      "Database Management & SQL",
      "Computer Networking & Security",
      "Cloud Computing & DevOps basics",
      "Mobile Application Development",
      "Software Testing & Quality Assurance",
    ],
    programOutcomes: [
      "Apply knowledge of mathematics, science, and computing to solve engineering problems",
      "Design and develop software solutions for real-world applications",
      "Use modern tools and technologies for computing practices",
      "Understand professional ethics and responsibilities in the IT field",
      "Communicate effectively and work in multidisciplinary teams",
      "Engage in lifelong learning and adapt to emerging technologies",
    ],
    faculty: [
      {
        name: "Er. Rajesh Kumar",
        designation: "Head of Department",
        qualification: "M.Tech (Computer Science), B.Tech",
        areaOfInterest: "Artificial Intelligence, Machine Learning, Data Science",
        email: "rajesh.cse@gpcbathinda.ac.in",
        phone: "+91-94170-XXXXX",
        isHod: true,
      },
      {
        name: "Er. Simran Kaur",
        designation: "Senior Lecturer",
        qualification: "M.Tech (Software Engineering)",
        areaOfInterest: "Software Engineering, Web Technologies",
        email: "simran.cse@gpcbathinda.ac.in",
        phone: "+91-98150-XXXXX",
      },
      {
        name: "Er. Amit Sharma",
        designation: "Lecturer",
        qualification: "M.Tech (Information Technology)",
        areaOfInterest: "Database Systems, Cloud Computing",
        email: "amit.cse@gpcbathinda.ac.in",
        phone: "+91-98760-XXXXX",
      },
      {
        name: "Er. Pooja Rani",
        designation: "Lecturer",
        qualification: "MCA, B.Tech",
        areaOfInterest: "Programming Languages, Cyber Security",
        email: "pooja.cse@gpcbathinda.ac.in",
        phone: "+91-94170-XXXXX",
      },
      {
        name: "Er. Harpreet Singh",
        designation: "Workshop Instructor",
        qualification: "B.Tech (CSE)",
        areaOfInterest: "Networking, Hardware Maintenance",
        email: "harpreet.cse@gpcbathinda.ac.in",
        phone: "+91-98550-XXXXX",
      },
    ],
    labs: [
      {
        name: "Programming Lab",
        description: "Equipped with 60+ latest desktops for C, C++, Java, and Python programming with licensed compilers and IDEs.",
        equipment: ["HP Desktops (Core i5)", "Visual Studio Code", "NetBeans IDE", "GCC Compiler", "Python 3.x"],
      },
      {
        name: "Network Lab",
        description: "Dedicated lab for hands-on networking with routers, switches, and simulation software.",
        equipment: ["Cisco Routers", "Managed Switches", "Packet Tracer", "LAN/WAN Setup", "Wireshark"],
      },
      {
        name: "Database Lab",
        description: "Lab focused on database design, SQL programming, and DBMS concepts.",
        equipment: ["Oracle 11g", "MySQL Server", "PostgreSQL", "MongoDB", "ER Diagram Tools"],
      },
      {
        name: "Web Development Lab",
        description: "Modern lab for full-stack web development with internet access and deployment tools.",
        equipment: ["VS Code", "XAMPP Server", "Node.js", "React.js", "Git & GitHub"],
      },
      {
        name: "Project Lab",
        description: "Dedicated space for final year projects with mentoring support and testing infrastructure.",
        equipment: ["Workstations", "Projector", "Testing Tools", "Cloud Access", "3D Printer"],
      },
    ],
    syllabusLinks: [
      { batch: "2024-27 Batch", url: "#" },
      { batch: "2023-26 Batch", url: "#" },
      { batch: "2022-25 Batch", url: "#" },
    ],
  },
  {
    id: "eee",
    title: "Electrical Engineering",
    shortName: "EE",
    icon: "⚡",
    segment: "engineering",
    established: "1985",
    seats: 60,
    duration: "3 Years (6 Semesters)",
    introduction:
        "The Department of Electrical Engineering, established in 1985, is one of the foundational departments of the college. It provides comprehensive training in power systems, electrical machines, control systems, and emerging renewable energy technologies. The department is committed to producing skilled technicians who can serve in power generation, transmission, and distribution sectors.",
    hodMessage:
        "Electrical Engineering is the backbone of modern infrastructure. Our department strives to equip students with both classical and modern electrical engineering skills, from power systems to PLC/SCADA and renewable energy. We welcome you to a journey of empowering the nation. — Er. Gurpreet Kaur, HOD",
    keyFeatures: [
      "Well-equipped electrical machines laboratory",
      "PLC & SCADA training facility",
      "Renewable energy demonstration units",
      "Licensed simulation software for circuit analysis",
      "Industry visits to power plants and substations",
      "Dedicated wiring and estimation practice lab",
    ],
    keySkills: [
      "Electrical Wiring & Installation",
      "PLC & SCADA Programming",
      "Power System Analysis",
      "Motor Control & Drives",
      "Renewable Energy Systems (Solar, Wind)",
      "Electrical Estimation & Costing",
      "Switchgear & Protection Systems",
    ],
    programOutcomes: [
      "Analyze and solve problems related to electrical circuits and machines",
      "Design electrical installations and wiring systems",
      "Operate and maintain power generation and distribution equipment",
      "Apply PLC/SCADA for industrial automation",
      "Understand renewable energy systems and energy conservation",
      "Follow electrical safety standards and professional ethics",
    ],
    faculty: [
      {
        name: "Er. Gurpreet Kaur",
        designation: "Head of Department",
        qualification: "M.Tech (Power Systems), B.Tech",
        areaOfInterest: "Power Systems, Renewable Energy",
        email: "gurpreet.eee@gpcbathinda.ac.in",
        phone: "+91-98140-XXXXX",
        isHod: true,
      },
      {
        name: "Er. Kuldeep Singh",
        designation: "Senior Lecturer",
        qualification: "M.Tech (Control Systems)",
        areaOfInterest: "Control Systems, PLC Programming",
        email: "kuldeep.eee@gpcbathinda.ac.in",
        phone: "+91-94170-XXXXX",
      },
      {
        name: "Er. Manisha Devi",
        designation: "Lecturer",
        qualification: "M.Tech (Power Electronics)",
        areaOfInterest: "Power Electronics, Industrial Drives",
        email: "manisha.eee@gpcbathinda.ac.in",
        phone: "+91-98760-XXXXX",
      },
    ],
    labs: [
      {
        name: "Electrical Machines Lab",
        description: "Comprehensive lab with DC and AC machines for testing and experimentation.",
        equipment: ["DC Motors/Generators", "Transformers", "Induction Motors", "Synchronous Machines", "Loading Equipment"],
      },
      {
        name: "Power Electronics Lab",
        description: "Lab for studying power semiconductor devices and converter circuits.",
        equipment: ["SCR Kits", "MOSFET Kits", "Inverter Circuits", "Chopper Circuits", "Oscilloscopes"],
      },
      {
        name: "Control Systems Lab",
        description: "Lab equipped with PLC trainers and SCADA systems for industrial automation.",
        equipment: ["PLC Trainers (Siemens)", "SCADA Software", "Servo Motor Kit", "PID Controller", "Simulation PCs"],
      },
      {
        name: "Wiring & Estimation Lab",
        description: "Practical lab for electrical wiring, installation, and estimation exercises.",
        equipment: ["Wiring Boards", "MCBs & ELCBs", "Energy Meters", "Conduit Bending Tools", "Estimation Charts"],
      },
    ],
    syllabusLinks: [
      { batch: "2024-27 Batch", url: "#" },
      { batch: "2023-26 Batch", url: "#" },
      { batch: "2022-25 Batch", url: "#" },
    ],
  },
  {
    id: "ece",
    title: "Electronics & Communication Engineering",
    shortName: "ECE",
    icon: "📡",
    segment: "engineering",
    established: "1998",
    seats: 60,
    duration: "3 Years (6 Semesters)",
    introduction:
        "The Department of Electronics & Communication Engineering was established in 1998 to cater to the growing demand for skilled professionals in the electronics and telecom sectors. The department offers training in analog and digital electronics, communication systems, embedded systems, and IoT technologies. With modern labs and dedicated faculty, students are prepared for careers in electronics manufacturing, telecommunications, and embedded systems development.",
    hodMessage:
        "Electronics & Communication is a dynamic field that touches every aspect of modern life. Our department is committed to providing cutting-edge education with emphasis on practical skills in embedded systems, IoT, and communication technologies. I invite students to explore, innovate, and create. — Er. Manpreet Singh, HOD",
    keyFeatures: [
      "Advanced communication systems lab",
      "PCB design and fabrication facility",
      "Embedded systems development kits",
      "IoT and sensor technology workshops",
      "VLSI design simulation tools",
      "Collaboration with telecom companies",
    ],
    keySkills: [
      "Analog & Digital Circuit Design",
      "Embedded Systems (Arduino, Raspberry Pi)",
      "PCB Design & Fabrication",
      "Communication Systems & Protocols",
      "IoT Application Development",
      "VLSI Design & Simulation",
      "Signal Processing Techniques",
    ],
    programOutcomes: [
      "Design and analyze analog and digital electronic circuits",
      "Develop embedded systems for real-world applications",
      "Understand communication systems and signal processing",
      "Design and fabricate printed circuit boards",
      "Apply IoT concepts for smart system development",
      "Work professionally in electronics and telecom industries",
    ],
    faculty: [
      {
        name: "Er. Manpreet Singh",
        designation: "Head of Department",
        qualification: "M.Tech (Electronics & Communication), B.Tech",
        areaOfInterest: "Embedded Systems, IoT, VLSI Design",
        email: "manpreet.ece@gpcbathinda.ac.in",
        phone: "+91-98140-XXXXX",
        isHod: true,
      },
      {
        name: "Er. Navjot Kaur",
        designation: "Senior Lecturer",
        qualification: "M.Tech (Signal Processing)",
        areaOfInterest: "Signal Processing, Communication Systems",
        email: "navjot.ece@gpcbathinda.ac.in",
        phone: "+91-94170-XXXXX",
      },
      {
        name: "Er. Deepak Verma",
        designation: "Lecturer",
        qualification: "M.Tech (Microelectronics)",
        areaOfInterest: "Analog Electronics, PCB Design",
        email: "deepak.ece@gpcbathinda.ac.in",
        phone: "+91-98760-XXXXX",
      },
    ],
    labs: [
      {
        name: "Analog Electronics Lab",
        description: "Lab with oscilloscopes, function generators, and breadboards for circuit experiments.",
        equipment: ["CRO (Dual Trace)", "Function Generators", "DC Power Supplies", "Breadboards", "Component Kits"],
      },
      {
        name: "Digital Electronics Lab",
        description: "Lab for logic design experiments with IC trainers and FPGA boards.",
        equipment: ["Digital IC Trainer", "Logic Analyzer", "FPGA Board (Xilinx)", "IC Kits (74xx series)", "LED Display Boards"],
      },
      {
        name: "Communication Lab",
        description: "Lab with AM/FM modulators, fiber optic kits, and antenna measurement setups.",
        equipment: ["AM/FM Trainer", "Fiber Optic Kit", "Antenna Trainer", "Spectrum Analyzer", "Satellite Communication Kit"],
      },
      {
        name: "Microprocessor & Embedded Lab",
        description: "Lab with microprocessor kits, Arduino, Raspberry Pi for embedded development.",
        equipment: ["8085/8086 Kits", "Arduino Uno/Mega", "Raspberry Pi 4", "ARM Cortex Boards", "Sensor Modules"],
      },
      {
        name: "PCB Design Lab",
        description: "Dedicated lab for PCB design software and small-scale fabrication.",
        equipment: ["Eagle CAD", "KiCad", "PCB Etching Kit", "Drilling Machine", "Soldering Stations"],
      },
    ],
    syllabusLinks: [
      { batch: "2024-27 Batch", url: "#" },
      { batch: "2023-26 Batch", url: "#" },
      { batch: "2022-25 Batch", url: "#" },
    ],
  },
  {
    id: "it",
    title: "Information Technology",
    shortName: "IT",
    icon: "🌐",
    segment: "engineering",
    established: "2004",
    seats: 60,
    duration: "3 Years (6 Semesters)",
    introduction:
        "The Department of Information Technology was established in 2004 to meet the growing demand for IT professionals. The department focuses on software development, web technologies, database management, cybersecurity, and emerging technologies like cloud computing and AI. Students are trained to develop, deploy, and manage IT solutions across diverse industry sectors.",
    hodMessage:
        "Information Technology drives the digital transformation of every industry. Our department equips students with versatile IT skills ranging from programming and web development to cybersecurity and cloud services. We prepare our students to be adaptable professionals in the fast-paced tech world. — HOD, Information Technology",
    keyFeatures: [
      "Modern computer labs with high-speed internet",
      "Cybersecurity and ethical hacking workshops",
      "Cloud computing and DevOps training",
      "Active participation in coding competitions",
      "Industry-aligned curriculum with project-based learning",
      "Smart classrooms with multimedia facilities",
    ],
    keySkills: [
      "Programming in Java, Python, PHP",
      "Web Development (Full Stack)",
      "Database Administration (MySQL, MongoDB)",
      "Cybersecurity & Ethical Hacking",
      "Cloud Computing (AWS basics)",
      "Software Project Management",
      "Mobile App Development",
    ],
    programOutcomes: [
      "Design and develop software applications using modern programming languages",
      "Manage databases and implement secure IT infrastructure",
      "Apply cybersecurity principles to protect systems and data",
      "Develop web and mobile applications for real-world use cases",
      "Work effectively in IT teams with strong communication skills",
      "Stay updated with emerging technologies through lifelong learning",
    ],
    faculty: [
      {
        name: "Er. Amandeep Singh",
        designation: "Head of Department",
        qualification: "M.Tech (Information Technology), B.Tech",
        areaOfInterest: "Cloud Computing, Cybersecurity",
        email: "amandeep.it@gpcbathinda.ac.in",
        phone: "+91-98140-XXXXX",
        isHod: true,
      },
      {
        name: "Er. Rupinder Kaur",
        designation: "Lecturer",
        qualification: "MCA, M.Tech (CSE)",
        areaOfInterest: "Web Technologies, Database Systems",
        email: "rupinder.it@gpcbathinda.ac.in",
        phone: "+91-94170-XXXXX",
      },
      {
        name: "Er. Vishal Gupta",
        designation: "Lecturer",
        qualification: "M.Tech (Software Engineering)",
        areaOfInterest: "Software Development, Mobile Apps",
        email: "vishal.it@gpcbathinda.ac.in",
        phone: "+91-98760-XXXXX",
      },
    ],
    labs: [
      {
        name: "Software Development Lab",
        description: "Modern lab with latest IDEs and development tools for Java, Python, and web programming.",
        equipment: ["HP Desktops (Core i5)", "IntelliJ IDEA", "VS Code", "Eclipse IDE", "Python 3.x"],
      },
      {
        name: "Networking & Security Lab",
        description: "Lab for network configuration, cybersecurity tools, and ethical hacking practices.",
        equipment: ["Cisco Routers", "Kali Linux", "Wireshark", "Firewall Trainer", "Packet Tracer"],
      },
      {
        name: "Web Technologies Lab",
        description: "Lab dedicated to full-stack web development with modern frameworks.",
        equipment: ["XAMPP Server", "Node.js", "React.js", "MongoDB", "Git & GitHub"],
      },
      {
        name: "Multimedia Lab",
        description: "Lab for multimedia content creation, graphic design, and video editing.",
        equipment: ["Adobe Photoshop", "Premiere Pro", "Canva", "Audio Equipment", "Green Screen"],
      },
    ],
    syllabusLinks: [
      { batch: "2024-27 Batch", url: "#" },
      { batch: "2023-26 Batch", url: "#" },
      { batch: "2022-25 Batch", url: "#" },
    ],
  },
  {
    id: "mech",
    title: "Mechanical Engineering",
    shortName: "ME",
    icon: "⚙️",
    segment: "engineering",
    established: "1985",
    seats: 120,
    duration: "3 Years (6 Semesters)",
    introduction:
        "The Department of Mechanical Engineering is one of the founding departments established in 1985. It is the largest department in the college with an intake of 120 students. The department provides a strong foundation in manufacturing, thermodynamics, machine design, and industrial automation with extensive workshop training. The curriculum is designed to prepare students for roles in manufacturing, design, and maintenance sectors.",
    hodMessage:
        "The Mechanical Engineering department has a rich legacy of producing competent engineers who have excelled in diverse industries. We focus on practical skills alongside theory, and our workshops are among the best in the region. I urge students to take full advantage of our labs and industry connections. — Er. Sukhdev Singh, HOD",
    keyFeatures: [
      "Largest department with extensive workshop facilities",
      "CNC machines and modern manufacturing equipment",
      "CAD/CAM lab with licensed software",
      "Industry collaborations for internships",
      "Regular industrial visits to manufacturing plants",
      "Well-equipped material testing laboratory",
    ],
    keySkills: [
      "CAD/CAM Software (AutoCAD, SolidWorks)",
      "CNC Programming & Operation",
      "Welding & Fabrication Techniques",
      "Quality Control & Inspection",
      "Refrigeration & Air Conditioning",
      "Industrial Safety Management",
      "3D Printing & Rapid Prototyping",
    ],
    programOutcomes: [
      "Apply principles of mechanics, thermodynamics, and materials science",
      "Design mechanical components and systems using modern tools",
      "Operate and maintain industrial machinery and equipment",
      "Implement quality control measures in manufacturing",
      "Work effectively in teams and communicate technical ideas",
      "Follow safety protocols and sustainable engineering practices",
    ],
    faculty: [
      {
        name: "Er. Sukhdev Singh",
        designation: "Head of Department",
        qualification: "M.Tech (Production Engineering), B.Tech",
        areaOfInterest: "Manufacturing Technology, CNC Machining",
        email: "sukhdev.mech@gpcbathinda.ac.in",
        phone: "+91-98140-XXXXX",
        isHod: true,
      },
      {
        name: "Er. Jaspreet Kaur",
        designation: "Senior Lecturer",
        qualification: "M.Tech (Thermal Engineering)",
        areaOfInterest: "Thermodynamics, Heat Transfer",
        email: "jaspreet.mech@gpcbathinda.ac.in",
        phone: "+91-94170-XXXXX",
      },
      {
        name: "Er. Ramesh Chand",
        designation: "Lecturer",
        qualification: "M.Tech (Machine Design)",
        areaOfInterest: "Machine Design, FEA Analysis",
        email: "ramesh.mech@gpcbathinda.ac.in",
        phone: "+91-98550-XXXXX",
      },
      {
        name: "Er. Bikram Singh",
        designation: "Workshop Superintendent",
        qualification: "B.Tech (Mechanical)",
        areaOfInterest: "Workshop Practice, Welding Technology",
        email: "bikram.mech@gpcbathinda.ac.in",
        phone: "+91-98760-XXXXX",
      },
    ],
    labs: [
      {
        name: "Machine Shop",
        description: "Full-fledged machine shop with lathes, milling machines, shapers, and CNC equipment.",
        equipment: ["Centre Lathes", "Milling Machine", "CNC Lathe", "Shaper", "Drill Press"],
      },
      {
        name: "Welding Shop",
        description: "Equipped for arc welding, gas welding, MIG, TIG, and spot welding practices.",
        equipment: ["Arc Welding Sets", "Gas Welding Kit", "MIG Welder", "TIG Welder", "Spot Welder"],
      },
      {
        name: "CAD Lab",
        description: "Computer-aided design lab with AutoCAD, SolidWorks, and CATIA software.",
        equipment: ["HP Workstations", "AutoCAD 2024", "SolidWorks", "CATIA V5", "3D Printer"],
      },
      {
        name: "Thermal Engineering Lab",
        description: "Lab for experiments on IC engines, boilers, and refrigeration systems.",
        equipment: ["IC Engine Models", "Boiler Setup", "Refrigeration Unit", "Air Compressor", "Calorimeter"],
      },
      {
        name: "Material Testing Lab",
        description: "Lab for testing mechanical properties of materials under various conditions.",
        equipment: ["UTM Machine", "Hardness Tester", "Impact Tester", "Fatigue Tester", "Metallurgical Microscope"],
      },
    ],
    syllabusLinks: [
      { batch: "2024-27 Batch", url: "#" },
      { batch: "2023-26 Batch", url: "#" },
      { batch: "2022-25 Batch", url: "#" },
    ],
  },
  {
    id: "mech-prod",
    title: "Mechanical Engineering (Production)",
    shortName: "ME (Prod)",
    icon: "🏭",
    segment: "engineering",
    established: "1992",
    seats: 60,
    duration: "3 Years (6 Semesters)",
    introduction:
        "The Department of Mechanical Engineering (Production) was established in 1992 with a specialized focus on manufacturing processes, production planning, quality control, and industrial engineering. While sharing core mechanical fundamentals, the program emphasizes production management, CNC technology, tool design, and lean manufacturing practices essential for modern industry.",
    hodMessage:
        "Production Engineering is the heart of manufacturing excellence. Our department prepares students with specialized skills in production planning, quality assurance, and advanced manufacturing. With Industry 4.0 transforming the sector, our curriculum evolves to keep graduates ahead of the curve. — HOD, ME (Production)",
    keyFeatures: [
      "Specialized CNC programming and operation training",
      "Tool and die design laboratory",
      "Industrial engineering and work study modules",
      "Lean manufacturing and Six Sigma exposure",
      "Extensive workshop with production-grade machines",
      "Collaboration with manufacturing industries for internships",
    ],
    keySkills: [
      "CNC Programming (G-code, M-code)",
      "Tool & Die Design",
      "Production Planning & Control",
      "Quality Control & Six Sigma",
      "CAD/CAM (AutoCAD, MasterCAM)",
      "Lean Manufacturing Principles",
      "Metrology & Measurement",
    ],
    programOutcomes: [
      "Plan and control production processes in manufacturing environments",
      "Program and operate CNC machines for precision manufacturing",
      "Design tools, jigs, and fixtures for production operations",
      "Apply quality control techniques and statistical methods",
      "Implement lean manufacturing and waste reduction strategies",
      "Work professionally in production and manufacturing industries",
    ],
    faculty: [
      {
        name: "Er. Jatinder Pal Singh",
        designation: "Head of Department",
        qualification: "M.Tech (Production & Industrial Engg), B.Tech",
        areaOfInterest: "CNC Technology, Production Planning",
        email: "jatinder.prod@gpcbathinda.ac.in",
        phone: "+91-98140-XXXXX",
        isHod: true,
      },
      {
        name: "Er. Narinder Kumar",
        designation: "Senior Lecturer",
        qualification: "M.Tech (Manufacturing Technology)",
        areaOfInterest: "Tool Design, Metrology",
        email: "narinder.prod@gpcbathinda.ac.in",
        phone: "+91-94170-XXXXX",
      },
      {
        name: "Er. Kamalpreet Kaur",
        designation: "Lecturer",
        qualification: "M.Tech (Industrial Engineering)",
        areaOfInterest: "Quality Control, Work Study",
        email: "kamalpreet.prod@gpcbathinda.ac.in",
        phone: "+91-98760-XXXXX",
      },
    ],
    labs: [
      {
        name: "CNC Lab",
        description: "Dedicated lab with CNC lathe, CNC milling, and simulation software for programming practice.",
        equipment: ["CNC Lathe", "CNC Milling Machine", "CNC Simulator Software", "Tool Holders", "Measuring Instruments"],
      },
      {
        name: "Tool Room",
        description: "Precision tool room for tool and die making, grinding, and finishing operations.",
        equipment: ["Surface Grinder", "Cylindrical Grinder", "Tool & Cutter Grinder", "EDM Machine", "Precision Instruments"],
      },
      {
        name: "Metrology Lab",
        description: "Lab for precision measurement using instruments and calibration equipment.",
        equipment: ["Vernier Calipers", "Micrometers", "Dial Gauge", "Sine Bar", "Profile Projector"],
      },
      {
        name: "Production Workshop",
        description: "Large workshop for manufacturing exercises including turning, milling, and assembly.",
        equipment: ["Centre Lathes", "Milling Machine", "Drilling Machine", "Power Hacksaw", "Bench Work Tools"],
      },
    ],
    syllabusLinks: [
      { batch: "2024-27 Batch", url: "#" },
      { batch: "2023-26 Batch", url: "#" },
      { batch: "2022-25 Batch", url: "#" },
    ],
  },

  // ─── PHARMACY DEPARTMENT ───────────────────────────────────
  {
    id: "dpharm",
    title: "D-Pharmacy",
    shortName: "D.Pharm",
    icon: "💊",
    segment: "pharmacy",
    established: "2010",
    seats: 60,
    duration: "2 Years (4 Semesters)",
    introduction:
        "The Department of D-Pharmacy offers a Diploma in Pharmacy program approved by the Pharmacy Council of India (PCI) and AICTE. The program trains students in pharmaceutical sciences, drug formulation, pharmacology, hospital pharmacy, and community pharmacy practice. Graduates are eligible for registration as pharmacists and can pursue careers in retail pharmacy, hospital pharmacy, pharmaceutical manufacturing, and drug regulatory affairs.",
    hodMessage:
        "Pharmacy is a noble profession that serves humanity through healthcare. Our department is committed to producing competent pharmacists who understand drug science, patient care, and pharmaceutical regulations. With well-equipped labs and experienced faculty, we prepare students for a rewarding career in the pharmaceutical sector. — HOD, D-Pharmacy",
    keyFeatures: [
      "PCI approved pharmacy program",
      "Well-equipped pharmaceutics and pharmacology labs",
      "Medicinal plant garden (Herbal Garden)",
      "Hospital pharmacy training exposure",
      "Drug store management and dispensing practice",
      "Regular pharma industry visits",
    ],
    keySkills: [
      "Drug Formulation & Dispensing",
      "Pharmacology & Therapeutics",
      "Pharmaceutical Chemistry & Analysis",
      "Hospital & Community Pharmacy Practice",
      "Drug Store Management",
      "Pharmacognosy & Herbal Medicine",
      "Pharmaceutical Jurisprudence",
    ],
    programOutcomes: [
      "Dispense medicines accurately and counsel patients on drug usage",
      "Formulate and prepare pharmaceutical dosage forms",
      "Understand drug actions, interactions, and adverse effects",
      "Manage drug inventory and maintain pharmaceutical records",
      "Apply pharmaceutical regulations and ethical standards",
      "Work professionally in pharmacies, hospitals, and pharma companies",
    ],
    faculty: [
      {
        name: "Dr. Kavita Rani",
        designation: "Head of Department",
        qualification: "M.Pharm (Pharmaceutics), Ph.D",
        areaOfInterest: "Drug Formulation, Novel Drug Delivery",
        email: "kavita.pharm@gpcbathinda.ac.in",
        phone: "+91-98140-XXXXX",
        isHod: true,
      },
      {
        name: "Dr. Sanjeev Kumar",
        designation: "Lecturer",
        qualification: "M.Pharm (Pharmacology)",
        areaOfInterest: "Pharmacology, Clinical Pharmacy",
        email: "sanjeev.pharm@gpcbathinda.ac.in",
        phone: "+91-94170-XXXXX",
      },
      {
        name: "Er. Neha Gupta",
        designation: "Lecturer",
        qualification: "M.Pharm (Pharmaceutical Chemistry)",
        areaOfInterest: "Medicinal Chemistry, Drug Analysis",
        email: "neha.pharm@gpcbathinda.ac.in",
        phone: "+91-98760-XXXXX",
      },
    ],
    labs: [
      {
        name: "Pharmaceutics Lab",
        description: "Lab for preparing pharmaceutical formulations including tablets, capsules, ointments, and syrups.",
        equipment: ["Tablet Press", "Capsule Filling Machine", "Ointment Mill", "Dissolution Apparatus", "Disintegration Tester"],
      },
      {
        name: "Pharmacology Lab",
        description: "Lab for studying drug actions and pharmacological experiments.",
        equipment: ["Organ Bath Setup", "Physiograph", "Microscopes", "Hematology Kits", "Drug Samples"],
      },
      {
        name: "Pharmaceutical Chemistry Lab",
        description: "Lab for chemical analysis of drugs and pharmaceutical compounds.",
        equipment: ["Spectrophotometer", "pH Meter", "Titration Kits", "Melting Point Apparatus", "Polarimeter"],
      },
      {
        name: "Pharmacognosy Lab",
        description: "Lab for studying crude drugs, plant-based medicines, and herbal formulations.",
        equipment: ["Microscopes", "Herbarium Sheets", "Drug Samples", "Soxhlet Apparatus", "TLC Plates"],
      },
      {
        name: "Dispensing Lab",
        description: "Model pharmacy setup for practical dispensing and prescription reading exercises.",
        equipment: ["Dispensing Counter", "Prescription Balance", "Drug Labels", "Reference Books", "Packaging Materials"],
      },
    ],
    syllabusLinks: [
      { batch: "2024-26 Batch", url: "#" },
      { batch: "2023-25 Batch", url: "#" },
      { batch: "2022-24 Batch", url: "#" },
    ],
  },

  // ─── COMMON DEPARTMENT ─────────────────────────────────────
  {
    id: "applied-sciences",
    title: "Applied Sciences",
    shortName: "AS",
    icon: "🔬",
    segment: "common",
    established: "1985",
    seats: 0,
    duration: "Serves all departments",
    introduction:
        "The Department of Applied Sciences is the foundational academic department that serves all engineering branches during the first year and beyond. It provides instruction in Mathematics, Physics, Chemistry, English, and Environmental Studies. The department plays a crucial role in building the scientific temper and analytical abilities of students, forming the bedrock upon which specialized engineering education is built.",
    hodMessage:
        "Applied Sciences form the foundation of all engineering disciplines. Our department is dedicated to making science and mathematics accessible and engaging through practical demonstrations, interactive teaching, and continuous assessments. A strong foundation in applied sciences ensures success in all technical fields. — HOD, Applied Sciences",
    keyFeatures: [
      "Serves all engineering departments for foundational courses",
      "Well-equipped physics and chemistry laboratories",
      "Language lab for English communication skills",
      "Experienced faculty with research publications",
      "Bridge courses for academically weaker students",
      "Science exhibition and quiz competitions",
    ],
    keySkills: [
      "Engineering Mathematics & Statistics",
      "Applied Physics Concepts",
      "Engineering Chemistry & Materials",
      "English Communication & Technical Writing",
      "Environmental Science & Sustainability",
      "Analytical & Problem-Solving Ability",
    ],
    programOutcomes: [
      "Apply mathematical concepts to solve engineering problems",
      "Understand physical laws governing engineering systems",
      "Apply chemistry principles in material selection and processes",
      "Communicate effectively in English for professional contexts",
      "Understand environmental issues and sustainable practices",
      "Develop analytical thinking for higher-level technical subjects",
    ],
    faculty: [
      {
        name: "Dr. Rajwinder Kaur",
        designation: "Head of Department",
        qualification: "Ph.D (Mathematics), M.Sc",
        areaOfInterest: "Applied Mathematics, Numerical Analysis",
        email: "rajwinder.as@gpcbathinda.ac.in",
        phone: "+91-98140-XXXXX",
        isHod: true,
      },
      {
        name: "Dr. Paramjit Singh",
        designation: "Senior Lecturer (Physics)",
        qualification: "Ph.D (Physics), M.Sc",
        areaOfInterest: "Solid State Physics, Optics",
        email: "paramjit.as@gpcbathinda.ac.in",
        phone: "+91-94170-XXXXX",
      },
      {
        name: "Dr. Meenakshi Sharma",
        designation: "Senior Lecturer (Chemistry)",
        qualification: "Ph.D (Chemistry), M.Sc",
        areaOfInterest: "Polymer Chemistry, Electrochemistry",
        email: "meenakshi.as@gpcbathinda.ac.in",
        phone: "+91-98760-XXXXX",
      },
      {
        name: "Prof. Hardeep Kaur",
        designation: "Lecturer (English)",
        qualification: "M.A (English), M.Phil",
        areaOfInterest: "Technical Communication, Soft Skills",
        email: "hardeep.as@gpcbathinda.ac.in",
        phone: "+91-98550-XXXXX",
      },
    ],
    labs: [
      {
        name: "Physics Lab",
        description: "Well-equipped lab for experiments in mechanics, optics, electricity, and modern physics.",
        equipment: ["Spectrometer", "Cathode Ray Oscilloscope", "Laser Kit", "Newton's Ring Apparatus", "Sonometer"],
      },
      {
        name: "Chemistry Lab",
        description: "Lab for experiments in analytical chemistry, titrations, and material testing.",
        equipment: ["pH Meter", "Spectrophotometer", "Titration Kits", "Distillation Setup", "Fume Hood"],
      },
      {
        name: "Language Lab",
        description: "Multimedia language lab for English communication, pronunciation, and presentation skills.",
        equipment: ["Headphones & Mic Sets", "Language Software", "Projector", "Audio Players", "Reference Books"],
      },
    ],
    syllabusLinks: [
      { batch: "2024-27 Batch", url: "#" },
      { batch: "2023-26 Batch", url: "#" },
      { batch: "2022-25 Batch", url: "#" },
    ],
  },
];

export default departments;

export function getDepartmentById(id: string): Department | undefined {
  return departments.find((d) => d.id === id);
}

export function getDepartmentsBySegment(segment: DepartmentSegment): Department[] {
  return departments.filter((d) => d.segment === segment);
}
