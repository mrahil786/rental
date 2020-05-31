import { NgModule } from '@angular/core';
import { AuthComponent } from './component/auth.component';
import { FormsModule } from '@angular/forms';
import { AuthRememberComponent } from './component/auth-remember.component';

@NgModule({
    declarations: [
        AuthComponent,
        AuthRememberComponent
    ],
    imports: [
        FormsModule
    ],
    exports: [
        AuthComponent,
        AuthRememberComponent
    ]
})
export class AuthModule{ }
