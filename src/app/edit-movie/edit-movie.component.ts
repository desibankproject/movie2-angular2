import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router, ParamMap } from '@angular/router';
import { Movie } from '../models/movie.model';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-edit-movie',
  templateUrl: './edit-movie.component.html',
  styleUrls: ['./edit-movie.component.css']
})
export class EditMovieComponent implements OnInit {
  public buttonTitle="Update Movie"; 
  title = 'movie2';
  public message:String="";
  //Movie movie=new Movie();
  //instantiating blank object of the Movie
  public movie:Movie=new Movie();
  public  selectedFile : File;
  public imagePreview:String="";

  constructor(private route:ActivatedRoute,private router:Router,private movieService:MovieService) { }

  ngOnInit() {
    //Reading value which is coming in URL Parameter
      this.route.paramMap.subscribe((params:ParamMap)=>{
        //hello mid is mongo id
        let mid=params.get('mid');
        console.log("mid = "+mid);
        this.movieService.getMovieByMid(mid).subscribe(mdata=>{
             this.movie=mdata;
             this.imagePreview="http://localhost:4000/movies/images/"+mid;
        });
      });
  }

}
