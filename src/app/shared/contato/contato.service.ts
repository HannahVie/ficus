import { Inject, Injectable } from '@angular/core';
import { CONTATO_CONFIG, ContatoConfig } from './contato.config';

@Injectable({ providedIn: 'root' })
export class ContatoService {
  constructor(@Inject(CONTATO_CONFIG) private readonly config: ContatoConfig) {}

  get email(): string {
    return this.config.email;
  }

  get telefoneE164(): string {
    return this.config.telefoneE164;
  }

  get whatsappNumero(): string {
    return this.config.whatsappNumero;
  }

  get telHref(): string {
    return `tel:${this.config.telefoneE164}`;
  }

  get whatsappHref(): string {
    const msg = this.config.whatsappMensagemPadrao ?? 'Olá, vim através do site';
    const query = `text=${encodeURIComponent(msg)}`;
    return `https://wa.me/${this.config.whatsappNumero}?${query}`;
  }

  get mailtoHref(): string {
    const subject = this.config.emailAssuntoPadrao ?? 'Contato pelo site';
    const query = `subject=${encodeURIComponent(subject)}`;
    return `mailto:${this.config.email}?${query}`;
  }
}

