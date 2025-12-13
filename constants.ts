import { Printer, Zap, DollarSign, Home, Droplets, RotateCcw, Box, CheckCircle } from 'lucide-react';
import { BenefitItem, ServiceItem } from './types';

export const PHONE_NUMBER = '5547997255699';
export const PHONE_DISPLAY = '(47) 99725-5699';

export const WHATSAPP_MESSAGES = {
  MAIN: "Olá! Quero recarregar meu cartucho HP com atendimento em domicílio.",
  URGENT: "Preciso urgente, minha impressora parou. Pode me ajudar?",
  QUOTE: "Olá, gostaria de saber o valor para o meu cartucho HP.",
  SCHEDULING: "Quero agendar um atendimento em domicílio."
};

export const BENEFITS: BenefitItem[] = [
  {
    id: 'home',
    title: 'Atendimento em Domicílio',
    description: 'Conveniência total. Nós vamos até sua casa ou escritório em Brusque e região.',
    icon: Home
  },
  {
    id: 'quality',
    title: 'Qualidade Garantida',
    description: 'Insumos de alta performance para impressões nítidas e duradouras.',
    icon: CheckCircle
  },
  {
    id: 'economy',
    title: 'Economia de até 70%',
    description: 'Reduza drasticamente seus custos de impressão sem abrir mão da qualidade.',
    icon: DollarSign
  },
  {
    id: 'speed',
    title: 'Rapidez Extrema',
    description: 'Atendimento ágil para você não ficar com a impressora parada.',
    icon: Zap
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'original',
    title: 'Cartuchos Originais HP',
    description: 'Garanta a melhor performance e durabilidade oficial para sua impressora.',
    icon: Box
  },
  {
    id: 'refill',
    title: 'Recarga de Cartucho HP',
    description: 'Solução econômica e ecológica. Reutilize seus cartuchos vazios com qualidade.',
    icon: Droplets
  },
  {
    id: 'reman',
    title: 'Remanufatura HP',
    description: 'Expansão de capacidade (até 10ml ou 20ml) para muito mais impressões.',
    icon: RotateCcw
  },
  {
    id: 'toner',
    title: 'Toner Compatível',
    description: 'Alternativa de alta qualidade e custo-benefício para sua impressora a laser.',
    icon: Printer
  }
];