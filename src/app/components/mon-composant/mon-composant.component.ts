import { Component, Input, Output, EventEmitter, OnInit, OnDestroy } from '@angular/core';

// Le décorateur @Component permet de définir un composant Angular
// Le sélecteur 'app-mon-composant' est utilisé pour référencer ce composant dans d'autres templates
// imports : On peut importer d'autres composants, directives ou pipes ici si nécessaire
// templateUrl : Chemin vers le fichier HTML du composant
@Component({
  selector: 'app-mon-composant',
  imports: [],
  templateUrl: './mon-composant.component.html',
  styleUrl: './mon-composant.component.css'
})
export class MonComposantComponent implements OnInit, OnDestroy {
    @Input() monUtilisateur: string = "";
    @Output() clicBouton = new EventEmitter<string>();

    ngOnInit(): void {
      // Cette méthode est appelée une fois que le composant est initialisé
      console.log("Le composant a été initialisé !");
    }

    ngOnDestroy(): void {
      // Cette méthode est appelée juste avant que le composant soit détruit
      console.log("Le composant est détruit !");
    }

    envoyerMessage() {  
      this.clicBouton.emit("Bonjour depuis le composant 👋!");
    }
}
