'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface CTAButtonProps {
  text: string;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  disabled?: boolean;
}

const CTAButton: React.FC<CTAButtonProps> = ({
  text,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  disabled = false,
}) => {
  const baseStyles = 'font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 inline-block';

  const variantStyles = {
    primary: 'bg-gold-500 hover:bg-gold-600 text-white shadow-lg hover:shadow-xl',
    secondary: 'bg-primary-900 dark:bg-primary-100 hover:bg-primary-800 dark:hover:bg-primary-200 text-white dark:text-primary-900',
    outline: 'border-2 border-gold-500 text-gold-500 hover:bg-gold-50 dark:hover:bg-primary-800',
  };

  const sizeStyles = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const finalClassName = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`;

  if (href) {
    return (
      <motion.a
        href={href}
        className={finalClassName}
        whileHover={{ scale: disabled ? 1 : 1.05 }}
        whileTap={{ scale: disabled ? 1 : 0.95 }}
      >
        {text}
      </motion.a>
    );
  }

  return (
    <motion.button
      onClick={onClick}
      disabled={disabled}
      className={finalClassName}
      whileHover={{ scale: disabled ? 1 : 1.05 }}
      whileTap={{ scale: disabled ? 1 : 0.95 }}
    >
      {text}
    </motion.button>
  );
};

export default CTAButton;