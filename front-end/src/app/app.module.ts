import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomFormsModule } from 'ng5-validation';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app.route';
import { AppComponent } from './app.component';
import { CoordinatesCalculatorComponent } from './pages/coordinates-calculator/coordinates-calculator.component';


@NgModule({
  declarations: [
    AppComponent,
    CoordinatesCalculatorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CustomFormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
