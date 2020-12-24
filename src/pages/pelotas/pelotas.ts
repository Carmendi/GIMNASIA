import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DetailspelotasPage } from '../detailspelotas/detailspelotas';

@Component({
  selector: 'page-pelotas',
  templateUrl: 'pelotas.html',
})
export class PelotasPage {
		private _dataCards: any;
		private _detailspelotas: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  		this._detailspelotas = DetailspelotasPage;

  		this._dataCards = [

  		{ title: "Pelota diamantada CHACOTT", image: "pelo1.jpg", descripcion: " Pelota CHACOTT diamantada, de 18 cm para competencia, material sintetico, telefono: 5585634215. Costo $ 2500.00 MXN."},
  		{ title: "Pelota plateada lisa AMAYA", image: "pelo2.jpg", descripcion: " Pelota AMAYA lisa, material flexible, de 16 cm, para entrenamiento, telefono: 5574243658. Costo $ 1800.00 MXN."},
      { title: "Pelota verde PASTORELLI", image: "pelo3.jpg", descripcion: " Pelota PASTORELLI verde diamantada, material flexible, tamaño 20 cm, peso 400 gramos, telefono: 5565362514. Costo: $ 2400.00 MXN."},
      { title: "Pelota lisa CHACOTT", image: "pelo4.jpg", descripcion: " Pelota CHACOTT lisa rosa, material sintetico, para entrenamiento de 16 cm, telefono: 5563214596. Costo: $ 800.00 MXN."},
      { title: "Pelota diamanta roja AMAYA", image: "pelo5.jpg", descripcion: " Pelota AMAYA diamantada roja, flexible de 18 cm, telefono: 5645253698.  Costo: $ 1750.00 MXN."},
      { title: "Pelota goma CHACOTT", image: "pelo6.jpg", descripcion: " Pelota CHACOTT diamantada, de 20 cm, peso 400 gramos, telefono: 5556234158. Costo $ 2400.00 MXN."},
      { title: "Pelota naranja lisa CHACOTT", image: "pelo7.jpg", descripcion: " Pelota CHACOTT naranja, material sintetico, de 16 cm para entrenamiento, telefono: 5685123645. Costo: $ 600.00 MXN. "},
      { title: "Pelota tornasol PASTORELLI", image: "pelo8.jpg", descripcion: " Pelota PASTORELLI tornasol diamantada, de 20 cm para competencia, telefono: 5565324178. Costo: $ 2500.00 MXN."}

  		];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PelotasPage');
  }

  loadDetails ( currentInfo ){
  		this.navCtrl.push ( this._detailspelotas, { details: currentInfo } );
  }

}
