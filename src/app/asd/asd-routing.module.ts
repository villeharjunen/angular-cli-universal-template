import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AsdComponent } from "./asd.component"

const routes: Routes = [
    {
        path: "",
        component: AsdComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AsdRoutingModule { }
