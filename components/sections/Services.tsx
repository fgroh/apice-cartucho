import React from 'react';
import { ChevronRight } from 'lucide-react';
import { SERVICES, WHATSAPP_MESSAGES, PHONE_NUMBER } from '../../constants';
import { Button } from '../ui/Button';

export const Services: React.FC = () => {
    const handleWhatsApp = (message: string) => {
        const url = `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
    };

    return (
        <section id="servicos" className="py-24 px-6 bg-white border-b-4 border-black">
            <div className="container mx-auto max-w-7xl">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b-4 border-black pb-8">
                    <div>
                        <span className="font-mono font-bold text-brand-magenta mb-2 block">// CATÁLOGO TÉCNICO</span>
                        <h2 className="font-display text-5xl md:text-7xl font-black uppercase tracking-tighter text-black">
                            SERVIÇOS
                        </h2>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-0 overflow-hidden border-4 border-black bg-black">
                    {SERVICES.map((service, index) => (
                        <div
                            key={service.id}
                            className={`group relative p-10 bg-white hover:bg-brand-cyan transition-colors duration-0 flex flex-col gap-6
                            ${index % 2 === 0 ? 'border-r-4 border-black' : ''}
                            ${index < SERVICES.length - 2 ? 'border-b-4 border-black' : 'border-b-4 md:border-b-0 border-black'}
                            `}
                        >
                            {/* Technical Header */}
                            <div className="flex justify-between items-center border-b-2 border-black pb-4 border-dashed group-hover:border-solid">
                                <span className="font-mono text-xs font-bold bg-black text-white px-2 py-1">OS-{100 + index}</span>
                                <service.icon size={28} className="text-black" />
                            </div>

                            <div className="flex-1">
                                <h3 className="font-display text-3xl font-bold mb-4 uppercase leading-none">
                                    {service.title}
                                </h3>
                                <p className="font-body text-black font-medium text-lg leading-snug mb-8">
                                    {service.description}
                                </p>

                                <button
                                    onClick={() => handleWhatsApp(`Tenho interesse em ${service.title}`)}
                                    className="w-full border-2 border-black py-4 font-mono text-sm font-bold uppercase hover:bg-black hover:text-white transition-all flex justify-between px-6"
                                >
                                    <span>Solicitar</span>
                                    <span>→</span>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
