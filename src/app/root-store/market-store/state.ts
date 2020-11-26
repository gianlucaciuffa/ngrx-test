import {createCrudEntityAdapter, EntityCrudAdapter, EntityCrudState} from 'ngrx-entity-crud';
import {Market} from '@models/vo/market';

export const adapter: EntityCrudAdapter<Market> = createCrudEntityAdapter<Market>({
	selectId: model => Market.selectId(model),
});

export interface State extends EntityCrudState<Market> {
};

export const initialState: State = adapter.getInitialCrudState();
