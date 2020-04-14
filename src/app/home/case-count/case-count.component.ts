import { Component, OnInit, OnChanges, Input, SimpleChanges } from '@angular/core';
import { faCaretDown, faCaretUp, IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'covid-case-count',
  templateUrl: './case-count.component.html',
  styleUrls: ['./case-count.component.css']
})
export class CaseCountComponent implements OnInit, OnChanges {

  @Input('heading') countType: string = '';
  @Input() count: number = 0;
  @Input() rise: boolean = true;
  @Input() invertTrend: boolean = false;
  indicatorConfig: Array<any>;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(change: SimpleChanges): void {
    if (this.invertTrend) {
      this.indicatorConfig = this.rise ? ["#00C566", faCaretUp] : ["#FF0019", faCaretDown];
      console.log("inverted", this.indicatorConfig);
    }
    else {
      this.indicatorConfig = this.rise ? ["#FF0019", faCaretUp] : ["#00C566", faCaretDown];
      console.log("notInverted", this.indicatorConfig);
    }
  }

}
