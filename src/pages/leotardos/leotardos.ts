import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DetailsleotardosPage } from '../detailsleotardos/detailsleotardos';


@Component({
  selector: 'page-leotardos',
  templateUrl: 'leotardos.html',
})
export class LeotardosPage {
		private _dataCards: any;
		private _detailsleotardos: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  		this._detailsleotardos = DetailsleotardosPage;

  		this._dataCards = [
  		
  		{ title: "Leotardo Eli", image: "leo1.jpg", descripcion:"Leotardo Eli rosa, para niña de 8 a 10 años, tejido elastico con swarovski, Contacto al telefono: 5520158096. Costo: $ 4500.00 MXN."},
  		{ title: "Leotardo Azul", image: "leo2.jpg", descripcion:"Leotardo azul con falta ideal para niñas de 6 a 8 años, poliester y licka, telefonos: 5526387412 y 5585236985. Costo: $3800.00 MXN."},
      { title: "Leotardo Africa", image: "leo3.jpg", descripcion:"Leotardo multicolor, con swarovski, talla 14 elastico, ligero y comodo, Contacto a los telefonos: 5523697425 y 5569251436. Costo: $ 5300.00 MXN. "},
      { title: "Leotardo Real", image: "leo4.jpg", descripcion:"Leotardo de Nylon con mangas y detalles de swarovski, talla 10, tejido elastico, telefono: 5520853614. Costo: $ 5100.00 MXN. "},
      { title: "Leotardo Rock", image: "leo5.jpg", descripcion:"Leotardo rosa con negro, poliester con Nylon, con swarovski blanco, tallas 8, 10 y 12, telefonos: 5615204136 y 5585763214. Costo: $ 6200.00 MXN. "},
      { title: "Leotardo Pink", image: "leo6.jpg", descripcion:"Leotardo ligero, con barbillas rosas y detalles de swarovski de diferentes tamaños, talla 10 a 12, telefono: 5520361478. Costo: $ 4100.00 MXN. "},
      { title: "Leotardo Red", image: "leo7.jpg", descripcion:"Leotardo rojo poliester y negro diamantado, comodo, talla de la 8 a la 14, contacto: 5523968545. Costo: $ 3600.00 MXN. "},
      { title: "Leotardos Jennifer ", image: "leo8.jpg", descripcion:"Leotardos Jeniffer negro con rosa ideal para conjuntos, ligero y comodo, de las tallas 6 a la 16, telefonos: 5569823647 y 5536987423. Costo: $4700.00 MXN c/u."}
  	
  		];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LeotardosPage');
  }

	loadDetails( currentInfo ){
			this.navCtrl.push ( this._detailsleotardos, { details: currentInfo } );

}
 

}
