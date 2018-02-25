
import { Routes } from '@angular/router';
import { SitePageComponent } from '../components/sitepage/sitePage.component';

export const appRoutes: Routes = [
  { path: '', component: SitePageComponent },
  { path: '**', redirectTo: '/' }
];
