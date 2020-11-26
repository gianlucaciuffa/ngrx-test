import {PersonStoreSelectors} from '@root-store/person-store';
import {MarketStoreSelectors} from '@root-store/market-store';
import {CoinStoreSelectors} from '@root-store/coin-store';
import {createSelectorFactory, defaultMemoize} from '@ngrx/store';

const customMemoizer = (aFn) => defaultMemoize(aFn, (a: any, b: any) => a === b);

export const selectError =
  createSelectorFactory(customMemoizer)(PersonStoreSelectors.selectError,MarketStoreSelectors.selectError,CoinStoreSelectors.selectError,
    (...args: string[]) => {
      console.log('selectError.args', args);
      return args.join('');
    }
  );

export const selectIsLoading =
  createSelectorFactory(customMemoizer)(PersonStoreSelectors.selectIsLoading,MarketStoreSelectors.selectIsLoading,CoinStoreSelectors.selectIsLoading,
    (...args: boolean[]) => {
      console.log('selectIsLoading.args', args);
      return args.find((value => value));
    }
  );

