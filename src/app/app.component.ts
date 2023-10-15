import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <h1 style="
  display:flex;
  flex-direction: row;
  justify-content: center;
  ">Pokemon Finder</h1>
  <app-card></app-card>


  <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'services-angular';
}
