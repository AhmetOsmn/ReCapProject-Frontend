import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import {FormsModule}  from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrandComponent } from './components/brand/brand.component';
import { ColorComponent } from './components/color/color.component';
import { CustomerComponent } from './components/customer/customer.component';
import { CarComponent } from './components/car/car.component';
import { RentalComponent } from './components/rental/rental.component';
import { NaviComponent } from './components/navi/navi.component';
import { CarDetailsComponent } from './components/car/carDetails/carDetails/car-details.component';
import { CarImageComponent } from './components/car/carImage/car-image/car-image.component';
import { HourlyRatePipe } from './pipes/hourly-rate.pipe';
import { from } from 'rxjs';
import { FilterBrandPipe } from './pipes/filter-brand.pipe';
import { CarFilterComponent } from './components/car-filter/car-filter.component';
import { FilterPipePipe } from './pipes/filter-pipe.pipe';


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
    FilterPipePipe,
    FilterBrandPipe,
    CarFilterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
