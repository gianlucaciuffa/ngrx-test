import {Component, NgModule, OnInit} from '@angular/core';
import {CounterStoreActions} from '@root-store/counter-store';
import {Store} from '@ngrx/store';
import {RootStoreState} from '@root-store/index';
import {ButtonModule} from 'primeng/button';

@Component({
  selector: 'app-increment',
  templateUrl: './increment.component.html',
  styleUrls: ['./increment.component.scss']
})
export class IncrementComponent implements OnInit {

  constructor(private readonly store$: Store<RootStoreState.State>) { }

  ngOnInit(): void {
  }

  increment(): void {
    console.log('CounterMainComponent.increment()');
    this.store$.dispatch(CounterStoreActions.Increment());
  }

}

@NgModule({
  declarations: [IncrementComponent],
  imports: [
    ButtonModule
  ],
  exports: [IncrementComponent],
  providers: [],
  entryComponents: []
})
export class IncrementModule {
}
