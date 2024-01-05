import { Routes } from '@angular/router';
import { LandingComponent } from './modules/landing/landing.component';

export const routes: Routes = [

    {
        path: 'landing',
        title: 'landing',
        component: LandingComponent,
        children: [
            {
                path: '',
                title: '',
                loadChildren: () => import('./modules/landing.routes')
            },
        ]
    },
    {
        path: '',
        redirectTo: 'landing',
        pathMatch: 'full',
    },
];
