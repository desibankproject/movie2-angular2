import { Injectable } from '@angular/core';
import { BehaviorSubject, AsyncSubject } from 'rxjs';
import { Movie } from '../models/movie.model';

/**
 * I am creating a service which will be used to share data among
 * two Angular components.....
 */
@Injectable({
    providedIn: 'root'
  })
  export class MovieDataShareService {

    private movieData=new AsyncSubject<Movie>();
    public observableMoview=this.movieData.asObservable();


    /**
     * 
     * @param movie 
     */
    public addShareMovie(movie) : void {
         //we are publishing the data
         this.movieData.next(movie);
         this.movieData.complete();
    }

  }  
    //private http: HttpClient