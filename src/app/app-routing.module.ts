import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PnfComponent } from './pnf/pnf.component';
import { PracticeComponent } from './practice/practice.component';
import { TemplateFormComponent } from './practice/template-form/template-form.component';
import { ModelFormComponent } from './practice/model-form/model-form.component';
import { CompanyComponent } from './company/company.component';
import { PersonComponent } from './person/person.component';


const routes: Routes = [
  { path:'', redirectTo:'home', pathMatch:'full'},
  { path: "home", component: HomeComponent },
  { path: "company", loadChildren:'./company/company.module#CompanyModule' },
  { path: "person", loadChildren: './person/person.module#PersonModule' },
  {
    path: "practice", component: PracticeComponent,
    children: [
      { path: 'tempForm', component: TemplateFormComponent },
      { path: 'modelForm', component: ModelFormComponent }
    ]
  },
  { path: "**", component: PnfComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
