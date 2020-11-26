import {Injectable} from '@angular/core';
import {Market} from '@models/vo/market';
import {environment} from '../../../environments/environment';
import {BaseCrudService} from 'ngrx-entity-crud';

@Injectable({
	providedIn: 'root'
})
export class MarketService extends BaseCrudService<Market> {
	public service = environment.webServiceUri + 'market';
}
