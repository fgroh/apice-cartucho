import React from 'react';
import { MessageCircle } from 'lucide-react';
import { Button } from '../ui/Button';
import { WHATSAPP_MESSAGES, PHONE_NUMBER } from '../../constants';

export const CTA: React.FC = () => {
    const handleWhatsApp = (message: string) => {
        const url = `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
    };

    return (
        <>
            <section className="py-24 px-6 relative overflow-hidden bg-brand-yellow border-y-4 border-black">
                {/* Warning Tape Effect */}
                <div className="absolute top-0 left-0 w-full h-4 bg-black"></div>
                <div className="absolute bottom-0 left-0 w-full h-4 bg-black"></div>

                <div className="absolute inset-0 z-0 opacity-10" style={{ backgroundImage: 'repeating-linear-gradient(45deg, #000 0, #000 10px, transparent 10px, transparent 20px)' }}></div>

                <div className="relative z-10 max-w-5xl mx-auto text-center">
                    <div className="inline-block bg-black text-white px-4 py-2 font-mono font-bold text-xl mb-6 transform -rotate-2">
                        ⚠ URGÊNCIA?
                    </div>

                    <h2 className="font-display text-4xl md:text-7xl mb-8 uppercase tracking-tighter text-black leading-none">
                        NÃO FIQUE IMPRIMINDO EM <span className="underline decoration-4 underline-offset-4 decoration-black/20">BRANCO</span>.
                    </h2>

                    <p className="font-mono text-xl md:text-2xl text-black/80 mb-12 font-bold max-w-2xl mx-auto">
                        RECUPERAMOS SUA IMPRESSORA AINDA HOJE.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center gap-6">
                        <Button
                            variant="primary"
                            size="lg"
                            onClick={() => handleWhatsApp(WHATSAPP_MESSAGES.URGENT)}
                            className="bg-black text-white hover:bg-white hover:text-black border-2 border-black shadow-[8px_8px_0px_0px_#fff]"
                        >
                            <MessageCircle size={24} className="mr-2" />
                            CHAMAR TÉCNICO AGORA
                        </Button>
                    </div>
                </div>
            </section>

            {/* Sticky Mobile CTA */}
            <div className="fixed bottom-0 left-0 right-0 p-4 md:hidden z-50 bg-white/90 backdrop-blur border-t border-gray-100">
                <Button
                    variant="primary"
                    onClick={() => handleWhatsApp(WHATSAPP_MESSAGES.MAIN)}
                    className="w-full shadow-lg"
                >
                    <MessageCircle size={20} fill="currentColor" />
                    Falar no WhatsApp
                </Button>
            </div>
        </>
    );
};
