import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie } from '../models/movie.model';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  //private http: HttpClient
  constructor(private http: HttpClient) {
    //this.http=http;
  }
  //fetch();
  //Observable will make your call asynchronous 
  //This code is running on port 4200
  public getMovies():Observable<Movie[]>{
    //METHOD=GET
       const MOVIES_REST_API="http://localhost:4000/tmovies";
       return this.http.get<Movie[]>(MOVIES_REST_API);
  }

}
