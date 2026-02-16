import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.html',
})
export class Projects {
  currentIndex = signal(0);

  projects = [
    {
      title: 'Agile Poker Planning',
      type: 'Agile Tool',
      desc: 'Aplicación para estimaciones ágiles con story points.',
      tech: ['Angular', 'Real-time'],
      textColor: 'text-purple-500'
    },
    {
      title: 'Steam Tax Calculator',
      type: 'Web / Herramienta',
      desc: 'Calculadora de impuestos para compras en Steam, adaptada a las regulaciones vigentes en Argentina.',
      tech: ['JS', 'Local Economy'],
      textColor: 'text-orange-600'
    },
    {
      title: 'Poke-Trivia',
      type: 'Game / Fun',
      desc: 'Juego de preguntas y respuestas basado en la PokeAPI para fanáticos del coleccionismo.',
      tech: ['PokeAPI', 'Mobile First'],
      textColor: 'text-yellow-500'
    },
    {
      title: 'GolApp',
      type: 'Flutter / Firebase',
      desc: 'Gestión de torneos de fútbol con arquitectura Layer-First y Cubit.',
      tech: ['Clean Architecture'],
      textColor: 'text-blue-500'
    },

    {
      title: 'PetLovers',
      type: 'Social / Rescate',
      desc: 'Plataforma para gestión de adopciones y rescates.',
      tech: ['Flutter', 'Maps'],
      textColor: 'text-pink-500'
    }
  ];

  next() {
    // Como siempre mostramos 3, el máximo índice de desplazamiento es total - 3
    const maxIndex = this.projects.length - 3;
    this.currentIndex.update(v => (v < maxIndex ? v + 1 : 0));
  }

  prev() {
    const maxIndex = this.projects.length - 3;
    this.currentIndex.update(v => (v > 0 ? v - 1 : maxIndex));
  }
}