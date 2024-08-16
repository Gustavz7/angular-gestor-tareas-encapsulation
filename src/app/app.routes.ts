import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: 'app', loadComponent: () => import('./app.component').then(comp => comp.AppComponent) },];
