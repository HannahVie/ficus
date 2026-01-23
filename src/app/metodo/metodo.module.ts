import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { MetodoComponent } from './metodo.component';

const routes: Routes = [
  {
    path: '',
    component: MetodoComponent
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes), MetodoComponent]
})
export class MetodoModule {}
