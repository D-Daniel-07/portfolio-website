import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
  provideZoneChangeDetection,
} from '@angular/core';

import { provideRouter, withHashLocation } from '@angular/router';
import { routes } from './app.routes';

import { provideClientHydration, withEventReplay } from '@angular/platform-browser';

const useHashLocation =
  typeof window !== 'undefined' && window.location.hostname.includes('github.io');

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes, ...(useHashLocation ? [withHashLocation()] : [])),
    provideClientHydration(withEventReplay()),
  ],
};
