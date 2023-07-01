import { Router } from '@angular/router';
import { ToastService } from './../../core/shared/toast.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../shared/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  formLogin: FormGroup;

  constructor(
    private formBuilder: FormBuilder, private usuarioService: UsuarioService, 
    private toast: ToastService, private router: Router) { }

  ngOnInit() {
    this.criarFormulario();
  }

  criarFormulario() {
    this.formLogin = this.formBuilder.group({
      email: [''],
      senha: ['']
    });
  }

  onSubmit() {
    if (this.formLogin.valid) {
      this.usuarioService.login(this.formLogin.value.email, this.formLogin.value.senha)
        .then(() => {
          this.router.navigate(['/']);
        })
        .catch((mensagem: string) => {
          this.toast.show(mensagem);
        });
    }
  }
}
