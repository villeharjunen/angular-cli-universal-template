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
        private wpService: WordpressService
    ) { }

    ngOnInit() {
        console.log(this.posts)
        this.wpService.getPosts()
            .subscribe(
            posts => {
                this.posts = posts;
                console.log(posts);
            },
            error => {
                console.error(error);
            }
            )
    }

}
