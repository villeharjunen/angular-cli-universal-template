import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AsdRoutingModule } from './asd-routing.module';
import { AsdComponent } from './asd.component';

@NgModule({
  imports: [
    CommonModule,
    AsdRoutingModule
  ],
  declarations: [AsdComponent]
})
export class AsdModule { }
