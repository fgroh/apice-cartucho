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
    const baseStyles = "font-display font-medium text-lg uppercase tracking-wider border-2 border-black transition-all duration-200 flex items-center justify-center gap-2 active:translate-x-[2px] active:translate-y-[2px] active:shadow-none";

    const variants = {
        primary: "bg-brand-cyan text-black shadow-[4px_4px_0px_0px_#000000] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_#000000]",
        secondary: "bg-brand-magenta text-white shadow-[4px_4px_0px_0px_#000000] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_#000000]",
        outline: "bg-transparent text-black shadow-[4px_4px_0px_0px_#000000] hover:bg-black hover:text-white hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_#000000]",
        ghost: "bg-transparent text-black border-transparent hover:bg-gray-100 italic lowercase tracking-tight"
    };

    const sizes = {
        sm: "h-10 px-4 text-sm",
        md: "h-12 px-6 text-base",
        lg: "h-16 px-8 text-xl"
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
