import { Component, OnInit } from '@angular/core';
import { IPensamento } from '../pensamento';
import { PensamentoService } from '../pensamento.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrl: './criar-pensamento.component.css'
})
export class CriarPensamentoComponent implements OnInit {
  
  pensamento: IPensamento = {
    conteudo: '',
    autoria: '',
    modelo: 'modelo1'
  }
  
  constructor(
    private service: PensamentoService,
    private router: Router
  ) { }
  
  criarPensamento() {
    this.service.criar(this.pensamento).subscribe(() => {
      this.router.navigate(['/listarPensamentos'])
    });
  }
  
  ngOnInit(): void {
  }

  cancelar() {
    this.router.navigate(['/listarPensamentos'])
  }
}
