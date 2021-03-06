import {InjectionToken, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ActionReducer, StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {PersonStoreEffects} from './effects';
import {featureReducer} from './reducer';
import {State} from './state';
import {Names} from './names';

export const INJECTION_TOKEN = new InjectionToken<ActionReducer<State>>(`${Names.NAME}-store Reducers`);

@NgModule({
	imports: [
		CommonModule,
		StoreModule.forFeature(Names.NAME, INJECTION_TOKEN),
		EffectsModule.forFeature([PersonStoreEffects]),
	],
	declarations: [],
	providers: [PersonStoreEffects,
    // tslint:disable-next-line:indent
		{
      // tslint:disable-next-line:indent
			provide: INJECTION_TOKEN,
      // tslint:disable-next-line:indent
			useFactory: (): ActionReducer<State> => featureReducer
		}]
})
export class PersonStoreModule {
}
