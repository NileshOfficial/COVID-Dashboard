import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { ChartsModule } from 'ng2-charts';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';

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
import { AccordianComponent } from './accordian/accordian.component';
import { HelpLineComponent } from './help-line/help-line.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { LoadingComponent } from './loading/loading.component';

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
    AccordianComponent,
    HelpLineComponent,
    NotfoundComponent,
    LoadingComponent,
    NumberFormatPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ChartsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
