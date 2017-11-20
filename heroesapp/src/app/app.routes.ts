import { RouterModule, Routes } from '@angular/router';
import {HeroComponent} from './components/heroes/hero.component';
import {HeroesComponent} from './components/heroes/heroes.component';


const APP_ROUTES: Routes = [
  { path: 'heroes', component: HeroesComponent },
  { path: 'hero/:id', component: HeroComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'heroes' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
