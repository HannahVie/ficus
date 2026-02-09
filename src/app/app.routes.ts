import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
    data: {
      seo: {
        title: 'Ficus Reforma e Fachada | Reformas e Fachadas no Rio de Janeiro',
        description:
          'Reformas e fachadas no Rio de Janeiro (RJ). Recuperacao de fachadas, impermeabilizacao, eletrica e hidraulica, esquadrias e vidros e revitalizacao de areas comuns.'
      }
    }
  },
  {
    path: 'home',
    pathMatch: 'full',
    redirectTo: ''
  },
  {
    path: 'servicos',
    loadChildren: () => import('./servicos/servicos.module').then((m) => m.ServicosModule),
    data: {
      seo: {
        title: 'Servicos | Ficus Reforma e Fachada (RJ)',
        description:
          'Conheca os servicos da Ficus no Rio de Janeiro: recuperacao de fachadas, impermeabilizacao, eletrica e hidraulica, esquadrias e vidros e revitalizacao.'
      }
    }
  },
  {
    path: 'quem-somos',
    loadChildren: () => import('./quem-somos/quem-somos.module').then((m) => m.QuemSomosModule),
    data: {
      seo: {
        title: 'Quem Somos | Ficus Reforma e Fachada (RJ)',
        description:
          'Conheca a Ficus Reforma e Fachada. Solucoes completas e de alto padrao em reformas e fachadas, com rigor tecnico e compromisso com a qualidade.'
      }
    }
  },
  {
    path: 'metodo',
    loadChildren: () => import('./metodo/metodo.module').then((m) => m.MetodoModule),
    data: {
      seo: {
        title: 'Nosso Metodo | Ficus Reforma e Fachada (RJ)',
        description:
          'Metodo de trabalho da Ficus: diagnostico tecnico, especificacao e planejamento, execucao padronizada, entrega e validacao. Engenharia aplicada com clareza.'
      }
    }
  },
  {
    path: 'contato',
    loadChildren: () => import('./contato/contato.module').then((m) => m.ContatoModule),
    data: {
      seo: {
        title: 'Contato | Ficus Reforma e Fachada (RJ)',
        description:
          'Fale com a Ficus Reforma e Fachada no Rio de Janeiro. Solicite orcamento e tire duvidas sobre reformas e fachadas.'
      }
    }
  },
  {
    path: '404',
    loadComponent: () => import('./erros/erro.component').then((m) => m.ErroComponent),
    data: {
      codigo: '404',
      titulo: 'Página não encontrada',
      mensagem: 'A página que você tentou acessar não existe ou foi movida.',
      seo: {
        title: '404 | Pagina nao encontrada - Ficus Reforma e Fachada',
        description: 'Pagina nao encontrada.',
        noIndex: true
      }
    }
  },
  {
    path: '400',
    loadComponent: () => import('./erros/erro.component').then((m) => m.ErroComponent),
    data: {
      codigo: '400',
      titulo: 'Solicitação inválida',
      mensagem: 'Houve um problema com a solicitação. Verifique e tente novamente.',
      seo: {
        title: '400 | Solicitacao invalida - Ficus Reforma e Fachada',
        description: 'Solicitacao invalida.',
        noIndex: true
      }
    }
  },
  {
    path: '401',
    loadComponent: () => import('./erros/erro.component').then((m) => m.ErroComponent),
    data: {
      codigo: '401',
      titulo: 'Acesso não autorizado',
      mensagem: 'Você não tem permissão para acessar esta página.',
      seo: {
        title: '401 | Nao autorizado - Ficus Reforma e Fachada',
        description: 'Acesso nao autorizado.',
        noIndex: true
      }
    }
  },
  {
    path: '403',
    loadComponent: () => import('./erros/erro.component').then((m) => m.ErroComponent),
    data: {
      codigo: '403',
      titulo: 'Acesso negado',
      mensagem: 'Esta página está bloqueada para este tipo de acesso.',
      seo: {
        title: '403 | Acesso negado - Ficus Reforma e Fachada',
        description: 'Acesso negado.',
        noIndex: true
      }
    }
  },
  {
    path: '408',
    loadComponent: () => import('./erros/erro.component').then((m) => m.ErroComponent),
    data: {
      codigo: '408',
      titulo: 'Tempo esgotado',
      mensagem: 'A solicitação demorou mais que o esperado. Tente novamente.',
      seo: {
        title: '408 | Tempo esgotado - Ficus Reforma e Fachada',
        description: 'Tempo esgotado.',
        noIndex: true
      }
    }
  },
  {
    path: '500',
    loadComponent: () => import('./erros/erro.component').then((m) => m.ErroComponent),
    data: {
      codigo: '500',
      titulo: 'Erro interno',
      mensagem: 'Tivemos um problema nos servidores. Tente novamente em alguns instantes.',
      seo: {
        title: '500 | Erro interno - Ficus Reforma e Fachada',
        description: 'Erro interno.',
        noIndex: true
      }
    }
  },
  {
    path: '502',
    loadComponent: () => import('./erros/erro.component').then((m) => m.ErroComponent),
    data: {
      codigo: '502',
      titulo: 'Resposta inválida',
      mensagem: 'O servidor recebeu uma resposta inválida. Tente novamente.',
      seo: {
        title: '502 | Resposta invalida - Ficus Reforma e Fachada',
        description: 'Resposta invalida.',
        noIndex: true
      }
    }
  },
  {
    path: '503',
    loadComponent: () => import('./erros/erro.component').then((m) => m.ErroComponent),
    data: {
      codigo: '503',
      titulo: 'Serviço indisponível',
      mensagem: 'Estamos em manutenção ou sobrecarga. Tente novamente em instantes.',
      seo: {
        title: '503 | Servico indisponivel - Ficus Reforma e Fachada',
        description: 'Servico indisponivel.',
        noIndex: true
      }
    }
  },
  {
    path: '504',
    loadComponent: () => import('./erros/erro.component').then((m) => m.ErroComponent),
    data: {
      codigo: '504',
      titulo: 'Tempo de resposta excedido',
      mensagem: 'O servidor demorou para responder. Tente novamente.',
      seo: {
        title: '504 | Tempo excedido - Ficus Reforma e Fachada',
        description: 'Tempo de resposta excedido.',
        noIndex: true
      }
    }
  },
  {
    path: '**',
    redirectTo: '404'
  }
];
