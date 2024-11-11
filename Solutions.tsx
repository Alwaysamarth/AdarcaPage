import React from 'react';
import { Brain, BarChart3, Users, Zap, Shield } from 'lucide-react';
import Container from './Container';

const solutions = [
  {
    icon: Brain,
    name: 'Customer Analytics Recommendation',
    description: 'AI-powered insights to understand and predict customer behavior, enabling personalized experiences that drive engagement and loyalty.',
    benefits: ['20% increase in customer retention', 'Personalized recommendations', 'Behavioral analytics']
  },
  {
    icon: BarChart3,
    name: 'Market Mix Optimization',
    description: 'Optimize your marketing spend across channels with AI-driven insights that maximize ROI and market impact.',
    benefits: ['30% improved ROI', 'Real-time optimization', 'Cross-channel analysis']
  },
  {
    icon: Users,
    name: 'Churn Prediction & Retention',
    description: 'Identify at-risk customers before they leave and take proactive measures to retain valuable relationships.',
    benefits: ['15% reduction in churn', 'Early warning system', 'Targeted retention campaigns']
  },
  {
    icon: Zap,
    name: 'Dynamic Pricing & Revenue',
    description: 'Maximize revenue with AI-powered pricing strategies that adapt to market conditions in real-time.',
    benefits: ['25% revenue increase', 'Real-time price optimization', 'Competitive analysis']
  },
  {
    icon: Shield,
    name: 'Fraud Detection & Security',
    description: 'Protect your business with advanced AI algorithms that detect and prevent fraudulent activities.',
    benefits: ['40% fraud reduction', 'Real-time monitoring', 'Automated alerts']
  }
];

export default function Solutions() {
  return (
    <section id="solutions" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Solutions</h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
            AI-Powered Tools for Growth
          </p>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Transform your business with our suite of AI solutions designed specifically for media and telecom companies.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          {solutions.map((solution) => (
            <div
              key={solution.name}
              className="relative p-8 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex items-center">
                <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-indigo-100 text-indigo-600">
                  <solution.icon className="h-6 w-6" />
                </div>
                <h3 className="ml-4 text-xl font-semibold text-gray-900">{solution.name}</h3>
              </div>
              <p className="mt-4 text-gray-500 leading-relaxed">{solution.description}</p>
              <ul className="mt-4 space-y-2">
                {solution.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-center text-sm text-gray-600">
                    <span className="h-1.5 w-1.5 bg-indigo-600 rounded-full mr-2"></span>
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
