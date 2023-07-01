import { SharedModule } from './../../core/shared/shared/shared.module';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { ListaEnderecoPage } from './lista-endereco.page';

const routes: Routes = [
  {
    path: '',
    component: ListaEnderecoPage
  }
];

@NgModule({
  imports: [
    SharedModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: []
})
export class ListaEnderecoPageModule {}
