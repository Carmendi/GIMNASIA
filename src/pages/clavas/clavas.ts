import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DetailsclavasPage } from '../detailsclavas/detailsclavas';


@Component({
  selector: 'page-clavas',
  templateUrl: 'clavas.html',
})
export class ClavasPage {
		private _dataCards: any;
		private _detailsclavas: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  		this._detailsclavas = DetailsclavasPage;

  		this._dataCards = [ 

  			{ title: "Clavas SASAKI", image: "clava1.jpg", descripcion: " Clavas SASAKI de plastico y caucho, ensamblables de 45 cm, peso 150 gramos, telefonos: 5569897423 y 5623145214. Costo: $ 1200.00 MNX. "},
  			{ title: "Clavas CHACOTT", image: "clava2.jpg", descripcion: " Clavas CHACOTT de goma, para competencia, ensamblables, 41 cm, telefono: 5536498520. Costo: $ 1400.00 MXN."},
        { title: "Clavas rosa SASAKI", image: "clava3.jpg", descripcion: " Clavas SASAKI de goma, ensamblables, de 45 cm, para competencia, telefono: 22256852369. Costo: $ 900.00 MXN."},
        { title: "Clavas azul SASAKI", image: "clava4.jpg", descripcion: " Clavas SASAKI azul de plastico, para entrenamiento de 30 cm, telefono: 5528634596. Costo: $ 1300.00 MXN."},
        { title: "Clavas  ensamblables CHACOTT", image: "clava5.jpg", descripcion: " Clavas CHACOTT ensamblables, moradas de goma 45 cm para competencia, telefono: 5525368514. Costo: $ 1700.00 MXN."},
        { title: "Clavas azul CHACOTT", image: "clava6.jpg", descripcion: " Clavas CHACOTT de plastico y caucho, de 45 cm ensamblables con goma, telefonos: 5569857412 y 5536209685. Costo: $ 1500.00 MNX."},
        { title: "Clavas plata CHACOTT", image: "clava7.jpg", descripcion: " Clavas CHACOTT plateadas, de goma y plastico, de 41.5 cm, para competencia, contacto a los telefonos: 5596857423 y 5569451285. Costo: $ 1450.00 MXN."},
        { title: "Clavas  ensamblables SASAKI", image: "clava8.jpg", descripcion: " Clavas SASAKI, con goma y caucho, de 35 cm, ensamblables, telefono: 5685256453. Costo: $ 1000.00 MXN. "}

  		];

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ClavasPage');
  }

  loadDetails ( currentInfo ){
  			this.navCtrl.push ( this._detailsclavas,  { details: currentInfo });

  }

}
