import React from 'react';
import { LucideIcon } from 'lucide-react';

interface GradientButtonProps {
  children: React.ReactNode;
  icon?: LucideIcon;
  variant?: 'solid' | 'outline';
  className?: string;
  onClick?: () => void;
}

const GradientButton: React.FC<GradientButtonProps> = ({
  children,
  icon: Icon,
  variant = 'solid',
  className = '',
  onClick,
}) => {
  const baseStyles = "px-8 py-3 rounded-full font-medium flex items-center justify-center gap-2 transition-all";
  const variantStyles = variant === 'solid'
    ? "bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 text-white hover:opacity-90"
    : "border border-white text-white hover:bg-white/10";

  return (
    <button
      className={`${baseStyles} ${variantStyles} ${className}`}
      onClick={onClick}
    >
      {children}
      {Icon && <Icon className="w-5 h-5" />}
    </button>
  );
};

export default GradientButton;