import {Auth} from '@models/vo/auth';
import {StructureStoreState} from '@root-store/structure-store';
import {CarStoreState} from '@root-store/car-store';
import {Counter} from '@models/vo/counter';
import {PersonStoreState} from '@root-store/person-store';
import {MarketStoreState} from '@root-store/market-store';
import {CoinStoreState} from '@root-store/coin-store';
import {SlideMenuStoreState} from '@root-store/slide-menu-store';

export interface State {
auth:Auth;
structure: StructureStoreState.State;
car: CarStoreState.State;
counter: Counter;
person: PersonStoreState.State;
market: MarketStoreState.State;
coin: CoinStoreState.State;
slide_menu: SlideMenuStoreState.State;
}
