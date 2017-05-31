import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { CanvasDraw } from '../components/canvas-draw/canvas-draw';
import { DocumentosService } from '../providers/documentos-service';
import { HttpModule } from '@angular/http';
import { Detail } from '../pages/detail/detail';
import { Drawpad } from '../pages/drawpad/drawpad';
import { SignaturePadModule } from 'angular2-signaturepad';
import { ReciboPage } from '../pages/recibo-page/recibo-page'
import { ScreenOrientation } from '@ionic-native/screen-orientation'

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    Detail,
    Drawpad,
    CanvasDraw,
    ReciboPage,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    SignaturePadModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    Detail,
    Drawpad,
    ReciboPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ScreenOrientation,
    DocumentosService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
