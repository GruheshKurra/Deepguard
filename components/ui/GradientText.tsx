import React from 'react';

export interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
  animated?: boolean;
  from?: string;
  to?: string;
}

export const GradientText: React.FC<GradientTextProps> = ({
  children,
  className = '',
  animated = false,
  from = '#ffffff',
  to = '#61A8FF',
}) => {
  const gradientClass = animated ? 'gradient-text-animated' : '';
  const style = {
    background: `linear-gradient(90deg, ${from}, ${to})`,
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
  };

  return (
    <span className={`${gradientClass} ${className}`} style={style}>
      {children}
    </span>
  );
};
