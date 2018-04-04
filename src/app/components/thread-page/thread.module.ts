import { Routes, RouterModule} from '@angular/router';
import { NgModule } from '@angular/core';
import { ThreadsComponent } from '../threads/threads.component';
import { CommonModule } from '@angular/common';
import { LoggedInGuard } from '../../logged-in.guard';
import { ThreadComponent } from '../thread/thread.component';

export const routes: Routes = [
    {path: '', redirectTo: 'main', pathMatch: 'full'},
    {path: 'main', component: ThreadsComponent},
    {path: 'view/:id', component: ThreadComponent}
];

@NgModule({
    declarations: [
        ThreadComponent
    ],
    exports: [
        ThreadComponent
    ],
    imports: [
        CommonModule,
        RouterModule
    ],
    providers: [
        LoggedInGuard
    ]
})
export class ThreadModule { }
