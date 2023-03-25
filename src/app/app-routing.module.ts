import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./_pages/list/list.module').then(m => m.ListModule)
  },
  {
    path: 'new',
    loadChildren: () => import('./_pages/create-form/create-form.module').then(m => m.CreateFormModule)
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
