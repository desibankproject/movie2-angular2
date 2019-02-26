import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpErrorInterceptor } from './error-handler';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AddMovieComponent } from './add-movie/add-movie.component';
import { ShowMoviesComponent } from './show-movies/show-movies.component';
import { EditMovieComponent } from './edit-movie/edit-movie.component';
import { ChangecolorDirective } from './directive/changecolor.directive';
import { ShowHideDirective } from './directive/show-hide.directive';
import { ShowimageComponent } from './showimage/showimage.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AddMovieComponent,
    ShowMoviesComponent,
    EditMovieComponent,
    ChangecolorDirective,
    ShowHideDirective,
    ShowimageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
