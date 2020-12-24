import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DetailslistonesPage } from '../detailslistones/detailslistones';

@Component({
  selector: 'page-listones',
  templateUrl: 'listones.html',
})
export class ListonesPage {
		private _dataCards: any;
		private _detailslistones: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  			this._detailslistones = DetailslistonesPage;

  			this._dataCards = [
  				{ title: "Liston arcoiris CHACOTT", image:"lis1.jpg", descripcion: "Cinta CHACOTT arcoiris, de 4.5 metros de largo, telefono: 5689234578. Precio: $ 350.00 MXN. "},
  				{ title: "Liston multicolor PASTORELLI", image:"lis2.jpg", descripcion: " Cinta PASTORELLI multicolor, de 4 metros de largo, para entrenamiento, telefono: 5642361452. Precio: $ 280.00 MXN."},
          { title: "Liston morado ITALIA", image:"lis3.jpg", descripcion: " Cinta ITALIA morada, de 4.5 metros de largo, telefono: 5554872135. Costo: $ 250.00 MXN."},
          { title: "Liston salmon CHACOTT", image:"lis4.jpg", descripcion: " Cinta CHACOTT salmon de 3.5 metros de largo para entrenamiento, telefono: 5521486398. Costo: $ 200.00 MXN."},
          { title: "Liston rojo PASTORELLI", image:"lis5.jpg", descripcion: " Cinta PASTORELLI roja, de 4 metros de largo, para entrenamiento, telefonos: 5523147852 y 5621484324. Costo: $ 200.00 MXN. "},
          { title: "Liston multicolor ITALIA", image:"lis6.jpg", descripcion: " Cinta ITALIA multicolor pastel, de 4.5 metros de largo para competencia, telefono: 5562352412. Precio: $ 380.00 MXN."},
          { title: "Liston Kit multicolor CHACOTT", image:"lis7.jpg", descripcion: " Cinta CHACOTT multicolor para conjunto, ideal para competencia, 4.5 metros de largo, telefono: 5623524169. Precio: $ 450.00 MXN c/u."},
          { title: "Liston rojo CHACOTT", image:"lis8.jpg", descripcion: " Cinta CHACOTT roja de 4 metros de largo, para entrenamiento y competencia, telefono: 5528741236. Precio: $350.00 MXN."}

  			];

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListonesPage');
  }

  loadDetails (currentInfo){
  		this.navCtrl.push ( this._detailslistones, { details: currentInfo });
  }

}
