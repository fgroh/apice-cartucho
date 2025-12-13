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
            <section className="py-24 px-6 text-center relative overflow-hidden bg-stone-900 text-white">
                {/* Pattern overlay */}
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>

                <div className="relative z-10 max-w-4xl mx-auto">
                    <h2 className="text-4xl md:text-6xl font-black mb-8 uppercase tracking-tight">
                        Não fique na mão.
                    </h2>
                    <p className="text-xl text-gray-400 mb-12 font-medium max-w-2xl mx-auto">
                        Fale conosco agora e tenha sua impressora funcionando perfeitamente ainda hoje.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Button
                            variant="primary"
                            size="lg"
                            onClick={() => handleWhatsApp(WHATSAPP_MESSAGES.URGENT)}
                            className="px-10 py-5 text-lg shadow-green-500/20"
                        >
                            <MessageCircle size={24} fill="currentColor" />
                            Chamar no WhatsApp
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
