import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ButtonProps {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  icon?: boolean;
}

export default function Button({ 
  variant = 'primary', 
  children, 
  href, 
  onClick,
  icon = false 
}: ButtonProps) {
  const baseStyles = "flex items-center justify-center px-6 py-3 rounded-md font-medium transition-all duration-200";
  const variants = {
    primary: "bg-indigo-600 text-white hover:bg-indigo-700 shadow-sm",
    secondary: "bg-white text-indigo-600 border-2 border-indigo-600 hover:bg-indigo-50"
  };

  const Component = href ? 'a' : 'button';
  
  return (
    <Component
      href={href}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]}`}
    >
      {children}
      {icon && <ArrowRight className="ml-2 h-5 w-5" />}
    </Component>
  );
}