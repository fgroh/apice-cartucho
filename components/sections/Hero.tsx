import React from 'react';
import { MessageCircle, ArrowRight } from 'lucide-react';
import { Button } from '../ui/Button';
import { WHATSAPP_MESSAGES, PHONE_NUMBER } from '../../constants';

export const Hero: React.FC = () => {
    const handleWhatsApp = (message: string) => {
        const url = `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
    };

    return (
        <section className="relative pt-36 pb-20 px-6 overflow-hidden min-h-[90vh] flex items-center">
            {/* Background Gradients */}
            <div className="absolute top-0 right-0 -z-10 w-[800px] h-[800px] bg-cyan-50 rounded-full blur-3xl opacity-40 translate-x-1/3 -translate-y-1/3 animate-pulse"></div>
            <div className="absolute bottom-0 left-0 -z-10 w-[600px] h-[600px] bg-fuchsia-50 rounded-full blur-3xl opacity-30 -translate-x-1/3 translate-y-1/3"></div>

            <div className="container mx-auto max-w-6xl relative">
                <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 text-xs font-bold uppercase tracking-widest rounded bg-stone-900 text-white shadow-xl hover:scale-105 transition-transform cursor-default">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                    </span>
                    Atendimento em Brusque e Região
                </div>

                <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[1.1] mb-8 tracking-tight text-black">
                    FICOU SEM TINTA?<br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">
                        NÓS RESOLVEMOS.
                    </span>
                </h1>

                <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-xl leading-relaxed font-medium">
                    Recarga e cartuchos HP com até 70% de economia. Atendimento técnico especializado no seu escritório ou residência.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                    <Button
                        variant="primary"
                        size="lg"
                        onClick={() => handleWhatsApp(WHATSAPP_MESSAGES.URGENT)}
                        className="shadow-green-500/20"
                    >
                        <MessageCircle size={24} fill="currentColor" />
                        Resolver Agora
                    </Button>
                    <Button
                        variant="outline"
                        size="lg"
                        onClick={() => handleWhatsApp(WHATSAPP_MESSAGES.SCHEDULING)}
                        className="group"
                    >
                        Agendar Visita
                        <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                    </Button>
                </div>

                <div className="mt-16 flex flex-wrap gap-x-8 gap-y-4 text-sm font-bold text-gray-500 uppercase tracking-wide">
                    <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full"></div> Atendimento Rápido
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-fuchsia-500 rounded-full"></div> Economia Garantida
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full"></div> Ideal para Empresas
                    </div>
                </div>
            </div>
        </section>
    );
};
