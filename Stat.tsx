import React from 'react';

interface StatProps {
  value: string;
  label: string;
}

export default function Stat({ value, label }: StatProps) {
  return (
    <div className="text-center">
      <p className="text-4xl font-bold text-indigo-600">{value}</p>
      <p className="mt-2 text-sm text-gray-600">{label}</p>
    </div>
  );
}