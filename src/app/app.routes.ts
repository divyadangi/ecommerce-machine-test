import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CardItemComponent } from './card-item/card-item.component';

export const routes: Routes = [
    { path:'', component:HomeComponent},
    { path: 'cart', component: CardItemComponent }
];
