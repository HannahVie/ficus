import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { FormSubmitService } from '../shared/services/form-submit.service';

@Component({
  selector: 'app-contato',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent {
  razaoSocial = '';
  cnpj = '';
  nomeResponsavel = '';
  email = '';
  telefone = '';
  tipoObra = '';
  mensagem = '';
  enviandoContato = false;
  mensagemContatoStatus = '';

  constructor(private readonly formSubmitService: FormSubmitService) {}

  onCnpjInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    const digits = input.value.replace(/\D/g, '').slice(0, 14);
    let formatted = digits;

    if (digits.length > 2) {
      formatted = `${digits.slice(0, 2)}.${digits.slice(2)}`;
    }
    if (digits.length > 5) {
      formatted = `${digits.slice(0, 2)}.${digits.slice(2, 5)}.${digits.slice(5)}`;
    }
    if (digits.length > 8) {
      formatted = `${digits.slice(0, 2)}.${digits.slice(2, 5)}.${digits.slice(5, 8)}/${digits.slice(8)}`;
    }
    if (digits.length > 12) {
      formatted = `${digits.slice(0, 2)}.${digits.slice(2, 5)}.${digits.slice(5, 8)}/${digits.slice(8, 12)}-${digits.slice(12)}`;
    }

    this.cnpj = formatted;
    input.value = formatted;
  }

  onPhoneInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    const digits = input.value.replace(/\D/g, '').slice(0, 11);

    if (digits.length <= 2) {
      this.telefone = digits;
      input.value = digits;
      return;
    }

    if (digits.length <= 6) {
      this.telefone = `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
      input.value = this.telefone;
      return;
    }

    if (digits.length <= 10) {
      this.telefone = `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
      input.value = this.telefone;
      return;
    }

    this.telefone = `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
    input.value = this.telefone;
  }

  onSubmit(form: NgForm): void {
    if (form.invalid || this.enviandoContato) {
      form.control.markAllAsTouched();
      return;
    }

    this.enviandoContato = true;
    this.mensagemContatoStatus = '';

    this.formSubmitService.send({
      _subject: 'Nova solicitação de serviços - Formulário Contato',
      formulario: 'Página Contato - Solicitação de serviços',
      razaoSocial: this.razaoSocial,
      cnpj: this.cnpj,
      nomeResponsavel: this.nomeResponsavel,
      email: this.email,
      telefone: this.telefone,
      tipoObra: this.tipoObra,
      mensagem: this.mensagem
    }).subscribe({
      next: () => {
        this.mensagemContatoStatus = 'Solicitação enviada com sucesso! Retornaremos em breve.';
        form.resetForm();
      },
      error: () => {
        this.mensagemContatoStatus = 'Não foi possível enviar agora. Tente novamente em instantes.';
      },
      complete: () => {
        this.enviandoContato = false;
      }
    });
  }
}
