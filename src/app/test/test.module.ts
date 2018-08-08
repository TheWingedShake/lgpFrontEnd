import {
    Component,
    NgModule
  } from '@angular/core';
  import {
    tick,
    TestBed
   } from '@angular/core/testing';
  import { RouterTestingModule } from '@angular/router/testing';
  import { ComponentFixture } from '@angular/core/testing';
  import {
    ActivatedRoute,
    Router,
    Routes,
    provideRoutes,
  } from '@angular/router';

  import { CommonModule } from '@angular/common';

  import { OrderComponent } from '../components/order/order.component';
  import { MockOrderService } from './order.service.mock';

  @Component({
    selector: 'app-blank-cmp',
    template: ``
  })
  export class BlankCmp {
  }

  @Component({
    selector: 'app-root-cmp',
    template: `<router-outlet></router-outlet>`
  })
  export class RootCmp {
  }

  export const routerConfig: Routes = [
    { path: '', component: BlankCmp },
    { path: 'orders/:id', component: OrderComponent }
  ];

  export function advance(fixture: ComponentFixture<any>): void {
    tick();
    fixture.detectChanges();
  }

  export function createRoot(router: Router,
                           componentType: any): ComponentFixture<any> {
  const f = TestBed.createComponent(componentType);
  advance(f);
  (<any>router).initialNavigation();
  advance(f);
  return f;
}

export function configureMusicTests() {
  const mockOrderService: MockOrderService = new MockOrderService();

  TestBed.configureTestingModule({
    imports: [
      { // TODO RouterTestingModule.withRoutes coming soon
        ngModule: RouterTestingModule,
        providers: [provideRoutes(routerConfig)]
      },
      TestModule
    ],
    providers: [
      mockOrderService.getProviders(),
      {
        provide: ActivatedRoute,
        useFactory: (r: Router) => r.routerState.root, deps: [ Router ]
      }
    ]
  });
}

@NgModule({
    imports: [RouterTestingModule, CommonModule],
    entryComponents: [
      BlankCmp,
      RootCmp,
      OrderComponent
    ],
    exports: [
      BlankCmp,
      RootCmp,
      OrderComponent
    ],
    declarations: [
      BlankCmp,
      RootCmp,
      OrderComponent
    ]
  })
  class TestModule {
  }
