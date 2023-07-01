import { CarrinhoService } from './../../pedidos/shared/carrinho.service';
import { CategoriaService } from './../../categorias/shared/categoria.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../shared/produto.service';

@Component({
  selector: 'app-lista-produtos',
  templateUrl: './lista-produtos.page.html',
  styleUrls: ['./lista-produtos.page.scss'],
})
export class ListaProdutosPage implements OnInit {
  categorias: Observable<any[]>
  produtos: Observable<any[]>
  categoriaSelecionada: string = '';
  carrinhoPossuiItens: boolean = false;

  constructor(
    private router: Router, private categoriaService: CategoriaService, private produtoService: ProdutoService,
      private carrinhoService: CarrinhoService) { }

  ngOnInit() {
    this.categorias = this.categoriaService.getAll();
    this.produtos = this.produtoService.getAll();
    this.carrinhoService.carrinhoPossuiItens().subscribe((existemItens: boolean) => {
      this.carrinhoPossuiItens = existemItens;
    })
  }

  buscarProdutos() {
    this.produtos = this.produtoService.getAll(this.categoriaSelecionada);
  }

  adicionarProduto(produtoKey: string) {
    this.router.navigate(['pedido/carrinho/novo-item/', produtoKey]);
  }
}
