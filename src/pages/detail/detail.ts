import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Drawpad } from '../drawpad/drawpad'

/**
 * Generated class for the Detail page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class Detail {

  public doc: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.doc = this.navParams.get('selectedDoc');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Detail');
  }

  signDoc(){
    this.navCtrl.push(Drawpad, { doc: this.doc });

  }

}
