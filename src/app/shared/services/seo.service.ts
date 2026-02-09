import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

export type SeoData = {
  title: string;
  description: string;
  /** Se true, adiciona robots noindex,nofollow (recomendado para paginas de erro). */
  noIndex?: boolean;
};

@Injectable({ providedIn: 'root' })
export class SeoService {
  constructor(
    private readonly title: Title,
    private readonly meta: Meta,
    @Inject(DOCUMENT) private readonly doc: Document
  ) {}

  update(seo: SeoData, urlPath: string): void {
    const canonicalUrl = this.buildAbsoluteUrl(urlPath);
    const ogImageUrl = this.buildAbsoluteUrl('/assets/logo/FICUS_ID-02.png');

    this.title.setTitle(seo.title);

    this.meta.updateTag({ name: 'description', content: seo.description });
    this.meta.updateTag({ property: 'og:title', content: seo.title });
    this.meta.updateTag({ property: 'og:description', content: seo.description });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({ property: 'og:locale', content: 'pt_BR' });
    this.meta.updateTag({ property: 'og:url', content: canonicalUrl });
    this.meta.updateTag({ property: 'og:image', content: ogImageUrl });
    this.meta.updateTag({ property: 'og:image:alt', content: 'Ficus Reforma e Fachada' });
    this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
    this.meta.updateTag({ name: 'twitter:title', content: seo.title });
    this.meta.updateTag({ name: 'twitter:description', content: seo.description });
    this.meta.updateTag({ name: 'twitter:image', content: ogImageUrl });

    // Robots: nao indexar paginas de erro.
    const robots = seo.noIndex ? 'noindex,nofollow' : 'index,follow';
    this.meta.updateTag({ name: 'robots', content: robots });

    this.upsertCanonical(canonicalUrl);
  }

  private buildAbsoluteUrl(urlPath: string): string {
    const origin = this.doc.location?.origin || '';
    const cleanPath = urlPath.split('#')[0].split('?')[0];
    const path = cleanPath.startsWith('/') ? cleanPath : `/${cleanPath}`;
    return `${origin}${path}`;
  }

  private upsertCanonical(href: string): void {
    let link = this.doc.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!link) {
      link = this.doc.createElement('link');
      link.setAttribute('rel', 'canonical');
      this.doc.head.appendChild(link);
    }
    link.setAttribute('href', href);
  }
}
