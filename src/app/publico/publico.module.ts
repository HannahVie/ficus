import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { PublicoComponent } from './publico.component';

const routes: Routes = [
  {
    path: '',
    component: PublicoComponent
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes), PublicoComponent]
})
export class PublicoModule {}
