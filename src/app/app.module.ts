import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule}  from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrandComponent } from './components/brand/brand.component';
import { ColorComponent } from './components/color/color.component';
import { CustomerComponent } from './components/customer/customer.component';
import { CarComponent } from './components/car/car.component';
import { RentalComponent } from './components/rental/rental.component';
import { NaviComponent } from './components/navi/navi.component';
import { CarDetailsComponent } from './components/carDetails/car-details.component';
import { CarImageComponent } from './components/car-image/car-image.component';
import { HourlyRatePipe } from './pipes/hourly-rate.pipe';
import { from } from 'rxjs';
import { FilterBrandPipe } from './pipes/filter-brand.pipe';
import { FilterCarPipe } from './pipes/filter-car.pipe';
import { FilterColorPipe } from './pipes/filter-color.pipe';
import { RentACarComponent } from './components/rent-a-car/rent-a-car.component';
import { RentalAddComponent } from './components/rental-add/rental-add.component';


@NgModule({
  declarations: [
    AppComponent,
    BrandComponent,
    ColorComponent,
    CustomerComponent,
    CarComponent,
    RentalComponent,
    NaviComponent,
    CarDetailsComponent,
    CarImageComponent,
    HourlyRatePipe,
    FilterCarPipe,
    FilterBrandPipe,
    FilterColorPipe,
    RentACarComponent,
    RentalAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
