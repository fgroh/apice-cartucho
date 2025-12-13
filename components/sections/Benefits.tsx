import React from 'react';
import { BENEFITS } from '../../constants';

export const Benefits: React.FC = () => {
    return (
        <section id="beneficios" className="py-24 px-6 bg-white relative">
            <div className="container mx-auto max-w-6xl">
                <div className="mb-16 md:flex justify-between items-end">
                    <div>
                        <h2 className="text-3xl md:text-5xl font-black mb-4 uppercase tracking-tight">
                            Por que a Ápice?
                        </h2>
                        <div className="w-24 h-2 bg-black mb-6"></div>
                    </div>
                    <p className="opacity-60 max-w-2xl text-right hidden md:block text-lg">
                        Tecnologia e agilidade para você nunca parar de imprimir.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {BENEFITS.map((benefit) => (
                        <div key={benefit.id} className="bg-white border border-gray-100 p-8 group hover:border-cyan-200 hover:shadow-xl transition-all duration-300 rounded-xl">
                            <div className="mb-6 w-14 h-14 flex items-center justify-center rounded-xl bg-gray-50 group-hover:bg-cyan-50 transition-colors">
                                <benefit.icon size={28} className="text-black group-hover:text-cyan-600 transition-colors" />
                            </div>
                            <h3 className="text-lg font-bold mb-3 uppercase tracking-tight">{benefit.title}</h3>
                            <p className="text-gray-500 text-sm leading-relaxed">
                                {benefit.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
