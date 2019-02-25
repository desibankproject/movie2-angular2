import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movie.service';
import { Movie } from '../models/movie.model';

@Component({
  selector: 'app-show-movies',
  templateUrl: './show-movies.component.html',
  styleUrls: ['./show-movies.component.css']
})
export class ShowMoviesComponent implements OnInit {

  title = 'movie2';
  public message:String="";
  //Movie movie=new Movie();
  //instantiating blank object of the Movie
  public movie:Movie=new Movie();
  public  selectedFile : File;
  public buttonTitle="Add Movie"; 
  public tmovies:Movie[]=[];
  public imagePreview:String="";

  public color:String="blue";

  public remoteMovies:Movie[]=[];
  public error:String=""; 
  //private movieService:MovieService;
  constructor(private movieService:MovieService) {
    //this.movieService=movieService;
    
  }

  ngOnInit() {
    this.movieService.getMovies().subscribe(response=>{
      console.log("Loading data from");
      console.log(response);
      this.remoteMovies=response;
  },  error =>this.error = error);
  }

  
  public deleteMovie(dmovie):void {
    this.movieService.deleteMovieByMid(dmovie.mid).subscribe(data=>{
      console.log("Deleting the movie");
      console.log(data);
      this.remoteMovies=this.remoteMovies.filter(t=>t.mid!=dmovie.mid);
      this.message="Hey! your movie has been deleted successfully....";
    });
   }

}
