import React from 'react';
import { Palette } from 'lucide-react';
import { ThemeType } from '../types';

interface ThemeSelectorProps {
  currentTheme: ThemeType;
  setTheme: (theme: ThemeType) => void;
}

const ThemeSelector: React.FC<ThemeSelectorProps> = ({ currentTheme, setTheme }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="fixed top-24 right-4 z-50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-3 bg-white text-gray-800 rounded-full shadow-lg border border-gray-200 hover:scale-110 transition-transform"
        aria-label="Change Theme"
      >
        <Palette size={20} />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden animate-fade-in-down origin-top-right">
          <div className="p-2 text-xs font-semibold text-gray-500 uppercase tracking-wider bg-gray-50">
            Escolha o Estilo
          </div>
          <div className="flex flex-col">
            <button
              onClick={() => { setTheme(ThemeType.SCANDINAVIAN); setIsOpen(false); }}
              className={`px-4 py-2 text-left text-sm hover:bg-gray-100 ${currentTheme === ThemeType.SCANDINAVIAN ? 'font-bold text-teal-600' : ''}`}
            >
              Escandinavo
            </button>
            <button
              onClick={() => { setTheme(ThemeType.TECH_DARK); setIsOpen(false); }}
              className={`px-4 py-2 text-left text-sm hover:bg-gray-100 ${currentTheme === ThemeType.TECH_DARK ? 'font-bold text-indigo-600' : ''}`}
            >
              Tech Dark Mode
            </button>
            <button
              onClick={() => { setTheme(ThemeType.PREMIUM); setIsOpen(false); }}
              className={`px-4 py-2 text-left text-sm hover:bg-gray-100 ${currentTheme === ThemeType.PREMIUM ? 'font-bold text-amber-600' : ''}`}
            >
              Premium Gold
            </button>
            <button
              onClick={() => { setTheme(ThemeType.ULTRA_MINIMAL); setIsOpen(false); }}
              className={`px-4 py-2 text-left text-sm hover:bg-gray-100 ${currentTheme === ThemeType.ULTRA_MINIMAL ? 'font-bold text-black' : ''}`}
            >
              Ultra Minimal
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ThemeSelector;