import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MovieDashboardComponent } from './shared/component/movie-dashboard/movie-dashboard.component';
import { MovieCardComponent } from './shared/component/movie-card/movie-card.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieDashboardComponent,
    MovieCardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
