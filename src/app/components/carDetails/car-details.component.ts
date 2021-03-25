import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car/car';
import { CarImage } from 'src/app/models/car/carImage';
import { CarImageService } from 'src/app/services/car-image.service';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.css'],
})
export class CarDetailsComponent implements OnInit {
  cars:Car[];
  carImages: CarImage[];

  constructor(
    private carService: CarService,
    private activatedRoute: ActivatedRoute,
    private carImageService:CarImageService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params=>{
      if(params["carId"]){
        this.getCarImagesByCarId(params["carId"])
        this.getCarById(params["carId"])
      }else {
        //console.log(params)
        this.getCarImages();
      }
    })
  }


  getCarImagesByCarId(carId:number){
    this.carImageService.getCarImagesByCarId(carId).subscribe(response => {
      this.carImages = response.data;
      //console.log(response.data)
      //console.log(this.carImages)

    })
  }

  
  getCarImages(){
    this.carImageService.getCarImages().subscribe(response =>{
      this.carImages=response.data;
      //console.log(this.carImages)
    })
  }

  getCarById(carId:number){
    this.carService.getCarById(carId).subscribe(response=>{
      this.cars = response.data;
      console.log(response.data)

    })
  }

}
