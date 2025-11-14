import React from 'react';
import { motion } from 'framer-motion';

export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  className?: string;
  href?: string;
  asLink?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  'aria-label'?: string;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  href,
  asLink = false,
  onClick,
  type = 'button',
  disabled = false,
  'aria-label': ariaLabel,
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-200 ease-out rounded-lg tracking-tight';

  const variantStyles = {
    primary: 'bg-[#6C47FF] text-white hover:bg-[#5a3ad6] hover:shadow-[0_8px_24px_rgba(108,71,255,0.25)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6C47FF]',
    secondary: 'bg-surface text-text-primary border border-surface-tertiary/50 hover:bg-surface-secondary hover:border-surface-tertiary hover:shadow-soft',
    ghost: 'bg-transparent text-text-secondary hover:bg-surface-secondary/50 hover:text-text-primary',
  };

  const sizeStyles = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-2.5 text-base',
    lg: 'px-8 py-3 text-lg',
  };

  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  if (asLink && href) {
    return (
      <motion.a
        href={href}
        className={combinedClassName}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        aria-label={ariaLabel}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      className={combinedClassName}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      type={type}
      disabled={disabled}
      aria-label={ariaLabel}
    >
      {children}
    </motion.button>
  );
};
