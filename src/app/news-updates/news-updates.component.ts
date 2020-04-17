import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';
import { newsData }  from '../services/response.model';
import { faCircle, faGlobeAmericas, IconDefinition, faArrowRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'covid-news-updates',
  templateUrl: './news-updates.component.html',
  styleUrls: ['./news-updates.component.css']
})
export class NewsUpdatesComponent implements OnInit {

  newsData: newsData = null;
  separatorIcon: IconDefinition = faCircle;
  globeIcon: IconDefinition = faGlobeAmericas;
  arrow: IconDefinition = faArrowRight;
  errMessage = '';

  constructor(private http: HttpService) { }

  ngOnInit(): void {
    this.fetchArticles();
  }

  fetchArticles() {
    this.http.getNews().subscribe(this.updateArticles.bind(this), this.errHandler.bind(this));
  }

  updateArticles(data) {
    this.newsData = data;
  }

  errHandler(err: ErrorEvent) {
    console.log(err);
    if(!this.newsData)
      this.errMessage = "error occurred, try refreshing the page."
  }

  getArticles() {
    return this.newsData.articles;
  }
}
