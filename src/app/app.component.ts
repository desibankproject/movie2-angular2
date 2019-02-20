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
  public buttonTitle="Add Movie"; 
  public tmovies:Movie[]=[];

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
    this.tmovies=this.tmovies.filter(t=>t.title!=dmovie.title);
    this.message="Hey! your movie has been deleted successfully....";
  }

  public editMovie(emovie):void {
    this.buttonTitle="Update Movie";
    //Creating clone of the edited movie
    this.movie = Object.assign({}, emovie);
    //this.movie=emovie;
  }

  
}
