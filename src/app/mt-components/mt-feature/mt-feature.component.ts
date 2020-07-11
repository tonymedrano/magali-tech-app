import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mt-feature',
  templateUrl: './mt-feature.component.html',
  styleUrls: ['./mt-feature.component.css']
})
export class MtFeatureComponent implements OnInit {

  @Input() feature: any;

  constructor() { }

  ngOnInit() {
  }

}
