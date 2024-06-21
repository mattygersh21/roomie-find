import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';

const firebaseConfig = {
  apiKey: "AIzaSyB0phFAEv6PbJHk3SzUwNtn4cH7mNh5vAg",
  authDomain: "angular-firebase-app-eacd6.firebaseapp.com",
  projectId: "angular-firebase-app-eacd6",
  storageBucket: "angular-firebase-app-eacd6.appspot.com",
  messagingSenderId: "464114343158",
  appId: "1:464114343158:web:f5dab678e29a9f3e3120d7"
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideAuth(() => getAuth())
  ]
};