'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('projects');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const projects = [
    {
      id: 1,
      title: 'Client Portfolio Website',
      description: 'A professional portfolio website for a client showcasing their work, skills, and achievements. Built with modern web technologies and responsive design.',
      image: '/api/placeholder/600/400',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Netlify'],
      liveUrl: 'https://kaushalgupta.netlify.app/',
      githubUrl: 'https://github.com/abhishektec88',
      featured: true
    },
    {
      id: 2,
      title: 'NGO Website',
      description: 'A comprehensive website for an NGO focused on helping street kids. Features donation system, volunteer registration, and information about their mission.',
      image: '/api/placeholder/600/400',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Netlify'],
      liveUrl: 'https://rbstreetkids.netlify.app/',
      githubUrl: 'https://github.com/abhishektec88',
      featured: true
    },
    {
      id: 3,
      title: 'AI Note-Taker for Meetings',
      description: 'An intelligent AI-powered application that automatically transcribes and summarizes meeting notes using advanced natural language processing and machine learning techniques.',
      image: '/api/placeholder/600/400',
      technologies: ['Python', 'Machine Learning', 'NLP', 'AI', 'GitHub'],
      liveUrl: 'https://github.com/abhishektec88/AI_Note_Taker_for_Meetings',
      githubUrl: 'https://github.com/abhishektec88/AI_Note_Taker_for_Meetings',
      featured: true
    },
    {
      id: 4,
      title: 'E-commerce Website',
      description: 'A full-featured e-commerce platform with add-to-cart functionality, product management, and user authentication. Built with modern web technologies.',
      image: '/api/placeholder/600/400',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
      liveUrl: 'https://github.com/abhishektec88/e-commerceadd-to-cart',
      githubUrl: 'https://github.com/abhishektec88/e-commerceadd-to-cart',
      featured: false
    },
    {
      id: 5,
      title: 'AI-Powered Customer Insights & Risk Analysis Platform',
      description: 'Designed and developed a secure, AI-powered platform for a leading banking institution. Integrated ML models for credit risk prediction, fraud detection, and personalized financial recommendations using Python, scikit-learn, and XGBoost.',
      image: '/api/placeholder/600/400',
      technologies: ['Python', 'scikit-learn', 'XGBoost', 'React', 'Java', 'Spring Boot', 'MySQL'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    },
    {
      id: 6,
      title: 'Financial Security Dashboard with AI Insights',
      description: 'Developed a Financial Security Dashboard with integrated AI-driven insights for ITC Infotech. Utilized Java (Spring Boot) and React with TypeScript, contributing to ML models for risk profiling and user behavior prediction.',
      image: '/api/placeholder/600/400',
      technologies: ['Java', 'Spring Boot', 'React', 'TypeScript', 'Machine Learning'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{color: '#1F2937'}}>
              My Projects
            </h2>
            <div className="w-24 h-1 mx-auto rounded-full mb-6" style={{backgroundColor: 'rgb(131, 137, 233)'}}></div>
            <p className="text-lg max-w-3xl mx-auto" style={{color: '#6B7280'}}>
              Here are some of my recent projects that showcase my skills and passion for creating amazing digital experiences.
            </p>
          </div>

          {/* Featured Projects */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold mb-8 text-center" style={{color: '#1F2937'}}>
              Featured Projects
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              {featuredProjects.map((project, index) => (
                <div
                  key={project.id}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                  style={{
                    animationDelay: `${index * 200}ms`
                  }}
                >
                  <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                    <div className="text-white text-6xl font-bold">
                      {project.title.charAt(0)}
                    </div>
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">
                      {project.title}
                    </h4>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-4">
                      <Link
                        href={project.liveUrl}
                        className="text-blue-600 hover:text-blue-800 font-medium text-sm"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Live Demo →
                      </Link>
                      <Link
                        href={project.githubUrl}
                        className="text-gray-600 hover:text-gray-800 font-medium text-sm"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        GitHub →
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Other Projects */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-center" style={{color: '#1F2937'}}>
              Other Projects
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherProjects.map((project, index) => (
                <div
                  key={project.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                  style={{
                    animationDelay: `${(index + 2) * 100}ms`
                  }}
                >
                  <div className="h-32 bg-gradient-to-br from-gray-400 to-gray-600 flex items-center justify-center">
                    <div className="text-white text-3xl font-bold">
                      {project.title.charAt(0)}
                    </div>
                  </div>
                  <div className="p-4">
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      {project.title}
                    </h4>
                    <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1 mb-3">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>
                    <div className="flex gap-3">
                      <Link
                        href={project.liveUrl}
                        className="text-blue-600 hover:text-blue-800 text-xs font-medium"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Live
                      </Link>
                      <Link
                        href={project.githubUrl}
                        className="text-gray-600 hover:text-gray-800 text-xs font-medium"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Code
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
