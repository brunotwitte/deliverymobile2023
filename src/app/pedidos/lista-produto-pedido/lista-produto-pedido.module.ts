import { SharedModule } from './../../core/shared/shared/shared.module';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { ListaProdutoPedidoPage } from './lista-produto-pedido.page';

const routes: Routes = [
  {
    path: '',
    component: ListaProdutoPedidoPage
  }
];

@NgModule({
  imports: [
    SharedModule,
    FormsModule,    
    RouterModule.forChild(routes)
  ],
  declarations: [ListaProdutoPedidoPage]
})
export class ListaProdutoPedidoPageModule {}
