import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'covid-recovery-tracker',
  templateUrl: './recovery-tracker.component.html',
  styleUrls: ['./recovery-tracker.component.css']
})
export class RecoveryTrackerComponent implements OnInit {

  @Input() affectedCount: number;
  @Input() recoveredCount: number;
  constructor() { }

  ngOnInit(): void {
  }

}
