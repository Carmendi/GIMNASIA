import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LeotardosPage } from '../leotardos/leotardos';
import { ClavasPage } from '../clavas/clavas';
import { PelotasPage } from '../pelotas/pelotas';
import { ListonesPage } from '../listones/listones';
import { ArosPage } from '../aros/aros';


@Component({
  selector: 'page-categorias',
  templateUrl: 'categorias.html',
})
export class CategoriasPage {
	private _leotardos: any;
	private _clavas:    any;
	private _pelotas:   any;
	private _listones:  any;
	private _aros:      any;	

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  		this._leotardos = LeotardosPage;
  		this._clavas    = ClavasPage;
  		this._pelotas   = PelotasPage;
  		this._listones  = ListonesPage;
  		this._aros      = ArosPage;
  		
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CategoriasPage');
  }

loadDetails (currentInfo){
	this.navCtrl.push ( this._leotardos );
}
  
  loadDetailscla (currentInfocla ){
  	this.navCtrl.push ( this._clavas );
  }

  loadDetailspel ( currentInfopel ){
  	this.navCtrl.push ( this._pelotas );
  }

  loadDetailslis ( currentInfolis ){
  	this.navCtrl.push ( this._listones );
  }

  loadDetailsar ( currentInfoar ){
  	this.navCtrl.push ( this._aros );
  }
}
