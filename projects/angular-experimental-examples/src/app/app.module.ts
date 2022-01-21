import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularExperimentalModule } from 'angular-experimental';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, AngularExperimentalModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
