import { SharedModule } from './../../core/shared/shared/shared.module';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { EsqueciSenhaPage } from './esqueci-senha.page';

const routes: Routes = [
  {
    path: '',
    component: EsqueciSenhaPage
  }
];

@NgModule({
  imports: [
    SharedModule,
    FormsModule,    
    RouterModule.forChild(routes)
  ],
  declarations: [EsqueciSenhaPage]
})
export class EsqueciSenhaPageModule {}
