import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { FooBarQuixService } from '../foo-bar-quix.service';
import{Result} from '../model/Result';
@Component({
  selector: 'app-foo-bar-quix',
  templateUrl: './foo-bar-quix.component.html'
})
export class FooBarQuixComponent implements OnInit, OnDestroy {
  listItems: Array<Result> =[]
  listConvertedValues = new Map<number, string>();
  constructor(private fooBarQuixService: FooBarQuixService) { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
  }

  convertNumber(inputNumber: number): void {
    this.fooBarQuixService.getConvertedNumber(inputNumber).subscribe(data => {
                                                                    this.listConvertedValues.set(inputNumber,data.result)
                                                                    console.log(this.listConvertedValues.values());
                                                                  },

                                                              error => {
                                                                  console.log('Log the error here: ', error +this.listItems);
                                                              });
  }

}

interface NumberConverted {
  numberToConvert: number;
  result: string;
}
