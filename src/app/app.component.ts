import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <app-auth (user)="handelUser($event)"><h2>Log In</h2><button type="submit">Log In</button>
  <app-auth-remember (changed)="handelChange($event)" ></app-auth-remember>
  </app-auth>
  <app-auth (user)="handelUser($event)"><h2>Sign Up</h2><button type="submit">Sign Up</button></app-auth>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'rental';

  remember: boolean = false;

  handelChange(value){
    this.remember = value;
  }

  handelUser(value: any){
    console.log("App Component handelUser->", value, this.remember);
  }
}
