import { Injectable } from "@angular/core";

@Injectable ({
    providedIn: "root"
})
export class GreetingService{
     grettings = ["Bom dia", "Boa Tarde", "Boa noite"];
     stringgs = ""
     trocarGreeting():void {

        const indice = Math.floor(Math.random() * this.grettings.length)
        this.stringgs = this.grettings[indice]
         
    }
}