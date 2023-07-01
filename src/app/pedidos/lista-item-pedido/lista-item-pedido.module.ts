import { SharedModule } from './../../core/shared/shared/shared.module';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { ListaItemPedidoPage } from './lista-item-pedido.page';

const routes: Routes = [
  {
    path: '',
    component: ListaItemPedidoPage
  }
];

@NgModule({
  imports: [
    SharedModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ListaItemPedidoPage]
})
export class ListaItemPedidoPageModule {}
