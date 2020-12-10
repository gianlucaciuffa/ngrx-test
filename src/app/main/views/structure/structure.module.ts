import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {StructureEditComponent} from './structure-edit/structure-edit.component';
import {StructureMainComponent} from './structure-main/structure-main.component';
import {StructureListComponent} from './structure-list/structure-list.component';
import {StructureRoutingModule} from './structure-routing.module';
import {ButtonNewStructureComponent} from './components/button-new-structure.component';
import {TableModule} from 'primeng/table';
import {DialogModule} from 'primeng/dialog';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {SearchModule} from '@components/search/search.module';
import {PipesModule} from '@core/pipe/pipes.module';

@NgModule({
  declarations: [
    StructureEditComponent,
    StructureMainComponent,
    StructureListComponent,
    ButtonNewStructureComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    StructureRoutingModule,
    TableModule,
    DialogModule,
    ButtonModule,
    InputTextModule,
    PipesModule,
    SearchModule
  ],
  providers: [],
  entryComponents: []
})
export class StructureModule {
}
