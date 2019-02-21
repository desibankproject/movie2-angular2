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

  public onFileChanged(event):void {
    console.log("_________NAGENDRA____________");
    console.log(event.target.files[0]);
    //hey we have to upload this file on server using rest api
    this.selectedFile = event.target.files[0];

    //Special code to preview the image
    //Below Code for image preview only ...this is not mandetory !!!
    var reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    let timagePreview;
    reader.onload = (event) => {
                      // reading selected image 
       timagePreview = (<FileReader>event.target).result;
       //data:image/jpeg;base64
       this.imagePreview=timagePreview;
       console.log(this.imagePreview);
     //this.imageShow = URL of the image
    }

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



   public uploadMovie() :void {
      console.log(this.movie);
      //calling service layer method here
      this.movieService.uploadMovie(this.movie,this.selectedFile).subscribe(data=>{
        console.log("_@)@)@)@)hey uploaded");
        console.log("____this special data...")
        console.log(data.body);
        //because we want to show this on GUI as well
          this.message="Hey! your movie has been upload successfully....";
      });

      this.remoteMovies.push(this.movie);

   }

  //This method we want to call  when 
  //add movie button is clicked........
  public addMovie():void {
    console.log("@)@)@))@(@(@(@");
    console.log(this.movie);
    const lmovie=this.movie;
    //Check this object exist of not
    let update=false;
    this.tmovies.forEach((t,i)=>{
        console.log(t);
        console.log(i);
        console.log("____updated record!");
        console.log(lmovie);
        if(t.title===lmovie.title){
          update=true;
          this.tmovies[i]=lmovie;
          console.log(t);
          //arr1.map(obj => arr2.find(o => o.id === obj.id) || obj);
        }
     });

    //adding movie inside movies array....
    if(!update) {
      this.tmovies.push(this.movie);
      this.message="Hey! your movie has been upload successfully....";
    }else{
      this.message="Hey! your movie has been update successfully....";
    }
    
    this.buttonTitle="Add Movie";
    this.movie=new Movie();
  }

  public deleteMovie(dmovie):void {
    this.movieService.deleteMovieByMid(dmovie.mid).subscribe(data=>{
      console.log("Deleting the movie");
      console.log(data);
      this.remoteMovies=this.remoteMovies.filter(t=>t.mid!=dmovie.mid);
      this.message="Hey! your movie has been deleted successfully....";
    });
   }

  public editMovie(emovie):void {
    this.buttonTitle="Update Movie";
    //Creating clone of the edited movie
    this.movie = Object.assign({}, emovie);
    //this.movie=emovie;
  }

  
}
