import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list.component';
import { ListRoutingModule } from './list-routing.module';
import { ItemsListComponent } from 'src/app/_components/items-list/items-list.component';
import { ItemComponent } from 'src/app/_components/item/item.component';
import { MatCardModule } from '@angular/material/card';



@NgModule({
  declarations: [
    ListComponent, ItemsListComponent, ItemComponent
  ],
  imports: [
    CommonModule,
    ListRoutingModule,
    MatCardModule
  ]
})
export class ListModule { }
