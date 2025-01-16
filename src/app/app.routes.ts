import { Routes } from '@angular/router';
import { NycComponent } from './nyc/nyc.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

export const routes: Routes = [
    {path:'NYC', component:NycComponent},
    {path:'Nyc', component:NycComponent},
    {path:'nyc', component:NycComponent},
    {path:'**', component:LandingPageComponent}
];
