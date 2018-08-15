import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ng-native-ele',
  templateUrl: './custom-comp.component.html',
  styleUrls: ['./custom-comp.component.css']
})
export class CustomCompComponent implements OnInit {

  constructor() { }
  @Input() author:string

  ngOnInit() {
  }

}
