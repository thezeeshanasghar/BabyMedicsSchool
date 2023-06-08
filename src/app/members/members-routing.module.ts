import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MembersPage } from './members.page';

const routes: Routes = [
  {
    path: '',
    component: MembersPage,
    children:[
      {path:'', redirectTo:'form',pathMatch:'full'},
      {path:'form',  loadChildren: () => import('./form/form.module').then( m => m.FormPageModule)},
      {path:'list',  loadChildren: () => import('./list/list.module').then( m => m.ListPageModule)},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MembersPageRoutingModule {}
