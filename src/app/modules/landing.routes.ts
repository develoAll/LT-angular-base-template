import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

export default [
    
    {
        path: 'home',
        title: 'home',
        component: HomeComponent
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
    },
] as Routes;