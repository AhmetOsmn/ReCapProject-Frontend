import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandComponent } from './components/brand/brand.component';
import { CarImageComponent } from './components/car-image/car-image.component';
import { CarComponent } from './components/car/car.component';
import { CarDetailsComponent } from './components/carDetails/car-details.component';
import { ColorComponent } from './components/color/color.component';
import { CustomerComponent } from './components/customer/customer.component';
import { RentACarComponent } from './components/rent-a-car/rent-a-car.component';
import { RentalComponent } from './components/rental/rental.component';


const routes: Routes = [
  {path:"",pathMatch:"full",component:CarComponent},
  {path:"cars/:brandId/:colorId",component:CarComponent},

  {path:"cars",component:CarComponent},
  {path:"colors",component:ColorComponent},
  {path:"brands",component:BrandComponent},
  
  {path:"rentals",component:RentalComponent},
  {path:"customers",component:CustomerComponent},
  {path:"rentacar",component:RentACarComponent},

  {path:"cars/:brandId",component:CarComponent},
  {path:"cars/:colorId",component:CarComponent},
  {path:"rentals/:carId",component:RentalComponent},
  {path:"carimages/car/:carId",component:CarImageComponent},
  {path:"cardetails/color/:colorId/carimages/car/:carId",component:CarImageComponent},
  {path:"carimages/car/:carId",component:CarImageComponent},
  {path:"cardetails",component:CarDetailsComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
