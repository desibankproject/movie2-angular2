import { Component, OnInit } from '@angular/core';
import {Movie} from './models/movie.model'
import { MovieService } from './services/movie.service';
//import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'movie2';
  public message:String="";
  //Movie movie=new Movie();
  //instantiating blank object of the Movie
  public movie:Movie=new Movie();
  public  selectedFile : File;
  public buttonTitle="Add Movie"; 
  public tmovies:Movie[]=[];
  public imagePreview:String="";

  public remoteMovies:Movie[]=[];

  //private movieService:MovieService;
  constructor(private movieService:MovieService) {
    //this.movieService=movieService;
    
  }

 

  ngOnInit() {
      //data will hold Movie[]
     /// let response: Observable<Movie[]>=this.movieService.getMovies();
    //  response.subscribe(data=>{
      //  console.log("Loading data from");
      //  console.log(data);
      //});
      this.movieService.getMovies().subscribe(response=>{
          console.log("Loading data from");
          console.log(response);
          this.remoteMovies=response;
      });
   
  }



   


  public editMovie(emovie):void {
    this.buttonTitle="Update Movie";
    //Creating clone of the edited movie
    this.movie = Object.assign({}, emovie);
    //this.movie=emovie;
  }

  
}
