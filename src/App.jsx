import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectsArchive from './components/ProjectsArchive';
import ProjectDetail from './components/ProjectDetail';

function App() {
  const [page, setPage] = useState('home'); // 'home' | 'archive' | 'detail'
  const [prevPage, setPrevPage] = useState('home');
  const [selectedProject, setSelectedProject] = useState('matricmate');
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme === 'dark' || savedTheme === 'light') {
        return savedTheme;
      }
      const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      return systemPrefersDark ? 'dark' : 'light';
    }
    return 'dark';
  });

  React.useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const navigateTo = (nextPage) => {
    setPrevPage(page);
    setPage(nextPage);
  };

  return (
    <div className="min-h-screen bg-darkBg text-textSecondary flex flex-col font-sans selection:bg-accentIndigo selection:text-white antialiased">
      {/* Navigation Header */}
      <Header page={page} setPage={navigateTo} theme={theme} toggleTheme={toggleTheme} />

      {/* Main Content Routing Sections */}
      <main className="flex-grow">
        {page === 'home' ? (
          <>
            <Hero />
            <TechStack />
            <Projects
              onViewAll={() => navigateTo('archive')}
              onViewDetail={(id) => {
                setSelectedProject(id);
                navigateTo('detail');
              }}
            />
            <Certifications />
            <Testimonials />
            <Contact />
          </>
        ) : page === 'archive' ? (
          <ProjectsArchive
            onViewProject={(id) => {
              setSelectedProject(id);
              navigateTo('detail');
            }}
          />
        ) : (
          <ProjectDetail
            projectId={selectedProject}
            onBack={() => setPage(prevPage === 'detail' ? 'home' : prevPage)}
            onNavigate={(id) => setSelectedProject(id)}
          />
        )}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
