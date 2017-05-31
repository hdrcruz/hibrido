import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ReciboPage } from './recibo-page';

@NgModule({
  declarations: [
    ReciboPage,
  ],
  imports: [
    IonicPageModule.forChild(ReciboPage),
  ],
  exports: [
    ReciboPage
  ]
})
export class ReciboPageModule {}
