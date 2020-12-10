import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './header.component';
import {HamburgerButtonModule} from '@components/hamburger-button/hamburger-button.module';
import {OverlayPanelModule} from 'primeng/overlaypanel';
import {LogoutButtonModule} from '@views/login/components/logout-button/logout-button.component';


@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, HamburgerButtonModule, OverlayPanelModule, LogoutButtonModule],
  exports: [HeaderComponent]
})
export class HeaderModule {
}
