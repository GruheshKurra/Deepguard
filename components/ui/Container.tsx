import React from 'react';

export interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  as?: React.ElementType;
}

export const Container: React.FC<ContainerProps> = ({
  children,
  className = '',
  size = 'xl',
  as: Component = 'div',
}) => {
  const sizeStyles = {
    sm: 'max-w-[800px]',
    md: 'max-w-[1000px]',
    lg: 'max-w-[1200px]',
    xl: 'max-w-[1400px]',
  };

  const combinedClassName = `${sizeStyles[size]} mx-auto px-8 ${className}`;

  return <Component className={combinedClassName}>{children}</Component>;
};
