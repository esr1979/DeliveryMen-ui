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

  constructor(private deliverymanService: DeliverymanService) { }

  ngOnInit() {

    this.getDeliverymenList();

  }

  getDeliverymenList(){

    this.deliverymanService.getAllDeliverymen().subscribe(response=>{
      this.deliveryMenList = response['deliveryMen'];
    });

  }

}
