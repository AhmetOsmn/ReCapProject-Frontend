import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarDetails } from 'src/app/models/car/carDetails';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.css']
})
export class CarDetailsComponent implements OnInit {

  cars:CarDetails[];

  constructor(private carService:CarService, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
   
  }

  // getCarDetails(carId: number) {
  //   this.carService.getCarsDetails(carId).subscribe((response) => {
  //     this.cars = response.data;
  //   });
  // }



}
