import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideIcons } from './core/icons/icons.provider';
import { provideHttpClient } from '@angular/common/http';
import { NgxSpinnerModule } from 'ngx-spinner';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), 
    importProvidersFrom(NgxSpinnerModule.forRoot({ type: 'cube-transition' })),
    provideAnimations(),
    provideIcons(),
    provideHttpClient()
  ]
};
