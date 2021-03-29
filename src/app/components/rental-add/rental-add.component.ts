import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CustomerService } from 'src/app/services/customer.service';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { CarService } from 'src/app/services/car.service';
import { Car } from 'src/app/models/car/car';
import { CarDetails } from 'src/app/models/car/carDetails';

@Component({
  selector: 'app-rental-add',
  templateUrl: './rental-add.component.html',
  styleUrls: ['./rental-add.component.css'],
})

export class RentalAddComponent implements OnInit {
  rentalAddForm: FormGroup

  rentDate: Date
  returnDate: Date
  totalPrice:number
  dataLoaded = false
  currentCar:Car

  constructor(
    private carService: CarService,
    private customerService: CustomerService,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
  ) {}

  ngOnInit(): void {
    this.rentDate = new Date()
    this.returnDate = new Date()

    this.createRentalAddForm()

    this.activatedRoute.queryParams.subscribe((params) => {
      if (params.carId) {
      }
    })
  }

  // form - alan eşleştirme yap
  createRentalAddForm() {
    this.rentalAddForm = this.formBuilder.group({
      customerId: ['', Validators.required],
      rentDate: ['', Validators.required],
      carId: [''],
      returnDate: [''],
    })
  }

  // kirala
  addToCart() {
    if (this.rentalAddForm.valid) {
      let rentalModel = Object.assign({}, this.rentalAddForm.value)
      rentalModel.brandName = this.currentCar.brandName
      rentalModel.colorName = this.currentCar.colorName
      rentalModel.modelYear = this.currentCar.modelYear
      rentalModel.dailyPrice = this.currentCar.dailyPrice
      rentalModel.totalPrice =  this.totalPrice
    } else {
      console.log("form invalid")
    }
  }


  // kiralama toplamı
  calcTotalPrice() {
    let startDate = new Date(this.rentalAddForm.value.rentDate)
    let endDate = new Date(this.rentalAddForm.value.returnDate)
    if( isNaN(startDate.getTime()) || isNaN(endDate.getTime()) ){ this.totalPrice = 0 } 
    else if ( startDate > endDate ) { this.totalPrice = 0 } 
    else {
      let dateDiff = Math.floor((endDate.getTime() - startDate.getTime()) / 1000 / 60 / 60 / 24)
      this.totalPrice = dateDiff * this.currentCar.dailyPrice
    }
  }

}