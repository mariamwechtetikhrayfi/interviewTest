import { TestBed, async, fakeAsync, tick } from '@angular/core/testing';
import { FooBarQuixComponent } from './foo-bar-quix.component';
import { getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {FooBarQuixService}  from '../foo-bar-quix.service';

describe('FooBarQuixComponent', () => {
                                beforeEach(async(() => {
                                  TestBed.configureTestingModule({
                                    imports: [
                                      HttpClientTestingModule
                                    ],
                                    declarations: [
                                      FooBarQuixComponent
                                    ],
                                    providers : [
                                      FooBarQuixService
                                    ]
                                  }).compileComponents();
                                }));



   it('should create the app', () => {
     const fixture = TestBed.createComponent(FooBarQuixComponent);
     const component = fixture.debugElement.componentInstance;
     expect(component).toBeTruthy();
   });

});
