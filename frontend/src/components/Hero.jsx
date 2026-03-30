import React from 'react';
import { ArrowRight, Github, Linkedin, Mail, Phone } from 'lucide-react';
import { Button } from './ui/button';
import { profileData, statsData } from '../mock';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen bg-slate-950 text-white pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-cyan-400 text-lg font-medium">Hello, I'm</p>
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                {profileData.name}
              </h1>
              <h2 className="text-2xl md:text-3xl text-slate-300 font-light">
                {profileData.title}
              </h2>
              <p className="text-lg text-slate-400 leading-relaxed">
                {profileData.tagline}
              </p>
            </div>

            <p className="text-slate-300 leading-relaxed">
              {profileData.intro}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button
                onClick={() => scrollToSection('portfolio')}
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white transition-all duration-300 group"
              >
                View My Work
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                onClick={() => scrollToSection('contact')}
                variant="outline"
                className="border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 transition-all duration-300"
              >
                Contact Me
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              <a
                href={profileData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 border border-slate-700 rounded-lg hover:border-cyan-500 hover:bg-cyan-500/10 transition-all duration-300"
              >
                <Linkedin className="h-5 w-5 text-slate-300" />
              </a>
              <a
                href={profileData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 border border-slate-700 rounded-lg hover:border-cyan-500 hover:bg-cyan-500/10 transition-all duration-300"
              >
                <Github className="h-5 w-5 text-slate-300" />
              </a>
              <a
                href={`mailto:${profileData.email}`}
                className="p-3 border border-slate-700 rounded-lg hover:border-cyan-500 hover:bg-cyan-500/10 transition-all duration-300"
              >
                <Mail className="h-5 w-5 text-slate-300" />
              </a>
              <a
                href={`tel:${profileData.phone}`}
                className="p-3 border border-slate-700 rounded-lg hover:border-cyan-500 hover:bg-cyan-500/10 transition-all duration-300"
              >
                <Phone className="h-5 w-5 text-slate-300" />
              </a>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl blur-2xl opacity-30"></div>
              <img
                src={profileData.profileImage}
                alt={profileData.name}
                className="relative rounded-2xl w-full max-w-md h-auto object-cover border-2 border-slate-800 shadow-2xl"
              />
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-12 border-t border-slate-800">
          {statsData.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-slate-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;