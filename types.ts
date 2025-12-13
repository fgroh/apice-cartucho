import { LucideIcon } from 'lucide-react';

export enum ThemeType {
  SCANDINAVIAN = 'SCANDINAVIAN',
  TECH_DARK = 'TECH_DARK',
  PREMIUM = 'PREMIUM',
  ULTRA_MINIMAL = 'ULTRA_MINIMAL',
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface BenefitItem {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface ThemeConfig {
  bg: string;
  text: string;
  accent: string;
  fontHeading: string;
  fontBody: string;
  cardBg: string;
  buttonPrimary: string;
  buttonSecondary: string;
  border: string;
  navBlur: string;
}