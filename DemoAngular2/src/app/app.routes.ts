import { Routes } from '@angular/router';
import { isUserAuthenticatedGuard } from './guards/isUserAuthenticated/is-user-authenticated-guard';

export const routes: Routes = [

    {path:'', redirectTo: 'home', pathMatch: 'full'},  // redirect when no param in url.

    {
        path:'home',  // same as "component" but async load (bether).
        loadComponent: () => import('./pages/home/home')
        .then((m) => m.Home)
    },

    {
        path:'login',
        loadComponent: () => import('./pages/login/login')
        .then((m) => m.Login)
    },
    {
        path:'product-list',
        loadComponent: () => import('./pages/product-list/product-list')
        .then((m) => m.ProductList)
    },
    {
        path:'product-crud',
        loadComponent: () => import('./pages/product-crud/product-crud')
        .then((m) => m.ProductCrud)
    },
    {
        path:'home-for-auth',
        loadComponent: () => import('./pages/home/home')
        .then((m) => m.Home),
        canActivate: [isUserAuthenticatedGuard],
    }

];
