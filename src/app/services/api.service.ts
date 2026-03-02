import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";

export interface Meal {
    idMeal: string;
    strMeal: string;
    strMealThumb: string;
}

export interface MealResponse {
    meals: Meal[];
}

@Injectable({
    providedIn: "root"
})
export class ApiService {
    private http = inject(HttpClient);

    getReceitas() {
        return this.http.get<MealResponse>("https://www.themealdb.com/api/json/v1/1/search.php?f=c");
    }

    getReceitasPorID(id: string){
        return this.http.get<any>(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
    }

    getReceitasPorBusca(termo: string) {
        const query = termo.trim() === '' ? 'search.php?s=' : `search.php?s=${termo}`;
        return this.http.get<MealResponse>(`https://www.themealdb.com/api/json/v1/1/${query}`);
    }
}