import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CareersComponent } from './careers.component';
import { CareerComponent} from './career/career.component';

import { CareersRoutingModule } from './careers-routing.module';

@NgModule({
    imports: [
        CommonModule,
        CareersRoutingModule
    ],
    declarations: [
        CareersComponent,
        CareerComponent,
    ]
})
export class CareersModule { }
