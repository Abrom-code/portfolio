import React, { useEffect } from 'react';
import { ArrowLeft, ArrowRight, ShieldCheck, Cpu, Database, Award, BarChart2, Fingerprint, Wallet, CreditCard, Layers, Compass, Code, Smartphone, Monitor } from 'lucide-react';

export default function ProjectDetail({ projectId, onBack, onNavigate }) {
  // Scroll to top when loading a new project detail
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [projectId]);

  // Project details database containing all 9 projects
  const projectDetails = {
    matricmate: {
      id: 'matricmate',
      title: 'MatricMate',
      subtitle: 'Comprehensive mobile learning platform that centralizes practice questions from Grades 9–12 for the Ethiopian Matric Examination.',
      role: 'Flutter Developer',
      techStack: 'Flutter, Supabase, Firebase',
      duration: '6 Months',
      problem: 'Preparing for the Ethiopian Matric Examination often requires students to gather questions from multiple sources, making revision inconsistent and time-consuming. Many learners also lack access to organized topic-based practice across all high school grades.',
      solution: 'MatricMate was built as a comprehensive mobile learning platform that centralizes practice questions from Grades 9–12. The application provides topic-based exercises alongside model and previous national examination questions, enabling students to prepare efficiently from a single application.',
      features: [
        {
          title: 'Topic-Based Learning',
          description: 'Practice questions organized by subject and topic across Grades 9–12.',
          icon: <Layers className="text-accentBlue" size={20} />,
        },
        {
          title: 'Model & Previous Exams',
          description: 'Access to model examinations and previous national Matric exam papers.',
          icon: <Award className="text-accentPurple" size={20} />,
        },
        {
          title: 'Secure Authentication',
          description: 'Firebase Authentication provides a secure and seamless login experience.',
          icon: <ShieldCheck className="text-indigo-400" size={20} />,
        },
        {
          title: 'Progress-Oriented Experience',
          description: 'Designed to encourage consistent study through an intuitive and distraction-free interface.',
          icon: <Compass className="text-pink-400" size={20} />,
        },
      ],
      architectureText: 'The application follows a scalable architecture that separates business logic from presentation while maintaining responsive performance.',
      architectureBullets: ['GETX STATE MANAGEMENT', 'SUPABASE DATABASE', 'FIREBASE AUTHENTICATION'],
      techBadges: [
        { label: 'UI Framework', value: 'Flutter' },
        { label: 'Language', value: 'Dart' },
        { label: 'Backend', value: 'Supabase' },
        { label: 'Authentication', value: 'Firebase' },
      ],
      nextProject: {
        id: 'eshetalehu',
        title: 'Eshetalehu',
      },
    },
    eshetalehu: {
      id: 'eshetalehu',
      title: 'Eshetalehu',
      subtitle: 'Marketplace application that connects buyers and sellers of used goods in a secure environment with real-time chat.',
      role: 'Flutter Developer',
      techStack: 'Flutter, Supabase, Firebase',
      duration: '5 Months',
      problem: 'Buying and selling second-hand products through social media often lacks trust, organization, and effective communication between buyers and sellers.',
      solution: 'Eshetalehu is a marketplace application that connects buyers and sellers of used goods in a secure and user-friendly environment, complete with real-time messaging.',
      features: [
        {
          title: 'Marketplace Listings',
          description: 'Browse and publish second-hand products with detailed information.',
          icon: <Layers className="text-accentBlue" size={20} />,
        },
        {
          title: 'Real-Time Chat',
          description: 'Direct communication between buyers and sellers.',
          icon: <Code className="text-accentPurple" size={20} />,
        },
        {
          title: 'Secure User Accounts',
          description: 'Firebase Authentication ensures secure user access.',
          icon: <ShieldCheck className="text-indigo-400" size={20} />,
        },
        {
          title: 'Smart Product Browsing',
          description: 'Simple interface for discovering products quickly.',
          icon: <Compass className="text-pink-400" size={20} />,
        },
      ],
      architectureText: 'Built using modern Flutter architecture for maintainability and scalability.',
      architectureBullets: ['BLOC STATE MANAGEMENT', 'SUPABASE DATABASE', 'FIREBASE AUTHENTICATION'],
      techBadges: [
        { label: 'UI Framework', value: 'Flutter' },
        { label: 'Language', value: 'Dart' },
        { label: 'Backend', value: 'Supabase' },
        { label: 'Authentication', value: 'Firebase' },
      ],
      nextProject: {
        id: 'amharic-typing',
        title: 'Amharic Typing',
      },
    },
    'amharic-typing': {
      id: 'amharic-typing',
      title: 'Amharic Typing',
      subtitle: 'Interactive web platform designed to improve typing speed and accuracy through Amharic lessons and real-time practice.',
      role: 'Frontend Developer',
      techStack: 'React, Tailwind CSS',
      duration: '3 Months',
      problem: 'There are very few dedicated platforms that help Ethiopians improve their Amharic typing skills, making it difficult for learners to practice efficiently.',
      solution: 'Amharic Typing is an interactive web platform designed to improve typing speed and accuracy through structured lessons and real-time practice sessions.',
      features: [
        {
          title: 'Interactive Lessons',
          description: 'Guided lessons for learning Amharic keyboard layouts.',
          icon: <Layers className="text-accentBlue" size={20} />,
        },
        {
          title: 'Live Typing Practice',
          description: 'Measure typing speed and accuracy in real time.',
          icon: <Code className="text-accentPurple" size={20} />,
        },
        {
          title: 'Progress Tracking',
          description: 'Monitor improvement across practice sessions.',
          icon: <ShieldCheck className="text-indigo-400" size={20} />,
        },
        {
          title: 'Responsive Interface',
          description: 'Optimized for desktop and mobile browsers.',
          icon: <Compass className="text-pink-400" size={20} />,
        },
      ],
      architectureText: 'A lightweight frontend application focused on speed and responsiveness.',
      architectureBullets: ['REACT', 'TAILWIND CSS', 'RESPONSIVE DESIGN'],
      techBadges: [
        { label: 'Frontend', value: 'React' },
        { label: 'Styling', value: 'Tailwind CSS' },
        { label: 'Language', value: 'JavaScript' },
      ],
      nextProject: {
        id: 'ethioride',
        title: 'EthioRide',
      },
    },
    ethioride: {
      id: 'ethioride',
      title: 'EthioRide',
      subtitle: 'Distributed ride-booking application simulating ride-sharing workflows while demonstrating networking and concurrency concepts.',
      role: 'Java Developer',
      techStack: 'Java, MySQL',
      duration: '4 Months',
      problem: 'Ride-hailing platforms require efficient request management, driver coordination, and reliable communication between multiple users.',
      solution: 'EthioRide is a distributed ride-booking application developed to simulate the core workflow of modern ride-sharing platforms while demonstrating networking and concurrent programming concepts.',
      features: [
        {
          title: 'Ride Requests',
          description: 'Passengers can request transportation services.',
          icon: <Layers className="text-accentBlue" size={20} />,
        },
        {
          title: 'Driver Management',
          description: 'Drivers receive and manage ride requests.',
          icon: <Code className="text-accentPurple" size={20} />,
        },
        {
          title: 'Concurrent Sync',
          description: 'Supports multiple connected clients simultaneously.',
          icon: <ShieldCheck className="text-indigo-400" size={20} />,
        },
        {
          title: 'Database Integration',
          description: 'Persistent ride and user information storage.',
          icon: <Compass className="text-pink-400" size={20} />,
        },
      ],
      architectureText: 'Designed as a distributed Java application with networking support.',
      architectureBullets: ['MULTITHREADED SERVER', 'JAVA SOCKET PROGRAMMING', 'MYSQL DATABASE'],
      techBadges: [
        { label: 'Language', value: 'Java' },
        { label: 'Database', value: 'MySQL' },
      ],
      nextProject: {
        id: 'noteify',
        title: 'Noteify',
      },
    },
    noteify: {
      id: 'noteify',
      title: 'Noteify',
      subtitle: 'Lightweight note-taking web application to organize, edit, and manage personal notes with persistent storage.',
      role: 'Full-Stack Developer',
      techStack: 'PHP, MySQL, JS',
      duration: '2 Months',
      problem: 'Students and professionals need a simple platform for organizing notes without unnecessary complexity.',
      solution: 'Noteify is a lightweight web application that enables users to create, organize, edit, and manage personal notes.',
      features: [
        {
          title: 'Create Notes',
          description: 'Quickly create and organize notes.',
          icon: <Layers className="text-accentBlue" size={20} />,
        },
        {
          title: 'CRUD functionality',
          description: 'Manage notes with full CRUD actions.',
          icon: <Code className="text-accentPurple" size={20} />,
        },
        {
          title: 'Clean Interface',
          description: 'Simple and responsive design layout.',
          icon: <ShieldCheck className="text-indigo-400" size={20} />,
        },
        {
          title: 'Persistent Storage',
          description: 'Notes stored securely in a MySQL database.',
          icon: <Compass className="text-pink-400" size={20} />,
        },
      ],
      architectureText: 'Traditional client-server web architecture.',
      architectureBullets: ['HTML / CSS / JS', 'PHP BACKEND', 'MYSQL DATABASE'],
      techBadges: [
        { label: 'Frontend', value: 'HTML, CSS, JS' },
        { label: 'Backend', value: 'PHP' },
        { label: 'Database', value: 'MySQL' },
      ],
      nextProject: {
        id: 'intelicoach',
        title: 'InteliCoach',
      },
    },
    intelicoach: {
      id: 'intelicoach',
      title: 'InteliCoach',
      subtitle: 'Java-based student coaching desktop application designed to organize study schedules, task priorities, and goals.',
      role: 'Java Developer',
      techStack: 'Java, MySQL',
      duration: '3 Months',
      problem: 'Students often struggle with effective time management, resulting in poor study habits and reduced productivity.',
      solution: 'InteliCoach helps students organize their schedules, prioritize tasks, and build productive study routines.',
      features: [
        {
          title: 'Task Scheduling',
          description: 'Create and organize daily study plans.',
          icon: <Layers className="text-accentBlue" size={20} />,
        },
        {
          title: 'Time Management',
          description: 'Manage study sessions efficiently.',
          icon: <Code className="text-accentPurple" size={20} />,
        },
        {
          title: 'Goal Tracking',
          description: 'Track completed activities.',
          icon: <ShieldCheck className="text-indigo-400" size={20} />,
        },
        {
          title: 'Student Dashboard',
          description: 'Simple interface for monitoring progress.',
          icon: <Compass className="text-pink-400" size={20} />,
        },
      ],
      architectureText: 'Desktop application built with Java and MySQL.',
      architectureBullets: ['JAVA', 'MYSQL DATABASE', 'MVC DESIGN'],
      techBadges: [
        { label: 'Language', value: 'Java' },
        { label: 'Database', value: 'MySQL' },
      ],
      nextProject: {
        id: 'exam-system',
        title: 'Exam Management System',
      },
    },
    'exam-system': {
      id: 'exam-system',
      title: 'Exam Management System',
      subtitle: 'Performance-focused C++ desktop examination management system enabling online test administration and automatic results.',
      role: 'C++ Developer',
      techStack: 'C++, MySQL',
      duration: '4 Months',
      problem: 'Educational institutions require efficient systems for conducting online examinations while maintaining organized records.',
      solution: 'An examination management system that enables online test administration and result management.',
      features: [
        {
          title: 'Online Exams',
          description: 'Conduct examinations digitally.',
          icon: <Layers className="text-accentBlue" size={20} />,
        },
        {
          title: 'Student Management',
          description: 'Manage registered candidates.',
          icon: <Code className="text-accentPurple" size={20} />,
        },
        {
          title: 'Question Manager',
          description: 'Store and organize examination questions.',
          icon: <ShieldCheck className="text-indigo-400" size={20} />,
        },
        {
          title: 'Result Processing',
          description: 'Automatically calculate examination results.',
          icon: <Compass className="text-pink-400" size={20} />,
        },
      ],
      architectureText: 'Performance-focused desktop application.',
      architectureBullets: ['C++', 'MYSQL DATABASE', 'OBJECT-ORIENTED DESIGN'],
      techBadges: [
        { label: 'Language', value: 'C++' },
        { label: 'Database', value: 'MySQL' },
      ],
      nextProject: {
        id: 'task-manager',
        title: 'Task Manager',
      },
    },
    'task-manager': {
      id: 'task-manager',
      title: 'Task Manager',
      subtitle: 'Lightweight task management web application designed to organize work efficiently through a clean user experience.',
      role: 'Frontend Developer',
      techStack: 'React, Tailwind CSS',
      duration: '2 Months',
      problem: 'Managing daily tasks can become overwhelming without a simple and intuitive productivity tool.',
      solution: 'A lightweight task management application designed to organize work efficiently through a clean user experience.',
      features: [
        {
          title: 'Task Organization',
          description: 'Create and manage daily tasks.',
          icon: <Layers className="text-accentBlue" size={20} />,
        },
        {
          title: 'Status Tracking',
          description: 'Monitor completed and pending work.',
          icon: <Code className="text-accentPurple" size={20} />,
        },
        {
          title: 'Responsive Layout',
          description: 'Works across desktop and mobile devices.',
          icon: <ShieldCheck className="text-indigo-400" size={20} />,
        },
        {
          title: 'Clean UX',
          description: 'Minimal interface focused on productivity.',
          icon: <Compass className="text-pink-400" size={20} />,
        },
      ],
      architectureText: 'Modern frontend application.',
      architectureBullets: ['REACT', 'TAILWIND CSS', 'COMPONENT-BASED ARCHITECTURE'],
      techBadges: [
        { label: 'Frontend', value: 'React' },
        { label: 'Styling', value: 'Tailwind CSS' },
        { label: 'Language', value: 'JavaScript' },
      ],
      nextProject: {
        id: 'shop',
        title: 'Shop',
      },
    },
    shop: {
      id: 'shop',
      title: 'Shop',
      subtitle: 'Flutter-based e-commerce application that enables users to browse products, manage carts, and authenticate using Firebase.',
      role: 'Flutter Developer',
      techStack: 'Flutter, MongoDB, Firebase',
      duration: '5 Months',
      problem: 'Modern e-commerce platforms should provide fast product browsing, secure authentication, and a seamless shopping experience on mobile devices.',
      solution: 'Shop is a Flutter-based e-commerce application that enables users to browse products, manage their shopping experience, and securely authenticate using Firebase.',
      features: [
        {
          title: 'Product Catalog',
          description: 'Browse products through an organized interface.',
          icon: <Layers className="text-accentBlue" size={20} />,
        },
        {
          title: 'Secure Auth',
          description: 'Firebase Authentication for secure user accounts.',
          icon: <Code className="text-accentPurple" size={20} />,
        },
        {
          title: 'Mobile-first Shopping',
          description: 'Designed with a modern mobile-first interface.',
          icon: <ShieldCheck className="text-indigo-400" size={20} />,
        },
        {
          title: 'Cloud Database',
          description: 'Product and user data managed through MongoDB.',
          icon: <Compass className="text-pink-400" size={20} />,
        },
      ],
      architectureText: 'Built using Flutter with cloud-based backend services.',
      architectureBullets: ['FLUTTER', 'MONGODB DATABASE', 'FIREBASE AUTHENTICATION'],
      techBadges: [
        { label: 'UI Framework', value: 'Flutter' },
        { label: 'Language', value: 'Dart' },
        { label: 'Database', value: 'MongoDB' },
        { label: 'Authentication', value: 'Firebase' },
      ],
      nextProject: {
        id: 'matricmate',
        title: 'MatricMate',
      },
    },
  };

  const project = projectDetails[projectId] || projectDetails.matricmate;

  return (
    <div className="bg-[#090A0C] min-h-screen text-slate-300 pt-28 pb-16 relative overflow-hidden text-left">
      {/* Background circular glowing effects */}
      <div className="absolute top-10 left-10 glow-backdrop w-[500px] h-[500px] opacity-40 pointer-events-none" />
      <div className="absolute bottom-1/3 right-10 glow-backdrop w-[600px] h-[600px] opacity-30 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10 space-y-20">
        {/* Navigation Action */}
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-white font-sans text-xs font-semibold border border-white/10 hover:border-white/20 transition-all duration-300"
        >
          <ArrowLeft size={14} className="text-accentBlue" />
          Back to Projects
        </button>

        {/* Project Header Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-8 space-y-4">
            <h1 className="font-outfit text-5xl md:text-6xl font-extrabold text-white tracking-tight">
              {project.title}
            </h1>
            <p className="font-sans text-lg text-slate-400 leading-relaxed max-w-2xl">
              {project.subtitle}
            </p>
          </div>

          {/* Project Details Columns */}
          <div className="lg:col-span-4 grid grid-cols-3 lg:grid-cols-1 gap-6 pt-4 lg:pt-0 border-t border-white/5 lg:border-t-0 lg:border-l lg:border-white/5 lg:pl-10">
            <div>
              <span className="font-outfit text-[10px] font-bold text-slate-500 uppercase tracking-widest block">Role</span>
              <span className="font-sans text-sm font-semibold text-white mt-1 block">{project.role}</span>
            </div>
            <div>
              <span className="font-outfit text-[10px] font-bold text-slate-500 uppercase tracking-widest block">Tech</span>
              <span className="font-sans text-sm font-semibold text-white mt-1 block">{project.techStack}</span>
            </div>
            <div>
              <span className="font-outfit text-[10px] font-bold text-slate-500 uppercase tracking-widest block">Duration</span>
              <span className="font-sans text-sm font-semibold text-white mt-1 block">{project.duration}</span>
            </div>
          </div>
        </div>

        {/* Graphic Mockup Area */}
        <div className="w-full rounded-3xl bg-darkCard border border-white/5 p-8 md:p-12 flex justify-center items-center shadow-2xl relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-tr from-accentIndigo/5 via-accentPurple/5 to-transparent opacity-50" />
          
          {project.techBadges.some(b => b.value === 'Flutter') ? (
            /* Large Mobile Phone Graphic Mockup */
            <div className="w-64 h-[440px] rounded-[36px] bg-darkBg border-4 border-white/10 p-3.5 shadow-2xl relative transform transition-transform duration-500 group-hover:scale-105 z-10">
              <div className="absolute top-2 left-1/2 -translate-x-1/2 w-20 h-4 bg-black rounded-full" />
              <div className="h-full rounded-[26px] bg-[#0E0F12] p-4 flex flex-col justify-between pt-6 overflow-hidden">
                <div className="flex justify-between items-center mt-2">
                  <span className="w-8 h-8 rounded-full bg-gradient-to-tr from-accentBlue to-accentPurple" />
                  <div className="w-20 h-4 rounded bg-white/10" />
                </div>
                
                {/* Visual Chart inside mobile mockup */}
                <div className="h-32 w-full rounded-xl bg-white/5 border border-white/5 p-3 flex flex-col justify-between my-auto">
                  <div className="flex justify-between">
                    <span className="w-10 h-3 rounded bg-white/10" />
                    <span className="text-[10px] font-bold text-accentBlue">95%</span>
                  </div>
                  {/* Detailed Graph lines */}
                  <div className="h-16 w-full flex items-end gap-1.5 pt-2">
                    <div className="h-[25%] w-[12%] rounded-t bg-accentBlue/20" />
                    <div className="h-[40%] w-[12%] rounded-t bg-accentBlue/20" />
                    <div className="h-[75%] w-[12%] rounded-t bg-accentPurple/40" />
                    <div className="h-[60%] w-[12%] rounded-t bg-accentBlue/30" />
                    <div className="h-[85%] w-[12%] rounded-t bg-accentBlue" />
                    <div className="h-[95%] w-[12%] rounded-t bg-accentPurple" />
                  </div>
                </div>

                <div className="space-y-2 mt-auto">
                  <div className="w-full h-8 rounded-xl bg-accentIndigo hover:bg-accentIndigo/90 transition-colors flex items-center justify-center text-xs font-bold text-white">
                    Get Started
                  </div>
                </div>
              </div>
            </div>
          ) : (
            /* Desktop Dashboard Graphic Mockup */
            <div className="w-full max-w-xl h-72 rounded-2xl bg-darkBg border-2 border-white/10 p-3 shadow-2xl relative transform transition-transform duration-500 group-hover:scale-105 z-10">
              <div className="flex gap-1.5 pb-2 mb-2 border-b border-white/5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
              </div>
              <div className="grid grid-cols-4 gap-4 h-56 pt-2">
                <div className="col-span-1 border-r border-white/5 space-y-4 pr-2">
                  <div className="h-4 rounded bg-accentPurple/20" />
                  <div className="h-8 rounded bg-white/5" />
                  <div className="h-8 rounded bg-white/5" />
                </div>
                <div className="col-span-3 space-y-4 pl-2">
                  <div className="flex justify-between items-center">
                    <div className="w-24 h-4 rounded bg-white/10" />
                    <div className="w-12 h-3 rounded bg-accentBlue/20" />
                  </div>
                  <div className="h-32 rounded-xl bg-white/5 border border-white/5 p-4 flex gap-4">
                    <div className="w-1/3 h-full rounded bg-white/5 flex flex-col justify-around p-2">
                      <div className="w-8 h-2 rounded bg-white/10" />
                      <div className="w-full h-12 rounded-full border-4 border-accentBlue/30 border-t-accentBlue animate-spin-slow" />
                    </div>
                    <div className="w-2/3 h-full flex flex-col justify-between">
                      <div className="h-3 rounded bg-white/10" />
                      <div className="h-3 rounded bg-white/10" />
                      <div className="h-3 rounded bg-white/10" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* The Challenge & Vision Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 text-left pt-6">
          <div className="lg:col-span-4">
            <h2 className="font-outfit text-3xl font-extrabold text-white">
              The Challenge & Vision
            </h2>
          </div>
          <div className="lg:col-span-8 space-y-8">
            <div className="p-6 rounded-2xl bg-darkCard border border-white/5">
              <span className="font-outfit text-[9px] font-bold text-accentBlue uppercase tracking-widest">Problem Statement</span>
              <p className="font-sans text-sm text-slate-400 mt-2 leading-relaxed">
                {project.problem}
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-darkCard border border-white/5">
              <span className="font-outfit text-[9px] font-bold text-accentPurple uppercase tracking-widest">Proposed Solution</span>
              <p className="font-sans text-sm text-slate-400 mt-2 leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>
        </div>

        {/* Core Functionalities Section */}
        <div className="space-y-10 pt-6">
          <h2 className="font-outfit text-3xl font-extrabold text-white text-center">
            Core Functionalities
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {project.features.map((feature, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-darkCard border border-white/5 text-left flex flex-col justify-between gap-6 hover:border-white/10 hover:bg-darkCardHover transition-colors"
              >
                <div className="p-2.5 rounded-xl bg-white/5 w-fit">
                  {feature.icon}
                </div>
                <div className="space-y-2">
                  <h3 className="font-outfit text-base font-bold text-white">
                    {feature.title}
                  </h3>
                  <p className="font-sans text-xs text-slate-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Architecture Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-6 text-left">
          <div className="lg:col-span-4 space-y-6">
            <h2 className="font-outfit text-3xl font-extrabold text-white">
              Architecture
            </h2>
            <p className="font-sans text-sm text-slate-400 leading-relaxed">
              {project.architectureText}
            </p>
            <ul className="space-y-2 list-none p-0 m-0">
              {project.architectureBullets.map((bullet, idx) => (
                <li key={idx} className="font-outfit text-[10px] font-bold text-slate-500 tracking-wider flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accentPurple" />
                  {bullet}
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-8 space-y-6">
            {/* tech badges row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {project.techBadges.map((badge, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-darkCard border border-white/5 text-center">
                  <span className="font-outfit text-[9px] font-semibold text-slate-500 uppercase tracking-widest">{badge.label}</span>
                  <span className="font-sans text-sm font-bold text-white mt-1 block">{badge.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Next Project Call To Action Banner */}
        <div
          onClick={() => onNavigate(project.nextProject.id)}
          className="rounded-3xl bg-gradient-to-br from-indigo-500/10 via-purple-500/5 to-transparent border border-white/5 hover:border-white/10 p-12 text-center relative overflow-hidden group cursor-pointer shadow-2xl pt-20 pb-20 transition-all duration-300"
        >
          {/* Glowing backdrops inside banner */}
          <div className="absolute inset-0 bg-gradient-to-tr from-accentBlue/5 to-accentPurple/5 opacity-50 transition-opacity group-hover:opacity-80" />
          
          <div className="relative z-10 space-y-4">
            <span className="font-outfit text-[10px] font-bold text-accentBlue uppercase tracking-widest block">Up Next</span>
            <h3 className="font-outfit text-4xl font-extrabold text-white group-hover:text-accentBlue transition-colors leading-[1.2]">
              {project.nextProject.title}
            </h3>
            <div className="inline-flex items-center gap-1.5 font-sans text-xs font-bold text-white/80 group-hover:text-white transition-colors">
              View Project
              <ArrowRight size={14} className="transform group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
