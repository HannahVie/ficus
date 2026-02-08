import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EMAIL_CONFIG, EmailConfig } from './email.config';

export interface EmailPayload {
  [key: string]: string;
}

@Injectable({ providedIn: 'root' })
export class EmailService {
  private readonly headers = new HttpHeaders({
    'Content-Type': 'application/json',
    Accept: 'application/json'
  });

  constructor(
    private readonly http: HttpClient,
    @Inject(EMAIL_CONFIG) private readonly config: EmailConfig
  ) {}

  /**
   * Envio via FormSubmit (formsubmit.co).
   */
  send(payload: EmailPayload): Observable<unknown> {
    const endpoint = `https://formsubmit.co/ajax/${encodeURIComponent(this.config.destinatario)}`;
    return this.http.post(endpoint, payload, { headers: this.headers });
  }
}

