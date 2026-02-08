import { ModuleWithProviders, NgModule } from '@angular/core';
import { EMAIL_CONFIG, EmailConfig } from './email.config';

@NgModule()
export class EmailModule {
  static forRoot(config: EmailConfig): ModuleWithProviders<EmailModule> {
    return {
      ngModule: EmailModule,
      providers: [{ provide: EMAIL_CONFIG, useValue: config }]
    };
  }
}

