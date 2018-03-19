
import { Routes } from '@angular/router';
import { SitePageComponent } from '../components/sitepage/sitePage.component';
import { MainComponent } from '../components/main/main.component';
import { TagsComponent } from '../components/tags/tags.component';
import { SearchComponent } from '../components/search/search.component';
import { UlogComponent } from '../components/ulog/ulog.component';

export const appRoutes: Routes = [
  { path: '', component: SitePageComponent },
  { path: 'i', component: MainComponent },
  { path: 'tags', component: TagsComponent },
  { path: 'lvmps', component: SearchComponent },
  { path: 'ulog', component: UlogComponent },
  { path: '**', redirectTo: '/' }
];
