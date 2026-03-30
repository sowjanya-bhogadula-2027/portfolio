import React from 'react';
import { GraduationCap, Code2, Lightbulb } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { aboutData } from '../mock';

const About = () => {
  return (
    <section id="about" className="bg-slate-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Bio */}
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-cyan-500/10 rounded-lg border border-cyan-500/30">
                <Code2 className="h-6 w-6 text-cyan-400" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4">My Journey</h3>
                <p className="text-slate-300 leading-relaxed">{aboutData.bio}</p>
              </div>
            </div>

            <div className="flex items-start gap-4 mt-8">
              <div className="p-3 bg-blue-500/10 rounded-lg border border-blue-500/30">
                <Lightbulb className="h-6 w-6 text-blue-400" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4">Beyond Work</h3>
                <p className="text-slate-300 leading-relaxed">{aboutData.interests}</p>
              </div>
            </div>
          </div>

          {/* Education */}
          <div>
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-cyan-500/10 rounded-lg border border-cyan-500/30">
                <GraduationCap className="h-6 w-6 text-cyan-400" />
              </div>
              <h3 className="text-2xl font-semibold">Education</h3>
            </div>

            <div className="space-y-6">
              {aboutData.education.map((edu, index) => (
                <Card key={index} className="bg-slate-800/50 border-slate-700 hover:border-cyan-500/50 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-xl font-semibold text-cyan-400">{edu.degree}</h4>
                      <span className="text-sm text-slate-400 bg-slate-900 px-3 py-1 rounded-full">
                        {edu.year}
                      </span>
                    </div>
                    <p className="text-slate-300">{edu.institution}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;