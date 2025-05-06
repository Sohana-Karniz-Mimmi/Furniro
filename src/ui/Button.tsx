import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

export default function Button({
  children,
  onClick,
  className = '',
  type = 'button',
  disabled = false,
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`w-full text-center text-[14px] md:text-[16px] ${disabled ? 'bg-gray-400 cursor-not-allowed' : 'bg-primary text-white cursor-pointer'} 
      ${className}`}
    >
      {children}
    </button>
  );
}
