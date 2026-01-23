import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { QuemSomosComponent } from './quem-somos.component';

const routes: Routes = [
  {
    path: '',
    component: QuemSomosComponent
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes), QuemSomosComponent]
})
export class QuemSomosModule {}
