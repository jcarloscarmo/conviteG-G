export interface GiftItem {
  id: string;
  label: string;
  icon: 'shoe' | 'necklace' | 'pajama' | 'hair' | 'perfume' | 'makeup' | 'pants';
}

export interface PixItem {
  id: string;
  owner: string;
  label: string;
  key: string;
}

export interface GuestManualItem {
  id: string;
  text: string;
  icon: 'dress' | 'clock' | 'check';
}

export const INVITATION_CONFIG = {
  // ============================================================================
  // CONFIGURAÇÃO DO WHATSAPP (CONFIRMAÇÃO DE PRESENÇA)
  // Altere apenas os números abaixo (DDI 55 + DDD + Número, sem espaços/traços)
  // ============================================================================
  whatsappNumber: '5512996392801',
  whatsappMessage:
    'Olá! Gostaria de confirmar minha presença na festa de XV Anos da Gabi e Grazi (16/12/2026)! 💙✨\n\nMeu nome completo: ',

  // ============================================================================
  // DADOS DAS ANIVERSARIANTES E TEXTOS DO CONVITE (IMAGEM ESTÁTICA)
  // ============================================================================
  names: 'Gabi e Grazi',
  monogram: 'G&G',
  romanNumeral: 'XV',
  subtitle: 'XV ANOS',

  introTextTop: 'TEMOS A ALEGRIA DE CONVIDAR VOCÊ',
  introTextBottom: 'PARA CELEBRAR OS XV ANOS DE',

  messageLine1: 'SERÁ UMA GRANDE ALEGRIA',
  messageLine2: 'TER VOCÊ AO NOSSO LADO PARA',
  messageLine3: 'CELEBRAR ESSE MOMENTO TÃO ESPECIAL!',

  // ============================================================================
  // DATA, HORÁRIO E LOCALIZAÇÃO
  // ============================================================================
  date: '16/12/2026',
  dayOfWeek: 'QUARTA-FEIRA',
  time: '20H30',
  targetDateISO: '2026-12-16T20:30:00-03:00',

  venueName: 'BUFFET VILMA',
  venueAddressLine1: 'RUA: XAVANTES, Nº 1031',
  venueAddressLine2: 'JARDIM AEROPORTO',
  venueCity: 'GUARATINGUETÁ',
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=R.+Xavantes%2C+1031+-+Jardim+Aeroporto%2C+Guaratinguet%C3%A1%2C+S%C3%A3o+Paulo',

  rsvpTitle: 'Confirme sua presença',
  rsvpDeadline: 'ATÉ O DIA 01/12',

  // ============================================================================
  // MANUAL DO CONVIDADO (MODELO DO VÍDEO)
  // ============================================================================
  guestManualTitle: 'Manual do convidado:',
  guestManualItems: [
    {
      id: 'blue-color',
      icon: 'dress',
      text: 'EVITAR A COR AZUL, EXCLUSIVO DAS ANIVERSARIANTES.',
    },
    {
      id: 'punctuality',
      icon: 'clock',
      text: 'PONTUALIDADE PARA APROVEITAR TODOS OS MOMENTOS.',
    },
    {
      id: 'rsvp',
      icon: 'check',
      text: 'CONFIRME SUA PRESENÇA ATÉ O DIA 01/12.',
    },
  ] as GuestManualItem[],
  closingQuote: 'Contamos com sua presença!',

  // ============================================================================
  // SUGESTÕES DE PRESENTES E CHAVES PIX (DADOS DO SITE PHP + ESTILO DO VÍDEO)
  // ============================================================================
  giftsTitle: 'Sugestões de presentes:',
  giftItems: [
    { id: 'shoes', label: 'CALÇADOS - 35/36', icon: 'shoe' },
    { id: 'accessories', label: 'ACESSÓRIOS PRATA', icon: 'necklace' },
    { id: 'pajamas', label: 'PIJAMAS - TAMANHO P', icon: 'pajama' },
    {
      id: 'hair',
      label: 'PRODUTOS PARA CABELO LISO / ONDULADO',
      icon: 'hair',
    },
    { id: 'perfume', label: 'PERFUME DOCE', icon: 'perfume' },
    { id: 'makeup', label: 'MAQUIAGENS', icon: 'makeup' },
    { id: 'pants', label: 'CALÇAS BAGGY - 36', icon: 'pants' },
  ] as GiftItem[],

  pixItems: [
    {
      id: 'pix-gabi',
      owner: 'Gabi',
      label: 'Pix Gabi: 57484684848',
      key: '57484684848',
    },
    {
      id: 'pix-grazi',
      owner: 'Grazi',
      label: 'Pix Grazi: 57484725897',
      key: '57484725897',
    },
  ] as PixItem[],

  giftFooterQuote:
    'O mais importante é ter você conosco nesse dia tão especial!',
};

export function getWhatsAppConfirmUrl(): string {
  const cleanPhone = INVITATION_CONFIG.whatsappNumber.replace(/\D/g, '');
  const encodedText = encodeURIComponent(INVITATION_CONFIG.whatsappMessage);
  return `https://wa.me/${cleanPhone}?text=${encodedText}`;
}
