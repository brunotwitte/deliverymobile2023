import { ListaEnderecoPage } from './../../../enderecos/lista-endereco/lista-endereco.page';
import { ValorComponent } from './../valor/valor.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ValorComponent, ListaEnderecoPage],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    RouterModule
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    RouterModule,
    ValorComponent,
    ListaEnderecoPage
  ],
  entryComponents: [ValorComponent, ListaEnderecoPage]
})
export class SharedModule { }
