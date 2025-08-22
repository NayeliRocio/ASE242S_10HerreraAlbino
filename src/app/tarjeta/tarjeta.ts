import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tarjeta',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tarjeta.html',
  styleUrls: ['./tarjeta.css']
})
export class TarjetaComponent {
  nombre = 'Nayeli Herrera Albino';
  carrera = 'Análisis de Sistemas Empresariales';
  edad = 18;
  correo = 'nayeli.herrera@vallegrande.edu.pe';

  mostrarExtra = false;
  colorFondo = '#ffffff';

  hobbies: string[] = ['Leer', 'Escuchar música', 'Jugar vóley'];
  skills: string[] = ['Trabajo en equipo', 'Conocimientos en programación', ' Ser empática'];
  frase = '“La constancia es la clave del éxito”.';

  toggleExtra() {
    this.mostrarExtra = !this.mostrarExtra;
  }

  cambiarColor() {
    this.colorFondo = this.colorFondo === '#ffffff' ? '#F8BBD0' : '#ffffff';
  }
}
