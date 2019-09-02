import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemsComponent } from './items.component';
import { ItemRoutingModule } from './item-routing.module';



@NgModule({
  declarations: [ItemsComponent],
  imports: [
    CommonModule,
    ItemRoutingModule
  ]
})
export class ItemsModule { }
