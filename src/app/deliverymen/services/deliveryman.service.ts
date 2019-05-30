import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Deliveryman} from "../../model/deliveryman";
import {Observable} from 'rxjs';


@Injectable()
export class DeliverymanService {

  constructor(private http: HttpClient) { }

  getAllDeliverymen(): Observable<Object>{

    return this.http.get<Object>('http://localhost:8083/api/v1/deliveryMen');

    }
}


