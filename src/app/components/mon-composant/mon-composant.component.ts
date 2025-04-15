import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mon-composant',
  imports: [CommonModule],
  template: `
      <h2>Mon-composant works! {{ monUtilisateur }} ✅</h2>
      <p>Je suis bien en plein apprentissage du frameword Angular ! 🛠️</p>
      <button (click)="envoyerMessage()">Clique ici pour voir 👇!</button>
  `
})
export class MonComposantComponent {
    @Input() monUtilisateur: string = "";
    @Output() clicGreet = new EventEmitter<string>();
    count: number = 0;

    envoyerMessage() { 
      this.count ++
      this.clicGreet.emit("Bonjour depuis le composant 👋!");
    }
}
