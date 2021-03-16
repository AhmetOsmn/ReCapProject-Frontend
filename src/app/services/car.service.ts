import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../models/car/car';
import { CarDetails } from '../models/car/carDetails';
import { listResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  apiUrl = 'https://localhost:44377/api/';

  constructor(private httpClient:HttpClient) { }

  getCars():Observable<listResponseModel<Car>>{
    let newPath = this.apiUrl + 'cars/getall';
    return this.httpClient.get<listResponseModel<Car>>(newPath);
  }

  getCarsDetails(carId:number):Observable<listResponseModel<CarDetails>>{
    let newPath = this.apiUrl + 'cars/getcardetail?carId=' + carId;
    return this.httpClient.get<listResponseModel<CarDetails>>(newPath);
  }

  getCarsByBrand(brandId:number):Observable<listResponseModel<CarDetails>>{

    let newPath = this.apiUrl + 'cars/getcarbybrand?brandId=' + brandId;
    return this.httpClient.get<listResponseModel<CarDetails>>(newPath);
  }

  getCarsByColor(colorId:number):Observable<listResponseModel<CarDetails>>{
    let newPath = this.apiUrl + 'cars/getcarbycolor?colorId=' + colorId;
    return this.httpClient.get<listResponseModel<CarDetails>>(newPath);
  }
}
