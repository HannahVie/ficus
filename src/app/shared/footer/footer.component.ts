import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ContatoService } from '../contato/contato.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  constructor(public readonly contato: ContatoService) {}
}
