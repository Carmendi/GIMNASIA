import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DetailsarosPage } from '../detailsaros/detailsaros';



@Component({
  selector: 'page-aros',
  templateUrl: 'aros.html',
})
export class ArosPage {
	private _dataCards: any;
	private _detailsaros: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  			this._detailsaros = DetailsarosPage;

  			this._dataCards = [

  				{ title:"Aro morado VENTURELLI", image:"aro1.jpg", descripcion: " Aro VENTURELLI morado, de 80 cm de diametro, para entrenamiento, telefono: 5623148596. Precio: $ 800.00 MXN."},
  				{ title:"Aro Azul AMAYA", image:"aro2.jpg", descripcion: " Aro AMAYA azul, de 80 cm de diametro, telefono: 5585963625. Precio: $ 650.00 MXN."},
          { title:"Aro multicolor ensamblable", image:"aro3.jpg", descripcion: " Aro ensamblable multicolor, de 90 cm de diametro, telefono: 5620369852. Precio: $ 750.00 MXN. "},
          { title:"Aro arcoiris PASTORELLI", image:"aro4.jpg", descripcion: " Aro PASTORELLI arcoiris, 90 cm de diametro, para competencia, telefono: 5562854152. Precio: $ 1100.00 MXN."},
          { title:"Aro azul VENTURELLI", image:"aro5.jpg", descripcion: " Aro VENTURELLI azul, para entrenamiento, de 80 cm de diametro, telefono: 5575239685. Precio: $ 500.00 MXN. "},
          { title:"Aro amarillo VENTURELLI", image:"aro6.jpg", descripcion: " Aro VENTURELLI amarillo para entrenamiento de 90 cm de diametro, telefono: 5623748596. Precio: $ 550.00 MXN. "},
          { title:"Aro rojo AMAYA", image:"aro7.jpg", descripcion: " Aro AMAYA rojo de competencia, de 90 cm de diametro, telefono: 5536251485. Precio: $ 700.00 MXN."},
          { title:"Aro morado PASTORELLI", image:"aro8.jpg", descripcion: " Aro PASTORELLI morado, de 90 cm de diametro para competencia, telefono: 5569253641. Precio: $ 750.00 MXN"}

  			];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ArosPage');
  }

  loadDetails (currentInfo) {
  		this.navCtrl.push (this._detailsaros, { details: currentInfo });
  }

}
