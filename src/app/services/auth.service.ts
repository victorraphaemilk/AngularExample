import { inject, Injectable, signal } from "@angular/core";
import { Auth, user, signOut, User } from "@angular/fire/auth"; // Tiramos o Popup e o Provider daqui
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
@Injectable({
    providedIn:'root'
})
export class AuthService {
    private auth = inject(Auth);
    usurioAtual = signal<User | null>(null);

    constructor() {
        console.log("Auditoria: AuthService iniciado. Verificando estado da sessão...");
        user(this.auth).subscribe(usuario => {
            if (usuario) {
                console.log("Auditoria: Utilizador detetado na sessão:", usuario.email);
            } else {
                console.log("Auditoria: Nenhum utilizador logado no momento.");
            }
            this.usurioAtual.set(usuario);
        });
    }

    async loginComGoogle() {
        console.log("Auditoria: Iniciando tentativa de login com Google...");
        const provider = new GoogleAuthProvider();
        
        try {
            console.log("Auditoria: Abrindo janela de Popup...");
            const resultado = await signInWithPopup(this.auth, provider);
            console.log("Auditoria: SUCESSO! Login efetuado:", resultado.user);
        } catch (error: any) {
            console.error("AUDITORIA - ERRO FATAL NO LOGIN:");
            console.error("Código do erro:", error.code);
            console.error("Mensagem do erro:", error.message);
            console.error("Detalhes completos:", error);
        }
    }

    async logout() {
        try {
            await signOut(this.auth);
            console.log("Auditoria: Logout efetuado com sucesso.");
        } catch (error) {
            console.error('Auditoria - Falha ao deslogar:', error);
        }
    }
}