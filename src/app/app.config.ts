import { ApplicationConfig, importProvidersFrom, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter, withInMemoryScrolling } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';

import { routes } from './app.routes';
import { ContatoModule } from './shared/contato/contato.module';
import { EmailModule } from './shared/email/email.module';
import { environment } from '../environments/environment';

const EMAIL_PADRAO_EMPRESA = 'ficusrf2026@gmail.com';

// Regra simples:
// - Em dev: se EMAIL_FORMULARIO vier preenchido do `.env`, usa ele; senão usa o default
// - Em prod: sempre usa o default
const emailFormulario =
  !environment.production && environment.emailFormulario?.trim()
    ? environment.emailFormulario.trim()
    : EMAIL_PADRAO_EMPRESA;

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideHttpClient(),
    importProvidersFrom(
      ContatoModule.forRoot({
        whatsappNumero: '5521971902026',
        telefoneE164: '+5521971902026',
        email: EMAIL_PADRAO_EMPRESA,
        whatsappMensagemPadrao: 'Olá, vim através do site',
        emailAssuntoPadrao: 'Contato pelo site'
      }),
      EmailModule.forRoot({
        destinatario: emailFormulario
      })
    ),
    provideRouter(
      routes,
      withInMemoryScrolling({
        scrollPositionRestoration: 'enabled',
        anchorScrolling: 'enabled'
      })
    )
  ]
};
