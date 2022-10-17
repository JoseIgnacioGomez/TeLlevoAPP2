import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrganizarPageRoutingModule } from './organizar-routing.module';

import { OrganizarPage } from './organizar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrganizarPageRoutingModule
  ],
  declarations: [OrganizarPage]
})
export class OrganizarPageModule {}
