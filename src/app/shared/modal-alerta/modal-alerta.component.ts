import { CommonModule } from '@angular/common';
import {
  DOCUMENT,
  Component,
  inject,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  OnChanges,
  OnDestroy,
  Output,
  Renderer2,
  RendererFactory2,
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
export class ModalAlertaComponent implements OnChanges, OnDestroy {
  @Input() aberto = false;
  @Input() titulo = '';
  @Input() mensagem = '';
  @Input() textoBotaoFechar = 'Fechar';

  @Output() fechado = new EventEmitter<void>();

  @ViewChild('closeBtn') closeBtn?: ElementRef<HTMLButtonElement>;
  private readonly document = inject(DOCUMENT);
  private readonly renderer: Renderer2;

  constructor(rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['aberto']?.currentValue) {
      setTimeout(() => this.closeBtn?.nativeElement.focus(), 0);
      this.renderer.setStyle(this.document.body, 'overflow', 'hidden');
      return;
    }

    if (changes['aberto'] && !changes['aberto'].currentValue) {
      this.renderer.removeStyle(this.document.body, 'overflow');
    }
  }

  ngOnDestroy(): void {
    this.renderer.removeStyle(this.document.body, 'overflow');
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

