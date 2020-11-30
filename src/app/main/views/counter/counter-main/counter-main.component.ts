import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {CounterStoreSelectors, RootStoreState} from '@root-store/index';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-counter-main',
  templateUrl: 'counter-main.component.html',
  styles: []
})
export class CounterMainComponent implements OnInit {

  constructor(private readonly store$: Store<RootStoreState.State>) {
  }

  count$: Observable<number>;

  ngOnInit(): void {
    console.log('CounterMainComponent.ngOnInit()');
    this.count$ = this.store$.select(CounterStoreSelectors.selectQuantity);
  }

}
