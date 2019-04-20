import {Injectable} from '@angular/core';

import ApiClient from '../../core/api.client';
import Coordinate from './coordinate';
import {Observable} from 'rxjs';
import { AppModule } from '../../app.module';

@Injectable({ providedIn: 'root' })
export class CoordinatesCalculatorService {
  constructor(private api: ApiClient) { }

  public calculateDistanceBetween(coordinate: Coordinate): Observable<string> {
    return this.api.post<string>('/coordinates/distance/calculate', coordinate);
  }
}
