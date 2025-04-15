import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profil',
  standalone: true,
  imports: [CommonModule],
  template: `
        <h2>Profilul utilizatorului</h2>
        <p>Nom: {{ nom }}</p>
        <p>Ville: {{ ville }}</p>
        <button (click)="sendMessage()">Afișează un mesaj... 📩</button>
  `
})
export class ProfilComponent {
    @Input() nom!: string;
    @Input() ville!: string;
    @Output() alerte = new EventEmitter<string>();

    sendMessage() {
        this.alerte.emit("Voir mon profil !");
    }

}
