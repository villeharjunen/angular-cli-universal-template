import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CareersComponent } from './careers.component';
import { CareerComponent } from './career/career.component';

const routes: Routes = [
    {
        path: '',
        component: CareersComponent
    },
    {
        path: ':slug',
        component: CareerComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CareersRoutingModule { }
