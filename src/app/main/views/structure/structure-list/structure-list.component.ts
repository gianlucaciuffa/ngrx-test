import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {StructureStoreActions, StructureStoreSelectors, RootStoreState} from '@root-store/index';
import {Observable} from 'rxjs';
import {Structure} from '@models/vo/structure';
import {RouterStoreActions} from '@root-store/router-store/index';
import {tap} from 'rxjs/operators';
import {ConfirmationService} from 'primeng/api';
import {PopUpData} from '@root-store/router-store/pop-up-base.component';

@Component({
  selector: 'app-structure-list',
  templateUrl: `structure-list.component.html`,
  styles: [``],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StructureListComponent implements OnInit {


  collection$: Observable<Structure[]>;
  cols: any;

  constructor(private store$: Store<RootStoreState.State>,
              private confirmationService: ConfirmationService) {
    console.log('StructureListComponent.constructor()');
  }

  ngOnInit() {
    console.log('StructureListComponent.ngOnInit()');

    this.collection$ = this.store$.select(
      StructureStoreSelectors.selectAll
    ).pipe(
      tap(values => {
        if (values && values.length > 0) {
          this.cols = Object.keys(values[0]);
        }
      })
    );

    this.store$.dispatch(
      StructureStoreActions.SearchRequest({queryParams: {}})
    );

  }

  onEdit(item) {
    console.log('StructureListComponent.onEdit()');

    const data: PopUpData<Structure> = {
      item,
      props: {title: 'Edit Structure', route: 'structure'}
    };

    // apro la popUP
    this.store$.dispatch(RouterStoreActions.RouterGoPopUp({
      path: ['structure', {outlets: {popUp: ['edit']}}],
      data
    }));

  }

  onCopy(value) {
    console.log('StructureListComponent.onCopy()');

    const item = {...{}, ...value, ...{id: null}};
    const data: PopUpData<Structure> = {
      item,
      props: {title: 'Copy Structure', route: 'structure'}
    };

    this.store$.dispatch(RouterStoreActions.RouterGoPopUp({
      path: ['structure', {outlets: {popUp: ['edit']}}],
      data
    }));

  }

  onDelete(item) {

    this.confirmationService.confirm({
      message: 'Are you sure that you want to perform this action?',
      accept: () => {
        this.store$.dispatch(StructureStoreActions.DeleteRequest({item}));
      }
    });

  }

}
