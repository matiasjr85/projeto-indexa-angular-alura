import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

import { ListaContatosComponent } from "./paginas/lista-contatos/lista-contatos.component";
import { FormularioContatoComponent } from './paginas/formulario-contato/formulario-contato.component';


@Component({
  selector: 'app-root',
  imports: [
    CommonModule,  
    ListaContatosComponent,
    FormularioContatoComponent,
    RouterOutlet
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
 
}
