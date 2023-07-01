import { SharedModule } from './../../core/shared/shared/shared.module';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { ListaPedidoPage } from './lista-pedido.page';

const routes: Routes = [
  {
    path: '',
    component: ListaPedidoPage
  }
];

@NgModule({
  imports: [
    SharedModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ListaPedidoPage]
})
export class ListaPedidoPageModule {}
