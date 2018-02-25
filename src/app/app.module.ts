import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { appRoutes } from './constants/route.constant';
import { AppComponent } from './components/app/app.component';
import { SitePageComponent } from './components/sitepage/sitePage.component';
import { MaterialAccordionListComponent } from './components/materialAccordionList/materialAccordionList.component';


import {
  MatCardModule,
  MatDividerModule,
  MatButtonModule,
  MatExpansionModule,
  MatListModule,
  MatTooltipModule,
  MatInputModule,
  MatRadioModule,
  MatMenuModule,
  MatIconModule,
  MatGridListModule
} from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    SitePageComponent,
    MaterialAccordionListComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDividerModule,
    MatCardModule,
    MatButtonModule,
    MatExpansionModule,
    MatListModule,
    MatTooltipModule,
    MatInputModule,
    MatRadioModule,
    MatMenuModule,
    MatIconModule,
    MatGridListModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
