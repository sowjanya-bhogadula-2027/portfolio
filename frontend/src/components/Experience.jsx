import React from 'react';
import { Briefcase, ChevronRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { experienceData } from '../mock';

const Experience = () => {
  return (
    <section id="experience" className="bg-slate-950 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Work <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto"></div>
        </div>

        {/* Timeline */}
        <div className="space-y-12">
          {experienceData.map((job, index) => (
            <div key={job.id} className="relative">
              {/* Timeline Line */}
              

              <Card className="bg-slate-900/50 border-slate-800 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10">
                <CardHeader>
                  <div className="flex items-start gap-6">
                    {/* Icon */}
                    <div className="p-4 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex-shrink-0">
                      <Briefcase className="h-6 w-6 text-white" />
                    </div>

                    {/* Header Info */}
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
                        <CardTitle className="text-2xl text-cyan-400">{job.title}</CardTitle>
                        <span className="text-sm text-slate-400 bg-slate-800 px-4 py-1 rounded-full w-fit">
                          {job.period}
                        </span>
                      </div>
                      <p className="text-xl text-slate-300 font-medium mb-2">{job.company}</p>
                      <p className="text-slate-400">{job.description}</p>
                    </div>
                  </div>
                </CardHeader>

                <CardContent>
                  <div className="mt-4">
                    <h4 className="text-lg font-semibold text-slate-200 mb-4">Key Responsibilities:</h4>
                    <ul className="space-y-3">
                      {job.responsibilities.map((resp, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-slate-300">
                          <ChevronRight className="h-5 w-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;