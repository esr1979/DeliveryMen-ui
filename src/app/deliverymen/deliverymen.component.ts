import { Component, OnInit } from '@angular/core';
import { DeliverymanService } from "./services/deliveryman.service";
import { Deliveryman } from '../model/deliveryman';
import {del} from "selenium-webdriver/http";
import {log} from "util";

@Component({
  selector: 'app-deliverymen',
  templateUrl: './deliverymen.component.html',
  styleUrls: ['./deliverymen.component.css']
})
export class DeliverymenComponent implements OnInit {

  deliveryMenList: Deliveryman[] = undefined;

  inputFormDeliveryman: Deliveryman;

  showInputForm: Boolean;

  constructor(private deliverymanService: DeliverymanService) { }

  ngOnInit() {

    this.showInputForm = false;
    this.inputFormDeliveryman = new Deliveryman();
    this.inputFormDeliveryman.name = "Fill here the name";
    this.inputFormDeliveryman.shipmentId = "Fill here the shipment Id";
    this.getDeliverymenList();

  }

  getDeliverymenList(){

    this.deliverymanService.getAllDeliverymen().subscribe(response=>{
      this.deliveryMenList = response['deliveryMen'];
    });

  }

  saveDeliveryman(){

    this.deliverymanService.saveDeliveryman(this.inputFormDeliveryman).subscribe(deliveryman=>this.onSavedDeliveryman(deliveryman));

  }

  onSavedDeliveryman(deliveryman: Deliveryman) {

    this.inputFormDeliveryman.id = undefined;
    this.inputFormDeliveryman.name = undefined;
    this.inputFormDeliveryman.shipmentId = undefined;
    this.showInputForm = false;
    this.getDeliverymenList();

  }

  deleteDeliveryman(deliveryman: Deliveryman){

    this.deliverymanService.deleteDeliveryMan(deliveryman.id).subscribe(_ => this.onDeleteDeliveryman(deliveryman));

  }

  updateDeliveryman(deliveryman: Deliveryman) {

    this.inputFormDeliveryman.id = deliveryman.id;
    this.inputFormDeliveryman.name = deliveryman.name;
    this.inputFormDeliveryman.shipmentId = deliveryman.shipmentId;
    this.showForm();

  }


  onDeleteDeliveryman(deliveryman: Deliveryman){

    this.getDeliverymenList();

  }

  showForm(){

    this.showInputForm = true;

  }


}
