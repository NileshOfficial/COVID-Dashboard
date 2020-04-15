import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'covid-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit {

  @Input() height: number;
  @Input() width: number;

  constructor() { }

  ngOnInit(): void {
  }

  setHeightWidth() {
    return {
      'height.px': this.height,
      'width.px': this.width
    }
  }
}
