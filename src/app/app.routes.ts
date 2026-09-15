import { Routes } from '@angular/router';
import { authGuard, contactGuard } from './guards/common-guard';
 
export const routes: Routes = [
    {
        path: 'dashboard',
        loadComponent: () => import('./dashboard/dashboard').then(m => m.Dashboard),
        canActivate: [authGuard]
    },
    {
        path: 'contact',
        loadComponent: () => import('./contact/contact').then(m => m.Contact),
        canActivate: [authGuard, contactGuard],
        // canActivateChild:
    },
    {
        path: 'login',
        loadComponent: () => import('./login/login').then(m => m.Login)
    },
    {
        path: 'denied',
        loadComponent: () => import('./denied/denied').then(m => m.Denied)
    },
   {
  path: 'state',
  loadComponent: () =>
    import('./state-management/state-management')
      .then(m => m.StateManagement)
}
];