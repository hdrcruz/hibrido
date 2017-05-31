import { Component } from '@angular/core';
import { NavController, LoadingController, Platform } from 'ionic-angular';
import { ScreenOrientation } from '@ionic-native/screen-orientation';
import { DocumentosService } from '../../providers/documentos-service';
import { Detail } from '../detail/detail';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  data:any;
  pdfmake: any;
  loader: any;

  constructor(public navCtrl: NavController, private documentosService: DocumentosService, public loadingCtrl: LoadingController, public screen: ScreenOrientation, public plt: Platform) {
    this.loader = this.loadingCtrl.create({
      content: "<ion-spinner></ion-spinner>",
    });
  }

  ionViewDidEnter(){
   this.getData();
  }


  getData() {
    this.loader.present();
    this.documentosService.load()
    .subscribe(
      data => {
      this.data = data;
      console.log(this.data);
    },
    err => {
      console.error(err);
    },
    ()=> {
      this.loader.dismiss();
      console.log("getData complete");
    }
    );
  }

  

  selectDoc(doc){
    this.navCtrl.push(Detail, { selectedDoc: doc } );

  }

  doRefresh(refresher) {
      setTimeout(() => {
      this.getData();
      refresher.complete();
    }, 2000);
  }

  

}
