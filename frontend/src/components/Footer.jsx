import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { profileData } from '../mock';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-white border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <button
              onClick={scrollToTop}
              className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4 cursor-pointer hover:opacity-80 transition-opacity"
            >
              Lakshmi Sowjanya Bhogadula
            </button>
            <p className="text-slate-400 text-sm">
              AI & Machine Learning Engineer specializing in Generative AI and LLM-powered solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Experience', 'Skills', 'Services', 'Portfolio', 'Contact'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-slate-400 hover:text-cyan-400 transition-colors text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <div className="space-y-3 mb-4">
              <a
                href={`mailto:${profileData.email}`}
                className="flex items-center gap-2 text-slate-400 hover:text-cyan-400 transition-colors text-sm"
              >
                <Mail className="h-4 w-4" />
                {profileData.email}
              </a>
            </div>
            <div className="flex gap-4">
              <a
                href={profileData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 border border-slate-800 rounded-lg hover:border-cyan-500 hover:bg-cyan-500/10 transition-all duration-300"
              >
                <Linkedin className="h-5 w-5 text-slate-400" />
              </a>
              <a
                href={profileData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 border border-slate-800 rounded-lg hover:border-cyan-500 hover:bg-cyan-500/10 transition-all duration-300"
              >
                <Github className="h-5 w-5 text-slate-400" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-sm">
              © {currentYear} Lakshmi Sowjanya Bhogadula. All rights reserved.
            </p>
            <p className="text-slate-400 text-sm flex items-center gap-1">
              Built with <Heart className="h-4 w-4 text-red-500" /> using React & AI
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;