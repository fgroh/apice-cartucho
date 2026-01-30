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
        <nav className={`fixed w-full z-40 transition-all duration-300 ${scrolled ? 'bg-white border-b-2 border-black py-3' : 'bg-white/80 border-b border-gray-200 py-5'}`}>
            <div className="container mx-auto px-6 flex justify-between items-center">

                <BrandLogo />

                <div className="hidden md:flex items-center gap-8">
                    <a href="#beneficios" className="font-mono text-sm font-bold uppercase hover:bg-black hover:text-white px-2 py-1 transition-colors">Benefícios</a>
                    <a href="#servicos" className="font-mono text-sm font-bold uppercase hover:bg-black hover:text-white px-2 py-1 transition-colors">Serviços</a>
                    <button
                        onClick={() => handleWhatsApp(WHATSAPP_MESSAGES.QUOTE)}
                        className="font-mono text-sm font-bold uppercase decoration-2 underline decoration-brand-cyan hover:bg-brand-cyan hover:text-black transition-all px-2 py-1"
                    >
                        Fazer Orçamento
                    </button>
                    <Button onClick={() => handleWhatsApp(WHATSAPP_MESSAGES.MAIN)} size="sm">
                        <MessageCircle size={18} fill="currentColor" />
                        WhatsApp
                    </Button>
                </div>
            </div>
        </nav>
    );
};
