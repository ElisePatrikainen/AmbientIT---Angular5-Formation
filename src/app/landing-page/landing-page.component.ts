import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { AngularFireAuth } from 'angularfire2/auth'; 
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  model: string
  loggedIn: boolean = false
  chuckFact: string

  constructor( private http: HttpClient, public afAuth: AngularFireAuth ) {
    this.getChuckFact()
   }

  ngOnInit() {
  }

  getChuckFact() {
      this.http.get('https://api.chucknorris.io/jokes/random').subscribe(
        data => 
          this.chuckFact = data.value
      )
  }

  signIn() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then(
      user => console.log(user)
    )
  }

  signOut() {
    this.afAuth.auth.signOut()
  }
 
  showAfAuth() {
    console.log(this.afAuth.auth.currentUser)
  }

}
