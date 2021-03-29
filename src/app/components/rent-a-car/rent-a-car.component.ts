import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car/car';
import { Rental } from 'src/app/models/rental/rental';
import { CarService } from 'src/app/services/car.service';
import { RentalService } from 'src/app/services/rental.service';

@Component({
  selector: 'app-rent-a-car',
  templateUrl: './rent-a-car.component.html',
  styleUrls: ['./rent-a-car.component.css'],
})
export class RentACarComponent implements OnInit {
  cars: Car[];
  rentals: Rental[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private carService: CarService,
    private rentalService:RentalService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((params) => {
      if(params['carId']){
        this.getRentalsByCarId(params['carId']);
      }
    })
  }

  getCarById(carId:number){
    this.carService.getCarById(carId).subscribe(response=>{
      this.cars = response.data;
      //console.log(response.data)

    })
  }

  getRentalsByCarId(carId:number){
    this.rentalService.getRentalByCarId(carId).subscribe(response=>{
      this.rentals = response.data;
      console.log(response.data)

    })
  }

}
