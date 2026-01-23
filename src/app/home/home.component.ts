import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  nome = '';
  email = '';
  telefone = '';
  mensagem = '';

  formatPhone(value: string): string {
    const digits = value.replace(/\D+/g, '').slice(0, 11);
    if (digits.length <= 2) {
      return digits ? `(${digits}` : '';
    }
    if (digits.length <= 6) {
      return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
    }
    if (digits.length <= 10) {
      return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
    }
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
  }

  onPhoneInput(value: string, control: NgModel): void {
    const formatted = this.formatPhone(value);
    this.telefone = formatted;
    control.control.setValue(formatted, { emitEvent: false });
    control.control.updateValueAndValidity({ emitEvent: false });
  }

  onNameInput(value: string, control: NgModel): void {
    const sanitized = value.replace(/[^A-Za-zÀ-ÖØ-öø-ÿ\s'-]+/g, '');
    this.nome = sanitized;
    control.control.setValue(sanitized, { emitEvent: false });
    control.control.updateValueAndValidity({ emitEvent: false });
  }

}
