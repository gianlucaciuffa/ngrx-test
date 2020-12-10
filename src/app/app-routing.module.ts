import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from '@root-store/auth-store/auth.guard';


const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'home', canActivate: [AuthGuard], loadChildren: () => import('./main/views/home/home.module').then(m => m.HomeModule)},
  {path: 'coin', canActivate: [AuthGuard], loadChildren: () => import('./main/views/coin/coin.module').then(m => m.CoinModule)},
  {path: 'person', canActivate: [AuthGuard], loadChildren: () => import('./main/views/person/person.module').then(m => m.PersonModule)},
  {path: 'counter', canActivate: [AuthGuard], loadChildren: () => import('./main/views/counter/counter.module').then(m => m.CounterModule)},
  {path: 'car', canActivate: [AuthGuard], loadChildren: () => import('./main/views/car/car.module').then(m => m.CarModule)},
  {path: 'structure', canActivate: [AuthGuard], loadChildren: () => import('./main/views/structure/structure.module').then(m => m.StructureModule)},
  {path: 'login', loadChildren: () => import('./main/views/login/login.module').then(m => m.LoginModule)}];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false, relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
