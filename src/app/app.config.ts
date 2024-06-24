import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient } from '@angular/common/http';
import { provideNativeDateAdapter } from '@angular/material/core';
import { LocalDateTimePipe } from './agendamento/pipes/local-date-time.pipe';
import { MesPipe } from './agendamento/pipes/mes.pipe';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideAnimationsAsync(), provideHttpClient(), provideNativeDateAdapter(), LocalDateTimePipe, MesPipe]
};
