import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpParams } from '@angular/common/http';
import{Result} from './model/Result';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FooBarQuixService {
   constructor(private http: HttpClient) { }

        public getConvertedNumber(inputNumber : number): Observable<Result> {
          const url = 'http://localhost:8080/foo-bar-quix/';
          return this.http.get<Result>(url+inputNumber.toString());
        }


}
