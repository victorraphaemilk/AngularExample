import { Routes } from '@angular/router';
import { Principal } from './pages/principal/principal';
import { ListaReceitas } from './pages/lista-receitas/lista-receitas';
import { DetalhesReceita } from './pages/detalhes-receita/detalhes-receita';

export const routes: Routes = [
    {path: "receitas", component: ListaReceitas},
    {path: "receita/:id", component:DetalhesReceita},
    {path: "", component: Principal},
    { path: '**', redirectTo: '' }
];
