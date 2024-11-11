import React from 'react';
import Container from './common/Container';
import Button from './common/Button';
import Stat from './common/Stat';

const stats = [
  { value: '30%', label: 'Cost Reduction' },
  { value: '20%', label: 'Revenue Growth' },
  { value: '15%', label: 'Customer Retention' },
  { value: '40%', label: 'Faster Insights' },
];

export default function Hero() {
  return (
    <div className="relative bg-white overflow-hidden">
      <Container>
        <div className="relative pt-24 pb-16 sm:pb-24">
          <main>
            <div className="text-center">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block">Empowering Media & Telecom</span>
                <span className="block text-indigo-600">with AI-Driven Growth Tools</span>
              </h1>
              <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                Transform your business with our cutting-edge AI solutions. 
                Unlock growth, optimize operations, and deliver exceptional customer experiences.
              </p>
              <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
                <div className="rounded-md shadow">
                  <Button href="#contact" icon>Get Started</Button>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <Button href="#solutions" variant="secondary">Learn More</Button>
                </div>
              </div>
            </div>

            <div className="mt-16">
              <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
                {stats.map((stat) => (
                  <Stat key={stat.label} {...stat} />
                ))}
              </div>
            </div>
          </main>
        </div>
      </Container>
      
      <div className="absolute inset-y-0 right-0 w-full md:w-1/2 lg:w-2/3">
        <img
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full opacity-10"
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80"
          alt="AI Technology Background"
        />
      </div>
    </div>
  );
}