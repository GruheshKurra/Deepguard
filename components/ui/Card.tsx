import React from 'react';
import { motion } from 'framer-motion';

export interface CardProps {
  variant?: 'glass' | 'elevated' | 'feature' | 'premium';
  children: React.ReactNode;
  className?: string;
  featured?: boolean;
  hoverable?: boolean;
}

export const Card: React.FC<CardProps> = ({
  variant = 'glass',
  children,
  className = '',
  featured = false,
  hoverable = true,
}) => {
  const baseStyles = 'rounded-xl';

  const variantStyles = {
    glass: 'glass-card p-8',
    elevated: 'glass-card-elevated p-8',
    feature: 'glass-card p-10',
    premium: 'glass-premium p-8',
  };

  const featuredStyles = featured
    ? 'lg:col-span-2 bg-gradient-to-br from-surface/90 to-surface/70 border-accent-blue/30 p-12'
    : '';

  const hoverStyles = hoverable
    ? 'transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-[1.01] hover:shadow-[0_20px_40px_rgba(97,168,255,0.1)]'
    : '';

  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${featuredStyles} ${hoverStyles} ${className}`;

  if (hoverable) {
    return (
      <motion.div
        className={combinedClassName}
        whileHover={{ y: -4, scale: 1.01 }}
        transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
      >
        {children}
      </motion.div>
    );
  }

  return <div className={combinedClassName}>{children}</div>;
};
