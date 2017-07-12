import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    constructor(private http: Http) { }

    ngOnInit() {
        this.http.get("http://localhost:4200/api/lols")
            .map((response) => {
                console.log("testi")
                console.log(response.json());
                return response.json()
            })
            .catch(error => error);
    }

}
