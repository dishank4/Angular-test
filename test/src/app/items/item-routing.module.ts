import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemsComponent } from './items.component';
import { ItemAddComponent } from './item-add/item-add.component';
import { ItemListComponent } from './item-list/item-list.component';

const routes: Routes = [
  {
    path: '' ,
    component: ItemsComponent,
    children: [
      {path: '' , redirectTo: 'list'},
      {path: 'add' , component: ItemAddComponent},
      {path: 'list' , component: ItemListComponent}
    ]
  }
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ItemRoutingModule { }
