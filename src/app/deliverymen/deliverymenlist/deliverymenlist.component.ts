import { Component, OnInit } from '@angular/core';

import {DELIVERYMEN} from "../../model/mock-deliverymen";
import {DeliveryMan} from "../../model/delivery-man";


@Component({
  selector: 'app-deliverymenlist',
  templateUrl: './deliverymenlist.component.html',
  styleUrls: ['./deliverymenlist.component.css']
})
export class DeliverymenlistComponent implements OnInit {

  deliverymen = DELIVERYMEN;

  constructor() { }

  ngOnInit() {
  }

}
