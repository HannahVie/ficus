import { ApplicationConfig, importProvidersFrom, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter, withInMemoryScrolling } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';

import { routes } from './app.routes';
import { ContatoModule } from './shared/contato/contato.module';
import { EmailModule } from './shared/email/email.module';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideHttpClient(),
    importProvidersFrom(
      ContatoModule.forRoot({
        whatsappNumero: '5521971902026',
        telefoneE164: '+5521971902026',
        email: 'ficusrf2026@gmail.com',
        whatsappMensagemPadrao: 'Olá, vim através do site',
        emailAssuntoPadrao: 'Contato pelo site'
      }),
      EmailModule.forRoot({
        destinatario: 'ficusrf2026@gmail.com'
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
