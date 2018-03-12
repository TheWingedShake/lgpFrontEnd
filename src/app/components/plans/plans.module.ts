import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';
import { PlanItemPreviewListComponent } from '../plan-item-preview-list/plan-item-preview-list.component';
import { NgModule } from '@angular/core';
import { OrderComponent } from '../order/order.component';
import { OrderEditorComponent } from '../order-editor/order-editor.component';

import { LoggedInGuard } from '../../logged-in.guard';

export const routes: Routes = [
    {path: '', redirectTo: 'main', pathMatch: 'full'},
    {path: 'main', component: PlanItemPreviewListComponent},
    {path: 'view/:id', component: OrderComponent},
    {path: 'create', component: OrderEditorComponent, canActivate: [LoggedInGuard]},
    {path: 'edit/:id', component: OrderEditorComponent, canActivate: [LoggedInGuard]}
];

@NgModule({
    declarations: [
        PlanItemPreviewListComponent,
        OrderComponent
    ],
    exports: [
        PlanItemPreviewListComponent,
        OrderComponent
    ],
    imports: [
        CommonModule,
        RouterModule
    ],
    providers: [
        LoggedInGuard
    ]
})
export class PlansModule { }
