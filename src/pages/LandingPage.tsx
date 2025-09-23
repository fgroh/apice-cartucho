"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Home, CheckCircle, DollarSign, MessageCircle } from "lucide-react";

const whatsappLink = "https://wa.me/5547997255699?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20%C3%81pice%20Cartucho.%20Quero%20mais%20informa%C3%A7%C3%B5es%20sobre%20seus%20servi%C3%A7os.%20Pode%20me%20ajudar%3F";
const logoUrl = "/apice-cartucho-logo.png";

const LandingPage = () => {
  return (
    <div className="font-sans antialiased text-gray-800">
      {/* Header Fixo */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md p-4 flex justify-between items-center">
        {/* Left side: Logo */}
        <div className="flex items-center">
          <img src={logoUrl} alt="Ápice Cartucho Logo" className="h-10" />
        </div>

        {/* Center: Site Name */}
        <div className="absolute left-1/2 -translate-x-1/2">
          <span className="text-2xl font-bold text-black">Ápice Cartucho</span>
        </div>

        {/* Right side: WhatsApp Button (Hidden on mobile, visible on md and up) */}
        <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="hidden md:block">
          <Button className="bg-[#25D366] hover:bg-[#1DA851] text-white rounded-full px-6 py-3 font-bold shadow-lg">
            Falar no WhatsApp
          </Button>
        </a>
      </header>

      {/* Seção HERO */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center pt-20 pb-10 bg-white px-4">
        <h1 className="text-5xl md:text-6xl font-extrabold text-black mb-4 leading-tight">
          Recarga e Cartuchos HP com Atendimento em Domicílio
        </h1>
        <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-8">
          Atendimento rápido em Brusque e região. Resolva agora mesmo sua impressão com recarga, remanufatura, cartuchos originais HP e toner compatível.
        </p>
        <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
          <Button className="bg-[#25D366] hover:bg-[#1DA851] text-white rounded-full px-8 py-4 text-xl font-bold shadow-lg animate-pulse">
            👉 Falar no WhatsApp agora
          </Button>
        </a>
      </section>

      {/* Seção de Benefícios */}
      <section className="py-16 bg-gray-50 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm">
            <Home className="h-12 w-12 text-[#25D366] mb-4" />
            <h3 className="text-xl font-semibold text-black mt-4 mb-2">Atendimento em domicílio</h3>
            <p className="text-gray-600">Conveniência e agilidade para você, sem sair de casa ou do escritório.</p>
          </div>
          <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm">
            <CheckCircle className="h-12 w-12 text-[#25D366] mb-4" />
            <h3 className="text-xl font-semibold text-black mt-4 mb-2">Qualidade garantida</h3>
            <p className="text-gray-600">Produtos e serviços com a excelência que sua impressora merece.</p>
          </div>
          <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm">
            <DollarSign className="h-12 w-12 text-[#25D366] mb-4" />
            <h3 className="text-xl font-semibold text-black mt-4 mb-2">Economia de até 70%</h3>
            <p className="text-gray-600">Reduza seus custos de impressão sem abrir mão da qualidade.</p>
          </div>
        </div>
      </section>

      {/* Seção Nossos Serviços */}
      <section className="py-16 bg-white px-4">
        <h2 className="text-4xl font-bold text-center text-black mb-12">Nossos Serviços</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <div className="p-6 bg-gray-50 rounded-lg shadow-sm text-center">
            <h3 className="text-xl font-semibold text-black mb-2">Cartuchos Originais HP</h3>
            <p className="text-gray-700">Garanta a melhor performance e durabilidade para sua impressora.</p>
          </div>
          <div className="p-6 bg-gray-50 rounded-lg shadow-sm text-center">
            <h3 className="text-xl font-semibold text-black mb-2">Recarga de Cartucho HP</h3>
            <p className="text-gray-700">Solução econômica e ecológica para seus cartuchos vazios.</p>
          </div>
          <div className="p-6 bg-gray-50 rounded-lg shadow-sm text-center">
            <h3 className="text-xl font-semibold text-black mb-2">Remanufatura de Cartucho HP</h3>
            <p className="text-gray-700">Expansão de capacidade (até 10ml ou 20ml) para mais impressões.</p>
          </div>
          <div className="p-6 bg-gray-50 rounded-lg shadow-sm text-center">
            <h3 className="text-xl font-semibold text-black mb-2">Toner Compatível HP</h3>
            <p className="text-gray-700">Alternativa de alta qualidade e custo-benefício para sua impressora a laser.</p>
          </div>
        </div>
      </section>

      {/* CTA Central Reforçado */}
      <section className="py-16 bg-gray-100 text-center px-4">
        <h2 className="text-3xl font-bold text-black mb-6">
          Não perca tempo! Fale conosco agora e resolva suas necessidades de impressão.
        </h2>
        <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
          <Button className="bg-[#25D366] hover:bg-[#1DA851] text-white rounded-full px-8 py-4 text-xl font-bold shadow-lg">
            👉 Falar no WhatsApp agora
          </Button>
        </a>
      </section>

      {/* Rodapé */}
      <footer className="py-8 bg-black text-white text-center px-4">
        <p className="text-lg mb-2">Ápice Cartucho</p>
        <p className="text-md">WhatsApp: (47) 99725-5699</p>
      </footer>

      {/* Botão Fixo de WhatsApp para Mobile */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 md:hidden z-50"
      >
        <Button className="bg-[#25D366] hover:bg-[#1DA851] text-white rounded-full p-4 shadow-lg">
          <MessageCircle className="h-8 w-8" />
        </Button>
      </a>
    </div>
  );
};

export default LandingPage;