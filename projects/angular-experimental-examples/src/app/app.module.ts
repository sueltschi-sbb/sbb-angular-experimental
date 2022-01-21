import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularExperimentalModule } from 'angular-experimental';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, AngularExperimentalModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
