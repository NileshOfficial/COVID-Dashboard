import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CaseCountComponent } from './home/case-count/case-count.component';
import { NumberFormatPipe } from './pipes/number-format.pipe'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CaseCountComponent,
    NumberFormatPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
