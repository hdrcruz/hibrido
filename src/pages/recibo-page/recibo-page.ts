import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ReciboPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-recibo-page',
  templateUrl: 'recibo-page.html',
})
export class ReciboPage {

  signature: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.signature = this.navParams.get('signature');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReciboPage');
    console.log(this.signature);
  }

}
