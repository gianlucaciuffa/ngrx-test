import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {AuthStoreSelectors} from '@root-store/auth-store/index';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-header',
  template: `
    <div class="p-grid p-justify-between">
      <div class="p-col">
        <div>
          <app-hamburger-button></app-hamburger-button>
        </div>
      </div>
      <div class="p-col text-align-right">
        <em class="fas fa-2x fa-user fa-button p-1" style="color: #FFF;"></em>
          <app-logout-button *ngIf="isLoggedIn$ | async"></app-logout-button>
      </div>
    </div>
  `,
  styles: [`
    .fa-button:hover {
      opacity: 0.5;
      transition: transform 0.2s;
      /*transform: scale(1.1);*/
      cursor: pointer; cursor: hand;
    }
  `],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {
  isLoggedIn$: Observable<boolean>;

  constructor(private readonly store$: Store) {
  }

  ngOnInit(): void {
    this.isLoggedIn$ = this.store$.pipe(
      select(AuthStoreSelectors.selectIsLoggedIn)
    );
  }

}
