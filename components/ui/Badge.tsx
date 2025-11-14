import React from 'react';
import { motion } from 'framer-motion';

export interface BadgeProps {
  children: React.ReactNode;
  variant?: 'success' | 'warning' | 'error' | 'info';
  className?: string;
  icon?: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'info',
  className = '',
  icon,
}) => {
  const baseStyles = 'inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm';

  const variantStyles = {
    success: 'bg-success text-black',
    warning: 'bg-warning text-black',
    error: 'bg-error text-white',
    info: 'bg-accent-blue text-white',
  };

  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${className}`;

  return (
    <motion.div
      className={combinedClassName}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.2 }}
    >
      {icon && <span>{icon}</span>}
      {children}
    </motion.div>
  );
};
