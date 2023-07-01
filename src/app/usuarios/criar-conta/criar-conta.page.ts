import { ToastService } from './../../core/shared/toast.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { UsuarioService } from '../shared/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-criar-conta',
  templateUrl: './criar-conta.page.html',
  styleUrls: ['./criar-conta.page.scss'],
})
export class CriarContaPage implements OnInit {
  formCriarConta: FormGroup;
  
  constructor(
    private formBuilder: FormBuilder, private usuarioService: UsuarioService, 
    private toast: ToastService, private router: Router) { }

  ngOnInit() {
    this.criarFormulario();
  }

  criarFormulario() {
    this.formCriarConta = this.formBuilder.group({
      nome: [''],
      email: [''],
      senha: [''],
    });
  }

  onSubmit() {
    if (this.formCriarConta.valid) {
      this.usuarioService.criarConta(this.formCriarConta.value)
        .then(() => {
          this.toast.show('Conta criada com sucesso.');
          this.router.navigate(['/']);
        })
        .catch(mensagem => {
          this.toast.show(mensagem);
        })
    }
  }
}
