import { Component, OnInit } from '@angular/core';
import { WordpressService } from '../services/wordpress.service';

@Component({
    selector: 'app-posts',
    templateUrl: './posts.component.html',
    styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

    public posts: Array<Object>;

    constructor(
        public wpService: WordpressService
    ) { }

    ngOnInit() {
        this.wpService.getPosts()
            .subscribe(
            posts => {
                this.posts = posts;
            },
            error => {
                console.error(error);
            }
            )
    }

}
