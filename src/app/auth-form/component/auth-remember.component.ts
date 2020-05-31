import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-auth-remember',
    styleUrls: ['./auth-remember.component.scss'],
    template: `
    <div>
    <label>
    <input type="checkbox" name="remember" (change)="onChange($event)">
    Remember Me
    </label>
    </div>
    `
})

export class AuthRememberComponent{

    @Output()
    changed: EventEmitter<any> = new EventEmitter();

    onChange(value){
        if (value.target.checked){
        this.changed.emit(value.target.checked);
        }
    }
}
