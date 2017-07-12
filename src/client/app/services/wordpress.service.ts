import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs';

@Injectable()
export class WordpressService {

    public wpURL = "http://franticcom.herokuapp.com/wp-json/wp/v2";

    constructor(
        private http: Http
    ) { }

    getPosts() {
        let pathname = this.wpURL + "/posts";
        return this.http
            .get(pathname)
            .map(response => response.json())
            .catch(error => error);
    }

    getPost(slug) {
        let pathname = this.wpURL + "/posts?filter[name]=" + slug;
        return this.http
            .get(pathname)
            .map(response => response.json()[0])
            .catch(error => error);
    }

    getCareers() {
        let pathname = this.wpURL + "/jobs";
        return this.http
            .get(pathname)
            .map(response => response.json())
            .catch(error => error);
    }

    getCareer(slug) {
        let pathname = this.wpURL + "/jobs?filter[name]=" + slug;
        return this.http
            .get(pathname)
            .map(response => response.json()[0])
            .catch(error => error);
    }

}
