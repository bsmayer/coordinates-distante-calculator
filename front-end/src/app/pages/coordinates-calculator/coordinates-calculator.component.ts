import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { CustomValidators } from 'ng5-validation';

import { CoordinatesCalculatorService } from './coordinates-calculator.service';

@Component({
  selector: 'app-coordinates-calculator',
  templateUrl: './coordinates-calculator.component.html',
  styleUrls: ['./coordinates-calculator.component.css']
})
export class CoordinatesCalculatorComponent implements OnInit {
  coordinatesForm: FormGroup;
  calculationResponse: string;
  errorMessage: string;
  loading = false;
  validate = false;

  constructor(private formBuilder: FormBuilder, private coordinateService: CoordinatesCalculatorService) { }

  ngOnInit(): void {
    this.coordinatesForm = this.formBuilder.group({
      latitudeFrom: ['', [ Validators.required, CustomValidators.number ]],
      longitudeFrom: ['', [ Validators.required, CustomValidators.number ]],
      latitudeTo: ['', [ Validators.required, CustomValidators.number ]],
      longitudeTo: ['', [ Validators.required, CustomValidators.number ]]
    });
  }

  calculate() {
    this.errorMessage = '';
    this.calculationResponse = '';

    if (this.coordinatesForm.invalid) {
      this.validate = true;
      return;
    }

    this.coordinateService.calculateDistanceBetween(this.coordinatesForm.value).subscribe(
      response => {
        this.calculationResponse = response || 'Something went wrong. Maybe some of the values you typed is not a valid coordinate :(';
        this.loading = false;
      },
      err => {
        this.errorMessage = err;
        this.loading = false;
      }
    );
  }
}
