import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonComponent } from './person.component';
import { personRoutingModule } from './person-routing.module';

@NgModule({
  declarations: [PersonComponent],
  imports: [
    CommonModule,
    personRoutingModule
  ]
})
export class PersonModule { }
