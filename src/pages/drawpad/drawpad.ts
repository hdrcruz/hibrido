import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { SignaturePad } from 'angular2-signaturepad/signature-pad';
import { DocumentosService } from '../../providers/documentos-service';
import * as pdfmake from 'pdfmake/build/pdfmake'

/**
 * Generated class for the Drawpad page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-drawpad',
  templateUrl: 'drawpad.html',
})
export class Drawpad {
  doc: any;
  signature = '';
  imageData = '';
  isDrawing = false;
  assinatura = {image: ""};

  @ViewChild(SignaturePad) signaturePad: SignaturePad;
  private signaturePadOptions: Object = { // Check out https://github.com/szimek/signature_pad
    'minWidth': 2,
    'canvasWidth': this.platform.width(),
    'canvasHeight': 300,
    // 'backgroundColor': '#f6fbff',
    'penColor': '#444444' //666a73
  };

  constructor(public navCtrl: NavController, public navParams: NavParams, private documentosService: DocumentosService, private platform: Platform) {
    this.doc = this.navParams.get('doc');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Drawpad');
  }

  ionViewDidEnter() {
    this.signaturePad.clear()
    
    // this.signaturePad.set("canvasWidth", this.platform.width);
    // console.log();
    // this.signaturePad.set("canvasHeight", this.platform.height());
    
  }

  drawComplete() {
    this.isDrawing = false;
  }

  drawStart() {
    this.isDrawing = true;
  }

  

  savePad() {
    this.signature = this.signaturePad.toDataURL();
    // this.imageData = this.signaturePad.toDataURL().replace("data:image/png;base64,", "");
    this.assinatura.image = this.imageData;
    this.signaturePad.clear();
    var pdf;
    var dd = {content: [
      {
      image: this.signature,
      width: 150,
      height: 250,
      }
    ]};
    this.doc.entregue = true;
    pdfmake.createPdf(dd).getDataUrl(function (dataURL){
      pdf = dataURL;
      // this.doc.recibo = pdf;
      console.log(this.doc.pdf);
    });
    // pdfmake.createPdf(dd).open();
    this.documentosService.saveRec(this.doc);
  }

 

  clearPad() {
    this.signaturePad.clear();
  }

}
