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
    path: '404',
    loadComponent: () => import('./erros/erro.component').then((m) => m.ErroComponent),
    data: {
      codigo: '404',
      titulo: 'Página não encontrada',
      mensagem: 'A página que você tentou acessar não existe ou foi movida.'
    }
  },
  {
    path: '400',
    loadComponent: () => import('./erros/erro.component').then((m) => m.ErroComponent),
    data: {
      codigo: '400',
      titulo: 'Solicitação inválida',
      mensagem: 'Houve um problema com a solicitação. Verifique e tente novamente.'
    }
  },
  {
    path: '401',
    loadComponent: () => import('./erros/erro.component').then((m) => m.ErroComponent),
    data: {
      codigo: '401',
      titulo: 'Acesso não autorizado',
      mensagem: 'Você não tem permissão para acessar esta página.'
    }
  },
  {
    path: '403',
    loadComponent: () => import('./erros/erro.component').then((m) => m.ErroComponent),
    data: {
      codigo: '403',
      titulo: 'Acesso negado',
      mensagem: 'Esta página está bloqueada para este tipo de acesso.'
    }
  },
  {
    path: '408',
    loadComponent: () => import('./erros/erro.component').then((m) => m.ErroComponent),
    data: {
      codigo: '408',
      titulo: 'Tempo esgotado',
      mensagem: 'A solicitação demorou mais que o esperado. Tente novamente.'
    }
  },
  {
    path: '500',
    loadComponent: () => import('./erros/erro.component').then((m) => m.ErroComponent),
    data: {
      codigo: '500',
      titulo: 'Erro interno',
      mensagem: 'Tivemos um problema nos servidores. Tente novamente em alguns instantes.'
    }
  },
  {
    path: '502',
    loadComponent: () => import('./erros/erro.component').then((m) => m.ErroComponent),
    data: {
      codigo: '502',
      titulo: 'Resposta inválida',
      mensagem: 'O servidor recebeu uma resposta inválida. Tente novamente.'
    }
  },
  {
    path: '503',
    loadComponent: () => import('./erros/erro.component').then((m) => m.ErroComponent),
    data: {
      codigo: '503',
      titulo: 'Serviço indisponível',
      mensagem: 'Estamos em manutenção ou sobrecarga. Tente novamente em instantes.'
    }
  },
  {
    path: '504',
    loadComponent: () => import('./erros/erro.component').then((m) => m.ErroComponent),
    data: {
      codigo: '504',
      titulo: 'Tempo de resposta excedido',
      mensagem: 'O servidor demorou para responder. Tente novamente.'
    }
  },
  {
    path: '**',
    redirectTo: '404'
  }
];
