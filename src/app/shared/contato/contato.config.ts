import { InjectionToken } from '@angular/core';

export interface ContatoConfig {
  /**
   * Numero para WhatsApp no formato E.164 sem "+".
   * Ex: "5521971902026"
   */
  whatsappNumero: string;

  /**
   * Telefone no formato E.164 com "+".
   * Ex: "+5521971902026"
   */
  telefoneE164: string;

  /**
   * E-mail de contato.
   * Ex: "contato@dominio.com"
   */
  email: string;

  whatsappMensagemPadrao?: string;
  emailAssuntoPadrao?: string;
}

export const CONTATO_CONFIG = new InjectionToken<ContatoConfig>('CONTATO_CONFIG');

