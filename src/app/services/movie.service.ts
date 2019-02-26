import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders, HttpRequest, HttpEvent, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Movie } from '../models/movie.model';
import { ApplicationResponse } from '../models/application-response';
import { Observable } from 'rxjs';
import { AppConfig } from '../config/app.config';


@Injectable({
  providedIn: 'root'
})
export class MovieService {
  //private http: HttpClient
  private ENDPOINT_URI=AppConfig.REST_API_ENDPOINT;
  constructor(private http: HttpClient) {
    //this.http=http;
  }


  public getMovieByMid(_mid):Observable<Movie>{
    //METHOD=GET
       const MOVIES_REST_API=this.ENDPOINT_URI+"/movies/"+_mid;
       return this.http.get<Movie>(MOVIES_REST_API);
  }

  public uploadMovie(movie:Movie,selectedFile :File): Observable<any>{
    console.log("-----service layer method is called!!!!!!!!!!!");
    console.log(movie);

    //But method should be POST
    const MOVIE_UPLOAD_ENDPOINT = this.ENDPOINT_URI+"/movies";
    //return this.http.post(endpoint,vendor,httpOptions);
    let formdata: FormData = new FormData();
    formdata.append('title', movie.title+"");
    formdata.append('year', movie.year+'');
    formdata.append('director', movie.director+"");
    formdata.append('language', movie.language+'');
    formdata.append('story', movie.story+'');
    //Setting selected File object  
    formdata.append('poster', selectedFile);
        //this.http.post(endpoint,vendor,httpOptions);
    //below code no need to remember.................................
    const req = new HttpRequest('POST', MOVIE_UPLOAD_ENDPOINT, formdata, {
      reportProgress: true,
      responseType: 'text'
    });
    //now make a rest api call to upload image with form data
    return this.http.request<ApplicationResponse>(req);
  }

   public deleteMovieByMid(mid:String):Observable<ApplicationResponse>{
    //METHOD=GET
       const MOVIES_DELETE_REST_API=this.ENDPOINT_URI+"/movies/"+mid;
       return this.http.delete<ApplicationResponse>(MOVIES_DELETE_REST_API);
  }

    //fetch();
  //Observable will make your call asynchronous 
  //This code is running on port 4200
  public getMovies():Observable<Movie[]>{
    //METHOD=GET
       const MOVIES_REST_API=this.ENDPOINT_URI+"/tmovies";
       return this.http.get<Movie[]>(MOVIES_REST_API);
  }

  errorHandler(error:HttpErrorResponse){

  }

}
