import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'

export interface ChuckResponse { value : string }

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  model: string
  loggedIn: boolean = false
  chuckFact: string
  constructor( private http: HttpClient ) {
    this.getChuckFact()
   }

  ngOnInit() {
  }

  getChuckFact() {
      this.http.get<ChuckResponse>('https://api.chucknorris.io/jokes/random').subscribe(
        data => 
          this.chuckFact = data.value
      )
  }

}
