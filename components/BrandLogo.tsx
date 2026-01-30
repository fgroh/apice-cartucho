import React from 'react';

export const BrandLogo = () => (
    <div className="flex items-center gap-3 select-none">
        <div className="grid grid-cols-2 gap-[3px]">
            {/* Cyan */}
            <div className="w-3.5 h-3.5 border-[3px] border-brand-cyan bg-white"></div>
            {/* Black */}
            <div className="w-3.5 h-3.5 border-[3px] border-brand-black bg-black"></div>
            {/* Magenta */}
            <div className="w-3.5 h-3.5 border-[3px] border-brand-magenta bg-white"></div>
            {/* Yellow */}
            <div className="w-3.5 h-3.5 border-[3px] border-brand-yellow bg-white"></div>
        </div>
        <div className="flex flex-col justify-center leading-none">
            <h1 className="text-2xl font-display uppercase tracking-widest text-black">
                ÁPICE CARTUCHO
            </h1>
            <span className="text-[0.65rem] font-mono font-bold tracking-[0.2em] text-gray-500 uppercase mt-0.5">
                Recarga Técnica
            </span>
        </div>
    </div>
);
