import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { SimilarMoviesComponent } from './similar-movies/similar-movies.component';
import { MovieVideosComponent } from './movie-videos/movie-videos.component';
import { PopularMoviesComponent } from './popular-movies/popular-movies.component';
import { NewReleaseComponent } from './new-release/new-release.component';
import { TopRatedComponent } from './top-rated/top-rated.component';
import { UpCommingComponent } from './up-comming/up-comming.component';
import { SearchComponent } from './search/search.component';
import { PersonComponent } from './person/person.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"details/:id",component:MovieDetailComponent},
    {path:"actor/:id",component:PersonComponent},
  {path:"popular",component:PopularMoviesComponent},
  {path:"newRelease",component:NewReleaseComponent},
  {path:"topRated",component:TopRatedComponent},
  {path:"upcomming",component:UpCommingComponent},
  {path:"MovieVideos/:id",component:MovieVideosComponent},
  {path:"search/:movie",component:SearchComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
