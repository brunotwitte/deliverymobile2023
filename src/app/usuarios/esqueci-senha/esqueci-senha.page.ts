import { Router } from '@angular/router';
import { ToastService } from './../../core/shared/toast.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../shared/usuario.service';

@Component({
  selector: 'app-esqueci-senha',
  templateUrl: './esqueci-senha.page.html',
  styleUrls: ['./esqueci-senha.page.scss'],
})
export class EsqueciSenhaPage implements OnInit {
  formEsqueciSenha: FormGroup;

  constructor(
    private formBuilder: FormBuilder, private usuarioService: UsuarioService, 
    private toast: ToastService, private router: Router) { }

  ngOnInit() {
    this.criarFormulario();
  }

  criarFormulario() {
    this.formEsqueciSenha = this.formBuilder.group({
      email: ['']
    });
  }

  onSubmit() {
    if (this.formEsqueciSenha.valid) {
      this.usuarioService.enviarEmailResetarSenha(this.formEsqueciSenha.value.email)
        .then(() => {
          this.toast.show('Um e-mail foi enviado para que você resete sua senha.');
          this.router.navigate(['login']);
        })
        .catch(message => {
          this.toast.show(message);
        });
    }
  }
}
