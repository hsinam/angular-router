import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { Topic01Component } from './topic01/topic01.component';
import { Topic02Component } from './topic02/topic02.component';
import { HomeComponent } from './home/home.component';
import { ROUTES } from 'src/_routes/routes';
import { Topic03Component } from './topic03/topic03.component';

@NgModule({
  declarations: [
    AppComponent,
    Topic01Component,
    Topic02Component,
    HomeComponent,
    Topic03Component
  ],
  imports: [BrowserModule, RouterModule.forRoot(ROUTES)],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
