import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CounterEditComponent} from './counter-edit/counter-edit.component';
import {CounterMainComponent} from './counter-main/counter-main.component';
import {CounterListComponent} from './counter-list/counter-list.component';
import {CounterRoutingModule} from './counter-routing.module';
import {TableModule} from 'primeng/table';
import {DialogModule} from 'primeng/dialog';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {SearchModule} from '@components/search/search.module';
import {PipesModule} from '@core/pipe/pipes.module';
import {IncrementModule} from '@components/counter/increment/increment.component';
import {DecrementModule} from '@components/counter/decrement/decrement.component';
import {ResetModule} from '@components/counter/reset/reset.component';

@NgModule({
  declarations: [
    CounterEditComponent,
    CounterMainComponent,
    CounterListComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CounterRoutingModule,
    TableModule,
    DialogModule,
    ButtonModule,
    InputTextModule,
    PipesModule,
    SearchModule,
    IncrementModule,
    DecrementModule,
    ResetModule
  ],
  providers: [],
  entryComponents: []
})
export class CounterModule {
}
