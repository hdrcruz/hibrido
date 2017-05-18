import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CanvasDraw } from './canvas-draw';

@NgModule({
  declarations: [
    CanvasDraw,
  ],
  imports: [
    IonicPageModule.forChild(CanvasDraw),
  ],
  exports: [
    CanvasDraw
  ]
})
export class CanvasDrawModule {}
