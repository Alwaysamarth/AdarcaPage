import React from 'react';
import { Radio, Tv, Signal, Film } from 'lucide-react';
import Container from './common/Container';

const industries = [
  {
    icon: Radio,
    name: 'Broadcasting',
    description: 'Optimize content scheduling, audience engagement, and ad placement with AI-driven insights.',
    features: [
      'Content performance analytics',
      'Audience behavior prediction',
      'Dynamic ad scheduling'
    ]
  },
  {
    icon: Tv,
    name: 'Streaming Services',
    description: 'Enhance viewer experience and retention through personalized content recommendations.',
    features: [
      'Personalized recommendations',
      'Viewing pattern analysis',
      'Content optimization'
    ]
  },
  {
    icon: Signal,
    name: 'Telecommunications',
    description: 'Improve network efficiency and customer satisfaction with predictive maintenance and analytics.',
    features: [
      'Network optimization',
      'Predictive maintenance',
      'Customer experience analytics'
    ]
  },
  {
    icon: Film,
    name: 'Content Production',
    description: 'Make data-driven decisions in content creation and distribution strategies.',
    features: [
      'Content success prediction',
      'Audience trend analysis',
      'Distribution optimization'
    ]
  }
];

export default function Industries() {
  return (
    <section id="industries" className="py-20 bg-white">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Industries</h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Tailored Solutions for Media & Telecom
          </p>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Our AI solutions are specifically designed for the unique challenges and opportunities in media and telecommunications.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {industries.map((industry) => (
            <div
              key={industry.name}
              className="relative group"
            >
              <div className="relative p-8 bg-white rounded-2xl border border-gray-200 hover:border-indigo-600 transition-colors duration-300">
                <div className="flex items-center">
                  <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-indigo-600 text-white group-hover:bg-indigo-700 transition-colors duration-300">
                    <industry.icon className="h-6 w-6" />
                  </div>
                  <h3 className="ml-4 text-xl font-semibold text-gray-900">{industry.name}</h3>
                </div>
                <p className="mt-4 text-gray-500">{industry.description}</p>
                <ul className="mt-6 space-y-4">
                  {industry.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <span className="h-6 flex items-center">
                        <span className="relative h-1.5 w-1.5 rounded-full bg-indigo-600 mr-2"></span>
                      </span>
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}