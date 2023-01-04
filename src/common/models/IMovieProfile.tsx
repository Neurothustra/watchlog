export interface IMovieProfile {
	UserIds: string[]; // associate everyone who saw this movie here
	DateWatched: Date;
	Actors: string[];
	Awards: string;
	Country: string;
	Director: string;
	Genre: string;
	Language: string;
	Metascore: string;
	Plot: string;
	Poster: string;
	Rated: string;
	Ratings: string[];
	Released: string;
	Title: string;
	Type: string;
	Writer: string[];
	Year: string;
	imdbID: string;
	imdbRating: string;
	imdbVotes: string;
	totalSeasons: string;
}
