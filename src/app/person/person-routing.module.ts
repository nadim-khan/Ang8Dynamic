import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonComponent } from './person.component';


const routes: Routes = [
    {path: '', component: PersonComponent}
    ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
// tslint:disable-next-line: class-name
export class personRoutingModule {
    constructor() {
    }
 }
