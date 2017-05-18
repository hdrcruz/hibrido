import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Drawpad } from './drawpad';

@NgModule({
  declarations: [
    Drawpad,
  ],
  imports: [
    IonicPageModule.forChild(Drawpad),
  ],
  exports: [
    Drawpad
  ]
})
export class DrawpadModule {}
