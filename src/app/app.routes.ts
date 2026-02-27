import { Routes } from '@angular/router';
import { BetterPlayers } from '../components/better-players/better-players';
import { Principal } from './pages/principal/principal';
import { Transferencias } from './pages/transferencias/transferencias';

export const routes: Routes = [
    {path: "melhores", component: BetterPlayers},
    {path: "", component: Principal},
    {path: "transferencias", component: Transferencias},
    { path: '**', redirectTo: '' }
];
