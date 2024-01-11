import { Routes } from '@angular/router';
import { LandingComponent } from './modules/landing/landing.component';
import { HomeComponent } from './modules/pages/home/home.component';
import { StudentsComponent } from './modules/pages/students/students.component';
import { AppComponent } from './app.component';

export const routes: Routes = [

    {
        path: 'landing',
        children: [
            {
                path: 'home',
                component: HomeComponent
            },
            {
                path: 'students',
                component: StudentsComponent
            },
            {
                path: '',
                redirectTo: 'home',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: 'landing/home',
        pathMatch: 'full',
    },
];
