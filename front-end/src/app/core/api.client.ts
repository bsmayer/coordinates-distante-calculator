import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import ApiResponse from './api-response';

@Injectable({ providedIn: 'root' })
export default class ApiClient {
  private baseUri: string;

  constructor(private httpClient: HttpClient) {
    this.baseUri = environment.baseUri;
  }

  private buildPath(path: string) {
    return this.baseUri + path;
  }

  private handleError<T>(err: any): Observable<any> {
    if (err && err.message) {
      return throwError(err.message);
    }
    return throwError(null);
  }

  private handleResponse<T>(response: ApiResponse<T>): T {
    if (response.success && response.success === true) {
      return response.response;
    } else {
      throw new Error(response.error || 'An error occurred when trying to process this operation. Please, try again later.');
    }
  }

  public post<T>(path: string, body?: any): Observable<T> {
    path = this.buildPath(path);
    return this.httpClient.post<ApiResponse<T>>(path, body || {})
      .pipe(
        map(this.handleResponse),
        catchError(this.handleError)
      );
  }
}
