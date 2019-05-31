import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Deliveryman} from "../../model/deliveryman";
import {Observable} from 'rxjs';
import { environment} from "../../../environments/environment";


@Injectable()
export class DeliverymanService {

  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getAllDeliverymen(): Observable<Object>{

    let url = this.baseUrl + '/api/v1/deliveryMen'
    return this.http.get<Object>(url);

    }
}


