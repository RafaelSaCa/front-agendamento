import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { provideHttpClient } from '@angular/common/http';
import { provideNativeDateAdapter } from '@angular/material/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideToastr } from 'ngx-toastr';
import { LocalDateTimePipe } from './agendamento/pipes/local-date-time.pipe';
import { MesPipe } from './agendamento/pipes/mes.pipe';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {


  providers: [provideRouter(routes),
              provideAnimationsAsync(),
              provideHttpClient(),
              provideNativeDateAdapter(),
              LocalDateTimePipe,
              MesPipe,
              provideAnimations(),
              provideToastr({
                timeOut: 5000,
                positionClass: 'toast-top-right',
                preventDuplicates: true,
              }),

            ]
          };
