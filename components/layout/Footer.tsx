import React from 'react';
import { MapPin, MessageCircle } from 'lucide-react';
import { BrandLogo } from '../BrandLogo';
import { PHONE_DISPLAY } from '../../constants';

export const Footer: React.FC = () => {
    return (
        <footer className="py-12 px-6 border-t-4 border-black text-sm bg-white">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                <BrandLogo />

                <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 font-mono font-bold text-black">
                    <div className="flex items-center gap-2 hover:bg-brand-yellow transition-colors px-2 py-1">
                        <MapPin size={16} /> BRUSQUE - SC
                    </div>
                    <div className="flex items-center gap-2 hover:bg-brand-cyan transition-colors px-2 py-1">
                        <MessageCircle size={16} /> {PHONE_DISPLAY}
                    </div>
                </div>

                <div className="font-mono text-xs font-bold tracking-widest uppercase text-black/40">
                    &copy; {new Date().getFullYear()} ÁPICE.CARTUCHO // v2.0
                </div>
            </div>
        </footer>
    );
};
