import {Component, NgModule, OnInit} from '@angular/core';
import {CounterStoreActions} from '@root-store/counter-store/index';
import {Store} from '@ngrx/store';
import {RootStoreState} from '@root-store/index';
import {ButtonModule} from 'primeng/button';

@Component({
  selector: 'app-decrement',
  templateUrl: './decrement.component.html',
  styleUrls: ['./decrement.component.scss']
})
export class DecrementComponent implements OnInit {

  constructor(private readonly store$: Store<RootStoreState.State>) { }

  ngOnInit(): void {
  }

  decrement(): void {
    console.log('CounterMainComponent.decrement()');
    this.store$.dispatch(CounterStoreActions.Decrement());
  }

}

@NgModule({
  declarations: [DecrementComponent],
  imports: [
    ButtonModule
  ],
  exports: [DecrementComponent],
})
export class DecrementModule {
}
