import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandComponent } from './components/brand/brand.component';
import { CarComponent } from './components/car/car.component';
import { CarImageComponent } from './components/car/carImage/car-image/car-image.component';
import { ColorComponent } from './components/color/color.component';
import { CustomerComponent } from './components/customer/customer.component';
import { RentalComponent } from './components/rental/rental.component';

const routes: Routes = [
  {path:"",pathMatch:"full",component:CarComponent},

  {path:"colors",component:ColorComponent},
  {path:"brands",component:BrandComponent},
  {path:"rentals",component:RentalComponent},
  {path:"customers",component:CustomerComponent},

  {path:"cars/brand/:brandId",component:CarComponent},
  {path:"cars/color/:colorId",component:CarComponent},
  {path:"cars/filter/:brandId",component:CarComponent},
  {path:"cars/filter/:colorId",component:CarComponent},
  {path:"cars/filter/:brandId/:colorId",component:CarComponent},
    
  {path:"carimages/car/:carId",component:CarImageComponent},
  {path:"cardetails/color/:colorId/carimages/car/:carId",component:CarImageComponent},
  //{path:"carimages/car/:carId",component:CarImageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
