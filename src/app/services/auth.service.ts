import { inject, Injectable, signal } from "@angular/core";
import { Auth, signInWithRedirect, user, GoogleAuthProvider, signOut, User } from "@angular/fire/auth";


@Injectable({
    providedIn:'root'
})

export class AuthService{
    private auth = inject(Auth)

    usurioAtual = signal<User | null> (null);

    constructor() {
        user(this.auth).subscribe(usuario => {
            this.usurioAtual.set(usuario)
        });

    }


    async loginComGoogle(){
        const provider = new GoogleAuthProvider();
        try{
            await signInWithRedirect(this.auth, provider)
        }catch (error){
            console.error("Erro no login", error)
        }
    }


    async logout(){
        try{
            await signOut(this.auth)
        }catch (error){
            console.error('Falha ao deslogar', error )
        }
    }
}


