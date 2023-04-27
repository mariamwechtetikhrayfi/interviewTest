import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {Observable} from "rxjs";
import {FooBarQuixService}  from './foo-bar-quix.service';
import{Result} from './model/Result';

describe('DataService', () => {
  let httpTestingController: HttpTestingController;
  let service: FooBarQuixService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });

    httpTestingController = TestBed.get(HttpTestingController);

    service = TestBed.get(FooBarQuixService);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('#getData should return expected data', (done) => {
    const expectedData$: Result = {
      result: 'FOOFOO',
    };
    service.getConvertedNumber(3).subscribe(data => {
      expect(data).toEqual(expectedData$);
      done();
    });

    const testRequest = httpTestingController.expectOne('http://localhost:8080/foo-bar-quix/3');

    testRequest.flush(expectedData$);
  });

  it('#getData should use GET to retrieve data', () => {
    service.getConvertedNumber(3).subscribe();

    const testRequest = httpTestingController.expectOne('http://localhost:8080/foo-bar-quix/3');

    expect(testRequest.request.method).toEqual('GET');
  });

});


