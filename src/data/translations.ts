export const translations = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      education: "Education",
      skills: "Skills",
      projects: "Projects",
      experience: "Experience",
      certifications: "Certifications",
      contact: "Contact",
      resume: "Resume",
      langToggle: "العربية"
    },
    hero: {
      badge: "Available for Job Opportunities, Internships ,and Projects",
      greeting: "Hi, I'm",
      name: "Mariam Gamal",
      title: "Software Engineer & AI Developer",
      taglines: ["Computer Science Engineer", "Full Stack Developer", "Mobile App Developer"],
      bio: "Building scalable web applications, cross platform mobile apps, and AI powered solutions with a passion for clean architecture, performance optimization, and continuous learning.",
      btnProjects: "View Projects",
      btnResume: "View Resume",
      btnContact: "Contact Me"
    },
    about: {
      title: "About Me",
      heading: "Aspiring Software Engineer & AI Developer",
      p1: "I am a Computer Science Engineering student passionate about Software Engineering, Artificial Intelligence, Full Stack Web Development, Mobile Application Development, and UI/UX Design. I enjoy transforming ideas into scalable, user focused digital solutions by combining modern technologies with strong engineering principles.",
      p2: "My experience includes developing responsive web and mobile applications, designing backend architectures, building RESTful APIs, working with databases, and implementing AI powered solutions such as Retrieval Augmented Generation (RAG) systems. I continuously explore machine learning and modern software technologies to solve real world problems.",
      p3: "I am committed to writing clean, maintainable, and efficient code while following best practices in software architecture and system design. Through continuous learning, collaboration, and hands on projects, I strive to build high quality applications that deliver excellent performance, scalability, and user experience.",
      stat1Label: "E-JUST Study",
      stat1Suffix: " Years",
      stat2Label: "Projects Built",
      stat2Suffix: "+",
      stat3Label: "Internships",
      stat3Suffix: "",
      stat4Label: "Tech Skills",
      stat4Suffix: "+"
    },
    education: {
      title: "Education",
      ejust: {
        institution: "Egypt-Japan University of Science and Technology (E-JUST)",
        degree: "B.Sc. in Computer Science and Engineering",
        period: "2024 - 2028",
        details: [
          "Specializing in Intelligent Systems and Software Engineering.",
          "Rigorous engineering foundation in Data Structures, Advanced Algorithms, Object-Oriented Analysis, and Discrete Mathematics.",
          "Extensive research and practice in Deep Learning, Applied Neural Networks, and NLP architectures."
        ]
      },
      zahraa: {
        institution: "El Zahraa International Schools (American Department)",
        degree: "High School Diploma",
        period: "2020 - 2023",
        details: [
          "Actively organized and volunteered in various school events, science fairs, and tech workshops.",
          "Active participant in scientific research exhibits, coding groups, and mathematics competitions.",
          "Maintained high honors distinction across all academic terms."
        ]
      }
    },
    skills: {
      title: "Technical Expertise",
      categories: {
        languages: "Languages",
        web: "Web & Frameworks",
        mobileUi: "Mobile & UI/UX Design",
        db: "Databases & ORMs",
        ai: "AI & Machine Learning",
        tools: "Tools & Productivity"
      }
    },
    projects: {
      title: "Featured Projects",
      viewAll: "View All Projects",
      allModalTitle: "All Projects",
      projectDetailsTitle: "Project Details",
      viewDetails: "View Details",
      liveDemo: "Live Demo",
      close: "Close",
      techStackTitle: "Technologies & Tools",
      overviewTitle: "Overview",
      items: [
        {
          id: 1,
          title: "Full-Stack Learning Management System (LMS)",
          year: "2026",
          tech: ["Next.js 15", "Express.js", "TypeScript", "Prisma", "PostgreSQL (Neon)", "Vercel"],
          description: "Production-grade monorepo LMS with a Next.js 15 App Router frontend and Express + TypeScript + Prisma backend, deployed on Vercel with live Neon PostgreSQL. Implemented 5 specialized user roles (Admin, Doctor, TA, Student, Support Agent), full Arabic/English RTL/LTR switching, and a custom glassmorphic design system with micro-animations.",
          demoLink: "https://mariam-lms-portal-pink.vercel.app/",
          image: "/images/projects-images/lms-project-image.png"
        },
        {
          id: 2,
          title: "Aura — Customer Ordering System",
          year: "2026",
          tech: ["Flask", "Python", "Bootstrap", "REST APIs", "SQLAlchemy"],
          description: "Full-stack ordering platform with dynamic menu, real-time order tracking, and admin dashboard, built with RESTful Flask routes following MVC and OOP principles. Clean state-controlled user inputs and responsive menu visual structures.",
          demoLink: "https://customer-ordering-system.onrender.com/",
          image: "/images/projects-images/cos-project-image.png"
        },
        {
          id: 3,
          title: "IntellMeet — AI Enterprise Meeting Platform",
          year: "2026",
          tech: ["React 19", "Node.js", "Express", "WebRTC", "Socket.io", "MongoDB", "Redis", "OpenAI"],
          description: "AI-powered enterprise meeting & collaboration platform featuring real-time WebRTC mesh video, automated post-meeting AI summaries, action-item extraction, interactive Kanban task sync, and team productivity analytics.",
          demoLink: "https://mariam-intellmeet.vercel.app/",
          image: "/images/projects-images/intellmeet-project-image.png"
        },
        {
          id: 4,
          title: "The UX Review Blog - Neubrutalism Landing Page",
          year: "2026",
          tech: ["HTML5", "CSS3", "Flexbox", "Responsive Design", "FontAwesome"],
          description: "Modern Neubrutalist blog landing page recreated using pure HTML5 and vanilla CSS in a bold Neubrutalism visual style with standard Flexbox layouts, position properties, sticky sidebar, author cards, and responsive media queries.",
          demoLink: "https://neubrutalism-landing-page.vercel.app/",
          image: "/images/projects-images/uxreview-project-image.png"
        },
        {
          id: 5,
          title: "DJI Mavic 4 Pro - Drone Product Landing Page",
          year: "2026",
          tech: ["HTML5", "CSS3", "Flexbox", "CSS Grid", "FontAwesome"],
          description: "Sleek, high-converting product landing page for the DJI Mavic 4 Pro drone. Built with pure HTML5 & CSS3 featuring a dark theme, interactive specs comparison matrix, customer rating breakdowns, and related product cards.",
          demoLink: "https://mariam-drone-product-landing-page.vercel.app/",
          image: "/images/projects-images/droneproduct-project-image.png"
        },
        {
          id: 6,
          title: "Mudabbir (مدبّر) - Personal Financial Dashboard",
          year: "2026",
          tech: ["HTML5", "CSS3", "CSS Grid", "Flexbox", "RTL Arabic", "3D Transforms"],
          description: "Personal finance management dashboard to track expenses, monitor category budgets, analyze weekly income vs expenses, and manage monthly bills. Built with Pure HTML5 & CSS3 with full RTL Arabic support and 3D CSS flip cards.",
          demoLink: "https://mariam-mudabbir-financial-dashboard.vercel.app/",
          image: "/images/projects-images/muddabir-project-image.png"
        },
        {
          id: 7,
          title: "AI Knowledge & Reasoning Engine",
          year: "2025",
          tech: ["Python", "LangChain", "FAISS", "Hugging Face", "PyTorch", "Embeddings"],
          description: "RAG pipeline over multi-document PDF corpora using PyPDFLoader, Hugging Face Sentence Transformers, and FAISS for low-latency similarity search, orchestrated with LangChain. Applied prompt engineering and iterative testing to improve answer grounding and reduce hallucinations.",
          demoLink: "",
          image: "/images/projects-images/smart-rag-project-image.png"
        }
      ]
    },
    experience: {
      title: "Professional Experience",
      items: [
        {
          title: "Software Testing",
          company: "Information Technology Institute (ITI)",
          period: "Aug 2026 - Present",
          desc: "Conducting comprehensive software testing procedures to ensure application quality and functionality across multiple projects & Collaborating with development teams to identify and resolve defects throughout the software development lifecycle, implementing automated testing solutions."
        },
        {
          title: "Front-End Development Diploma",
          company: "Route Academy- IT Training Center",
          period: "June 2026 - Present",
          desc: "Undertaking hands-on training in HTML, CSS, React.js, Bootstrap, Tailwind, TypeScript, Sass, jQuery, NPM and modern Java Script (ES6, DOM, BOM, AJAX, Fetch API, OOP)."
        },
        {
          title: "UI/UX Design Internship",
          company: "SyntecxHub Company",
          period: "Jun 3 – Jul 3, 2026",
          desc: "Designed and developed 4 high-fidelity UI/UX projects during a one month internship, applying user centered design principles and pixel perfect front-end implementation; Created wireframes and prototypes reducing development iteration time by 25% through early user feedback integration."
        },
        {
          title: "AI Internship",
          company: "Decode Labs Company",
          period: "Jun 1 – Jul 1, 2026",
          desc: "Worked on applied AI projects during a one month internship, strengthening practical skills in AI development and implementation."
        },
        {
          title: "Generative AI Internship Program",
          company: "Tips Hindawi Company",
          period: "Dec 2025 – Feb 2026",
          desc: "Completed an intensive program on generative AI concepts, including LLMs and applied prompt engineering, through hands on implementation exercises."
        },
        {
          title: "Online Training IT Intern",
          company: "Saham Al Shamal Eng’g Consultants Co. (SASEC)",
          period: "Jul – Aug 2025",
          desc: "Completed technical training on engineering consultancy processes and systems."
        },
        {
          title: "Industrial IT Intern",
          company: "Alexandria Mineral Oils Company (AMOC)",
          period: "Sep 2024",
          desc: "Monitored industrial control systems processing 1000+ data points daily, identifying and resolving 15+ operational issues reducing downtime by 20%; performed data analysis on production metrics, creating automated reports saving 10+ hours weekly in manual data processing."
        }
      ]
    },
    certifications: {
      title: "Certifications",
      viewAll: "View All Certificates",
      allModalTitle: "All Certifications",
      viewCert: "View Certificate",
      openPdf: "Open Original PDF",
      close: "Close",
      items: [
        { title: "Syntecx Hub UI/UX Design Internship Certificate", issuer: "SyntecxHub", image: "/certificates/Syntecx Hub UIUX Design Internship Certificate.png", pdf: "/certificates/Syntecx Hub UIUX Design Internship Certificate.pdf" },
        { title: "Decode Labs AI Internship Certificate", issuer: "Decode Labs", image: "/certificates/DecodeLabs Internship Certificate.png", pdf: "/certificates/DecodeLabs Internship Certificate.pdf" },
        { title: "Generative AI Internship Certificate", issuer: "Tips Hindawi", image: "/certificates/Generative AI Internship Certificate - Tips Hindawi.png", pdf: "/certificates/Generative AI Internship Certificate - Tips Hindawi.pdf" },
        { title: "SASEC CS Internship Certificate", issuer: "SASEC", image: "/certificates/SASEC CS Internship Certificate.png", pdf: "/certificates/SASEC CS Internship Certificate.pdf" },
        { title: "AMOC Industrial IT Training Certificate", issuer: "AMOC", image: "/certificates/AMOC Industrial IT Training Certificate.png", pdf: "/certificates/AMOC Industrial IT Training Certificate.pdf" },
        { title: "EF SET C2 Proficient (77/100)", issuer: "EF SET", image: "/certificates/EF SET C2 Proficient Certificate.png", pdf: "/certificates/EF SET C2 Proficient Certificate.pdf" },
        { title: "Elements of AI", issuer: "University of Helsinki & MinnaLearn", image: "/certificates/Elements of AI - University of Helsinki & MinnaLearn.png", pdf: "" }
      ]
    },
    contact: {
      title: "Get In Touch",
      heading: "Let's discuss your next project!",
      sub: "Whether you want to discuss full-stack web development, software testing automation, or practical AI applications, I'm always open to new opportunities, technical discussions, and collaborative projects. Let's build something extraordinary together!",
      phone: "Phone",
      email: "Email",
      location: "Location",
      locationVal: "Alexandria, Egypt",
      nameLabel: "Name",
      namePlaceholder: "Your Name",
      emailLabel: "Email Address",
      emailPlaceholder: "your.email@example.com",
      msgLabel: "Message",
      msgPlaceholder: "Hi Mariam, let's talk about...",
      btnSend: "Send Message",
      successTitle: "Message Sent!",
      successDesc: "Thank you for reaching out, your message has been transmitted successfully. I will get back to you shortly.",
      btnAnother: "Send Another Message",
      errorFill: "Please fill out all fields."
    },
    footer: {
      logoTitle: "Mariam",
      logoTitle2: "Gamal",
      sub: "Computer Science Engineer specializing in Full Stack Web Development, Mobile Applications & AI.",
      rights: "All rights reserved.",
      top: "Back to Top ↑"
    }
  },
  ar: {
    nav: {
      home: "الرئيسية",
      about: "عني",
      education: "التعليم",
      skills: "المهارات",
      projects: "المشاريع",
      experience: "الخبرات",
      certifications: "الشهادات",
      contact: "تواصل معي",
      resume: "السيرة الذاتية",
      langToggle: "English"
    },
    hero: {
      badge: "متاحة لفرص العمل، التدريب، والمشاريع",
      greeting: "أهلاً، أنا",
      name: "مريم جمال",
      title: "مهندسة برمجيات ومطورة ذكاء اصطناعي",
      taglines: ["مهندسة علوم حاسب", "مطورة فول ستاك", "مطورة تطبيقات موبايل"],
      bio: "بناء تطبيقات ويب قابلة للتوسع، تطبيقات موبايل متعددة المنصات، وحلول مدعومة بالذكاء الاصطناعي مع شغف بالمعمارية النظيفة، تحسين الأداء، والتعلم المستمر.",
      btnProjects: "عرض المشاريع",
      btnResume: "السيرة الذاتية",
      btnContact: "تواصل معي"
    },
    about: {
      title: "نبذة عني",
      heading: "مهندسة برمجيات ومطورة ذكاء اصطناعي طموحة",
      p1: "أنا طالبة في قسم هندسة وعلوم الحاسب بشغف كبير في هندسة البرمجيات، الذكاء الاصطناعي، تطوير الويب المتكامل (Full Stack)، تطوير تطبيقات الموبايل، وتصميم واجهات وتجربة المستخدم (UI/UX). أستمتع بتحويل الأفكار إلى حلول رقمية قابلة للتوسع ومتمحورة حول المستخدم من خلال دمج التقنيات الحديثة مع المبادئ الهندسية القوية.",
      p2: "تتضمن خبرتي تطوير تطبيقات الويب والموبايل المتجاوبة، تصميم البنيات التحتية الخلفية، بناء واجهات برمجة التطبيقات (RESTful APIs)، العمل مع قواعد البيانات، وتنفيذ الحلول المدعومة بالذكاء الاصطناعي مثل أنظمة RAG. أستمر دائماً في استكشاف التعلم الآلي وتقنيات البرمجيات الحديثة لحل المشكلات الواقعية.",
      p3: "أنا ملتزمة بكتابة كود نظيف، قابل للصيانة، وفعال مع اتباع أفضل الممارسات في معمارية البرمجيات وتصميم الأنظمة. من خلال التعلم المستمر، التعاون، والمشاريع التطبيقية، أسعى لبناء تطبيقات عالية الجودة تقدم أداءً ممتازاً، وسلاسة، وتجربة مستخدم متميزة.",
      stat1Label: "سنوات دراسة الجامعة",
      stat1Suffix: " سنوات",
      stat2Label: "مشروع منجز",
      stat2Suffix: "+",
      stat3Label: "تدريبات عملية",
      stat3Suffix: "",
      stat4Label: "مهارة تقنية",
      stat4Suffix: "+"
    },
    education: {
      title: "التعليم الأكاديمي",
      ejust: {
        institution: "الجامعة المصرية اليابانية للعلوم والتكنولوجيا (E-JUST)",
        degree: "بكالوريوس هندسة وعلوم الحاسب",
        period: "2024 - 2028",
        details: [
          "التخصص في الأنظمة الذكية وهندسة البرمجيات.",
          "أساس هندسي متين في هياكل البيانات، الخوارزميات المتقدمة، التحليل كائنية التوجه (OOP)، والرياضيات المتقطعة.",
          "دراسة وتطبيق مكثف في التعلم العميق، الشبكات العصبية التطبيقية، ومعالجة اللغات الطبيعية (NLP)."
        ]
      },
      zahraa: {
        institution: "مدارس الزهراء الدولية (القسم الأمريكي)",
        degree: "دبلومة الثانوية الأمريكية",
        period: "2020 - 2023",
        details: [
          "المشاركة الفعالة في تنظيم والتطوع في الفعاليات المدرسية، المعارض العلمية، وورش العمل التقنية.",
          "مشاركة نشطة في المعارض العلمية، مجموعات البرمجة، ومسابقات الرياضيات.",
          "الحصول على مرتبة الشرف في جميع الفصول الدراسية."
        ]
      }
    },
    skills: {
      title: "الخبرات المهارية والتقنية",
      categories: {
        languages: "لغات البرمجة",
        web: "الويب وأطر العمل",
        mobileUi: "الموبايل وتصميم الواجهات (UI/UX)",
        db: "قواعد البيانات",
        ai: "الذكاء الاصطناعي والتعلم الآلي",
        tools: "الأدوات والإنتاجية"
      }
    },
    projects: {
      title: "المشاريع البارزة",
      viewAll: "عرض جميع المشاريع",
      allModalTitle: "جميع المشاريع",
      projectDetailsTitle: "تفاصيل المشروع",
      viewDetails: "عرض التفاصيل",
      liveDemo: "المعاينة المباشرة",
      close: "إغلاق",
      techStackTitle: "التقنيات والأدوات",
      overviewTitle: "نظرة عامة",
      items: [
        {
          id: 1,
          title: "نظام إدارة التعلم المتكامل (LMS)",
          year: "2026",
          tech: ["Next.js 15", "Express.js", "TypeScript", "Prisma", "PostgreSQL (Neon)", "Vercel"],
          description: "نظام إدارة تعلم احترافي متمكن تم بناؤه بواجهة Next.js 15 وخلفية Express مع TypeScript و Prisma، ومنشور على Vercel مع قاعدة بيانات Neon PostgreSQL. يتضمن 5 أدوار مستخدمين (أدمن، أستاذ، معيد، طالب، ودعم)، دعم كامل للغتين العربية والإنجليزية، وتصميم زجاجي عصري مع تحريكات دقيقة.",
          demoLink: "https://mariam-lms-portal-pink.vercel.app/",
          image: "/images/projects-images/lms-project-image.png"
        },
        {
          id: 2,
          title: "نظام أورا لطلبات العملاء (Aura)",
          year: "2026",
          tech: ["Flask", "Python", "Bootstrap", "REST APIs", "SQLAlchemy"],
          description: "منصة طلبات متكاملة تحتوي على قائمة طعام تفاعلية، تتبع الطلبات في الوقت الفعلي، ولوحة تحكم للأدمن، تم بناؤها باستخدام Flask ومعمارية MVC ومبادئ البرمجة كائنية التوجه وتصميم متجاوب.",
          demoLink: "https://customer-ordering-system.onrender.com/",
          image: "/images/projects-images/cos-project-image.png"
        },
        {
          id: 3,
          title: "منصة IntellMeet للاجتماعات الذكية",
          year: "2026",
          tech: ["React 19", "Node.js", "Express", "WebRTC", "Socket.io", "MongoDB", "Redis", "OpenAI"],
          description: "منصة اجتماعات وتعاون ذكية للمؤسسات مدعومة بالذكاء الاصطناعي تتميز ببث فيديو مباشر بتقنية WebRTC، ملخصات اجتماعات آلية بالذكاء الاصطناعي، استخراج مهام العمل، محادثة فورية، لوحة كانبان تفاعلية، وتحليلات إنتاجية الفريق.",
          demoLink: "https://mariam-intellmeet.vercel.app/",
          image: "/images/projects-images/intellmeet-project-image.png"
        },
        {
          id: 4,
          title: "مدونة The UX Review - صفحة هبوط بنمط نيوبروتاليزم",
          year: "2026",
          tech: ["HTML5", "CSS3", "Flexbox", "Responsive Design", "FontAwesome"],
          description: "صفحة هبوط حديثة لمدونة UX Review تمت إعادتها باستخدام HTML5 و CSS3 النقي بأسلوب نيوبروتاليزم (Neubrutalism) عصري وجريء، مع تخطيطات Flexbox وشريط جانبي ثابت وبطاقات للكتاب وتصميم متجاوب كلياً.",
          demoLink: "https://neubrutalism-landing-page.vercel.app/",
          image: "/images/projects-images/uxreview-project-image.png"
        },
        {
          id: 5,
          title: "طائرة DJI Mavic 4 Pro - صفحة هبوط منتج",
          year: "2026",
          tech: ["HTML5", "CSS3", "Flexbox", "CSS Grid", "FontAwesome"],
          description: "صفحة هبوط جذابة وعالية التحويل لمنتج طائرة الدرون DJI Mavic 4 Pro. تم بناؤها باستخدام HTML5 و CSS3 بتصميم داكن أنيق، جدول مقارنة تفاعلي للمواصفات، تقييمات تفصيلية، ومراجعات العملاء وتصفح الملحقات.",
          demoLink: "https://mariam-drone-product-landing-page.vercel.app/",
          image: "/images/projects-images/droneproduct-project-image.png"
        },
        {
          id: 6,
          title: "نظام مدبّر (Mudabbir) - لوحة تحكم مالية شخصية",
          year: "2026",
          tech: ["HTML5", "CSS3", "CSS Grid", "Flexbox", "RTL Arabic", "3D Transforms"],
          description: "لوحة تحكم لإدارة المالية الشخصية تساعد في تتبع المصروفات، مراقبة الميزانيات، تحليل الدخل مقابل المصروفات، وإدارة الفواتير الشهرية. تم بناؤها باستخدام HTML5 و CSS3 الصافي مع دعم كامل للغة العربية وتأثيرات 3D تفاعلية.",
          demoLink: "https://mariam-mudabbir-financial-dashboard.vercel.app/",
          image: "/images/projects-images/muddabir-project-image.png"
        },
        {
          id: 7,
          title: "محرك المعرفة والاستنتاج بالذكاء الاصطناعي",
          year: "2025",
          tech: ["Python", "LangChain", "FAISS", "Hugging Face", "PyTorch", "Embeddings"],
          description: "نظام RAG متطور مخصص لتحليل واسترجاع المعلومات من مستندات PDF متعددة باستخدام LangChain و FAISS و Hugging Face Embeddings لبحث فائق السرعة، مع تطبيق هندسة أوامر متقدمة لرفع دقة الإجابات وتقليل الهلوسة.",
          demoLink: "",
          image: "/images/projects-images/smart-rag-project-image.png"
        }
      ]
    },
    experience: {
      title: "الخبرات العملية والتدريب",
      items: [
        {
          title: "اختبار البرمجيات (Software Testing)",
          company: "معهد تكنولوجيا المعلومات (ITI)",
          period: "أغسطس 2026 - الحالي",
          desc: "إجراء اختبارات شاملة للبرمجيات لضمان جودة التطبيقات ووظائفها عبر مشاريع متعددة، والتعاون مع فرق التطوير لتحديد العيوب وإصلاحها طوال دورة حياة تطوير البرمجيات وتنفيذ حلول الاختبار الآلي."
        },
        {
          title: "دبلومة تطوير الواجهات الأمامية (Front-End Development Diploma)",
          company: "أكاديمية روت - مركز تدريب تكنولوجيا المعلومات (Route Academy)",
          period: "يونيو 2026 - الحالي",
          desc: "التدريب العملي والتطبيقي على HTML, CSS, React.js, Bootstrap, Tailwind, TypeScript, Sass, jQuery, NPM والـ JavaScript الحديثة (ES6, DOM, BOM, AJAX, Fetch API, OOP)."
        },
        {
          title: "تدريب تصميم واجهات وتجربة المستخدم (UI/UX Design Internship)",
          company: "شركة سينتكس هاب (SyntecxHub)",
          period: "3 يونيو – 3 يوليو 2026",
          desc: "تصميم وتطوير 4 مشاريع UI/UX عالية الدقة خلال تدريب لمدة شهر، مع تطبيق مبادئ التصميم المتمحور حول المستخدم والتنفيذ الدقيق للواجهات الأمامية؛ إنشاء النماذج الهيكلية والنماذج الأولية مما قلل وقت تكرار التطوير بنسبة 25٪ من خلال التغذية الراجعة المبكرة."
        },
        {
          title: "تدريب الذكاء الاصطناعي (AI Internship)",
          company: "شركة ديكود لابس (Decode Labs)",
          period: "1 يونيو – 1 يوليو 2026",
          desc: "العمل على مشاريع ذكاء اصطناعي تطبيقية خلال تدريب لمدة شهر، وتعزيز المهارات العملية في تطوير وتنفيذ حلول الذكاء الاصطناعي."
        },
        {
          title: "برنامج تدريب الذكاء الاصطناعي التوليدي (Generative AI Internship Program)",
          company: "شركة هنداوي (Tips Hindawi)",
          period: "ديسمبر 2025 – فبراير 2026",
          desc: "إكمال برنامج مكثف حول مفاهيم الذكاء الاصطناعي التوليدي، بما في ذلك نماذج اللغة الكبيرة (LLMs) وهندسة الأوامر التطبيقية، من خلال تمارين التنفيذ العملي."
        },
        {
          title: "تدريب إلكتروني في تكنولوجيا المعلومات (Online Training IT Intern)",
          company: "شركة سهام الشمال للاستشارات الهندسية (SASEC)",
          period: "يوليو – أغسطس 2025",
          desc: "إكمال التدريب التقني حول عمليات وأنظمة الاستشارات الهندسية."
        },
        {
          title: "تدريب صناعي في تكنولوجيا المعلومات (Industrial IT Intern)",
          company: "شركة الإسكندرية للزيوت المعدنية (أموك - AMOC)",
          period: "سبتمبر 2024",
          desc: "مراقبة أنظمة التحكم الصناعية التي تعالج أكثر من 1000 نقطة بيانات يومياً، وتحديد وحل أكثر من 15 مشكلة تشغيلية مما قلل من وقت التوقف بنسبة 20٪؛ إجراء تحليل البيانات لمقاييس الإنتاج، وإنشاء تقارير مؤتمتة وفرت أكثر من 10 ساعات أسبوعياً في معالجة البيانات اليدوية."
        }
      ]
    },
    certifications: {
      title: "الشهادات والاعتمادات",
      viewAll: "عرض جميع الشهادات",
      allModalTitle: "جميع الشهادات والاعتمادات",
      viewCert: "عرض الشهادة",
      openPdf: "فتح ملف PDF الأصلي",
      close: "إغلاق",
      items: [
        { title: "شهادة تدريب UI/UX Design", issuer: "SyntecxHub", image: "/certificates/Syntecx Hub UIUX Design Internship Certificate.png", pdf: "/certificates/Syntecx Hub UIUX Design Internship Certificate.pdf" },
        { title: "شهادة تدريب Decode Labs بالذكاء الاصطناعي", issuer: "Decode Labs", image: "/certificates/DecodeLabs Internship Certificate.png", pdf: "/certificates/DecodeLabs Internship Certificate.pdf" },
        { title: "شهادة تدريب الذكاء الاصطناعي التوليدي", issuer: "Tips Hindawi", image: "/certificates/Generative AI Internship Certificate - Tips Hindawi.png", pdf: "/certificates/Generative AI Internship Certificate - Tips Hindawi.pdf" },
        { title: "شهادة تدريب SASEC في علوم الحاسب", issuer: "مؤسسة SASEC", image: "/certificates/SASEC CS Internship Certificate.png", pdf: "/certificates/SASEC CS Internship Certificate.pdf" },
        { title: "شهادة التدريب الصناعي - AMOC", issuer: "شركة أموك (AMOC)", image: "/certificates/AMOC Industrial IT Training Certificate.png", pdf: "/certificates/AMOC Industrial IT Training Certificate.pdf" },
        { title: "EF SET C2 Proficient (77/100)", issuer: "EF SET", image: "/certificates/EF SET C2 Proficient Certificate.png", pdf: "/certificates/EF SET C2 Proficient Certificate.pdf" },
        { title: "Elements of AI", issuer: "جامعة هلسنكي & MinnaLearn", image: "/certificates/Elements of AI - University of Helsinki & MinnaLearn.png", pdf: "" }
      ]
    },
    contact: {
      title: "تواصل معي",
      heading: "لنناقش مشروعك أو فرصتك القادمة!",
      sub: "سواء كنت ترغب في مناقشة تطوير الويب المتكامل، أتمتة اختبار البرمجيات، أو تطبيقات الذكاء الاصطناعي العملية، أنا دائماً منفتحة على الفرص الجديدة، النقاشات التقنية، والمشاريع التعاونية. لنبني شيئاً استثنائياً معاً!",
      phone: "الهاتف",
      email: "البريد الإلكتروني",
      location: "الموقع",
      locationVal: "الإسكندرية، مصر",
      nameLabel: "الاسم",
      namePlaceholder: "اسمك",
      emailLabel: "عنوان البريد الإلكتروني",
      emailPlaceholder: "your.email@example.com",
      msgLabel: "الرسالة",
      msgPlaceholder: "مرحباً مريم، أود التحدث بشأن...",
      btnSend: "إرسال الرسالة",
      successTitle: "تم إرسال الرسالة بنجاح!",
      successDesc: "شكراً لتواصلك، تم إرسال رسالتك بنجاح وسأقوم بالرد عليك في أقرب وقت ممكن.",
      btnAnother: "إرسال رسالة أخرى",
      errorFill: "يرجى ملء جميع الحقول المطلوبة."
    },
    footer: {
      logoTitle: "مريم",
      logoTitle2: "جمال",
      sub: "مهندسة علوم حاسب متخصصة في تطوير الويب المتكامل والذكاء الاصطناعي التطبيقي.",
      rights: "جميع الحقوق محفوظة.",
      top: "العودة للأعلى ↑"
    }
  }
};
