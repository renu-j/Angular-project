import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';

export const routes: Routes = [
    // {
    //     path: 'home',
    //     component: Home
    // },
    // {
    //     path: 'about',
    //     component: About
    // }

    {
        path: 'home',
        // loadComponent: () => import('./home/home').then(m => m.Home),
        loadChildren: () => import('./home/home.routes').then(m=>m.routes)
    },
    {
        path: 'about',
        loadComponent: () => import('./about/about').then(m => m.About)
    }
];