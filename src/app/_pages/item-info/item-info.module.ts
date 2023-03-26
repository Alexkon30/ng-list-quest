import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemInfoComponent } from './item-info.component';
import { ItemInfoRoutingModule } from './item-info-routing.module';
import { MatCardModule } from '@angular/material/card';



@NgModule({
  declarations: [
    ItemInfoComponent
  ],
  imports: [
    CommonModule,
    ItemInfoRoutingModule,
    MatCardModule
  ]
})
export class ItemInfoModule { }
