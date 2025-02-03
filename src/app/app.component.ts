import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'evaluacion1parcial';

  jugador = {
    id: 0,
    nombre: '',
    posicion: '',
    dorsal: 0,
    goles: 0,
    asistencias: 0
  };

  jugadores = [
    {id: 1, nombre: 'Lionel Messi', posicion: 'Delantero', dorsal: 10, goles: 800, asistencias: 300},
    {id: 2, nombre: 'Cristiano Ronaldo', posicion: 'Delantero', dorsal: 7, goles: 920, asistencias: 250},
    {id: 3, nombre: 'Neymar', posicion: 'Extremo', dorsal: 11, goles: 500, asistencias: 250}
  ];

  // Agregar un jugador
  agregarJugador() {
    if (this.jugador.id == 0) {
      alert('El ID debe ser diferente de cero');
      return;
    }

    for (let i = 0; i < this.jugadores.length; i++) {
      if (this.jugador.id == this.jugadores[i].id) {
        alert('Ya existe un jugador con ese ID');
        return;
      }
    }

    this.jugadores.push({ ...this.jugador });

    this.jugador = { id: 0, nombre: '', posicion: '', dorsal: 0, goles: 0, asistencias: 0 };
  }

  // Seleccionar un jugador
  seleccionarJugador(jugadorSeleccionado: any) {
    this.jugador = { ...jugadorSeleccionado };
  }

  // Modificar un jugador
  modificarJugador() {
    for (let i = 0; i < this.jugadores.length; i++) {
      if (this.jugador.id == this.jugadores[i].id) {
        this.jugadores[i] = { ...this.jugador };
        this.jugador = { id: 0, nombre: '', posicion: '', dorsal: 0, goles: 0, asistencias: 0 };
        return;
      }
    }
    alert('No existe un jugador con ese ID');
  }

  // Eliminar un jugador
  eliminarJugador(id: number) {
    this.jugadores = this.jugadores.filter(j => j.id !== id);
  }
}