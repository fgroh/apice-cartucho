import React from 'react';
import { Star } from 'lucide-react';

export const Testimonials: React.FC = () => {
    return (
        <section className="py-24 px-6 bg-white border-b-4 border-black">
            <div className="container mx-auto max-w-4xl text-center">
                <h2 className="font-display text-4xl md:text-6xl uppercase tracking-tighter mb-20 text-black">
                    REPORT DE QUALIDADE
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20 divide-y-4 md:divide-y-0 md:divide-x-4 divide-black">
                    <div className="flex flex-col items-center pt-8 md:pt-0">
                        <span className="font-display text-6xl text-brand-cyan tracking-tighter leading-none">+1000</span>
                        <span className="font-mono text-xs font-bold bg-black text-white px-2 py-1 uppercase mt-2">Impressoras Ativas</span>
                    </div>
                    <div className="flex flex-col items-center pt-8 md:pt-0">
                        <span className="font-display text-6xl text-brand-magenta tracking-tighter leading-none">&lt; 2h</span>
                        <span className="font-mono text-xs font-bold bg-black text-white px-2 py-1 uppercase mt-2">Tempo Resposta</span>
                    </div>
                    <div className="flex flex-col items-center pt-8 md:pt-0">
                        <span className="font-display text-6xl text-brand-yellow tracking-tighter leading-none">100%</span>
                        <span className="font-mono text-xs font-bold bg-black text-white px-2 py-1 uppercase mt-2">Garantia</span>
                    </div>
                </div>

                <div className="bg-white border-4 border-black p-12 relative mx-auto max-w-3xl shadow-[12px_12px_0px_0px_#000]">
                    <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-black text-white px-4 py-1 font-mono text-sm font-bold uppercase rotate-2">
                        Feedback Cliente
                    </div>

                    <p className="font-display text-2xl md:text-4xl text-black uppercase leading-tight mb-8">
                        "Serviço impecável! O técnico chegou rápido e fez a recarga ali mesmo. SALVOU O DIA."
                    </p>
                    <div className="flex items-center justify-center gap-3">
                        <div className="text-center">
                            <div className="font-mono font-bold text-base uppercase bg-brand-cyan inline-block px-2">Ricardo M.</div>
                            <div className="font-mono text-xs text-black/60 font-bold mt-1">EMPRESÁRIO // BRUSQUE_SC</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
