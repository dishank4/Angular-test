import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatrialCompModule } from './matrial-comp.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatrialCompModule,
    ReactiveFormsModule
  ],
  exports : [
    MatrialCompModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
