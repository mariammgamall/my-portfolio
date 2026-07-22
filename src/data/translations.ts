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
      title: "Computer Science Engineer | Software Engineering & AI",
      taglines: ["Full-Stack Developer", "AI Engineer", "RAG Systems Builder"],
      bio: "Specializing in Full-Stack Web Development & Applied Artificial Intelligence. Building performant monorepo ecosystems and low-latency RAG systems.",
      btnProjects: "View Projects",
      btnResume: "View Resume",
      btnContact: "Contact Me"
    },
    about: {
      title: "About Me",
      heading: "Aspiring Computer Science & Engineering Graduate",
      p1: "I am a Computer Science Engineering student with hands-on experience in full-stack web development and applied artificial intelligence. I focus on building robust, end-to-end web applications and high-performance backend infrastructures.",
      p2: "My engineering background enables me to design, build, and deploy complex architectures, including Retrieval Augmented Generation (RAG) systems, database schemas, and multi-role platforms. I am highly passionate about deep learning, algorithm optimization, and clean coding architectures.",
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
          "Graduated with an outstanding GPA of 3.98 / 4.00.",
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
        db: "Databases & ORMs",
        ai: "AI & Machine Learning",
        tools: "Tools & Workflow"
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
          title: "Full Stack .NET Web Developer",
          company: "Digital Egypt Pioneers Initiative (DEPI)",
          period: "July 2026 - Present",
          desc: "Collaborating in an intensive professional training track to architect, develop, and test scalable web architectures using .NET Core, C#, Web APIs, and React. Refining database design using SQL Server and implementing security best practices."
        },
        {
          title: "Front-End Development Student",
          company: "Route Academy",
          period: "June 2026 - Present",
          desc: "Enrolled in Route's Front-End Development Diploma focusing on React.js, modern state management (Redux/Context API), advanced JavaScript, Tailwind CSS, responsive layouts, and performance optimization techniques."
        },
        {
          title: "UI/UX Design Intern",
          company: "SyntecxHub Company",
          period: "June - July 2026",
          desc: "Collaborated on user research, created wireframes, and drafted high-fidelity responsive UI designs using Figma. Conducted interactive user journey mapping and aligned layouts with product specifications."
        },
        {
          title: "AI Internship",
          company: "Decode Labs Company",
          period: "June - July 2026",
          desc: "Designed and deployed machine learning pipelines, ran exploratory data analysis (EDA), implemented deep learning modeling using PyTorch, and tuned hyperparameters to optimize inference metrics."
        },
        {
          title: "Generative AI Internship Program",
          company: "Tips Hindawi",
          period: "December 2025 - February 2026",
          desc: "Developed Retrieval-Augmented Generation (RAG) engines. Configured similarity searches using FAISS, orchestrated components with LangChain, and applied structured prompt engineering to mitigate output hallucinations."
        },
        {
          title: "Online Training Intern",
          company: "SASEC",
          period: "July - August 2025",
          desc: "Acquired hands-on knowledge in software engineering principles, database structures (SQL/NoSQL), object-oriented programming (OOP) paradigms, and algorithmic optimization."
        },
        {
          title: "Industrial Intern",
          company: "Alexandria Mineral Oils Company (AMOC)",
          period: "September 2024",
          desc: "Gained on-site exposure to industrial operations, IT system infrastructures, hardware networking configurations, and relational database monitoring tools."
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
        { title: "Elements of AI", issuer: "University of Helsinki & MinnaLearn", image: "/certificates/Elements of AI - University of Helsinki & MinnaLearn.png", pdf: "" },
        { title: "EF SET C2 Proficient (77/100)", issuer: "EF SET", image: "/certificates/EF SET C2 Proficient Certificate.png", pdf: "/certificates/EF SET C2 Proficient Certificate.pdf" },
        { title: "Industrial Training Certificate", issuer: "AMOC", image: "/certificates/Industrial Training Certificate - AMOC.jpeg", pdf: "" },
        { title: "SASEC CS Internship Certificate", issuer: "SASEC", image: "/certificates/SASEC CS Internship Certificate.png", pdf: "/certificates/SASEC CS Internship Certificate.pdf" },
        { title: "Generative AI Internship Certificate", issuer: "Tips Hindawi", image: "/certificates/Generative AI Internship Certificate - Tips Hindawi.png", pdf: "/certificates/Generative AI Internship Certificate - Tips Hindawi.pdf" },
        { title: "Decode Labs AI Internship Certificate", issuer: "Decode Labs", image: "/certificates/Generative AI Internship Certificate - Tips Hindawi.png", pdf: "/certificates/Generative AI Internship Certificate - Tips Hindawi.pdf" },
        { title: "Syntecx Hub UI/UX Design Internship Certificate", issuer: "SyntecxHub", image: "/certificates/Syntecx Hub UIUX Design Internship Certificate.png", pdf: "/certificates/Syntecx Hub UIUX Design Internship Certificate.pdf" }
      ]
    },
    contact: {
      title: "Get In Touch",
      heading: "Let's discuss your next project!",
      sub: "Whether you want to recruit me for a software development internship, discuss retrieval-augmented reasoning models, or simply chat about tech, feel free to reach out. I'm always open to new connections and collaborations.",
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
      sub: "Computer Science Engineer specializing in Full-Stack Web Development & Applied AI.",
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
      title: "مهندسة علوم حاسب | هندسة البرمجيات والذكاء الاصطناعي",
      taglines: ["مطورة فول ستاك", "مهندسة ذكاء اصطناعي", "مبتكرة أنظمة RAG"],
      bio: "متخصصة في تطوير برمجيات الويب المتكاملة (Full-Stack) والذكاء الاصطناعي التطبيقي. بناء أنظمة برمجية عالية الأداء وأنظمة ذكاء اصطناعي منخفضة التأخير.",
      btnProjects: "عرض المشاريع",
      btnResume: "السيرة الذاتية",
      btnContact: "تواصل معي"
    },
    about: {
      title: "نبذة عني",
      heading: "طالبة متميزة في هندسة وعلوم الحاسب",
      p1: "أنا طالبة في قسم هندسة وعلوم الحاسب أمتلك خبرة عملية واسعة في تطوير الويب المتكامل (Full-Stack) والذكاء الاصطناعي التطبيقي. أركز على بناء تطبيقات ويب متكاملة وقوية وبنيات تحتية برمجية عالية الأداء.",
      p2: "تمكنني خلفيتي الهندسية من تصميم وبناء ونشر أنظمة برمجية معقدة، بما في ذلك أنظمة RAG (Retrieval-Augmented Generation)، وتصميم قواعد البيانات، والمنصات متعددة الصلاحيات. لدي شغف كبير بالتعلم العميق، تحسين الخوارزميات، وهندسة البرمجيات النظيفة.",
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
          "التخرج بمعدل تراكمي متميز 3.98 / 4.00.",
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
        db: "قواعد البيانات",
        ai: "الذكاء الاصطناعي والتعلم الآلي",
        tools: "الأدوات وبيئة العمل"
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
          title: "مطورة ويب متكاملة .NET",
          company: "مبادرة رواد مصر الرقمية (DEPI)",
          period: "يوليو 2026 - الحالي",
          desc: "التدريب المكثف على تصميم وتطوير تطبيقات الويب القابلة للتوسع باستخدام .NET Core و C# و Web APIs و React، مع تحسين تصميم قواعد البيانات SQL Server وتطبيق أفضل معايير الأمان."
        },
        {
          title: "طالبة تطوير واجهات المستخدم (Front-End)",
          company: "أكاديمية روت (Route Academy)",
          period: "يونيو 2026 - الحالي",
          desc: "دراسة دبلومة تطوير الواجهات الأمامية باستخدام React.js، إدارة الحالة (Redux/Context API)، Tailwind CSS، والتصاميم المتجاوبة مع تطبيق تقنيات تحسين الأداء."
        },
        {
          title: "متدربة تصميم واجهات وتجربة المستخدم (UI/UX)",
          company: "شركة سينتكس هاب (SyntecxHub)",
          period: "يونيو - يوليو 2026",
          desc: "المشاركة في أبحاث المستخدمين، إنشاء النماذج الهيكلية (Wireframes)، وتصميم واجهات تفاعلية عالية الدقة باستخدام Figma، ورسم رحلات المستخدمين."
        },
        {
          title: "تدريب الذكاء الاصطناعي",
          company: "شركة ديكود لابس (Decode Labs)",
          period: "يونيو - يوليو 2026",
          desc: "تصميم وتنفيذ خطوط معالجة تعلم الآلة، تحليل البيانات الاستكشافي (EDA)، بناء نماذج التعلم العميق باستخدام PyTorch وضبط المعلمات لتحسين الأداء."
        },
        {
          title: "برنامج تدريب الذكاء الاصطناعي التوليدي",
          company: "مؤسسة هنداوي (Tips Hindawi)",
          period: "ديسمبر 2025 - فبراير 2026",
          desc: "تطوير محركات RAG، إعداد أبحاث التشابه باستخدام FAISS وتنظيم المكونات باستخدام LangChain مع تطبيق هندسة الأوامر لتجنب الهلوسة."
        },
        {
          title: "متدربة تدريب إلكتروني",
          company: "مؤسسة SASEC",
          period: "يوليو - أغسطس 2025",
          desc: "اكتساب خبرة عملية في مبادئ هندسة البرمجيات، قواعد البيانات (SQL/NoSQL)، البرمجة كائنية التوجه (OOP)، وتحسين الخوارزميات."
        },
        {
          title: "تدريب ميداني صناعي",
          company: "شركة الإسكندرية للزيوت المعدنية (أموك - AMOC)",
          period: "سبتمبر 2024",
          desc: "التعرف على العمليات الصناعية الميدانية، البنية التحتية لتكنولوجيا المعلومات، إعدادات شبكات الأجهزة، وأدوات مراقبة قواعد البيانات."
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
        { title: "Elements of AI", issuer: "جامعة هلسنكي & MinnaLearn", image: "/certificates/Elements of AI - University of Helsinki & MinnaLearn.png", pdf: "" },
        { title: "EF SET C2 Proficient (77/100)", issuer: "EF SET", image: "/certificates/EF SET C2 Proficient Certificate.png", pdf: "/certificates/EF SET C2 Proficient Certificate.pdf" },
        { title: "شهادة التدريب الصناعي - AMOC", issuer: "شركة أموك (AMOC)", image: "/certificates/Industrial Training Certificate - AMOC.jpeg", pdf: "" },
        { title: "شهادة تدريب SASEC في علوم الحاسب", issuer: "مؤسسة SASEC", image: "/certificates/SASEC CS Internship Certificate.png", pdf: "/certificates/SASEC CS Internship Certificate.pdf" },
        { title: "شهادة تدريب الذكاء الاصطناعي التوليدي", issuer: "Tips Hindawi", image: "/certificates/Generative AI Internship Certificate - Tips Hindawi.png", pdf: "/certificates/Generative AI Internship Certificate - Tips Hindawi.pdf" },
        { title: "شهادة تدريب Decode Labs بالذكاء الاصطناعي", issuer: "Decode Labs", image: "/certificates/Generative AI Internship Certificate - Tips Hindawi.png", pdf: "/certificates/Generative AI Internship Certificate - Tips Hindawi.pdf" },
        { title: "شهادة تدريب UI/UX Design", issuer: "SyntecxHub", image: "/certificates/Syntecx Hub UIUX Design Internship Certificate.png", pdf: "/certificates/Syntecx Hub UIUX Design Internship Certificate.pdf" }
      ]
    },
    contact: {
      title: "تواصل معي",
      heading: "لنناقش مشروعك أو فرصتك القادمة!",
      sub: "سواء كنت ترغب في توظيفي لفرصة تدريب في تطوير البرمجيات، مناقشة نماذج الذكاء الاصطناعي، أو التحدث حول التقنية، يسعدني تواصلك معي دائماً. أنا منفتحة دائماً على التواصل والتعاون المتبادل.",
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
