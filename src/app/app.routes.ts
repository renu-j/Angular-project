import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'dashboard',
        loadComponent: () => import('./dashboard/dashboard').then(m => m.Dashboard),
    },
    {
        path: 'contact',
        loadComponent: () => import('./contact/contact').then(m => m.Contact),
    },
    {
        path: 'login',
        loadComponent: () => import('./login/login').then(m => m.Login)
    }
];