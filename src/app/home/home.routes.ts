import { Routes } from "@angular/router";
import { Dashboard } from "./dashboard/dashboard";
import { Home } from "./home";

export const routes: Routes = [
    {
        path: '',
        component: Home
    },
    {
        path: 'dashboard',
        component: Dashboard
    }
];