import { FooBarQuixFormComponent } from './foo-bar-quix-form.component';
import {
  inject,
  TestBed,
  getTestBed,
  async,
  fakeAsync,
  ComponentFixture
} from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
describe('FooBarQuixFormComponent', () => {
  let component: FooBarQuixFormComponent;
  let fixture: ComponentFixture<FooBarQuixFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooBarQuixFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooBarQuixFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


});
let comp: FooBarQuixFormComponent;
let fixture: ComponentFixture<FooBarQuixFormComponent>;

describe('FooBarQuixFormComponent', () => {
 let component: FooBarQuixFormComponent;
  let fixture: ComponentFixture<FooBarQuixFormComponent>;
  let formBuilder: FormBuilder;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FooBarQuixFormComponent],
      providers: [
        FormBuilder
      ]

    })

    .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(FooBarQuixFormComponent);
        comp = fixture.componentInstance;
      });
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(FooBarQuixFormComponent);
    component = fixture.componentInstance;
    formBuilder = TestBed.inject(FormBuilder); // get a handle on formBuilder
    // add the mock data here
    component.convertForm = formBuilder.group({
      numberToConvert: []



    });
    // this fixture.detectChanges will kick off the ngOnInit
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
   it('user should update from form changes', fakeAsync(() => {
      const numberToConvert = 3
      comp.convertForm.controls['numberToConvert'].setValue(numberToConvert);
      expect(comp.convertForm.value.numberToConvert).toEqual(numberToConvert);
    }));

});
