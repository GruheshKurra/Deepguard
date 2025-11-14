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
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-200 ease-out rounded-full';

  const variantStyles = {
    primary: 'bg-accent-blue text-white hover:shadow-medium hover:shadow-[0_0_32px_rgba(97,168,255,0.12)]',
    secondary: 'bg-surface text-text-primary border border-white/10 hover:bg-surface-secondary hover:shadow-soft',
    ghost: 'bg-transparent text-text-primary hover:bg-surface/50',
  };

  const sizeStyles = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-8 py-3 text-base',
    lg: 'px-10 py-4 text-lg',
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
