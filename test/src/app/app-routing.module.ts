import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from './login/auth-guard.service';


const routes: Routes = [
  {path : '' , redirectTo: 'login' , pathMatch: 'full'},
  {path: 'login' , loadChildren: './login/login.module#LoginModule'},
  {path: 'items' , canActivate: [AuthGuardService] , loadChildren: './items/items.module#ItemsModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
