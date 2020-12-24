import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListonesPage } from './listones';

@NgModule({
  declarations: [
    ListonesPage,
  ],
  imports: [
    IonicPageModule.forChild(ListonesPage),
  ],
})
export class ListonesPageModule {}
