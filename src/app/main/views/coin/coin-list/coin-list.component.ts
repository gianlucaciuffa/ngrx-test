import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {CoinStoreActions, CoinStoreSelectors, RootStoreState} from '@root-store/index';
import {Observable} from 'rxjs';
import {Coin} from '@models/vo/coin';
import {RouterStoreActions} from '@root-store/router-store/index';
import {tap} from 'rxjs/operators';
import {ConfirmationService} from 'primeng/api';
import {PopUpData} from '@root-store/router-store/pop-up-base.component';

@Component({
  selector: 'app-coin-list',
  templateUrl: `coin-list.component.html`,
  styles: [``],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CoinListComponent implements OnInit {


  collection$: Observable<Coin[]>;

  constructor(private store$: Store<RootStoreState.State>,
              private confirmationService: ConfirmationService) {
    console.log('CoinListComponent.constructor()');
  }

  ngOnInit(): void {
    console.log('CoinListComponent.ngOnInit()');

    this.collection$ = this.store$.select(
      CoinStoreSelectors.selectAll
    );

    this.store$.dispatch(
      CoinStoreActions.SearchRequest({queryParams: {}})
    );

  }

  onEdit(item): void {
    console.log('CoinListComponent.onEdit()');

    const data: PopUpData<Coin> = {
      item,
      props: {title: 'Edit Coin', route: 'coin'}
    };

    // apro la popUP
    this.store$.dispatch(RouterStoreActions.RouterGoPopUp({
      path: ['coin', {outlets: {popUp: ['edit']}}],
      data
    }));

  }

  onCopy(value): void {
    console.log('CoinListComponent.onCopy()');

    const item = {...{}, ...value, ...{id: null}};
    const data: PopUpData<Coin> = {
      item,
      props: {title: 'Copy Coin', route: 'coin'}
    };

    this.store$.dispatch(RouterStoreActions.RouterGoPopUp({
      path: ['coin', {outlets: {popUp: ['edit']}}],
      data
    }));

  }

  onDelete(item): void {

    this.confirmationService.confirm({
      message: 'Are you sure that you want to perform this action?',
      accept: () => {
        this.store$.dispatch(CoinStoreActions.DeleteRequest({item}));
      }
    });

  }

}
