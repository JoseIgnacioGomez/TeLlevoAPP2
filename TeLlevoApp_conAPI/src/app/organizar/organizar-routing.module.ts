import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrganizarPage } from './organizar.page';

const routes: Routes = [
  {
    path: '',
    component: OrganizarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrganizarPageRoutingModule {}
