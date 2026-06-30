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

  const navigateTo = (nextPage) => {
    setPrevPage(page);
    setPage(nextPage);
  };

  return (
    <div className="min-h-screen bg-darkBg text-slate-300 flex flex-col font-sans selection:bg-accentIndigo selection:text-white antialiased">
      {/* Navigation Header */}
      <Header page={page} setPage={navigateTo} />

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
