import React from 'react';

interface TypographyProps {
  children: React.ReactNode;
  weight?:
    | 'thin'
    | 'light'
    | 'normal'
    | 'medium'
    | 'semibold'
    | 'bold'
    | 'extrabold'
    | 'black';
  size?: 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl';
  color?: string;
  underline?: boolean;
  className?: string;
  htmlFor?: string;
}

const weightClasses = {
  thin: 'font-thin',
  light: 'font-light',
  normal: 'font-normal',
  medium: 'font-medium',
  semibold: 'font-semibold',
  bold: 'font-bold',
  extrabold: 'font-extrabold',
  black: 'font-black',
};

const sizeClasses = {
  xs: 'text-xs',
  sm: 'text-sm',
  base: 'text-base',
  lg: 'text-lg',
  xl: 'text-xl',
  '2xl': 'text-2xl',
  '3xl': 'text-3xl',
  '4xl': 'text-4xl',
  '5xl': 'text-5xl',
};

const Typography: React.FC<TypographyProps> = ({
  children,
  weight = 'normal',
  size = 'base',
  color = 'text-neutral-800',
  underline = false,
  className = '',
  htmlFor,
}) => {
  const Tag = htmlFor ? 'label' : 'p'; // Use <label> if htmlFor exists, otherwise use <p>

  return (
    <Tag
      className={`${color} ${underline ? 'underline' : ''} ${weightClasses[weight]} ${sizeClasses[size]} ${className}`}
      {...(htmlFor ? { htmlFor } : {})} // Conditionally add htmlFor attribute
    >
      {children}
    </Tag>
  );
};

export default Typography;
