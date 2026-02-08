import { InjectionToken } from '@angular/core';

export interface EmailConfig {
  /**
   * Email destinatario que recebera as mensagens dos formularios.
   */
  destinatario: string;
}

export const EMAIL_CONFIG = new InjectionToken<EmailConfig>('EMAIL_CONFIG');

