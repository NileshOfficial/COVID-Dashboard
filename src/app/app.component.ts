import { Component } from '@angular/core';
import { faHome, faQuestionCircle, faInfoCircle, IconDefinition } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  homeIcon: IconDefinition = faHome;
  faqIcon: IconDefinition = faQuestionCircle;
  helpIcon: IconDefinition = faInfoCircle;
}
