import { Injectable } from '@angular/core';

import { DataService, Hero } from './data.service';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  constructor(private dataService: DataService) {}

  public getHeroes() {
    return this.dataService.heroes;
  }

  public getHero(id: number): Hero {
    return this.dataService.getHeroById(id);
  }

  public addHero(hero: Hero) {
    this.dataService.addHero(hero);
  }

  public delete(hero: Hero) {
    this.dataService.deleteHero(hero.id);
  }
}
