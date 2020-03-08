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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    CompanyModule,
    PersonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
