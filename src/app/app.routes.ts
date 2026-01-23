import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule)
  },
  {
    path: 'servicos',
    loadChildren: () => import('./servicos/servicos.module').then((m) => m.ServicosModule)
  },
  {
    path: 'quem-somos',
    loadChildren: () => import('./quem-somos/quem-somos.module').then((m) => m.QuemSomosModule)
  },
  {
    path: 'metodo',
    loadChildren: () => import('./metodo/metodo.module').then((m) => m.MetodoModule)
  },
  {
    path: 'contato',
    loadChildren: () => import('./contato/contato.module').then((m) => m.ContatoModule)
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];
