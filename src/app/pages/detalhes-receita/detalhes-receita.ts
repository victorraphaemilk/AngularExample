import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-detalhes-receita',
  imports: [],
  templateUrl: './detalhes-receita.html',
  styleUrl: './detalhes-receita.scss',
})
export class DetalhesReceita implements OnInit {

  private rota = inject(ActivatedRoute);
  private apiService = inject(ApiService);
  
  receita = signal<any>(null);
  ingredientesLimpos = signal<{ nome: string; medida: string }[]>([]);
  carregando = signal(true);

  ngOnInit(): void {
    const id = this.rota.snapshot.paramMap.get("id");
    
    if (!id) {
      this.carregando.set(false); 
      return;
    }

    this.buscarReceita(id);
  }

  private buscarReceita(id: string): void {
    this.apiService.getReceitasPorID(id).subscribe({
      next: (resposta) => {
        if (resposta?.meals?.length > 0) {
          const dadosReceita = resposta.meals[0];
          
          this.receita.set(dadosReceita); 
          this.extrairIngredientes(dadosReceita);
        } else {
          console.error("Nenhuma receita encontrada para o ID:", id);
        }
      },
      error: (erro) => {
        console.error("A requisição falhou. Verifique a rede ou possíveis bloqueios de firewall.", erro);
      },
      complete: () => {
        this.carregando.set(false); 
      }
    });
  }

  private extrairIngredientes(dadosReceita: any): void {
    const arrayTemporario = []; 
    
    for (let i = 1; i <= 20; i++) {
      const ingrediente = dadosReceita[`strIngredient${i}`];
      const medida = dadosReceita[`strMeasure${i}`];
      
      if (ingrediente && ingrediente.trim() !== "") {
        arrayTemporario.push({
          nome: ingrediente.trim(),
          medida: medida ? medida.trim() : ''
        });
      }
    }
    
    this.ingredientesLimpos.set(arrayTemporario);
  }
}