import { Component, OnInit } from '@angular/core';
import { DeliverymanService } from "./services/deliveryman.service";
import { Deliveryman } from '../model/deliveryman';

@Component({
  selector: 'app-deliverymen',
  templateUrl: './deliverymen.component.html',
  styleUrls: ['./deliverymen.component.css']
})
export class DeliverymenComponent implements OnInit {

  deliveryMenList: Deliveryman[] = undefined;

  inputFormDeliveryman: Deliveryman;

  constructor(private deliverymanService: DeliverymanService) { }

  ngOnInit() {

    this.inputFormDeliveryman = new Deliveryman();
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

    this.getDeliverymenList();


  }


}
