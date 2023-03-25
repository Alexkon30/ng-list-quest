import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemInfoComponent } from './item-info.component';

const routes: Routes = [{ path: '', component: ItemInfoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ItemInfoRoutingModule { }