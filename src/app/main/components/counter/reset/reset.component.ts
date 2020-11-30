import {Component, NgModule, OnInit} from '@angular/core';
import {CounterStoreActions} from '@root-store/counter-store';
import {Store} from '@ngrx/store';
import {RootStoreState} from '@root-store/index';
import {ButtonModule} from 'primeng/button';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.scss']
})
export class ResetComponent implements OnInit {

  constructor(private readonly store$: Store<RootStoreState.State>) { }

  ngOnInit(): void {
  }

  reset(): void {
    console.log('CounterMainComponent.reset()');
    this.store$.dispatch(CounterStoreActions.Reset());
  }

}

@NgModule({
  declarations: [ResetComponent],
  imports: [
    ButtonModule
  ],
  exports: [
    ResetComponent
  ],
  entryComponents: []
})
export class ResetModule {
}
