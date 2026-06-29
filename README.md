# Abrham Teramed | Senior Full-Stack Engineer Portfolio

A premium, high-performance portfolio website built with React, Vite, and Tailwind CSS v4. The application features a responsive design, dynamic page transitions (Single Page Application page routing), tech stack lists, interactive project detail sheets, and a searchable projects archive database.

---

## 🚀 Key Features

* **SPA Page State Routing**: Seamless page transitions between `'home'`, `'archive'`, and `'detail'` views, maintaining light bundle sizes and smooth navigation.
* **Responsive Layouts**: Designed to be responsive, adjusting for monitor viewports, tablets, and mobile devices.
* **Technical Stack Filters**: Custom visual tech stack cards displaying focus areas (Mobile, Web, Backend, Languages, Cloud, Tools) with clean checkmarked listings.
* **All Projects Archive**: red-designed index showing detailed work history, dynamic category filter pills, real-time search string filters, sort options, and a submit-project card template.
* **Dynamic Details Sheet**: Replicates in-depth details of projects (Nova Fintech and Aura Project Management) complete with feature lists, tech badges, and target summaries.
* **Premium Assets**: Sleek phone and web mockup preview devices rendered purely using Tailwind/CSS code rules.
* **Interactive Contact Forms**: Input validation and successful message delivery triggers linking to `gmikael1908@gmail.com`.

---

## 🛠️ Tech Stack & Dependencies

* **Core**: [React 19](https://react.dev/) + [Vite 8](https://vite.dev/)
* **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
* **Icons**: [Lucide React](https://lucide.dev/)
* **Build Tool**: Vite (Rolldown CSS/JS compiler)

---

## 📂 Project Structure

```bash
portfolio/
├── public/                 # Favicon assets
│   ├── favicon.svg         # Custom developers brackets favicon
│   └── icons.svg
├── src/
│   ├── components/         # Modular layout segments
│   │   ├── Header.jsx      # Transparent dynamic navbar
│   │   ├── Hero.jsx        # Landing hero panel & inline socials
│   │   ├── TechStack.jsx   # Technical skills lists
│   │   ├── Projects.jsx    # Selected works highlight grid
│   │   ├── ProjectsArchive.jsx  # All projects archive page
│   │   ├── ProjectDetail.jsx    # Project specifications detail view
│   │   ├── Testimonials.jsx     # Client reviews card sliders
│   │   ├── Contact.jsx     # Email & locations contact form
│   │   └── Footer.jsx      # Copyright & social anchors
│   ├── App.jsx             # Root layout & page state router
│   ├── index.css           # Global stylesheet & Tailwind directives
│   └── main.jsx            # DOM compiler mountpoint
├── index.html              # Main HTML entrypoint (SEO description/Title)
├── package.json            # Configuration metadata
└── postcss.config.js       # CSS pipeline configs
```

---

## 💻 Getting Started

### Prerequisites

* [Node.js](https://nodejs.org/) (v18 or higher recommended)
* npm (Node Package Manager)

### Installation

1. Clone or navigate to the project directory:
   ```bash
   cd portfolio
   ```

2. Install the package dependencies:
   ```bash
   npm install
   ```

### Development Server

Run the local development environment:
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser to view the application.

### Production Build

Compile and optimize the project assets for hosting deployment:
```bash
npm run build
```
The compiled SPA will be outputted to the `dist/` directory.
