import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { provideCocokits } from '@cocokits/angular-components';
import { framesXThemeConfig } from '@cocokits/theme-frames-x';
// import { cocokitsThemeConfig } from '@cocokits/theme-cocokits';

import { appRoutes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(appRoutes),
    provideAnimationsAsync(),
    provideCocokits(framesXThemeConfig), // FrameX Theme
    // provideCocokits(cocokitsThemeConfig), // CocoKits Theme
  ],
};
