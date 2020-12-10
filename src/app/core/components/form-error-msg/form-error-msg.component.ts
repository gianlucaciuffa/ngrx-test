import {Component, Input, NgModule, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-form-error-msg',
  template: `
    <div *ngIf="fc.invalid"><small class="p-invalid">{{fc.errors && fc.errors.error ? fc.errors.getMessage() : ''}}</small></div>
  `,
  styles: []
})
export class FormErrorMsgComponent implements OnInit {

  @Input()
  fc: FormControl;

  constructor() {
  }

  ngOnInit(): void {
  }

}
@NgModule({
  declarations: [FormErrorMsgComponent],
  exports: [FormErrorMsgComponent],
  imports: [
    CommonModule
  ]
})

export class FormErrorMsgModule{
}

