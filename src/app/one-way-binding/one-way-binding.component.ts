import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-one-way-binding',
  templateUrl: './one-way-binding.component.html',
  styleUrls: ['./one-way-binding.component.css']
})
export class OneWayBindingComponent implements OnInit {

  message: String = "This is an example for String interpolation";
  eventBindingValue: String = "";
  properyBindingValue: String = "Property Binding";
  classBinding: String="myCss";
  red: String = "red";

  constructor() { }

  ngOnInit(): void {
  }

  eventBinding(){
    this.eventBindingValue = "Button Clicked..!!!";
  }

  clearEventBinding(){
    this.eventBindingValue = "";
  }

}
