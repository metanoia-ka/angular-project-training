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
  messageSent: string = "";

  afficheMessage(message: string) {
    this.messageSent = message;
    console.log("Message 1 reçu du composant enfant : " + message);
  }
}
