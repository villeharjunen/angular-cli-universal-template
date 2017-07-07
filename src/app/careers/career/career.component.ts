import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WordpressService } from '../../services/wordpress.service';

@Component({
    selector: 'app-career',
    templateUrl: './career.component.html',
    styleUrls: ['./career.component.scss']
})
export class CareerComponent implements OnInit {

    private slug: string;
    private career: string;

    constructor(
        private route: ActivatedRoute,
        private wpService: WordpressService,
    ) {
        this.route.params.subscribe(params => {
            this.slug = params.slug;
        });
    }

    ngOnInit() {
        this.loadCareer(this.slug);
    }

    loadCareer(slug) {
        console.log(slug)
        this.wpService.getCareer(slug)
            .subscribe(
            career => {
                this.career = career;
                console.log(this.career)
            },
            error => {
                console.error(error);
            }
            )
    }

}
