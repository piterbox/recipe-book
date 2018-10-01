import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 loadedFeature = 'recipe';

 ngOnInit() {
   firebase.initializeApp({
     apiKey: 'AIzaSyCwVBcOEuXDPoptnQFTPVsABbYU9-CbjeQ',
     authDomain: 'recipe-book-74da6.firebaseapp.com',
   });
 }

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
