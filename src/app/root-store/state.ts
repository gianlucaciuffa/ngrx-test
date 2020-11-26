import {MarketStoreState} from '@root-store/market-store';
import {CoinStoreState} from '@root-store/coin-store';
import {SlideMenuStoreState} from '@root-store/slide-menu-store';

export interface State {
market:MarketStoreState.State;
coin:CoinStoreState.State;
  slide_menu: SlideMenuStoreState.State;
}
