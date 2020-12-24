import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { CategoriasPage } from '../categorias/categorias';
import { CuentaPage } from '../cuenta/cuenta';


@Component({
	
   templateUrl: 'gimnasiaritmica.html'
})

export class GimnasiaritmicaPage {

  homeRoot = HomePage;
  categoriasRoot = CategoriasPage;
  cuentaRoot = CuentaPage;


  constructor() {}

}
