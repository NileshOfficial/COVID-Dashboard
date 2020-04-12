import { Component, OnInit } from '@angular/core';
import { faGlobeAmericas, faHandHoldingUsd, IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'covid-help-line',
  templateUrl: './help-line.component.html',
  styleUrls: ['./help-line.component.css']
})
export class HelpLineComponent implements OnInit {

  linkIcon: IconDefinition = faGlobeAmericas;
  donateIcon: IconDefinition = faHandHoldingUsd;

  constructor() { }

  ngOnInit(): void {
  }

}
