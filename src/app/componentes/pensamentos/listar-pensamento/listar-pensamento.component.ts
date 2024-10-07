import { Component } from '@angular/core';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrl: './listar-pensamento.component.css'
})
export class ListarPensamentoComponent {

  listaPensamentos = [
    {
      conteudo: 'I love Angular',
      autoria: 'Gabriel Calasans',
      modelo: 'modelo3'
    },
    {
      conteudo: 'I love Java',
      autoria: 'Gabriel Calasans',
      modelo: 'modelo2'
    },
    {
      conteudo: 'A coisa mais bela que podemos experimentar é o mistério. É a fonte de toda a verdadeira arte e ciência. Aquele para quem essa emoção é estranha, que não pode mais parar para se maravilhar e ficar em êxtase, está tão bom quanto morto: seus olhos estão fechados. Saber que o que é impenetrável para nós realmente existe, manifestando-se como a mais alta sabedoria e a mais radiante beleza, que nossas faculdades embotadas só podem compreender em suas formas mais primitivas - esse conhecimento, esse sentimento, está no centro da verdadeira religiosidade. Nesse sentido, e somente nesse sentido, eu pertenço aos homens profundamente religiosos.',
      autoria: 'Albert Einstein',
      modelo: 'modelo1'
    }
  ];
}
