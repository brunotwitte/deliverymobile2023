import { SharedModule } from './../../core/shared/shared/shared.module';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { FormEnderecoPage } from './form-endereco.page';

const routes: Routes = [
  {
    path: '',
    component: FormEnderecoPage
  }
];

@NgModule({
  imports: [
    SharedModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FormEnderecoPage]
})
export class FormEnderecoPageModule {}
