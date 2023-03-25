import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemInfoComponent } from './item-info.component';
import { ItemInfoRoutingModule } from './item-info-routing.module';



@NgModule({
  declarations: [
    ItemInfoComponent
  ],
  imports: [
    CommonModule,
    ItemInfoRoutingModule
  ]
})
export class ItemInfoModule { }
