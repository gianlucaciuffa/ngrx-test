import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Observable} from 'rxjs';
import {Action} from '@ngrx/store';
import * as actions from './actions';
import {Car} from '@models/vo/car';
import {CarService} from '@services/car.service';
import {
  createCall, createCatchError, createResponse,
  deleteCall, deleteCatchError, deleteResponse,
  editCall, editCatchError, editResponse,
  searchCall, searchCatchError, searchResponse,
  selectCall, selectCatchError, selectResponse
} from 'ngrx-entity-crud';
import {repeat} from 'rxjs/operators';

@Injectable()
export class CarStoreEffects {
    constructor(private readonly actions$: Actions, private readonly service: CarService) {
    }

  searchRequestEffect$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(actions.SearchRequest),
    searchCall<Car>(this.service),
    searchResponse<Car>(actions, {dispatchResponse: false}),
    searchCatchError<Car>(actions),
    repeat()
  ));

  deleteRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.DeleteRequest),
    deleteCall<Car>(this.service),
    deleteResponse<Car>(actions, Car, {dispatchResponse: false}),
    deleteCatchError<Car>(actions),
    repeat()
  ));

  createRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.CreateRequest),
    createCall<Car>(this.service),
    createResponse<Car>(actions, {dispatchResponse: false}),
    createCatchError<Car>(actions),
    repeat()
  ));

  editRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.EditRequest),
    editCall<Car>(this.service),
    editResponse<Car>(actions, {dispatchResponse: false}),
    editCatchError<Car>(actions),
    repeat()
  ));

  selectRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.SelectRequest),
    selectCall<Car>(this.service),
    selectResponse<Car>(actions, {dispatchResponse: false}),
    selectCatchError<Car>(actions),
    repeat()
  ));

}
