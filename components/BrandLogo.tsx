import React from 'react';

export const BrandLogo = () => (
    <div className="flex items-center gap-3 select-none">
        <div className="grid grid-cols-2 gap-[3px]">
            {/* Cyan */}
            <div className="w-3.5 h-3.5 border-[3px] border-cyan-400"></div>
            {/* Black */}
            <div className="w-3.5 h-3.5 border-[3px] border-black"></div>
            {/* Magenta */}
            <div className="w-3.5 h-3.5 border-[3px] border-fuchsia-500"></div>
            {/* Yellow */}
            <div className="w-3.5 h-3.5 border-[3px] border-yellow-400"></div>
        </div>
        <div className="flex flex-col justify-center leading-none">
            <h1 className="text-xl sm:text-2xl font-black tracking-tighter text-black font-sans">
                ÁPICE CARTUCHO
            </h1>
            <span className="text-[0.6rem] sm:text-[0.65rem] font-bold tracking-[0.2em] text-gray-400 uppercase mt-0.5">
                Recarga em Domicílio
            </span>
        </div>
    </div>
);
