import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url: String = 'http://loiane.com';
  cursoAngular: Boolean = true;
  urlImagem = 'http://lorempixel.com/400/200/animals/';

  valorAtual: String = '';
  valorSalvo: String = '';

  isMouseOver: Boolean = false;

  nomeDoCurso: String = 'Angular';

  valorInicial = 15;

  getValor() {
    return 1;
  }

  constructor() { }

  getCurtirCurso() {
    return true;
  }

  onKeyUp(evento: KeyboardEvent) {
    console.log();
    this.valorAtual = (<HTMLInputElement>evento.target).value;
  }

  salvarValor(valor) {
    this.valorSalvo = valor;

  }

  onMouseOverOut() {
    this.isMouseOver = !this.isMouseOver;

  }

  onMudouValor(evento) {
    console.log(evento.novoValor);
  }

  botaoClicado() {
    alert('Botão clicado"');
  }


  ngOnInit() {
  }

}
