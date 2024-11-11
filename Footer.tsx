import React from 'react';
import { Brain, Twitter, Linkedin, Github } from 'lucide-react';
import Container from './common/Container';

const navigation = {
  solutions: [
    { name: 'Customer Analytics', href: '#' },
    { name: 'Market Optimization', href: '#' },
    { name: 'Churn Prediction', href: '#' },
    { name: 'Fraud Detection', href: '#' },
  ],
  industries: [
    { name: 'Broadcasting', href: '#' },
    { name: 'Streaming', href: '#' },
    { name: 'Telecommunications', href: '#' },
    { name: 'Content Production', href: '#' },
  ],
  company: [
    { name: 'About', href: '#' },
    { name: 'Case Studies', href: '#' },
    { name: 'Partners', href: '#' },
    { name: 'Contact', href: '#' },
  ],
  social: [
    { name: 'Twitter', href: '#', icon: Twitter },
    { name: 'LinkedIn', href: '#', icon: Linkedin },
    { name: 'GitHub', href: '#', icon: Github },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-gray-900" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Footer</h2>
      <Container>
        <div className="py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <div className="xl:grid xl:grid-cols-3 xl:gap-8">
            <div className="space-y-8 xl:col-span-1">
              <div className="flex items-center space-x-2">
                <Brain className="h-8 w-8 text-indigo-400" />
                <span className="text-xl font-bold text-white">AIGrowth</span>
              </div>
              <p className="text-gray-400 text-base">
                Empowering media and telecom companies with AI-driven solutions for sustainable growth and innovation.
              </p>
              <div className="flex space-x-6">
                {navigation.social.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-gray-400 hover:text-indigo-400 transition-colors duration-200"
                  >
                    <span className="sr-only">{item.name}</span>
                    <item.icon className="h-6 w-6" />
                  </a>
                ))}
              </div>
            </div>
            <div className="mt-12 grid grid-cols-3 gap-8 xl:mt-0 xl:col-span-2">
              <div>
                <h3 className="text-sm font-semibold text-indigo-400 tracking-wider uppercase">
                  Solutions
                </h3>
                <ul className="mt-4 space-y-4">
                  {navigation.solutions.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-base text-gray-400 hover:text-white transition-colors duration-200"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-indigo-400 tracking-wider uppercase">
                  Industries
                </h3>
                <ul className="mt-4 space-y-4">
                  {navigation.industries.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-base text-gray-400 hover:text-white transition-colors duration-200"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-indigo-400 tracking-wider uppercase">
                  Company
                </h3>
                <ul className="mt-4 space-y-4">
                  {navigation.company.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-base text-gray-400 hover:text-white transition-colors duration-200"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-12 border-t border-gray-800 pt-8">
            <p className="text-base text-gray-400 xl:text-center">
              &copy; {new Date().getFullYear()} AIGrowth. All rights reserved.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}