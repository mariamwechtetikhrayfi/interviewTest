import { Component, EventEmitter, OnInit, Output,Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import{Result} from '../model/Result';
@Component({
  selector: 'app-foo-bar-quix-form',
  templateUrl: './foo-bar-quix-form.component.html'
})
export class FooBarQuixFormComponent implements OnInit {
convertForm ;
@Output() submitNumberOutput:EventEmitter<Result> =new EventEmitter<Result>();
@Input()
  convertedValues = new Map<number, string>();
  constructor(private formBuilder: FormBuilder) {
   this.convertForm = this.formBuilder.group({
        numberToConvert: []
      });

  }

  ngOnInit(): void {
  }

  submitNumber(): void {
  this.submitNumberOutput.emit(this.convertForm.value.numberToConvert)
 // this.submitNumberOutput=this.convertForm.value
  console.log(this.convertForm.value.numberToConvert)
  console.log(this.convertedValues.size)
  }

}
