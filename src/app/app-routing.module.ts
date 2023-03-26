import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./_pages/list/list.module').then(m => m.ListModule)
  },
  {
    path: 'new',
    loadChildren: () => import('./_pages/add-item/add-item.module').then(m => m.AddItemModule)
  },
  {
    path: 'info/:id',
    loadChildren: () => import('./_pages/item-info/item-info.module').then(m => m.ItemInfoModule)
  },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
