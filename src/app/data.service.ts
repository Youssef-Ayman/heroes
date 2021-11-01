import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  public heroes: Hero[] = [
    { id: 11, name: 'Mr. Nice', universe: Universe.DC },

    { id: 12, name: 'Narco', universe: Universe.DC },

    { id: 13, name: 'Bombasto', universe: Universe.DC },

    { id: 14, name: 'Celeritas', universe: Universe.MC },

    { id: 15, name: 'Magneta', universe: Universe.MC },

    { id: 16, name: 'RubberMan', universe: Universe.MC },

    { id: 17, name: 'Dynama', universe: Universe.MC },

    { id: 18, name: 'Dr IQ', universe: Universe.DC },

    { id: 19, name: 'Magma', universe: Universe.DC },

    { id: 20, name: 'Tornado', universe: Universe.DC },
  ];

  public addHero(hero: Hero) {
    this.heroes.push(hero);
  }

  public deleteHero(id: number) {
    this.heroes = this.heroes.filter((x) => x.id != id);
  }

  public getHeroById(id: number): Hero {
    return this.heroes.find((x) => x.id == id);
  }
}

export interface Hero {
  id: number;

  name: string;

  universe: Universe;
}

export enum Universe {
  MC = 'MC',

  DC = 'DC',
}
