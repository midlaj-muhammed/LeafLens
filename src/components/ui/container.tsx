import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
  fluid?: boolean;
}

const Container: React.FC<ContainerProps> = ({ 
  children, 
  className = '', 
  as: Component = 'div',
  fluid = false
}) => {
  return (
    <Component 
      className={`mx-auto px-4 sm:px-6 md:px-8 ${fluid ? 'w-full' : 'max-w-[1400px]'} ${className}`}
    >
      {children}
    </Component>
  );
};

export default Container;
