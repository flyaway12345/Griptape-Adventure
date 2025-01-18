import { Routes } from '@angular/router';
import { NycComponent } from './nyc/nyc.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { TexasComponent } from './texas/texas.component';

export const routes: Routes = [
    {path:'NYC', component:NycComponent},
    {path:'Nyc', component:NycComponent},
    {path:'nyc', component:NycComponent},
    {path:'Texas', component:TexasComponent},
    {path:'TEXAS', component:TexasComponent},
    {path:'texas', component:TexasComponent},
    {path:'**', component:LandingPageComponent}
];
