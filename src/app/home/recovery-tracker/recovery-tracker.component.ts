import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'covid-recovery-tracker',
  templateUrl: './recovery-tracker.component.html',
  styleUrls: ['./recovery-tracker.component.css']
})
export class RecoveryTrackerComponent implements OnInit, OnChanges {

  @Input() affectedCount: number;
  @Input() recoveredCount: number;
  @Input() loadingData: boolean;
  @Input() errMessage: string = '';
  percentage: number;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.percentage = this.affectedCount && this.recoveredCount
      ? (this.recoveredCount / this.affectedCount) * 100 
      : NaN
  }
}
