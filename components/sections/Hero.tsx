import React from 'react';
import { MessageCircle, ArrowRight, Printer, AlertTriangle } from 'lucide-react';
import { Button } from '../ui/Button';
import { WHATSAPP_MESSAGES, PHONE_NUMBER } from '../../constants';

export const Hero: React.FC = () => {
    const handleWhatsApp = (message: string) => {
        const url = `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
    };

    return (
        <section className="relative min-h-[92vh] flex items-center bg-white overflow-hidden border-b-4 border-black pt-28 pb-28 lg:pt-0 lg:pb-0">
            {/* Grid Pattern Background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] bg-[size:40px_40px] opacity-40 -z-10"></div>

            {/* Registration Marks (Crosshairs) - CMYK Style */}
            <div className="absolute top-28 lg:top-8 left-8 w-12 h-12 border-l-2 border-t-2 border-black flex items-start justify-start">
                <div className="w-4 h-[2px] bg-brand-cyan absolute top-2 left-0"></div>
                <div className="h-4 w-[2px] bg-brand-magenta absolute left-2 top-0"></div>
            </div>
            <div className="absolute top-28 lg:top-8 right-8 w-12 h-12 border-r-2 border-t-2 border-black">
                <span className="absolute top-1 right-2 font-mono text-xs font-bold">R-001</span>
            </div>
            <div className="absolute bottom-8 left-8 w-12 h-12 border-l-2 border-b-2 border-black">
                <span className="absolute bottom-1 left-2 font-mono text-xs font-bold">L-001</span>
            </div>
            <div className="absolute bottom-8 right-8 w-12 h-12 border-r-2 border-b-2 border-black flex items-end justify-end">
                <div className="w-4 h-[2px] bg-brand-yellow absolute bottom-2 right-0"></div>
                <div className="h-4 w-[2px] bg-black absolute right-2 bottom-0"></div>
            </div>

            <div className="container mx-auto max-w-7xl px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                    {/* Left Content */}
                    <div className="lg:col-span-8 flex flex-col gap-8">
                        {/* Industrial Badge */}
                        <div className="inline-flex items-center gap-3 border-2 border-black bg-white px-4 py-2 w-fit shadow-[4px_4px_0px_0px_#000]">
                            <div className="w-3 h-3 bg-brand-magenta animate-pulse"></div>
                            <span className="font-mono text-sm font-bold uppercase tracking-widest text-black">
                                Status: Operacional • Brusque/SC
                            </span>
                        </div>

                        {/* Massive Typography */}
                        <h1 className="font-display text-8xl sm:text-9xl lg:text-[11rem] leading-[0.85] uppercase tracking-tighter text-black">
                            SEM<br />
                            <span className="text-white bg-black px-4 inline-block transform -rotate-1 decoration-brand-cyan underline decoration-8 underline-offset-8">
                                TINTA?
                            </span>
                        </h1>

                        <p className="font-body text-xl md:text-2xl text-black font-medium max-w-2xl border-l-4 border-brand-yellow pl-6 py-2">
                            Recarga técnica e cartuchos HP com <span className="bg-brand-yellow px-1">70% de economia</span>.
                            Atendimento de emergência no local.
                        </p>

                        {/* CTA Group */}
                        <div className="flex flex-col sm:flex-row gap-6 mt-4">
                            <Button
                                variant="primary"
                                size="lg"
                                onClick={() => handleWhatsApp(WHATSAPP_MESSAGES.URGENT)}
                                className="w-full sm:w-auto"
                            >
                                <AlertTriangle size={24} strokeWidth={2.5} />
                                SOB DEMANDA
                            </Button>
                            <Button
                                variant="outline"
                                size="lg"
                                onClick={() => handleWhatsApp(WHATSAPP_MESSAGES.SCHEDULING)}
                                className="w-full sm:w-auto"
                            >
                                <Printer size={24} strokeWidth={2.5} />
                                AGENDAR TÉCNICO
                            </Button>
                        </div>
                    </div>

                    {/* Right Visual / Data Panel */}
                    <div className="lg:col-span-4 hidden lg:flex flex-col gap-6">
                        <div className="border-2 border-black bg-white p-6 shadow-[8px_8px_0px_0px_#000]">
                            <h3 className="font-mono font-bold text-lg mb-4 border-b-2 border-black pb-2 flex justify-between">
                                <span>STATUS_SISTEMA</span>
                                <span className="text-brand-magenta">● ATIVO</span>
                            </h3>
                            <ul className="space-y-4 font-mono text-sm">
                                <li className="flex justify-between items-center">
                                    <span>ECONOMIA</span>
                                    <span className="bg-black text-white px-2 py-0.5">70%</span>
                                </li>
                                <li className="flex justify-between items-center">
                                    <span>COBERTURA</span>
                                    <span>BRUSQUE_E_REGIAO</span>
                                </li>
                                <li className="flex justify-between items-center">
                                    <span>TEMPO_RESPOSTA</span>
                                    <span className="text-brand-darkGreen font-bold">&lt; 24H</span>
                                </li>
                            </ul>

                            {/* Color Bars */}
                            <div className="flex mt-6 h-4 border border-black">
                                <div className="w-1/4 bg-brand-cyan h-full"></div>
                                <div className="w-1/4 bg-brand-magenta h-full"></div>
                                <div className="w-1/4 bg-brand-yellow h-full"></div>
                                <div className="w-1/4 bg-black h-full"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
