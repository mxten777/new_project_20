import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import LoadingSpinner from './LoadingSpinner.tsx';

interface PremiumButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'secondary' | 'glass';
  size?: 'sm' | 'md' | 'lg';
  icon?: LucideIcon;
  className?: string;
  disabled?: boolean;
  loading?: boolean;
}

const PremiumButton: React.FC<PremiumButtonProps> = ({
  children,
  onClick,
  href,
  type = 'button',
  variant = 'primary',
  size = 'md',
  icon: Icon,
  className = '',
  disabled = false,
  loading = false
}) => {
  const baseClasses = "inline-flex items-center justify-center gap-2 font-semibold transition-all duration-300 transform focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "btn-primary",
    secondary: "btn-secondary", 
    glass: "glass-button"
  };
  
  const sizes = {
    sm: "text-sm px-4 py-2 rounded-lg",
    md: "text-base px-6 py-3 rounded-xl",
    lg: "text-lg px-8 py-4 rounded-xl"
  };

  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;

  const iconSize = size === 'sm' ? 'w-4 h-4' : size === 'lg' ? 'w-6 h-6' : 'w-5 h-5';
  
  const content = (
    <>
      {loading ? (
        <LoadingSpinner size={size === 'lg' ? 'md' : 'sm'} />
      ) : (
        Icon && <Icon className={iconSize} />
      )}
      {children}
    </>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        className={classes}
        whileHover={{ scale: disabled || loading ? 1 : 1.05 }}
        whileTap={{ scale: disabled || loading ? 1 : 0.95 }}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={classes}
      disabled={disabled || loading}
      whileHover={{ scale: disabled || loading ? 1 : 1.05 }}
      whileTap={{ scale: disabled || loading ? 1 : 0.95 }}
    >
      {content}
    </motion.button>
  );
};

export default PremiumButton;