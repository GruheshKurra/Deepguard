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
  const baseStyles = 'rounded-lg border';

  const variantStyles = {
    glass: 'bg-surface/50 border-surface-tertiary/30 backdrop-blur-sm p-6',
    elevated: 'bg-surface border-surface-tertiary/50 shadow-soft p-6',
    feature: 'bg-surface border-surface-tertiary/40 p-8',
    premium: 'bg-gradient-to-br from-surface to-surface-secondary border-[#6C47FF]/20 shadow-[0_0_24px_rgba(108,71,255,0.1)] p-8',
  };

  const featuredStyles = featured
    ? 'lg:col-span-2 bg-gradient-to-br from-[#6C47FF]/10 to-surface border-[#6C47FF]/30 p-10'
    : '';

  const hoverStyles = hoverable
    ? 'transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(0,0,0,0.2)]'
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
