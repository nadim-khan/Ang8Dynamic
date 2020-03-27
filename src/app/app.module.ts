import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './material/material.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PnfComponent } from './pnf/pnf.component';
import { PracticeComponent } from './practice/practice.component';
import { TransformPipe } from './practice/pipe/transform.pipe';
import { TemplateFormComponent } from './practice/template-form/template-form.component';
import { ModelFormComponent } from './practice/model-form/model-form.component';
import { CompanyModule } from './company/company.module';
import { PersonModule } from './person/person.module';
import { CounterComponent } from './practice/counter/counter.component';
import { CounterParentComponent } from './practice/counter-parent/counter-parent.component';
import { ChangeColorDirective } from './practice/change-color.directive';
import { ParentColorComponent } from './practice/parent-color/parent-color.component';
import { ThemeComponent } from './practice/theme/theme.component';
import { HostListnerComponent } from './practice/host-listner/host-listner.component';
import { ObservablesComponent } from './practice/observables/observables.component';
import { SearchPipe } from './practice/pipe/search.pipe';
import { AdminComponent } from './admin/admin.component';
import { ActivateGuard } from './activate.guard';
import { LoginComponent } from './login/login.component';
import { LifecycleComponent } from './practice/lifecycle/lifecycle.component';
import { LifecycleChildComponent } from './practice/lifecycle-child/lifecycle-child.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { faUserCircle } from '@fortawesome/free-regular-svg-icons';
import { MsalModule } from '@azure/msal-angular';
import { OAuthSettings } from 'src/oauth';
import { AlertsComponent } from './alerts/alerts.component';

// Add FontAwesome icons
library.add(faExternalLinkAlt);
library.add(faUserCircle);
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PnfComponent,
    PracticeComponent,
    TransformPipe,
    TemplateFormComponent,
    ModelFormComponent,
    CounterComponent,
    CounterParentComponent,
    ChangeColorDirective,
    ParentColorComponent,
    ThemeComponent,
    HostListnerComponent,
    ObservablesComponent,
    SearchPipe,
    AdminComponent,
    LoginComponent,
    LifecycleComponent,
    LifecycleChildComponent,
    AlertsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    CompanyModule,
    PersonModule,
    FontAwesomeModule,
    MsalModule.forRoot({
      clientID: OAuthSettings.appId
    })

  ],
  providers: [ActivateGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
