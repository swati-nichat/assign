import { Component, OnInit } from '@angular/core';
import { Data, Router } from '@angular/router';
import { HttpClient} from '@angular/common/http';
import { Observable,pipe } from 'rxjs';
import { Jokes } from './Jokes';
//import { InfiniteScrollModule } from 'angular2-infinite-scroll';


@Component({
  selector: 'app-login-data',
  templateUrl: './login-data.component.html',
  styleUrls: ['./login-data.component.css']
})
export class LoginDataComponent implements OnInit {
  jokes: Jokes[] = [];
  searchTerm;
  private _jsonURL = 'https://official-joke-api.appspot.com/jokes/ten';

 

  constructor(private http: HttpClient,private router: Router) {
    var data = this.getJSON().subscribe(data => {

      //  console.log(data);
      this.jokes = data;


    });


  }
  public getJSON(): Observable<any> {
    return this.http.get(this._jsonURL);
  }

  getData() {
    var data = this.getJSON().subscribe(data => {
      this.jokes=this.jokes.concat(data);
       
      //console.log(this.jokes);
      // this.arr1.push(data);
      //console.log(this.arr1.concat(this.jokes));
      //console.log(this.jokes);
      // for(var i=0;i<10;i++){
      //   this.jokes.concat(this.jokes[i]);
      // }
    }
    );
    
    

    return Jokes;
  }
  status: "false";


  getPunchline(id1: number) {
    status = "true";
    for (var i = 0; i < this.jokes.length; i++) {
      if (this.jokes[i].id == id1) {

        return this.jokes[i].punchline;

      }
    }

  }

  onScroll() {
    console.log("Scrolled");
  }
  ngOnInit() { }
  logout(){
     
     const click="true";
     if(click=="true")
     {
    this.router.navigate[('/app')];
    
     }
     return true;
   }
  Home()
  {
    this.router.navigate[('/HomePage')];

  }

}

 


  

 


