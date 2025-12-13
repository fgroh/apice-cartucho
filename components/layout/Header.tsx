import React, { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';
import { BrandLogo } from '../BrandLogo';
import { Button } from '../ui/Button';
import { WHATSAPP_MESSAGES, PHONE_NUMBER } from '../../constants';

export const Header: React.FC = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleWhatsApp = (message: string) => {
        const url = `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
    };

    return (
        <nav className={`fixed w-full z-40 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm' : 'bg-transparent'} py-4`}>
            <div className="container mx-auto px-6 flex justify-between items-center">

                <BrandLogo />

                <div className="hidden md:flex items-center gap-8">
                    <a href="#beneficios" className="text-sm font-medium hover:text-brand-green transition-colors uppercase tracking-wide">Benefícios</a>
                    <a href="#servicos" className="text-sm font-medium hover:text-brand-green transition-colors uppercase tracking-wide">Serviços</a>
                    <button
                        onClick={() => handleWhatsApp(WHATSAPP_MESSAGES.QUOTE)}
                        className="text-sm font-bold border-b-2 border-transparent hover:border-black transition-all pb-0.5"
                    >
                        Fazer Orçamento
                    </button>
                    <Button onClick={() => handleWhatsApp(WHATSAPP_MESSAGES.MAIN)}>
                        <MessageCircle size={18} fill="currentColor" />
                        WhatsApp
                    </Button>
                </div>
            </div>
        </nav>
    );
};
