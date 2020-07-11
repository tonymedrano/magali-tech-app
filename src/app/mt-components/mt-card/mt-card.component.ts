import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mt-card',
  templateUrl: './mt-card.component.html',
  styleUrls: ['./mt-card.component.css']
})
export class MtCardComponent implements OnInit {

  @Input() card: any;

  constructor() { }

  ngOnInit() {
  }

}
