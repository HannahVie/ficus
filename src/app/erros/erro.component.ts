import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-erro',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './erro.component.html',
  styleUrls: ['./erro.component.css']
})
export class ErroComponent {
  codigo = 'Erro';
  titulo = 'Algo deu errado';
  mensagem = 'Não foi possível carregar esta página.';

  constructor(private route: ActivatedRoute) {
    const data = this.route.snapshot.data;
    if (data?.['codigo']) {
      this.codigo = data['codigo'];
    }
    if (data?.['titulo']) {
      this.titulo = data['titulo'];
    }
    if (data?.['mensagem']) {
      this.mensagem = data['mensagem'];
    }
  }
}
