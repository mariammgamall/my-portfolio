# Mariam Gamal - Personal Portfolio Website

A modern, professional, and visually striking personal portfolio website for **Mariam Gamal**, a Computer Science Engineering student specializing in Full-Stack Web Development and Applied AI. Built using a sleek dark/light tech aesthetic, featuring glassmorphism layouts, full Arabic/English bilingual support (RTL/LTR), performant micro-animations, and direct live contact form integration.

---

## 🚀 Live Demo & Repository
- **Live Demo URL**: [mariam-gamal-portfolio.vercel.app](https://mariam-gamal-portfolio.vercel.app/)
- **GitHub Repository**: [github.com/mariammgamall/my-portfolio](https://github.com/mariammgamall/my-portfolio)
- **LinkedIn Profile**: [linkedin.com/in/mariam-gamal-3b2408281](https://linkedin.com/in/mariam-gamal-3b2408281)
- **Primary Contact**: [maryamgamal188@gmail.com](mailto:maryamgamal188@gmail.com)

---

## 🛠️ Tech Stack & Key Tools
- **Core Framework**: [React.js](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/) (powered by [Vite](https://vite.dev/))
- **Styles**: [Tailwind CSS v4](https://tailwindcss.com/) (using native PostCSS + `@theme` CSS configuration)
- **Internationalization (i18n)**: Custom React `LanguageContext` supporting full Arabic (RTL) & English (LTR) switching with local storage persistence and Google's [Cairo](https://fonts.google.com/specimen/Cairo) font
- **Animations**: [Framer Motion](https://www.framer.com/motion/) (scroll reveals, page modals, interactive card transitions, typewriter effects)
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/)
- **Live Contact Delivery**: [FormSubmit API](https://formsubmit.co/) sending live messages directly to `maryamgamal188@gmail.com`
- **Build / Packaging**: Vite Bundler (producing highly optimized client static chunks)

---

## ✨ Features & Architecture

1. **Hero / Landing**:
   - **Particle Network Background**: Renders a reactive canvas-based nodes network connecting dynamically.
   - **Typewriter Effect**: Cycles through technical roles (*Full-Stack Developer*, *AI Engineer*, *RAG Systems Builder* / *مطورة فول ستاك*, *مهندسة ذكاء اصطناعي*, *مبتكرة أنظمة RAG*).
   - **Availability Tagline**: Prominently displays *"Available for Job Opportunities, Internships ,and Projects"* / *"متاحة لفرص العمل، التدريب، والمشاريع"*.
   - **Profile Glow Avatar**: A customized circular tech-glow crop highlighting the professional profile image.

2. **Full Arabic / English Bilingual Support (RTL/LTR)**:
   - Header button **`العربية` / `English`** toggles complete website translation instantly.
   - Automatically handles `dir="rtl"` vs `dir="ltr"`, font family overrides, and element alignment across all components.

3. **About Section**:
   - Incorporates academic & engineering biographies.
   - Features animated count-up stat counters (E-JUST study years, completed projects, internships, technical skills).

4. **Education & Technical Skills**:
   - Organizes education history (E-JUST B.Sc. & El Zahraa Diploma) and technical skills into 5 category cards (Languages, Web/Frameworks, Databases, AI/ML, and Tools) with hover glowing states and interactive tech badges.

5. **Featured Projects (Top 3 Limit + All Projects Modal)**:
   - Displays 3 featured projects on the main landing grid (Full-Stack LMS Monorepo, Aura Customer Ordering System, and AI Knowledge & Reasoning Engine).
   - **Project Details Tab/Modal**: Clicking any project card opens an interactive detail modal with full-resolution screenshots, complete tech stack badges, comprehensive project overview, and a **Live Demo** button.
   - **View All Projects Button**: Opens a full-page modal overlay displaying the entire portfolio showcase.

6. **Animated Experience Timeline**:
   - Vertical timeline mapping professional internships (DEPI, Route Academy, Decode Labs, Tips Hindawi, SASEC, AMOC) with slide-up entrance animations.

7. **Certifications (Mobile PDF Preview Fix + All Certificates Modal)**:
   - Displays top 3 certificates on the main landing section with a **View All Certificates** button to open the full collection.
   - High-resolution converted PNG image previews ensuring 100% native mobile rendering on Android Chrome & iOS Safari without iframe cutoffs.
   - Includes an optional *"Open Original PDF"* link inside the viewer modal for original document downloads.

8. **Live Contact Form**:
   - Fully activated contact form using FormSubmit API that transmits visitor messages directly to `maryamgamal188@gmail.com` with real-time submission feedback.

---

## 💻 Getting Started (Local Development)

Follow these instructions to run the portfolio website locally on your computer.

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed (version 18+ is recommended).

### 1. Clone the Repository
```bash
git clone https://github.com/mariammgamall/my-portfolio.git
cd my-portfolio
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Start the Development Server
- **To run locally on your computer:**
  ```bash
  npm run dev
  ```
- **To run on both your computer and mobile phone (local network):**
  ```bash
  npm run dev -- --host
  ```
Open the local URL (`http://localhost:5173/`) in your browser.

### 4. Build for Production
To generate an optimized production bundle:
```bash
npm run build
```

### 5. Preview the Production Build
To preview the production bundle locally:
```bash
npm run preview
```

---

## 📂 Project Structure
```text
mariam-gamal-portfolio/
├── public/                     # Static Assets
│   ├── certificates/           # PNG & PDF Certification files
│   ├── images/                 
│   │   ├── profile-image/      # Profile headshot (mariam.jpeg)
│   │   └── projects-images/    # Screenshots for LMS, COS, and Smart-RAG
│   ├── my resume/              # Personal curriculum vitae (mariam_gamal_cv.pdf)
│   ├── favicon.svg             # Tab browser icon
│   └── icons.svg               # SVG sprite mappings
├── src/
│   ├── components/             # Portfolio UI Components
│   │   ├── Navbar.tsx          # Navigation header & language/theme controls
│   │   ├── Hero.tsx            # Particle canvas & typewriter banner
│   │   ├── About.tsx           # Bio & animated statistics counters
│   │   ├── Education.tsx       # Degree & school details
│   │   ├── Skills.tsx          # Technical expertise categories
│   │   ├── Projects.tsx        # Top 3 grid, project detail modal & view all modal
│   │   ├── Experience.tsx      # Vertical internship timeline
│   │   ├── Certifications.tsx  # Certificates preview modal & view all modal
│   │   ├── Contact.tsx         # Contact info & FormSubmit live email form
│   │   └── Footer.tsx          # Clean footer
│   ├── context/
│   │   └── LanguageContext.tsx # Bilingual state & RTL/LTR coordinator
│   ├── data/
│   │   └── translations.ts     # Complete English & Arabic translation dictionary
│   ├── App.tsx                 # Root layout & dark mode state
│   ├── main.tsx                # Application entrypoint
│   └── index.css               # Tailwind CSS v4 directives & theme styles
├── index.html                  # HTML template with Cairo & Inter Google Fonts
├── package.json                # Project configurations & dependencies
└── tsconfig.json               # TypeScript configuration
```
