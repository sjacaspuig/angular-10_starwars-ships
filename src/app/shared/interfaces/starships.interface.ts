import { Starship } from './straship.interface';

export interface Starships {
    count: number;
    next: string;
    previous: string;
    results: Starship[];
}
