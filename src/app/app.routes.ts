import { Routes } from '@angular/router';
import { HomeComponent } from './modules/pages/home/home.component';
import { StudentsComponent } from './modules/pages/students/students.component';
import { CoursesComponent } from './modules/pages/courses/courses.component';
import { CareersComponent } from './modules/pages/careers/careers.component';

export const routes: Routes = [

    {
        path: 'landing',
        children: [
            {
                path: 'home',
                component: HomeComponent
            },
            {
                path: 'careers',
                component: CareersComponent
            },
            {
                path: 'courses',
                component: CoursesComponent
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
