import { Routes } from '@angular/router';
import {MainpageComponent} from '../mainpage/mainpage.component';
import {NewsdetailComponent} from '../newsdetail/newsdetail.component';


export const routes: Routes = [
    { path: 'mainpage',  component: MainpageComponent },
    {path:'newsdetail/:id', component: NewsdetailComponent},
    { path: '', redirectTo: '/mainpage', pathMatch: 'full' }
];