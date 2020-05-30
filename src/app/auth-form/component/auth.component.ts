import { Component } from '@angular/core';

@Component({
    selector: 'app-auth',
    styleUrls: ['./auth.component.scss'],
    template: `
    <div>
    <h1>Form</h1>
    <div>
    User Name <input type="text"/>
    </div>
    <div>
    Password <input type="text"/>
    </div>
    </div>
    `
})

export class AuthComponent{}
