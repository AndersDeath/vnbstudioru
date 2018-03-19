import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { appRoutes } from './constants/route.constant';
import { AppComponent } from './components/app/app.component';
import { SitePageComponent, Chat } from './components/sitepage/sitePage.component';
import { MainComponent } from './components/main/main.component';
import { TagsComponent } from './components/tags/tags.component';
import { SearchComponent } from './components/search/search.component';

import { MaterialAccordionListComponent } from './components/materialAccordionList/materialAccordionList.component';
import { RecaptchaModule } from 'ng-recaptcha';
import { DataService } from './services/data.service';
import { PathService } from './services/path.service';
import { StorageService } from './services/storage.service';

import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
} from '@angular/material';
import { UlogComponent } from './components/ulog/ulog.component';


@NgModule({
  declarations: [
    AppComponent,
    SitePageComponent,
    MaterialAccordionListComponent,
    Chat,
    MainComponent,
    TagsComponent,
    SearchComponent,
    UlogComponent
  ],
  entryComponents: [Chat],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatStepperModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    RecaptchaModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [DataService, PathService, StorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
