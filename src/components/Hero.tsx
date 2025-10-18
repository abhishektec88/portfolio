'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Typing Animation Component
const TypingAnimation = () => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const text = "How may I help you?";
  
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (currentIndex < text.length) {
          setDisplayedText(text.substring(0, currentIndex + 1));
          setCurrentIndex(currentIndex + 1);
        } else {
          // Wait before starting to delete
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (currentIndex > 0) {
          setDisplayedText(text.substring(0, currentIndex - 1));
          setCurrentIndex(currentIndex - 1);
        } else {
          setIsDeleting(false);
        }
      }
    }, isDeleting ? 100 : 150);
    
    return () => clearTimeout(timeout);
  }, [currentIndex, isDeleting, text]);
  
  return (
    <div className="text-center whitespace-nowrap">
      <h3 
        className="text-lg md:text-xl font-semibold mb-2"
        style={{color: '#1F2937'}}
      >
        {displayedText}
        <span className="animate-pulse" style={{color: 'rgb(131, 137, 233)'}}>|</span>
      </h3>
    </div>
  );
};

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center bg-white relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-64 h-64 rounded-full" style={{backgroundColor: '#C5ADC5'}}></div>
        <div className="absolute bottom-20 left-20 w-48 h-48 rounded-full" style={{backgroundColor: 'rgb(131, 137, 233)'}}></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-20 w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div className="text-left">
            <div
              className={`transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              {/* Role Badge */}
              <div className="mb-8">
                <span className="inline-block px-4 py-2 text-sm font-medium rounded-full" style={{backgroundColor: '#F8F9FA', color: '#6B7280', border: '1px solid #E5E7EB'}}>
                  Senior Software Engineer
                </span>
              </div>

              {/* Main Heading */}
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight" style={{color: '#1F2937'}}>
                Hi, I&apos;m{' '}
                <span className="font-black" style={{color: 'rgb(131, 137, 233)'}}>
                  Abhishek
                </span>
              </h1>
              
              {/* Subtitle */}
              <h2 className="text-xl md:text-2xl mb-12 font-normal leading-relaxed" style={{color: '#6B7280'}}>
                Building intelligent solutions with AI/ML and modern technology
              </h2>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Link
                  href="#contact"
                  className="px-8 py-4 rounded-lg font-medium transition-all duration-300 text-center text-lg"
                  style={{backgroundColor: 'rgb(131, 137, 233)', color: '#FFFFFF'}}
                  onMouseEnter={(e) => {
                    const target = e.target as HTMLAnchorElement;
                    target.style.backgroundColor = '#C5ADC5';
                    target.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    const target = e.target as HTMLAnchorElement;
                    target.style.backgroundColor = 'rgb(131, 137, 233)';
                    target.style.transform = 'translateY(0)';
                  }}
                >
                  Get in touch
                </Link>
                <Link
                  href="#projects"
                  className="px-8 py-4 rounded-lg font-medium transition-all duration-300 text-center text-lg border-2"
                  style={{borderColor: 'rgb(131, 137, 233)', color: 'rgb(131, 137, 233)'}}
                  onMouseEnter={(e) => {
                    const target = e.target as HTMLAnchorElement;
                    target.style.backgroundColor = 'rgb(131, 137, 233)';
                    target.style.color = '#FFFFFF';
                    target.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    const target = e.target as HTMLAnchorElement;
                    target.style.backgroundColor = 'transparent';
                    target.style.color = 'rgb(131, 137, 233)';
                    target.style.transform = 'translateY(0)';
                  }}
                >
                  View Projects
                </Link>
              </div>

              {/* Tech Stack - Simplified */}
              <div className="flex flex-wrap gap-3">
                {['Java', 'Python', 'Spring Boot', 'React', 'Node.js', 'AWS'].map((tech) => (
                  <span key={tech} className="px-4 py-2 text-sm font-medium rounded-lg" style={{backgroundColor: '#F8F9FA', color: '#6B7280'}}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Developer Image */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="relative w-full h-96 flex items-center justify-center">
              {/* Animated Text Above Character */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                <TypingAnimation />
              </div>
              
              <Image
                src="/working-developer1.png"
                alt="Developer working at desk"
                width={600}
                height={400}
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>

        {/* Simple Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="w-6 h-10 border-2 rounded-full flex justify-center" style={{borderColor: '#D1D5DB'}}>
            <div className="w-1 h-3 rounded-full mt-2 animate-bounce" style={{backgroundColor: '#9CA3AF'}}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
