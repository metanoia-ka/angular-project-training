import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MonComposantComponent } from "./components/mon-composant/mon-composant.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MonComposantComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Landry';
  messageToSend: string = "";

  afficheMessage(message: string) {
    this.messageToSend = message;
    console.log("Message reçu du composant enfant : " + message);
  }
}
