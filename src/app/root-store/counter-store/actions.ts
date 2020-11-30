import {createAction, props} from '@ngrx/store';

export enum ActionTypes {
  INCREMENT = '[Counter] Increment',
  DECREMENT = '[Counter] Decrement',
  RESET = '[Counter] Reset',
}

export const Increment = createAction(ActionTypes.INCREMENT);
export const Decrement = createAction(ActionTypes.DECREMENT);
export const Reset = createAction(ActionTypes.RESET);

