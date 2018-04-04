import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { UserComponent } from '../user/user.component';

import { LoggedInGuard } from '../../logged-in.guard';
import { UserEditorComponent } from '../user-editor/user-editor.component';

export const routes: Routes  = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'view/:id', component: UserComponent},
    {path: 'edit/:id', component: UserEditorComponent}
];

@NgModule({
    declarations: [
        UserComponent
    ],
    exports: [
        UserComponent
    ],
    imports: [
        CommonModule,
        RouterModule
    ],
    providers: [
        LoggedInGuard
    ]
})
export class UserModule { }
