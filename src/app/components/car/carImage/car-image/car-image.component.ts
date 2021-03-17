import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarImage } from 'src/app/models/car/carImage';
import { CarImageService } from 'src/app/services/car-image.service';

@Component({
  selector: 'app-car-image',
  templateUrl: './car-image.component.html',
  styleUrls: ['./car-image.component.css']
})
export class CarImageComponent implements OnInit {

  carImages:CarImage[]=[];
  currentCarImage:CarImage;

  constructor(private carImageService:CarImageService,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["carId"]){
        this.getCarImagesByCarId(params["carId"])
      }else {
        this.getCarImages();
      }
    })
  }

  getCarImages(){
    this.carImageService.getCarImages().subscribe(response =>{
      this.carImages=response.data;
    })
  }

  getCarImagesByCarId(carId:number){
    this.carImageService.getCarImagesByCarId(carId).subscribe(response => {
      this.carImages = response.data;
    })
  }

  setCurrentCarImage(carImage:CarImage){
    this.currentCarImage = carImage;
  }

  trackByFn(carId:string) {
    return carId=this.carImages[0].imagePath;
  }

}
