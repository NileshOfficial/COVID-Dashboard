import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AccordianComponent } from './accordian/accordian.component';
import { HelpLineComponent } from './help-line/help-line.component';
import { NewsUpdatesComponent } from './news-updates/news-updates.component';
import { NotfoundComponent } from './notfound/notfound.component';


const routes: Routes = [
  {path: "", redirectTo: '/Dashboard', pathMatch: "full"},
  {path: "Dashboard", component: HomeComponent},
  {path: "FrequentQuestions", component: AccordianComponent},
  {path: "HelpLinks", component: HelpLineComponent},
  {path: "NewsAndUpdates", component: NewsUpdatesComponent},
  {path: "BadRequest", component: NotfoundComponent},
  {path: "**", redirectTo: "/BadRequest"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
