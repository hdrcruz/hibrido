import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Detalhe } from './detalhe';

@NgModule({
  declarations: [
    Detalhe,
  ],
  imports: [
    IonicPageModule.forChild(Detalhe),
  ],
  exports: [
    Detalhe
  ]
})
export class DetalheModule {}
