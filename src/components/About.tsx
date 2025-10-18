'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

const About = () => {
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

    const element = document.getElementById('about');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const skills = [
    { name: 'Java (Spring Boot)', level: 90 },
    { name: 'JavaScript', level: 95 },
    { name: 'React', level: 95 },
    { name: 'Machine Learning', level: 40 },
    { name: 'TypeScript', level: 90 },
    { name: 'MongoDB', level: 85 },
    { name: 'MySQL', level: 85 },
  ];

  const technologies = [
    'Python', 'scikit-learn', 'XGBoost', 'TensorFlow', 'Pandas', 'NumPy', 'Matplotlib',
    'React', 'Next.js', 'TypeScript', 'Java', 'Spring Boot', 'Express', 'FastAPI',
    'MongoDB', 'MySQL', 'AWS Lambda', 'Redux-Saga', 'React-Redux', 'GraphQL',
    'Apollo', 'Jest', 'Cypress', 'Git', 'GitHub', 'Material-UI', 'Chart.js', 'BabelJS', 'Webpack'
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{color: '#1F2937'}}>
              About Me
            </h2>
            <div className="w-24 h-1 mx-auto rounded-full" style={{backgroundColor: 'rgb(131, 137, 233)'}}></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Profile Image */}
            <div className="flex justify-center lg:justify-start mb-8 lg:mb-0">
              <div className="relative">
                <div className="w-64 h-64 rounded-full overflow-hidden border-4 shadow-lg" style={{borderColor: 'rgb(131, 137, 233)'}}>
                  <Image
                    src="/profile.jpg"
                    alt="Abhishek Ranjan - Senior Software Engineer"
                    width={256}
                    height={256}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
                {/* Decorative ring */}
                <div className="absolute -inset-2 rounded-full border-2 opacity-20" style={{borderColor: '#C5ADC5'}}></div>
              </div>
            </div>

            {/* Right Column - Story */}
            <div>
              <h3 className="text-2xl font-semibold mb-6" style={{color: '#1F2937'}}>
                My Journey
              </h3>
              <div className="space-y-4 leading-relaxed" style={{color: '#6B7280'}}>
                <p>
                  I&apos;m a passionate Senior Software Engineer with over 5.5 years of hands-on 
                  experience in full-stack development and AI/ML integration. My journey began with a 
                  Bachelor&apos;s degree in Technology from KCC Institute of Technology and Management, 
                  and I&apos;ve been building intelligent, scalable web applications ever since.
                </p>
                <p>
                  Currently working as a Sr. Software Developer at Teksystems Global Service, 
                  I specialize in Python, scikit-learn, XGBoost, React, Java (Spring Boot), and AWS. 
                  I have extensive experience in designing and deploying AI-powered platforms for 
                  banking, finance, and logistics, implementing models for credit risk prediction, 
                  fraud detection, and route optimization.
                </p>
                <p>
                  I&apos;m skilled in data preprocessing, model training, and end-to-end ML workflow 
                  integration with modern web apps. I have proven expertise in working with RESTful APIs, 
                  data visualization tools like Chart.js and Google Charts, and cloud services like AWS Lambda. 
                  I follow Agile methodologies and have strong problem-solving and communication skills.
                </p>
              </div>
            </div>

            {/* Bottom Section - Skills */}
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-semibold mb-6 text-center" style={{color: '#1F2937'}}>
                Skills & Technologies
              </h3>
              
              {/* Skill Bars */}
              <div className="space-y-4 mb-8">
                {skills.map((skill, index) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium" style={{color: '#1F2937'}}>{skill.name}</span>
                      <span className="text-sm" style={{color: '#6B7280'}}>{skill.level}%</span>
                    </div>
                    <div className="w-full rounded-full h-2" style={{backgroundColor: '#F3F4F6'}}>
                      <div
                        className="h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{
                          width: isVisible ? `${skill.level}%` : '0%',
                          backgroundColor: 'rgb(131, 137, 233)',
                          transitionDelay: `${index * 100}ms`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Technology Tags */}
              <div>
                <h4 className="text-lg font-semibold mb-4" style={{color: '#1F2937'}}>
                  Technologies I Work With
                </h4>
                <div className="flex flex-wrap gap-2">
                  {technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full text-sm font-medium transition-colors duration-200"
                      style={{backgroundColor: '#F8F9FA', color: '#6B7280'}}
                      onMouseEnter={(e) => {
                        const target = e.target as HTMLSpanElement;
                        target.style.backgroundColor = 'rgb(131, 137, 233)';
                        target.style.color = '#FFFFFF';
                      }}
                      onMouseLeave={(e) => {
                        const target = e.target as HTMLSpanElement;
                        target.style.backgroundColor = '#F8F9FA';
                        target.style.color = '#6B7280';
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
