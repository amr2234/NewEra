import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page';
import { ContactPageComponent } from './pages/contact-page/contact-page';

export const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'contact', component: ContactPageComponent },
  { path: '**', redirectTo: '/' }
];
