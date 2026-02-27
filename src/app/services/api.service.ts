import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";



export interface Artilheiros{
    nome: string
    gols: number
}


@Injectable({
    providedIn: "root"
})
export class ApiService{
    private httpkey = inject(HttpClient)


    GetArtilheiros() {
        return this.httpkey.get<Artilheiros[]>("assets/api.json")
    }
}