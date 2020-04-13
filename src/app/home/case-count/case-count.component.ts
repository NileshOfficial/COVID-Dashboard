import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'covid-case-count',
  templateUrl: './case-count.component.html',
  styleUrls: ['./case-count.component.css']
})
export class CaseCountComponent implements OnInit {

  @Input('heading') countType: string = '';
  @Input() count: number = 0;
  @Input() rise: boolean = true;
  
  constructor() { }

  ngOnInit(): void {
  }

}
