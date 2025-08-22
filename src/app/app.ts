import { Component } from '@angular/core';
import { TarjetaComponent } from './tarjeta/tarjeta';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TarjetaComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {}
