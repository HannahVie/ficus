import { CommonModule } from '@angular/common';
import {
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
  ViewChild
} from '@angular/core';

@Component({
  selector: 'app-modal-alerta',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal-alerta.component.html',
  styleUrls: ['./modal-alerta.component.css']
})
export class ModalAlertaComponent implements OnChanges {
  @Input() aberto = false;
  @Input() titulo = '';
  @Input() mensagem = '';
  @Input() textoBotaoFechar = 'Fechar';

  @Output() fechado = new EventEmitter<void>();

  @ViewChild('closeBtn') closeBtn?: ElementRef<HTMLButtonElement>;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['aberto']?.currentValue) {
      setTimeout(() => this.closeBtn?.nativeElement.focus(), 0);
    }
  }

  close(): void {
    this.fechado.emit();
  }

  onOverlayClick(): void {
    this.close();
  }

  onCardClick(event: MouseEvent): void {
    event.stopPropagation();
  }

  @HostListener('document:keydown.escape')
  onEsc(): void {
    if (this.aberto) {
      this.close();
    }
  }
}

