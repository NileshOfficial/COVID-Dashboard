import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';
import { newsData }  from '../services/response.model';
import { faCircle, faGlobeAmericas } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'covid-news-updates',
  templateUrl: './news-updates.component.html',
  styleUrls: ['./news-updates.component.css']
})
export class NewsUpdatesComponent implements OnInit {

  newsData: newsData = null;
  separatorIcon=faCircle;
  globeIcon=faGlobeAmericas;

  constructor(private http: HttpService) { }

  ngOnInit(): void {
    this.http.getNews().subscribe(data => {
      this.newsData = data;
    })
  }

  getArticles() {
    return this.newsData.articles;
  }
}
