import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SerieDetalhePage } from './serie-detalhe';

@NgModule({
  declarations: [
    SerieDetalhePage,
  ],
  imports: [
    IonicPageModule.forChild(SerieDetalhePage),
  ],
})
export class SerieDetalhePageModule {}
