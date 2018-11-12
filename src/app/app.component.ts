import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
	posts = [];
	filtro: string;


	constructor(private http: HttpClient) {}

	ngOnInit(): void{}


	getPosts(): void {
		this.http.get(`https://nutricaoholistica.org/wp-json/wp/v2/posts?filter[tag]=${this.filtro}`).subscribe(data => {
			for(let key in data){
				if(data.hasOwnProperty(key)){
					this.posts.push(data[key]);
				}
			}
			console.log(this.posts)
		})
	}
}	
