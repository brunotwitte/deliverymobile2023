import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ToastService } from './../../core/shared/toast.service';
import { AlertService } from './../../core/shared/alert.service';
import { Observable } from 'rxjs';
import { Component, OnInit, Input } from '@angular/core';
import { EnderecoService } from '../shared/endereco.service';

@Component({
  selector: 'app-lista-endereco',
  templateUrl: './lista-endereco.page.html',
  styleUrls: ['./lista-endereco.page.scss'],
})
export class ListaEnderecoPage implements OnInit {
  enderecos: Observable<any[]>;
  @Input()
  selecionarEndereco: boolean = false;

  constructor(private enderecoService: EnderecoService, private alert: AlertService,
    private toast: ToastService, private router: Router, private modalController: ModalController) { }

  ngOnInit() {
    this.enderecos = this.enderecoService.getAll();
  }

  getEnderecoText(endereco: any) {
    let enderecoText: '';
    enderecoText = endereco.logradouro;
    enderecoText += ', ' + endereco.numero;
    if (endereco.complemento) {
      enderecoText += ', ' + endereco.complemento;
    }
    enderecoText += ' - ' + endereco.bairro;
    enderecoText += ' - ' + endereco.cep;
    return enderecoText;
  }

  editar(key: string) {
    this.router.navigate(['/usuario/enderecos/editar', key]);
  }

  remover(key: string) {
    this.alert.showConfirmarExclusao('Endereço', () => {
      this.enderecoService.remove(key)
        .then(() => {
          this.toast.show('Endereço removido com sucesso.');
        })
    })
  }

  setEnderecoSelecionado(endereco: any) {
    if (this.selecionarEndereco) {
      const ederecoText = this.getEnderecoText(endereco);
      this.modalController.dismiss({
        endereco: ederecoText
      })
    }
  }
}
