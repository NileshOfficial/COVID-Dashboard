import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CaseCountComponent } from './home/case-count/case-count.component';
import { RecoveryTrackerComponent } from './home/recovery-tracker/recovery-tracker.component'
import { NumberFormatPipe } from './pipes/number-format.pipe'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CaseCountComponent,
    RecoveryTrackerComponent,
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
