import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandComponent } from './components/brand/brand.component';
import { CarComponent } from './components/car/car.component';
import { CarDetailsComponent } from './components/car/carDetails/car-details/car-details.component';
import { ColorComponent } from './components/color/color.component';
import { CustomerComponent } from './components/customer/customer.component';
import { RentalComponent } from './components/rental/rental.component';

const routes: Routes = [
  {path:"",pathMatch:"full",component:CarComponent},

  {path:"cars",component:CarComponent},
  {path:"colors",component:ColorComponent},
  {path:"brands",component:BrandComponent},
  {path:"rentals",component:RentalComponent},
  {path:"customers",component:CustomerComponent},

  {path:"cars/brand/:brandId",component:CarDetailsComponent},
  {path:"cars/color/:colorName",component:CarDetailsComponent},
  {path:"cars/details/:carId",component:CarDetailsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
