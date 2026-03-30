import React from 'react';
import { Badge } from './ui/badge';
import { Card, CardContent } from './ui/card';
import { skillsData } from '../mock';
import { Cpu, Wrench, Code } from 'lucide-react';

const Skills = () => {
  return (
    <section id="skills" className="bg-slate-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Core Skills */}
          <Card className="bg-slate-800/50 border-slate-700 hover:border-cyan-500/50 transition-all duration-300">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-cyan-500/10 rounded-lg border border-cyan-500/30">
                  <Cpu className="h-6 w-6 text-cyan-400" />
                </div>
                <h3 className="text-2xl font-semibold">Core Expertise</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skillsData.core.map((skill, index) => (
                  <Badge
                    key={index}
                    className="bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 hover:bg-cyan-500/30 transition-colors px-3 py-1"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Technical Skills */}
          <Card className="bg-slate-800/50 border-slate-700 hover:border-blue-500/50 transition-all duration-300">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-blue-500/10 rounded-lg border border-blue-500/30">
                  <Code className="h-6 w-6 text-blue-400" />
                </div>
                <h3 className="text-2xl font-semibold">Technical Skills</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skillsData.technical.map((skill, index) => (
                  <Badge
                    key={index}
                    className="bg-blue-500/20 text-blue-300 border border-blue-500/30 hover:bg-blue-500/30 transition-colors px-3 py-1"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Tools & Technologies */}
          <Card className="bg-slate-800/50 border-slate-700 hover:border-cyan-500/50 transition-all duration-300">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-cyan-500/10 rounded-lg border border-cyan-500/30">
                  <Wrench className="h-6 w-6 text-cyan-400" />
                </div>
                <h3 className="text-2xl font-semibold">Tools & Tech</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skillsData.tools.map((skill, index) => (
                  <Badge
                    key={index}
                    className="bg-slate-700/50 text-slate-300 border border-slate-600 hover:bg-slate-700 transition-colors px-3 py-1"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;