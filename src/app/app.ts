import { Component } from '@angular/core';
import { ActivatedRouteSnapshot, NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs';

import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { SeoService, SeoData } from './shared/services/seo.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  mostrarLayout = true;

  constructor(
    private readonly router: Router,
    private readonly seo: SeoService
  ) {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event) => {
        const url = (event as NavigationEnd).urlAfterRedirects ?? '';
        this.mostrarLayout = !this.isErrorRoute(url);
        this.updateSeoFromRoute(url);
      });

    // Inicializa SEO no primeiro carregamento (antes de qualquer navigation event).
    this.updateSeoFromRoute(this.router.url || '/');
  }

  private isErrorRoute(url: string): boolean {
    return /^\/(400|401|403|404|408|500|502|503|504)(\/|$)/.test(url);
  }

  private updateSeoFromRoute(url: string): void {
    const seo = this.getDeepestSeoData() ?? this.getFallbackSeo();
    this.seo.update(seo, url || '/');
  }

  private getDeepestSeoData(): SeoData | null {
    // Em rotas lazy, o "seo" costuma estar no pai (app.routes.ts), e o filho (feature route)
    // normalmente nao tem data. Entao percorremos a arvore e pegamos o ultimo "seo" encontrado.
    let snapshot: ActivatedRouteSnapshot | null = this.router.routerState.root.snapshot;
    let lastSeo: SeoData | null = null;
    while (snapshot) {
      const seo = snapshot.data?.['seo'] as SeoData | undefined;
      if (seo) {
        lastSeo = seo;
      }
      snapshot = snapshot.firstChild ?? null;
    }
    return lastSeo;
  }

  private getFallbackSeo(): SeoData {
    return {
      title: 'Ficus Reforma e Fachada | Rio de Janeiro (RJ)',
      description:
        'Reformas e fachadas no Rio de Janeiro (RJ). Recuperacao de fachadas, impermeabilizacao, eletrica e hidraulica, esquadrias e vidros e revitalizacao.'
    };
  }
}
