import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Observable} from 'rxjs';
import {Action} from '@ngrx/store';
import * as actions from './actions';
import {Market} from '@models/vo/market';
import {MarketService} from '@services/market.service';
import {
  createCall, createCatchError, createResponse,
  deleteCall, deleteCatchError, deleteResponse,
  editCall, editCatchError, editResponse,
  searchCall, searchCatchError, searchResponse,
  selectCall, selectCatchError, selectResponse
} from 'ngrx-entity-crud';
import {repeat} from 'rxjs/operators';

@Injectable()
export class MarketStoreEffects {
    constructor(private readonly actions$: Actions, private readonly service: MarketService) {
    }

  searchRequestEffect$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(actions.SearchRequest),
    searchCall<Market>(this.service),
    searchResponse<Market>(actions, {dispatchResponse: false}),
    searchCatchError<Market>(actions),
    repeat()
  ));

  deleteRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.DeleteRequest),
    deleteCall<Market>(this.service),
    deleteResponse<Market>(actions, Market, {dispatchResponse: false}),
    deleteCatchError<Market>(actions),
    repeat()
  ));

  createRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.CreateRequest),
    createCall<Market>(this.service),
    createResponse<Market>(actions, {dispatchResponse: false}),
    createCatchError<Market>(actions),
    repeat()
  ));

  editRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.EditRequest),
    editCall<Market>(this.service),
    editResponse<Market>(actions, {dispatchResponse: false}),
    editCatchError<Market>(actions),
    repeat()
  ));

  selectRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.SelectRequest),
    selectCall<Market>(this.service),
    selectResponse<Market>(actions, {dispatchResponse: false}),
    selectCatchError<Market>(actions),
    repeat()
  ));

}
