import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { Hero } from '../../data.service';

import { HeroService } from '../../hero.service';

@Component({
  selector: 'my-heroes',

  templateUrl: './heroes.component.html',

  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];

  selectedHero: Hero;

  addingHero = false;

  error: any;

  showNgFor = false;

  constructor(private router: Router, private heroService: HeroService) {}

  public getHeroes(): void {
    this.heroes = this.heroService.getHeroes();
  }

  public addHero(): void {
    this.addingHero = true;

    this.selectedHero = null;
  }

  public close(savedHero: Hero): void {
    this.addingHero = false;

    if (savedHero) {
      this.getHeroes();
    }
  }

  public deleteHero(hero: Hero, event: any): void {
    event.stopPropagation();

    this.heroService.delete(hero);

    this.heroes = this.heroes.filter((h) => h !== hero);

    if (this.selectedHero === hero) {
      this.selectedHero = null;
    }
  }

  public ngOnInit(): void {
    this.getHeroes();
  }

  public onSelect(hero: Hero): void {
    this.selectedHero = hero;

    this.addingHero = false;
  }

  public gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }
}
