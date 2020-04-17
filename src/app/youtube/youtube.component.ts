import { Component, OnInit } from '@angular/core';
import { faYoutube, IconDefinition } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'covid-youtube',
  templateUrl: './youtube.component.html',
  styleUrls: ['./youtube.component.css']
})
export class YoutubeComponent implements OnInit {

  youtubeIcon: IconDefinition = faYoutube;
  constructor() { }

  ngOnInit(): void {
  }

}
