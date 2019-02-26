import { Component, OnInit } from '@angular/core';
import { Movie } from '../models/movie.model';
import { MovieService } from '../services/movie.service';
import { MovieDataShareService } from '../services/movie-datashare.service';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit {

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
  constructor(private movieService:MovieService,private movieDataShareService:MovieDataShareService) {
    //this.movieService=movieService;
    
  }
  ngOnInit() {
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
    public uploadMovie() :void {
      console.log(this.movie);
      //calling service layer method here
      this.movieService.uploadMovie(this.movie,this.selectedFile).subscribe(data=>{
        console.log("_@)@)@)@)hey uploaded");
        console.log("____this special data...")
        console.log(data.body);
        this.movieDataShareService.addShareMovie(this.movie);
        //because we want to show this on GUI as well
          this.message="Hey! your movie has been upload successfully....";
      });

      //this.remoteMovies.push(this.movie);

   }

 

}
