import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SlideInitPage } from './slide-init';

@NgModule({
  declarations: [
    SlideInitPage,
  ],
  imports: [
    IonicPageModule.forChild(SlideInitPage),
  ],
})
export class SlideInitPageModule {}
