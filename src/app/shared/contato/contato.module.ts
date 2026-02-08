import { ModuleWithProviders, NgModule } from '@angular/core';
import { CONTATO_CONFIG, ContatoConfig } from './contato.config';

@NgModule()
export class ContatoModule {
  static forRoot(config: ContatoConfig): ModuleWithProviders<ContatoModule> {
    return {
      ngModule: ContatoModule,
      providers: [{ provide: CONTATO_CONFIG, useValue: config }]
    };
  }
}

