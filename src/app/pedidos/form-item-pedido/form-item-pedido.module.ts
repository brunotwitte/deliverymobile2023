import { SharedModule } from './../../core/shared/shared/shared.module';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { FormItemPedidoPage } from './form-item-pedido.page';

const routes: Routes = [
  {
    path: '',
    component: FormItemPedidoPage
  }
];

@NgModule({
  imports: [
    SharedModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FormItemPedidoPage]
})
export class FormItemPedidoPageModule {}
