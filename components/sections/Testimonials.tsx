import React from 'react';
import { Star } from 'lucide-react';

export const Testimonials: React.FC = () => {
    return (
        <section className="py-24 px-6 bg-white">
            <div className="container mx-auto max-w-4xl text-center">
                <h2 className="text-2xl md:text-4xl font-black mb-16 uppercase tracking-tight">
                    Excelência em cada impressão
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20 divide-y md:divide-y-0 md:divide-x divide-gray-100">
                    <div className="flex flex-col items-center pt-8 md:pt-0">
                        <span className="text-5xl font-black mb-2 text-black tracking-tighter">+1000</span>
                        <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Impressoras Atendidas</span>
                    </div>
                    <div className="flex flex-col items-center pt-8 md:pt-0">
                        <span className="text-5xl font-black mb-2 text-black tracking-tighter">2h</span>
                        <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Tempo Médio</span>
                    </div>
                    <div className="flex flex-col items-center pt-8 md:pt-0">
                        <span className="text-5xl font-black mb-2 text-black tracking-tighter">100%</span>
                        <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Garantia</span>
                    </div>
                </div>

                <div className="bg-gray-50 p-12 rounded-3xl relative mx-auto max-w-3xl">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-lg">
                        <Star className="text-yellow-400 fill-yellow-400 w-8 h-8" />
                    </div>

                    <p className="text-xl md:text-2xl font-medium text-gray-800 mb-8 pt-4 relative z-10 leading-relaxed font-serif italic">
                        "Serviço impecável! Me salvaram num dia que eu tinha um relatório enorme para entregar. O técnico chegou rápido, fez a recarga ali mesmo."
                    </p>
                    <div className="flex items-center justify-center gap-3">
                        <div className="text-center">
                            <div className="font-bold text-base uppercase tracking-wide text-black">Ricardo M.</div>
                            <div className="text-sm text-gray-400 font-medium">Empresário em Brusque</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
