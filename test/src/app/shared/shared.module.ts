import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatrialCompModule } from './matrial-comp.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    MatrialCompModule,
    ReactiveFormsModule
  ],
  exports : [
    MatrialCompModule,
    ReactiveFormsModule,
    HeaderComponent,
    FooterComponent
  ]
})
export class SharedModule { }
