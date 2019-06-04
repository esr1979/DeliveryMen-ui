import {Component, Input, OnInit} from '@angular/core';
import {Deliveryman} from "../../model/deliveryman";

@Component({
  selector: 'app-deliveryman-form',
  templateUrl: './deliveryman-form.component.html',
  styleUrls: ['./deliveryman-form.component.css']
})
export class DeliverymanFormComponent implements OnInit {

  @Input() inputDeliveryman: Deliveryman;

  constructor() { }

  ngOnInit() {
  }

}
