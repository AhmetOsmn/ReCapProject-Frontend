import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { listResponseModel } from '../models/listResponseModel';
import { Rental } from '../models/rental/rental';

@Injectable({
  providedIn: 'root'
})
export class RentalService {
  apiUrl = 'https://localhost:44377/api/';

  constructor(private httpClient:HttpClient) { }

  getRentals():Observable<listResponseModel<Rental>>{
    let newPath  =this.apiUrl + 'rentals/getrentaldetails';
    return this.httpClient.get<listResponseModel<Rental>>(newPath)
  }
  
  getRentalByCarId(carId:number):Observable<listResponseModel<Rental>>{
    let newPath  =this.apiUrl + 'rentals/getrentalbycarid?carId=' + carId;
    return this.httpClient.get<listResponseModel<Rental>>(newPath)
    
  }

  isCarAvailable(carId:number):Observable<boolean> {
    let newPath = this.apiUrl + "iscaravailable?carId=" + carId;
    return this.httpClient.get<boolean>(newPath);
  }

  getRentalDetails():Observable<listResponseModel<Rental>> {
    let newPath = this.apiUrl + "getrentaldetails";
    return this.httpClient.get<listResponseModel<Rental>>(newPath);
  } 
}
