import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-mon-composant',
  imports: [],
  templateUrl: './mon-composant.component.html',
  styleUrl: './mon-composant.component.css'
})
export class MonComposantComponent {
  @Input() monUtilisateur: string = "";
  @Output() clicBouton = new EventEmitter<string>();

  envoyerMessage() {  
    this.clicBouton.emit("Bonjour depuis le composant 👋!");
  }
}
