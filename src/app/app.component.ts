import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
 <app-card-title></app-card-title>
  <app-card></app-card>


  <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'services-angular';
}
