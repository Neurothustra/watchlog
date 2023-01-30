import { IMovieProfile } from './IMovieProfile';

export interface IUser {
	Uid: string;
	Movies: IMovieProfile[];
}
