import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ContatoComponent } from './contato.component';

const routes: Routes = [
  {
    path: '',
    component: ContatoComponent
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes), ContatoComponent]
})
export class ContatoModule {}
