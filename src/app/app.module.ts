import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CaseCountComponent } from './home/case-count/case-count.component';
import { RecoveryTrackerComponent } from './home/recovery-tracker/recovery-tracker.component'
import { NumberFormatPipe } from './pipes/number-format.pipe';
import { CountryWiseRecordsComponent } from './home/country-wise-records/country-wise-records.component';
import { WorldMapComponent } from './home/world-map/world-map.component';
import { LineChartComponent } from './charts/line-chart/line-chart.component';
import { TrendComponent } from './home/trend/trend.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CaseCountComponent,
    RecoveryTrackerComponent,
    CountryWiseRecordsComponent,
    WorldMapComponent,
    LineChartComponent,
    TrendComponent,
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
