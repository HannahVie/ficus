import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgModel } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  nome = '';
  email = '';
  telefone = '';
  mensagem = '';

  servicos = [
    {
      id: 'fachadas',
      title: 'Recuperação de fachadas',
      description: 'Limpeza, pintura, textura, cerâmicas, pastilhas e granitos',
      icon: '/assets/icons/house.svg'
    },
    {
      id: 'impermeabilizacao',
      title: 'Impermeabilização',
      description: 'Soluções para proteger estruturas e aumentar a vida útil das áreas expostas.',
      icon: '/assets/icons/ink.svg'
    },
    {
      id: 'hidraulica',
      title: 'Elétrica e hidráulica',
      description: 'Revisões, adequações e modernizações com responsabilidade técnica.',
      icon: '/assets/icons/plug.svg'
    },
    {
      id: 'esquadrias',
      title: 'Esquadrias e vidros',
      description: 'Instalação, ajustes e substituições com precisão e segurança.',
      icon: '/assets/icons/glass.svg'
    },
    {
      id: 'revitalizacao',
      title: 'Revitalização',
      description: 'Transformação de ambientes e áreas comuns com foco em funcionalidade e estética.',
      icon: '/assets/icons/urban-planning.svg'
    }
  ];

  servicoAtivoId = 'fachadas';

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

  setServicoAtivo(id: string): void {
    if (this.servicoAtivoId === id) {
      return;
    }
    this.servicoAtivoId = id;
  }

  getServicoAtivo() {
    return this.servicos.find((servico) => servico.id === this.servicoAtivoId) ?? this.servicos[0];
  }

}
