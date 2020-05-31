import { Component, Output, EventEmitter } from '@angular/core';
import {User} from './../module/user.interface';

@Component({
    selector: 'app-auth',
    styleUrls: ['./auth.component.scss'],
    template: `
    <div class="border">
    <form (ngSubmit)="onSubmit(form.value)" #form="ngForm">
    <ng-content select="h2"></ng-content>
    <div>
    <label>
    User Name
    <input type="text" name="email" ngModel>
    </label>
    </div>
    <div>
    <label>
    Password
    <input type="text" name="password" ngModel>
    </label>
    </div>
    <ng-content select="app-auth-remember"></ng-content>
    <ng-content select="button"></ng-content>
    </form>
    </div>
    `
})

export class AuthComponent{

    @Output()
    user: EventEmitter<User> = new EventEmitter<User>();
    constructor(){}

    onSubmit(value: User){
        this.user.emit(value);
    }
}
