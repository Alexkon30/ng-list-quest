import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateFormComponent } from './create-form.component';
import { CreateFormRoutingModule } from './create-form-routing.module';



@NgModule({
  declarations: [
    CreateFormComponent
  ],
  imports: [
    CommonModule,
    CreateFormRoutingModule
  ]
})
export class CreateFormModule { }
