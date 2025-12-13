import React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    className?: string;
}

export const Button: React.FC<ButtonProps> = ({
    children,
    variant = 'primary',
    size = 'md',
    className,
    ...props
}) => {
    const baseStyles = "font-bold rounded-full transition-all duration-300 flex items-center justify-center gap-2 active:scale-95";

    const variants = {
        primary: "bg-brand-green text-white hover:bg-brand-darkGreen shadow-lg hover:shadow-green-500/30",
        secondary: "bg-black text-white hover:bg-gray-800 shadow-lg hover:shadow-gray-500/30",
        outline: "bg-transparent text-black border-2 border-black hover:bg-black hover:text-white",
        ghost: "bg-transparent text-gray-600 hover:text-brand-green hover:bg-green-50"
    };

    const sizes = {
        sm: "px-4 py-2 text-sm",
        md: "px-6 py-3 text-base",
        lg: "px-8 py-4 text-lg"
    };

    return (
        <button
            className={cn(baseStyles, variants[variant], sizes[size], className)}
            {...props}
        >
            {children}
        </button>
    );
};
