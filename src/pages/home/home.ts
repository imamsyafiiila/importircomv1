import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SlideInitPage } from '../slide-init/slide-init';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public slideInit: boolean = true;

  constructor(public navCtrl: NavController) {
    this.onSlideInit();
  }

  onSlideInit() {
    if (this.slideInit) {
      this.navCtrl.push(SlideInitPage);
    }
  }

}
