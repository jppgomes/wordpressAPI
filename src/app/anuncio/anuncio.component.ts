import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-anuncio',
  templateUrl: './anuncio.component.html',
  styleUrls: ['./anuncio.component.css']
})
export class AnuncioComponent implements OnInit {

  constructor( private http: HttpClient) { }
  filtro = '';
  posts = [];
  ngOnInit() {
  }

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
