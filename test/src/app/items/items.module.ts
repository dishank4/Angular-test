import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemsComponent } from './items.component';
import { ItemRoutingModule } from './item-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ItemAddComponent } from './item-add/item-add.component';
import { ItemListComponent } from './item-list/item-list.component';
import { MatTableModule, MatPaginatorModule, MatSortModule, MatSpinner, MatProgressSpinnerModule } from '@angular/material';



@NgModule({
  declarations: [ItemsComponent , ItemAddComponent , ItemListComponent],
  imports: [
    CommonModule,
    ItemRoutingModule,
    SharedModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule
  ]
})
export class ItemsModule { }
