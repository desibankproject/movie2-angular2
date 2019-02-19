import { Component } from '@angular/core';
import {Movie} from './models/movie.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'movie2';
  public message:String="";
  //Movie movie=new Movie();
  //instantiating blank object of the Movie
  public movie:Movie=new Movie();

  public tmovies:Movie[]=[];

  //This method we want to call  when 
  //add movie button is clicked........
  public addMovie():void {
    console.log("@)@)@))@(@(@(@");
    console.log(this.movie);
    //adding movie inside movies array....
    this.tmovies.push(this.movie);
    this.message="Hey! your movie has been upload successfully....";
    this.movie=new Movie();
  }

  public deleteMovie(dmovie):void {
    this.tmovies=this.tmovies.filter(t=>t.title!=dmovie.title);
    this.message="Hey! your movie has been deleted successfully....";
  }
}
