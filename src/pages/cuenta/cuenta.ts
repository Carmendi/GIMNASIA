import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SesionPage } from '../sesion/sesion';
import { NuevoPage } from '../nuevo/nuevo';


@Component({
  selector: 'page-cuenta',
  templateUrl: 'cuenta.html',
})
export class CuentaPage {
		private _sesion: any;
		private _nuevo:  any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  			this._sesion = SesionPage;
  			this._nuevo = NuevoPage;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CuentaPage');
  }

  loadDetails (currentInfo){
  		this.navCtrl.push ( this._sesion );
  }

  loadDetailsnu (currentInfonu){
  		this.navCtrl.push ( this._nuevo );
  }

}
