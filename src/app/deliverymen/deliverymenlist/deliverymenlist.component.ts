import {Component, Input, OnInit} from '@angular/core';

import {Deliveryman} from "../../model/deliveryman";


@Component({
  selector: 'app-deliverymenlist',
  templateUrl: './deliverymenlist.component.html',
  styleUrls: ['./deliverymenlist.component.css']
})
export class DeliverymenlistComponent implements OnInit {

  //deliverymen = DELIVERYMEN;

  @Input() deliverymen: Deliveryman[];

  constructor() { }

  ngOnInit() {

    console.log(this.deliverymen);

  }

}
