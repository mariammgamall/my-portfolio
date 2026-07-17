# Mariam Gamal - Personal Portfolio Website

A modern, professional, and visually striking personal portfolio website for **Mariam Gamal**, a Computer Science Engineering student specializing in Full-Stack Web Development and Applied AI. Built using a sleek, dark-themed tech/AI aesthetic, featuring glassmorphism layouts and performant micro-animations.

---

## 🚀 Live Demo & Repository
- **GitHub Repository**: [github.com/mariammgamall/my-portfolio](https://github.com/mariammgamall/my-portfolio)
- **LinkedIn Profile**: [linkedin.com/in/mariam-gamal-3b2408281](https://linkedin.com/in/mariam-gamal-3b2408281)
- **Primary Contact**: [maryamgamal188@gmail.com](mailto:maryamgamal188@gmail.com)

---

## 🛠️ Tech Stack & Key Tools
- **Core Framework**: [React.js](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/) (powered by [Vite](https://vite.dev/))
- **Styles**: [Tailwind CSS v4](https://tailwindcss.com/) (using native PostCSS + `@theme` CSS configuration)
- **Animations**: [Framer Motion](https://www.framer.com/motion/) (scroll reveals, custom transitions, typewriter tags)
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/)
- **Build / Packaging**: Vite Bundler (producing highly optimized client static chunks)

---

## ✨ Features & Architecture

1. **Hero / Landing**:
   - Particle Network Background: Renders a reactive canvas-based nodes network connecting dynamically.
   - Tagline Typewriter: Custom state cycles through roles: *Full-Stack Developer*, *AI Engineer*, and *RAG Systems Builder*.
   - Glow Profile Border: A customized circular tech-glow crop highlighting the professional avatar.

2. **About Section**:
   - Incorporates academic & developer biographies.
   - Features animated count-up stat digits (study terms, completed projects, internships) triggered on viewport intersection.

3. **Technical Skills Grid**:
   - Organizes expertise into 5 core cards (Languages, Web/Frameworks, Databases, AI/ML, and Tools) with hover glowing states and interactive tech badges.

4. **Featured Projects**:
   - Features rich glassmorphic cards with custom CSS visual mockups for a monorepo LMS, a Flask customer ordering platform, and a similarity search node diagram representing an AI RAG reasoning engine.

5. **Animated Experience Timeline**:
   - Vertical timeline mapping internships (Decode Labs, Tips Hindawi, DEPI, Route, etc.) using slide-up entrance animations.

6. **Interactive Certifications**:
   - Contains certificate cards. Clicking **View** opens an overlay modal with an embedded PDF preview `iframe` directly in the site, eliminating disruptive browser redirects. Clicking **Download** triggers direct downloads.

7. **Contact Platform**:
   - Input focus states utilizing Tailwind glow effects, coupled with an interactive submission form and visual validation checkmark screens.

---

## 💻 Getting Started (Local Development)

Follow these instructions to run the portfolio website locally on your computer.

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed (version 18+ is recommended).

### 1. Clone the Repository
```bash
git clone https://github.com/mariammgamall/mariam-gamal-portfolio.git
cd mariam-gamal-portfolio
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Start the Development Server
- **To run locally on your laptop only:**
  ```bash
  npm run dev
  ```
- **To run on both your laptop and mobile phone (local network):**
  ```bash
  npm run dev -- --host
  ```
Open the local URL (`http://localhost:5173/`) on your laptop, or the network IP URL on your mobile phone (ensure both devices are on the same Wi-Fi network).

### 4. Build for Production
To generate a static build optimized for fast loading and deployment (e.g., on Vercel, Netlify, or GitHub Pages):
```bash
npm run build
```
This compiles your typescript, optimization pipelines, and outputs a highly performant deployment-ready bundle in the `/dist` directory.

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
│   ├── certificates/           # Real Certification PDF & Image files
│   ├── images/                 
│   │   ├── profile-image/      # Personal profile headshot (mariam.jpeg)
│   │   └── projects-images/    # Screenshots for LMS, COS, and Smart-RAG
│   ├── my resume/              # Personal curriculum vitae (mariam_gamal_cv.pdf)
│   ├── favicon.svg             # Tab browser icon
│   └── icons.svg               # SVG sprite mappings
├── src/
│   ├── components/             # Modular Portfolio sections
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Skills.tsx
│   │   ├── Projects.tsx
│   │   ├── Experience.tsx
│   │   ├── Certifications.tsx
│   │   ├── Education.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   ├── App.tsx                 # Theme and layout state coordinator
│   ├── main.tsx                # React application entrypoint
│   └── index.css               # Tailwind CSS v4 directives & theme configurations
├── postcss.config.js           # PostCSS integrations
├── package.json                # Project configurations & dependencies
└── tsconfig.json               # TypeScript configuration
```
