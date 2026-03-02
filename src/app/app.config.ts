import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { provideFirebaseApp } from '@angular/fire/app';
import { provideAuth } from '@angular/fire/auth';
import { environment } from './environments/evironments';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';


export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideHttpClient(),
    provideFirebaseApp(() => initializeApp(environment)),
    provideAuth (() => getAuth() ),
    provideZonelessChangeDetection()
  ]
};
