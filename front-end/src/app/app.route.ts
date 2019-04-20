import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { CoordinatesCalculatorComponent } from './pages/coordinates-calculator/coordinates-calculator.component';

const routes: Routes = [
  { path: '', component: CoordinatesCalculatorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

