import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes, ActivatedRoute } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { PlanItemPreviewComponent } from './components/plan-item-preview/plan-item-preview.component';
import { PlanItemPreviewListComponent } from './components/plan-item-preview-list/plan-item-preview-list.component';
import { FormFilterComponent } from './components/form-filter/form-filter.component';
import { OrderFormComponent } from './components/order-form/order-form.component';
import { Metric, AnalyticImplementation } from './services/analytics-service/analytics.interface';
import { OrderService } from './services/order-service/order.service';
import { UserService } from './services/user-service/user.service';
import { AnalyticsService } from './services/analytics-service/analytics.service';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { OrderComponent } from './components/order/order.component';
import { FooterComponent } from './components/footer/footer.component';
import { AuthService } from './services/auth-service/auth.service';
import { OrderEditorComponent } from './components/order-editor/order-editor.component';
import { AUTH_PROVIDERS } from './services/auth-service/auth.service';
import { LoggedInGuard } from './logged-in.guard';
import { PlansComponent } from './components/plans/plans.component';
import { routes as childRoutes, PlansModule } from './components/plans/plans.module';
import { SignupComponent } from './components/signup/signup.component';
import { UserComponent } from './components/user/user.component';
import { CityComponent } from './components/city/city.component';
import { CityService } from './services/city-service/city.service';


const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'contactus', redirectTo: 'contact'},
  {path: 'plans', component: PlansComponent, children: childRoutes},
  {path: 'signup', component: SignupComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PlanItemPreviewComponent,
    PlanItemPreviewListComponent,
    FormFilterComponent,
    OrderFormComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    OrderComponent,
    FooterComponent,
    OrderEditorComponent,
    PlansComponent,
    SignupComponent,
    UserComponent,
    CityComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    OrderService,
    CityService,
    {provide: 'API_URL', useValue: 'http://localhost:8000'},
    {provide: AnalyticsService, useFactory() {
      const loggingImplementation: AnalyticImplementation = {
        recordEvent: (metric: Metric): void => {
          console.log('The metric is', metric);
        }
      }

      return new AnalyticsService(loggingImplementation);
    }},
    UserService,
    AuthService,
    AUTH_PROVIDERS,
    LoggedInGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
