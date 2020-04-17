import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpService } from '../services/http.service';
import { newsData }  from '../services/response.model';
import { faCircle, faGlobeAmericas, IconDefinition, faArrowRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'covid-news-updates',
  templateUrl: './news-updates.component.html',
  styleUrls: ['./news-updates.component.css']
})
export class NewsUpdatesComponent implements OnInit, OnDestroy {

  private handle: any;

  newsData: newsData = null;
  separatorIcon: IconDefinition = faCircle;
  globeIcon: IconDefinition = faGlobeAmericas;
  arrow: IconDefinition = faArrowRight;
  errMessage = '';

  constructor(private http: HttpService) { }

  ngOnInit(): void {
    this.fetchArticles();
    this.handle = setInterval(this.fetchArticles.bind(this), 100000);
  }

  fetchArticles() {
    this.http.getNews().subscribe(this.updateArticles.bind(this), this.errHandler.bind(this));
  }

  updateArticles(data) {
    console.log(data);
    this.newsData = data;
  }

  errHandler(err: ErrorEvent) {
    console.log(err);
    if(!this.newsData)
      this.errMessage = "error occurred, try refreshing the page.";
    clearInterval(this.handle);
  }

  getArticles() {
    return this.newsData.articles;
  }

  ngOnDestroy() {
    clearInterval(this.handle);
  }
}
