import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));https://github.com/renu-j/AngularTraining/blob/day-8-ui-and-api/src/app/dashboard/dashboard.html