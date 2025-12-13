import React from 'react';
import { MapPin, MessageCircle } from 'lucide-react';
import { BrandLogo } from '../BrandLogo';
import { PHONE_DISPLAY } from '../../constants';

export const Footer: React.FC = () => {
    return (
        <footer className="py-12 px-6 border-t border-gray-100 text-sm text-gray-500 bg-white">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                <BrandLogo />

                <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 font-medium">
                    <div className="flex items-center gap-2 hover:text-brand-green transition-colors">
                        <MapPin size={16} /> Brusque - SC
                    </div>
                    <div className="flex items-center gap-2 hover:text-brand-green transition-colors">
                        <MessageCircle size={16} /> {PHONE_DISPLAY}
                    </div>
                </div>

                <div className="text-xs font-bold tracking-widest uppercase text-gray-300">
                    &copy; {new Date().getFullYear()} Ápice Cartucho
                </div>
            </div>
        </footer>
    );
};
