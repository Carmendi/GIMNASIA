import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PelotasPage } from './pelotas';

@NgModule({
  declarations: [
    PelotasPage,
  ],
  imports: [
    IonicPageModule.forChild(PelotasPage),
  ],
})
export class PelotasPageModule {}
