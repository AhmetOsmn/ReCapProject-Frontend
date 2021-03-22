import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Brand } from 'src/app/models/brand/brand';
import { Car } from 'src/app/models/car/car';
import { Color } from 'src/app/models/color/color';
import { BrandService } from 'src/app/services/brand.service';
import { CarService } from 'src/app/services/car.service';
import { ColorService } from 'src/app/services/color.service';


@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  cars :Car[] = [];
  brands : Brand[] = [];
  colors : Color[] = [];

  currentBrand:number;
  currentColor:number;

  filterText = "";

  constructor(private carService:CarService,
              private activatedRoute:ActivatedRoute,
              private brandService:BrandService,
              private colorService:ColorService) { }

  ngOnInit(): void {

    this.getBrands();
    this.getColors();

    this.activatedRoute.queryParams.subscribe((params) => {
      console.log(params['brandId']);
      if(params['brandId'] && params['colorId']){
        this.getCarsByBrandIdAndColorId(params['brandId'],params['colorId']);
      }else if(params['brandId']){
        this.getCarsByBrand(params['brandId']);
      }
      else if(params['colorId']){
        this.getCarsByColor(params['colorId']);
      }
      else{
        this.getCars();
      }
    })

    
  }

  getCars(){
    this.carService.getCars().subscribe(response=>{
      this.cars = response.data;
    })
  }
  getBrands(){
    this.brandService.getBrands().subscribe(response=>{
      this.brands = response.data;
    })
  }
  getColors(){
    this.colorService.getColors().subscribe(response=>{
      this.colors = response.data;
    })
  }

  getCarsByBrand(brandId:number){
    this.carService.getCarsByBrand(brandId).subscribe(response=>{
      this.cars = response.data;
      console.log(response.data)

    })
  }

  getCarsByColor(colorId:number){
    this.carService.getCarsByColor(colorId).subscribe(response=>{
      this.cars = response.data;
    })
  }

  getCarsByBrandIdAndColorId(brandId:number, colorId:number){
    this.carService.getCarsByBrandAndColor(brandId,colorId).subscribe(response =>{
      this.cars =response.data;
    })
  }





}
