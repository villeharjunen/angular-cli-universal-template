import { Component, OnInit } from '@angular/core';
import { WordpressService } from '../services/wordpress.service';

@Component({
    selector: 'app-careers',
    templateUrl: './careers.component.html',
    styleUrls: ['./careers.component.scss']
})
export class CareersComponent implements OnInit {

    public careers: Array<Object>;

    constructor(
        private wpService: WordpressService
    ) { }

    ngOnInit() {
        this.wpService.getCareers()
            .subscribe(
            careers => {
                this.careers = careers;
                console.log(careers);
            },
            error => {
                console.error(error);
            }
            )
    }

}
