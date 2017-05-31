import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { SignaturePad } from 'angular2-signaturepad/signature-pad';
import { DocumentosService } from '../../providers/documentos-service';
import * as pdfmake from 'pdfmake/build/pdfmake';
import { HomePage } from '../home/home';
import { ReciboPage } from '../recibo-page/recibo-page';
import { ScreenOrientation } from '@ionic-native/screen-orientation';


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

  constructor(public navCtrl: NavController, public navParams: NavParams, private documentosService: DocumentosService, private platform: Platform, private screenOrientation: ScreenOrientation) {
    this.doc = this.navParams.get('selectedDoc');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Drawpad');
  }

  ionViewDidEnter() {
    this.signaturePad.clear()
	if (this.platform.is('android')){
		this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
		this.signaturePad.set("canvasWidth", this.platform.width());
		this.signaturePad.set("canvasHeight", this.platform.height());	
	}
	    
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
    var dd = {


   header: {
    columns: [
      { text: 'HEADER LEFT', style: 'documentHeaderLeft' },
      { text: 'HEADER CENTER', style: 'documentHeaderCenter' },
      { text: 'HEADER RIGHT', style: 'documentHeaderRight' }
    ]
  },
  footer: {
    columns: [
      { text: 'FOOTER LEFT', style: 'documentFooterLeft' },
      { text: 'FOOTER CENTER', style: 'documentFooterCenter' },
      { text: 'FOOTER RIGHT', style: 'documentFooterRight' }
    ]
  },
	content: [
	    // Header
	    {
	        columns: [
	            
	                
	            [
	                {
	                    text: 'Recibo', 
	                    style: 'invoiceTitle',
	                    width: '*'
	                },
    	            {
    	              stack: [
    	                   {
    	                       columns: [
    	                            {
    	                                text:'Recibo #', 
    	                                style:'invoiceSubTitle',
    	                                width: '*'
    	                                
    	                            }, 
    	                            {
    	                                text:'00001',
    	                                style:'invoiceSubValue',
    	                                width: 100
    	                                
    	                            }
    	                            ]
    	                   },
    	                   {
    	                       columns: [
    	                           {
    	                               text:'Data',
    	                               style:'invoiceSubTitle',
    	                               width: '*'
    	                           }, 
    	                           {
    	                               text:'June 01, 2016',
    	                               style:'invoiceSubValue',
    	                               width: 100
    	                           }
    	                           ]
    	                   },
    	                   
    	               ]
    	            }
	            ],
	        ],
	    },
	    
        // Line breaks
	    '\n\n',
	    // Items
        
	    // Signature
	    {
	        columns: [
	            {
	                text:'TEXTO DE RECEBIMENTO A SER DEFINIDO',
	            },
	            
	            {
	                
	                
	                
	                stack: [
	                    '\n\n\n\n\n\n\n\n',

	                    {
	                        image: this.signature,
							width: 200
	                    },
	                    { 
	                        text: 'Nome',
	                        style:'signatureName'
	                        
	                    },
	                    { 
	                        text: 'Titulo',
	                        style:'signatureJobTitle'
	                        
	                    },
	                    ],
	               width: 180
	            },
	        ]
	    },
        { 
            text: 'NOTAS',
            style:'notesTitle'
        },
        { 
            text: 'TEXTO DE AVISO \n SEGUNDA LINHA',
            style:'notesText'
        }
	],
	styles: {
	    // Document Header
	    documentHeaderLeft: {
	        fontSize: 10,
	        margin: [5,5,5,5],
	        alignment:'left'
	    },
	    documentHeaderCenter: {
	        fontSize: 10,
	        margin: [5,5,5,5],
	        alignment:'center'
	    },
	    documentHeaderRight: {
	        fontSize: 10,
	        margin: [5,5,5,5],
	        alignment:'right'
	    },
	    // Document Footer
	    documentFooterLeft: {
	        fontSize: 10,
	        margin: [5,5,5,5],
	        alignment:'left'
	    },
	    documentFooterCenter: {
	        fontSize: 10,
	        margin: [5,5,5,5],
	        alignment:'center'
	    },
	    documentFooterRight: {
	        fontSize: 10,
	        margin: [5,5,5,5],
	        alignment:'right'
	    },
	    // Invoice Title
		invoiceTitle: {
			fontSize: 22,
			bold: true,
			alignment:'right',
			margin:[0,0,0,15]
		},
		// Invoice Details
		invoiceSubTitle: {
			fontSize: 12,
			alignment:'right'
		},
		invoiceSubValue: {
			fontSize: 12,
			alignment:'right'
		},
		// Billing Headers
		invoiceBillingTitle: {
			fontSize: 14,
			bold: true,
			alignment:'left',
			margin:[0,20,0,5],
		},
		// Billing Details
		invoiceBillingDetails: {
			alignment:'left'

		},
		invoiceBillingAddressTitle: {
		    margin: [0,7,0,3],
		    bold: true
		},
		invoiceBillingAddress: {
		    
		},
		// Items Header
		itemsHeader: {
		    margin: [0,5,0,5],
		    bold: true
		},
		// Item Title
		itemTitle: {
		    bold: true,
		},
		itemSubTitle: {
            italics: true,
            fontSize: 11
		},
		itemNumber: {
		    margin: [0,5,0,5],
		    alignment: 'center',
		},
		itemTotal: {
		    margin: [0,5,0,5],
		    bold: true,
		    alignment: 'center',
		},

		// Items Footer (Subtotal, Total, Tax, etc)
		itemsFooterSubTitle: {
		    margin: [0,5,0,5],
		    bold: true,
		    alignment:'right',
		},
		itemsFooterSubValue: {
		    margin: [0,5,0,5],
		    bold: true,
		    alignment:'center',
		},
		itemsFooterTotalTitle: {
		    margin: [0,5,0,5],
		    bold: true,
		    alignment:'right',
		},
		itemsFooterTotalValue: {
		    margin: [0,5,0,5],
		    bold: true,
		    alignment:'center',
		},
		signaturePlaceholder: {
		    margin: [0,70,0,0],   
		},
		signatureName: {
		    bold: true,
		    alignment:'center',
		},
		signatureJobTitle: {
		    italics: true,
		    fontSize: 10,
		    alignment:'center',
		},
		notesTitle: {
		  fontSize: 10,
		  bold: true,  
		  margin: [0,50,0,3],
		},
		notesText: {
		  fontSize: 10
		},
		center: {
		    alignment:'center',
		},
	},
	defaultStyle: {
		columnGap: 20,
	}
};
    this.doc.entregue = true;
    pdfmake.createPdf(dd).getDataUrl(function (dataURL){
      pdf = dataURL;
      // this.doc.recibo = pdf;
      // console.log(this.doc.pdf);
    });
    // pdfmake.createPdf(dd).download();
    // this.documentosService.saveRec(this.doc);
    //  this.navCtrl.setRoot(HomePage);
	this.navCtrl.push(ReciboPage , { signature: this.signature } );
  }

 

  clearPad() {
    this.signaturePad.clear();
  }


}
