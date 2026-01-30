import React from 'react';
import { BENEFITS } from '../../constants';

export const Benefits: React.FC = () => {
    return (
        <section id="beneficios" className="py-24 px-6 bg-brand-yellow border-b-4 border-black relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>

            <div className="container mx-auto max-w-7xl relative z-10">
                <div className="mb-16 border-l-8 border-black pl-8">
                    <h2 className="font-display text-5xl md:text-7xl uppercase tracking-tighter text-black mb-4">
                        Por que a Ápice?
                    </h2>
                    <p className="font-mono text-xl font-bold max-w-2xl text-black/80">
                        // TECNOLOGIA E AGILIDADE PARA VOCÊ NUNCA PARAR DE IMPRIMIR.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {BENEFITS.map((benefit, index) => (
                        <div key={benefit.id} className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_#000] hover:-translate-y-2 hover:shadow-[12px_12px_0px_0px_#000] transition-all duration-200">
                            <div className="mb-6 flex justify-between items-start">
                                <benefit.icon size={40} strokeWidth={1.5} className="text-brand-magenta" />
                                <span className="font-mono text-xs font-bold bg-black text-white px-2 py-1">0{index + 1}</span>
                            </div>
                            <h3 className="font-display text-2xl uppercase mb-4 leading-none">{benefit.title}</h3>
                            <p className="font-body text-base font-medium leading-relaxed border-t-2 border-black pt-4">
                                {benefit.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
