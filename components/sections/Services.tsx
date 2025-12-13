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
        <section id="servicos" className="py-24 px-6 bg-gray-50">
            <div className="container mx-auto max-w-6xl">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16">
                    <div>
                        <h2 className="text-3xl md:text-5xl font-black mb-4 uppercase tracking-tight">
                            Nossos Serviços
                        </h2>
                        <p className="text-gray-600 text-lg">Soluções completas para sua impressora HP.</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {SERVICES.map((service, index) => (
                        <div
                            key={service.id}
                            className="group relative overflow-hidden p-8 sm:p-10 bg-white border border-gray-100 hover:border-black transition-all duration-300 rounded-2xl flex flex-col sm:flex-row gap-6 items-start sm:items-center shadow-sm hover:shadow-2xl hover:-translate-y-1"
                        >
                            {/* CMYK Accent for cards */}
                            <div className={`absolute left-0 top-0 bottom-0 w-1.5 transition-all group-hover:w-2 ${index % 4 === 0 ? 'bg-cyan-400' :
                                index % 4 === 1 ? 'bg-black' :
                                    index % 4 === 2 ? 'bg-fuchsia-500' : 'bg-yellow-400'
                                }`}></div>

                            <div className="p-4 rounded-2xl bg-gray-50 group-hover:bg-gray-100 transition-colors shrink-0">
                                <service.icon size={32} className="text-black" />
                            </div>
                            <div className="flex-1">
                                <h3 className="text-xl font-bold mb-2 uppercase tracking-tight">
                                    {service.title}
                                </h3>
                                <p className="text-gray-500 text-sm mb-6 max-w-sm leading-relaxed">
                                    {service.description}
                                </p>
                                <button
                                    onClick={() => handleWhatsApp(`Tenho interesse em ${service.title}`)}
                                    className="text-xs font-bold uppercase tracking-widest border-b-2 border-black pb-0.5 hover:text-brand-green hover:border-brand-green transition-all"
                                >
                                    Solicitar este serviço
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
