import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LeotardosPage } from '../leotardos/leotardos';
import { ClavasPage } from '../clavas/clavas';
import { PelotasPage } from '../pelotas/pelotas';
import { ListonesPage } from '../listones/listones';
import { ArosPage } from '../aros/aros';




@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
	private _leotardos: any;
	private _clavas:    any;
	private _pelotas:   any;
	private _listones:  any;
	private _aros:      any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  		this._leotardos = LeotardosPage;
  		this._clavas = ClavasPage;
  		this._pelotas = PelotasPage;
  		this._listones = ListonesPage;
  		this._aros = ArosPage;
  		
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }
 
 loadDetails (currentInfo){
 		this.navCtrl.push ( this._leotardos );
 }

 loadDetailscla ( currentInfocla){
 		this.navCtrl.push ( this._clavas );
 }

 loadDetailspel ( currentInforpel ){
        this.navCtrl.push ( this._pelotas );
 }

 loadDetailslis ( currentInforlis ){
 		this.navCtrl.push ( this._listones );
 }

 loadDetailsar ( currentInfoar ){
 		this.navCtrl.push ( this._aros );
 }
}
