import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import {HttpClientModule} from "@angular/common/http";
import { NewReleaseComponent } from './new-release/new-release.component';
import { PopularMoviesComponent } from './popular-movies/popular-movies.component';
import { TopRatedComponent } from './top-rated/top-rated.component';
import { UpCommingComponent } from './up-comming/up-comming.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { PostersComponent } from './posters/posters.component';
import { MovieVideosComponent } from './movie-videos/movie-videos.component';
import { ReviewComponent } from './review/review.component';
import { SimilarMoviesComponent } from './similar-movies/similar-movies.component';
import { FooterComponent } from './footer/footer.component';
import { SearchComponent } from './search/search.component'
import { FormBuilder, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PersonComponent } from './person/person.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    NewReleaseComponent,
    PopularMoviesComponent,
    TopRatedComponent,
    UpCommingComponent,
    MovieDetailComponent,
    PostersComponent,
    MovieVideosComponent,
    ReviewComponent,
    SimilarMoviesComponent,
    FooterComponent,
    SearchComponent,
    PersonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
