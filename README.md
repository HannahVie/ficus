# Ficus Reforma e Fachada

Landing page institucional da **Ficus Reforma e Fachada**, construída como SPA em Angular.

## Tecnologias

- Angular `^21.1.0`
- TypeScript `~5.9.2`
- RxJS `~7.8.0`
- Node.js (no CI usamos `20`)
- npm `11.6.2`

## Páginas e Rotas

- `/` (landing)
- `/servicos`
- `/quem-somos`
- `/metodo`
- `/contato`
- Rotas de erro: `/400`, `/401`, `/403`, `/404`, `/408`, `/500`, `/502`, `/503`, `/504` (fallback `**` -> `/404`)

## Scripts

```bash
npm run start   # dev server (ng serve)
npm run build   # build de produção
npm run watch   # build em modo watch (development)
```

## Rodar Localmente

```bash
npm ci
npm run start
```

Abra: `http://localhost:4200`

## Estrutura (Visão Geral)

- Páginas (lazy):
  - `src/app/home`
  - `src/app/servicos`
  - `src/app/quem-somos`
  - `src/app/metodo`
  - `src/app/contato`
  - `src/app/erros`
- Shared:
  - `src/app/shared/header` (header + menu)
  - `src/app/shared/footer` (footer)
  - `src/app/shared/contato` (dados/links de contato centralizados)
  - `src/app/shared/email` (envio de formulários por e-mail)
- Rotas:
  - `src/app/app.routes.ts`
- Configuração global:
  - `src/app/app.config.ts`

## Formulários (Envio por E-mail)

Existem 2 formulários:

- Home: "Fale com um especialista" (`src/app/home/home.component.html`)
- Contato: "Solicitação de serviços" (`src/app/contato/contato.component.html`)

Ambos enviam via `EmailService` (`src/app/shared/email/email.service.ts`), usando **FormSubmit** (`formsubmit.co`) como backend (sem servidor próprio).

Configuração do destinatário:
- `src/app/app.config.ts` -> `EmailModule.forRoot({ destinatario: '...' })`

## Contatos (WhatsApp / Telefone / E-mail)

Os links `wa.me`, `tel:` e `mailto:` não ficam hardcoded nas páginas. Tudo vem de `ContatoService`.

Configuração:
- `src/app/app.config.ts` -> `ContatoModule.forRoot({ whatsappNumero, telefoneE164, email, ... })`

Uso nas telas:
- Ex: `[href]="contato.whatsappHref"` (Home/Contato/Footer).

## Deploy

Existe um workflow que faz build e publica via FTP ao dar push na `main`:
- `.github/workflows/deploy.yml`

Build:
- gera artefatos em `dist/ficus/browser/` 

Secrets esperadas no GitHub:
- `SFTP_SERVER`
- `SFTP_USERNAME`
- `SFTP_PASSWORD`
- `SFTP_PORT`
- `SFTP_DIR`