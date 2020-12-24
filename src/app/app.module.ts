import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { GimnasiaritmicaPage } from '../pages/gimnasiaritmica/gimnasiaritmica';
import { HomePage } from '../pages/home/home';
import { CategoriasPage } from '../pages/categorias/categorias';
import { CuentaPage } from '../pages/cuenta/cuenta';

import { LeotardosPage } from '../pages/leotardos/leotardos';
import { ClavasPage } from '../pages/clavas/clavas';
import { PelotasPage } from '../pages/pelotas/pelotas';
import { ListonesPage } from '../pages/listones/listones';
import { ArosPage } from '../pages/aros/aros';

import { DetailsleotardosPage } from '../pages/detailsleotardos/detailsleotardos';
import { DetailsclavasPage } from '../pages/detailsclavas/detailsclavas';
import { DetailspelotasPage } from '../pages/detailspelotas/detailspelotas';
import { DetailslistonesPage} from '../pages/detailslistones/detailslistones';
import { DetailsarosPage }  from '../pages/detailsaros/detailsaros';

import { SesionPage } from '../pages/sesion/sesion';
import { NuevoPage } from '../pages/nuevo/nuevo';

@NgModule({
  declarations: [
    MyApp,
    GimnasiaritmicaPage,
    HomePage,
    CategoriasPage,
    CuentaPage, 

    LeotardosPage,
    ClavasPage,
    PelotasPage,
    ListonesPage,
    ArosPage,

    DetailsleotardosPage,
    DetailsclavasPage,
    DetailspelotasPage,
    DetailslistonesPage,
    DetailsarosPage,

    SesionPage,
    NuevoPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    GimnasiaritmicaPage,
    HomePage,
    CategoriasPage,
    CuentaPage,

    LeotardosPage,
    ClavasPage,
    PelotasPage,
    ListonesPage,
    ArosPage,

    DetailsleotardosPage,
    DetailsclavasPage,
    DetailspelotasPage,
    DetailslistonesPage,
    DetailsarosPage,

    SesionPage,
    NuevoPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
