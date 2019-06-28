import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

import {Deliveryman} from "../../model/deliveryman";


@Component({
  selector: 'app-deliverymenlist',
  templateUrl: './deliverymenlist.component.html',
  styleUrls: ['./deliverymenlist.component.css']
})
export class DeliverymenlistComponent implements OnInit {

  //deliverymen = DELIVERYMEN;

  @Input() deliverymen: Deliveryman[];
  @Output() deleteDeliverymanEmit = new EventEmitter<Deliveryman>()
  @Output() updateDeliverymanEmit = new EventEmitter<Deliveryman>()

  constructor() { }

  ngOnInit() {

  }

  deleteDeliveryman(deliveryman: Deliveryman){

    this.deleteDeliverymanEmit.emit(deliveryman);

  }

  updateDeliveryman(deliveryman: Deliveryman){

    this.updateDeliverymanEmit.emit(deliveryman);
  }

}
