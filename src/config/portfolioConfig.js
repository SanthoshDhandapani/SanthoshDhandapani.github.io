// Portfolio Configuration - Single source of truth for all portfolio data
// This file extracts and structures data from the resume JSON for easy consumption by components

const portfolioConfig = {
  // Basic Information
  personal: {
    name: "Santhosh Dhandapani",
    title: "Staff Software Engineer",
    subtitle: "13+ years specializing in frontend development",
    email: "san.itsnew@gmail.com",
    phone: "+91 9962242274",
    dateOfBirth: "1990-05-10",
    location: "Chennai, India",
    profileImage: "/images/profile_pic.png",
    portfolioUrl: "https://santhoshdhandapani.github.io",
    linkedinUrl: "https://www.linkedin.com/in/santhoshdhandapani/",
    githubUrl: "https://github.com/santhoshdhandapani"
  },

  // Professional Summary
  summary: {
    content: "Staff Software Engineer with 13+ years specializing in frontend development across dynamic web, desktop, and mobile applications. Proven expertise in all stages of the development lifecycle with strong background in architecture, implementation, team leadership, and project management. Committed to quality-driven development through methodical planning, algorithmic design, comprehensive testing, continuous code reviews, and collaborative peer discussions."
  },

  // Work Experience Timeline
  experience: [
    {
      id: "exp1",
      title: "Staff Software Engineer",
      company: "FourKites",
      date: "2024 - Present",
      description: "Leading the development of real-time data visualization dashboards with AI-assisted development. Advanced GIS Leaflet-based polygon editor. Dynamic product customization with license-based features. Achieved 70% cost reduction and 40% market penetration increase.",
      logo: "/images/companies/fourkites.png",
      technologies: ["React.js", "AI", "GIS"]
    },
    {
      id: "exp2",
      title: "Senior Software Engineer (Technical Lead)",
      company: "Walmart Global Tech India",
      date: "2020 - 2024",
      description: "Developed and maintained large-scale applications for campus management (50,000+ associates) and Sam's Club (1M+ active users). Multi-regional content delivery system implementation.",
      logo: "/images/companies/walmart.png",
      technologies: ["React.js", "React Native", "JavaScript", "NestJS"]
    },
    {
      id: "exp3",
      title: "Senior Associate Experience Technology",
      company: "Publicis Sapient",
      date: "2019 - 2020",
      description: "Worked on the Lowe's client account as Technical Lead, contributing to their digital transformation initiatives and e-commerce platform development.",
      logo: "/images/companies/lowes.png",
      technologies: ["React.js", "JavaScript", "TypeScript"]
    },
    {
      id: "exp4",
      title: "Technical Lead",
      company: "Infinite Computer Solutions",
      date: "2018 - 2019",
      description: "Led the development of the WIO platform, a key product for the company. Managed cross-functional teams and delivered scalable solutions.",
      logo: "/images/companies/wio.png",
      technologies: ["React.js", "JavaScript", "TypeScript", "NodeJs"]
    },
    {
      id: "exp5",
      title: "Assistant Manager",
      company: "Renault Nissan",
      date: "2017 - 2018",
      description: "Developed the Connected Cars SDK, a critical component for in-car infotainment systems. Worked on automotive software solutions.",
      logo: "/images/companies/renault_nissan.png",
      technologies: ["Android", "Java", "SDK Development"]
    },
    {
      id: "exp6",
      title: "Senior Software Engineer",
      company: "Market Simplified",
      date: "2014 - 2017",
      description: "Developed web applications and e-commerce solutions. Worked on full-stack development projects.",
      logo: "/images/companies/smartD.png",
      technologies: ["Android", "Java", "React.js", "PHP", "JavaScript", "MySQL"]
    },
    {
      id: "exp7",
      title: "Project Lead",
      company: "Dunlysis Consultancy",
      date: "2012 - 2014",
      description: "Led development projects and managed client relationships. First professional role after graduation.",
      logo: "/images/companies/dunlysis.png",
      technologies: ["Android", "Java", "JavaScript", "PHP", "MySQL", "Web Development"]
    }
  ],

  // Education
  education: [
    {
      id: 1,
      degree: "B.Tech Information Technology",
      institution: "Prince Shri Venkateshwara Padmavathy Engineering College",
      year: "2009 - 2012",
      location: "Chennai, India",
      description: "Bachelor's degree in Information Technology with focus on software development and computer systems.",
      website: "http://psvpec.in/"
    },
    {
      id: 2,
      degree: "Diploma - Computer Technology",
      institution: "Valliammai Polytechnic College @ DOTE",
      year: "2007 - 2009",
      location: "Chennai, India",
      description: "Diploma in Computer Technology covering fundamentals of programming and computer systems.",
      website: "http://www.srmuniv.ac.in"
    },
    {
      id: 3,
      degree: "Higher Secondary - Computer Science",
      institution: "Bharathiyar Matriculation Hr.Sec.School",
      year: "2005 - 2007",
      location: "Chennai, India",
      description: "Higher Secondary education with specialization in Computer Science.",
      website: "http://www.bharathiyarschool.com"
    },
    {
      id: 4,
      degree: "SSLC",
      institution: "Jaigopal Garodia National Higher Secondary School",
      year: "Up to 2005",
      location: "Chennai, India",
      description: "Secondary School Leaving Certificate from State Board of School Exams, Tamil Nadu.",
      website: "http://www.jgnationalhss.com/"
    }
  ],

  // Skills organized by categories
  skills: {
    frontend: {
      title: "Frontend Development",
      technologies: [
        {
          name: "React.js",
          description: "Building dynamic user interfaces with modern React patterns, hooks, and state management solutions.",
          icon: "/images/tech_logos/react_js.png",
          level: "Expert"
        },
        {
          name: "React Native",
          description: "Cross-platform mobile development for iOS and Android with native performance.",
          icon: "/images/tech_logos/react_js.png",
          level: "Advanced"
        },
        {
          name: "JavaScript & TypeScript",
          description: "Modern ES6+ JavaScript and TypeScript for type-safe, scalable applications.",
          icon: "/images/tech_logos/js.png",
          level: "Expert"
        },
        {
          name: "Tailwind CSS",
          description: "Utility-first CSS framework for rapid UI development and consistent design systems.",
          icon: "/images/tech_logos/tailwind_logo.png",
          level: "Intermediate"
        },
        {
          name: "Material Design",
          description: "Google's design system for creating intuitive and beautiful user interfaces.",
          icon: "/images/tech_logos/material-design.png",
          level: "Intermediate"
        },
        {
          name: "Bootstrap",
          description: "Popular CSS framework for responsive and mobile-first web development.",
          icon: "/images/tech_logos/bootstrap.png",
          level: "Intermediate"
        }
      ]
    },
    backend: {
      title: "Backend & Database",
      technologies: [
        {
          name: "Node.js",
          description: "Server-side JavaScript runtime for building scalable network applications.",
          icon: "/images/tech_logos/nodejs.png",
          level: "Intermediate"
        },
        {
          name: "NestJS",
          description: "Progressive Node.js framework for building efficient and scalable server-side applications.",
          icon: "/images/tech_logos/nestJS_logo.png",
          level: "Intermediate"
        },
        {
          name: "MongoDB",
          description: "NoSQL database for modern applications with flexible document-based storage.",
          icon: "/images/tech_logos/mongodb.jpg",
          level: "Intermediate"
        },
        {
          name: "MySQL",
          description: "Reliable relational database management system for data-driven applications.",
          icon: "/images/tech_logos/mySQL.png",
          level: "Intermediate"
        },
        {
          name: "Java",
          description: "Enterprise-grade programming language for robust, scalable backend systems.",
          icon: "/images/tech_logos/java.png",
          level: "Intermediate"
        },
        {
          name: "PHP",
          description: "Server-side scripting language for web development and content management systems.",
          icon: "/images/tech_logos/php.png",
          level: "Intermediate"
        }
      ]
    }
  },

  // Awards and Recognition
  awards: [
    {
      id: "award1",
      title: "Engineering Excellence",
      company: "Walmart Global Tech India",
      year: "2023-2024",
      description: "Recognized for outstanding technical contributions and software engineering.",
      icon: "🏆"
    },
    {
      id: "award2",
      title: "Global Techathon - Finalist",
      company: "Walmart Global Tech India",
      year: "2023-2024",
      description: "Finalist in the global technology innovation competition among thousands of participants from 500+ teams.",
      icon: "🚀"
    },
    {
      id: "award3",
      title: "Operational Excellence Award",
      company: "Walmart Global Tech India",
      year: "2022-2023",
      description: "Awarded for operational efficiency and process improvements.",
      icon: "⭐"
    },
    {
      id: "award4",
      title: "Best Team Performance",
      company: "Walmart Global Tech India",
      year: "2022-2023",
      description: "Led team to achieve performance metrics and delivery goals.",
      icon: "👥"
    },
    {
      id: "award5",
      title: "Best Performer - Spark Award",
      company: "Infinite Computer Solutions",
      year: "2018-2019",
      description: "Top performer recognition for exceptional contribution on engineering the product successfully.",
      icon: "✨"
    }
  ],

  // Certifications
  certifications: [
    {
      id: "cert1",
      title: "Systems Design",
      issuer: "AlgoExpert",
      year: "October 2024",
      description: "Advanced systems design certification covering scalable architecture patterns.",
      icon: "🏗️",
      url: "https://certificate.algoexpert.io/SystemsExpert%20Certificate%20SE-ce9b74d975"
    },
    {
      id: "cert2",
      title: "Generative AI for Everyone",
      issuer: "Coursera (DeepLearning.AI)",
      year: "October 2024",
      description: "Comprehensive understanding of AI technologies and their practical applications.",
      icon: "🤖",
      url: "https://coursera.org/share/b8a4c8e5c9f2e8d1a3b7c6f4e2d9a8b5"
    },
    {
      id: "cert3",
      title: "Programming with JavaScript",
      issuer: "Coursera (Meta)",
      year: "January 2024",
      description: "Advanced JavaScript programming concepts and modern development practices.",
      icon: "💻",
      url: "https://coursera.org/share/3263fb2d00599f01ccb4b13d4c0696ac"
    },
    {
      id: "cert4",
      title: "AdobeXD - Design & Prototype",
      issuer: "Udemy",
      year: "January 2020",
      description: "User experience design and rapid prototyping using Adobe XD.",
      icon: "🎨",
      url: "https://www.udemy.com/certificate/UC-T2OSNLMU/"
    }
  ],

  // Design Works & Prototypes
  designWorks: [
    {
      id: 1,
      title: "Office Transport Management System",
      description: "A comprehensive design for managing office transportation, including route optimization and real-time tracking.",
      category: "UI/UX Design",
      year: "2020",
      technologies: ["Adobe XD", "Figma", "Prototyping"],
      thumbnail: "/images/design_works/design_work_tms.svg"
    }
  ],

  // Personal Works & Projects
  personalWorks: [
    {
      id: "work1",
      title: "IPL Trump Cards",
      description: "Play and Score for your favourite IPL Teams by playing Trump Cards. An interactive Flutter-based mobile game featuring IPL teams and players with engaging card gameplay mechanics.",
      image: "/images/projects/personal_works/personal_project_ipl_trump_cards.png",
      technologies: ["Flutter", "Dart", "Firebase", "Mobile Development"],
      githubUrl: "",
      liveUrl: "https://ipl-trump-cards.web.app/",
      category: "Mobile Game",
      year: "2023"
    },
    {
      id: "work2",
      title: "Erive Enterprises",
      description: "Event management platform providing top-notch services with LED projectors, audio equipment, and high-quality screens. A comprehensive solution for orchestrating amazing events with multi-sensory experiences.",
      image: "/images/projects/personal_works/personal_project_erive_audio.png",
      technologies: ["React.js", "Node.js", "Event Management", "Responsive Design"],
      githubUrl: "",
      liveUrl: "https://erive.web.app/",
      category: "Business Website",
      year: "2023"
    },
    {
      id: "work3",
      title: "The Perfect Blenders",
      description: "Specialized in professional bartending services for all event types. Features certified mixologists, innovative cocktails and mocktails, and customizable packages for various occasions.",
      image: "/images/projects/personal_works/personal_project_perfect_blenders.png",
      technologies: ["React.js", "JavaScript", "Event Management","Responsive Design"],
      githubUrl: "",
      liveUrl: "https://theperfectblenders.com/",
      category: "Business Website",
      year: "2022"
    }
  ],

  // Interests & Hobbies
  interests: [
    {
      name: "Chess",
      icon: "♟️",
      description: "Strategic thinking and problem-solving through chess"
    },
    {
      name: "Badminton",
      icon: "🏸",
      description: "Fast-paced racquet sport for fitness and agility"
    },
    {
      name: "Swimming",
      icon: "🏊‍♂️",
      description: "Full-body workout and mental clarity through swimming"
    },
    {
      name: "Gaming",
      icon: "🎮",
      description: "Exploring interactive entertainment and multi player games"
    },
    {
      name: "Travel",
      icon: "✈️",
      description: "Discovering new places and experiencing different cultures"
    },
    {
      name: "Music",
      icon: "🎵",
      description: "Enjoying various genres of music for relaxation and inspiration"
    }
  ],

  // Workflow Steps - How I Work
  workflowSteps: [
    {
      title: "AI-Powered Research",
      subtitle: "Research & Development",
      description: "Leveraging AI tools like Claude for rapid research, code analysis, and exploring cutting-edge frontend technologies and architectural patterns.",
      icon: "🤖"
    },
    {
      title: "Smart Design",
      subtitle: "AI-Assisted UI/UX Design",
      description: "Using AI-powered design toolsn MCP's and prompts to create user-centric interfaces, generate design variations, and optimize user experience through data-driven insights.",
      icon: "🎨"
    },
    {
      title: "Intelligent Development",
      subtitle: "AI-Enhanced Coding",
      description: "Implementing robust solutions with AI-assisted code generation, automated testing, intelligent debugging, and continuous code quality improvements through AI-powered reviews.",
      icon: "💻"
    },
    {
      title: "Automated Excellence",
      subtitle: "AI-Driven Automation",
      description: "Automated testing suites, stable build distribution tools for reliable releases, and deployment strategies enhanced with monitoring and predictive analytics.",
      icon: "⚙️"
    }
  ],

  // Navigation Configuration
  navigation: [
    { name: "Home", href: "#home" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Designs", href: "#design-works" },
    { name: "Projects", href: "#personal-works" },
    { name: "Contact", href: "#contact" }
  ],

  // Social Links
  socialLinks: [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/santhoshdhandapani/",
      icon: "linkedin"
    },
    {
      name: "GitHub",
      url: "https://github.com/santhoshdhandapani",
      icon: "github"
    },
    {
      name: "Download CV",
      url: "https://drive.google.com/file/d/1UVjXqIvueofWoP3F2aGyqVEffwEYejI2/view",
      icon: "document"
    }
  ]
};

export default portfolioConfig;
