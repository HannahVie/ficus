import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface FormSubmitPayload {
  [key: string]: string;
}

@Injectable({ providedIn: 'root' })
export class FormSubmitService {
  private readonly endpoint = 'https://formsubmit.co/ajax/ficusrf2026@gmail.com';
  private readonly headers = new HttpHeaders({
    'Content-Type': 'application/json',
    Accept: 'application/json'
  });

  constructor(private readonly http: HttpClient) {}

  send(payload: FormSubmitPayload): Observable<unknown> {
    return this.http.post(this.endpoint, payload, { headers: this.headers });
  }
}
