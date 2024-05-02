import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, NavigationExtras } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { MoviesLService } from '../services/movies-l.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {

  @ViewChild('modal') modal: ElementRef | undefined;
  idForSimilar: any;

  MovieSimiler: any[] = [];
  movieDetail: any;
  movieId: any;
  movieG: any;
  movieImg: any;
  movieCasts: any;
  movieCrew: any;
  movieVideos: any;
  movieTrailer: any;
  movieTrailerKey: number | undefined;
  youtubeEmbedUrl: any;

  // data of backdrops images
  movieBackdropImages: any;
  // data of logo images
  movieLogoImages: any;
  // data of posters images
  moviePosterImages4: any;
  // similar data
  similarMovies: any;
  movieVideoslol: any;
  currentTrailerIndex: number = 0;
  movieTrailerToggle: any[] = [];

  constructor(
    private http: HttpClient,
    private activte: ActivatedRoute,
    private movieD: MoviesLService,
    private router: Router,
    private cdr: ChangeDetectorRef,
    private sanitizer: DomSanitizer
  ) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        console.log('Navigation ended:', event.url);
      }
    });
  }

  ngOnInit(): void {
    this.activte.paramMap.subscribe((params) => {
      this.movieId = params.get('id');

      // Fetching movie details
      this.movieD.getMovieDetail(this.movieId).subscribe((data: any) => {
        this.movieDetail = data;
        this.movieG = data.genres;
        this.movieImg = data.backdrop_path;

        // Fetching movie cast details
        this.movieD.getMovieCast(this.movieId).subscribe((data) => {
          this.movieCasts = data.cast;
          this.movieCrew = data.crew;

          // Fetching movie backdrop images, logo images, and posters images
          this.movieD.getMovieBackdrops(this.movieId).subscribe((data) => {
            this.movieBackdropImages = data.backdrops;
            this.movieLogoImages = data.logos;
            this.moviePosterImages4 = data.posters.slice(0, 4);

            // Fetching movie videos
            this.movieD.getMovieVideos(this.movieId).subscribe((data) => {
              this.movieVideoslol = data.results;

              // Fetching similar movies
              this.movieD.getSimilarData(this.movieId).subscribe((similarData) => {
                this.MovieSimiler = similarData.results;
                this.cdr.detectChanges(); // Ensure change detection is triggered
              });
            });
          });
        });
      });
    });
  }

  navigate(id: any) {
    this.router.navigate(["details", id]);
  }

  getSafeUrl(videoKey: string): SafeResourceUrl {
    const youtubeUrl = `https://www.youtube.com/embed/${videoKey}`;
    return this.sanitizer.bypassSecurityTrustResourceUrl(youtubeUrl);
  }

  
  navigateToDetails(newId: string) {
    const navigationExtras: NavigationExtras = {
      replaceUrl: true
    };
    this.router.navigate(['/details', newId], navigationExtras);
  }
      navigatToVideos() {
        const NavigationExtras: NavigationExtras = {
          replaceUrl:true
        };
        this.router.navigate(["/MovieVideos/", this.movieId],NavigationExtras);
      }
}
