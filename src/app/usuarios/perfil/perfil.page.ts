import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../shared/usuario.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  user: any = {};

  constructor(private usuarioService: UsuarioService, private router: Router) { }

  ngOnInit() {
    this.user = this.usuarioService.getDadosUsuario();
  }

  sair() {
    this.usuarioService.logout()
      .then(() => {
        this.router.navigate(['/login']);
      });
  }
}
