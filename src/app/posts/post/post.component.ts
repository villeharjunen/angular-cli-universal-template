import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WordpressService } from '../../services/wordpress.service';

@Component({
    selector: 'app-post',
    templateUrl: './post.component.html',
    styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

    private slug: string;
    public post: string;

    constructor(
        private route: ActivatedRoute,
        private wpService: WordpressService,
    ) {
        this.route.params.subscribe(params => {
            this.slug = params.slug;
        });
    }

    ngOnInit() {
        this.loadPost(this.slug);
    }

    loadPost(slug) {
        console.log(slug)
        this.wpService.getPost(slug)
            .subscribe(
                post => {
                    this.post = post;
                    console.log(this.post)
                },
                error => {
                    console.error(error);
                }
            )
    }

}
