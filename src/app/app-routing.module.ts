import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShowMoviesComponent } from './show-movies/show-movies.component';
import { AddMovieComponent } from './add-movie/add-movie.component';
import { EditMovieComponent } from './edit-movie/edit-movie.component';

const routes: Routes = [
{path:'',redirectTo:'movies',pathMatch:'full'},
{path:'movies',component:ShowMoviesComponent},
{path:'editMovie/:mid',component:EditMovieComponent},
{path:'addMovie',component:AddMovieComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
