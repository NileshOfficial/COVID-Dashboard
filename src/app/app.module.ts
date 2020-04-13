import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CaseCountComponent } from './home/case-count/case-count.component';
import { RecoveryTrackerComponent } from './home/recovery-tracker/recovery-tracker.component'
import { NumberFormatPipe } from './pipes/number-format.pipe';
import { CountryWiseRecordsComponent } from './home/country-wise-records/country-wise-records.component';
import { WorldMapComponent } from './home/world-map/world-map.component';
import { TrendComponent } from './home/trend/trend.component';
import { ActiveEmphasisDirective } from './directives/active-emphasis.directive';
import { CarouselComponent } from './home/carousel/carousel.component';
import { TweetsComponent } from './home/tweets/tweets.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CaseCountComponent,
    RecoveryTrackerComponent,
    CountryWiseRecordsComponent,
    WorldMapComponent,
    TrendComponent,
    CarouselComponent,
    ActiveEmphasisDirective,
    TweetsComponent,
    NumberFormatPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
