import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { ActivatedRoute, Params } from '@angular/router';

import { Hero, Universe } from "../../data.service";
import { HeroService } from '../../hero.service';

@Component({
  selector: 'my-hero-detail',

  templateUrl: './hero-detail.component.html',

  styleUrls: ['./hero-detail.component.css'],
})
export class HeroDetailComponent implements OnInit {
  @Input() hero: Hero;

  @Output() close = new EventEmitter();

  error: any;

  navigated = false; // true if navigated here

  constructor(
    private heroService: HeroService,

    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      if (params['id'] !== undefined) {
        const id = +params['id'];

        this.navigated = true;

        this.hero = this.heroService.getHero(id);
      } else {
        this.navigated = false;

        this.hero = {
          id: 0,

          name: '',

          universe: Universe.DC,
        };
      }
    });
  }

  save(): void {
    this.heroService.addHero(this.hero);

    this.goBack(this.hero);
  }

  goBack(savedHero: Hero = null): void {
    this.close.emit(savedHero);

    if (this.navigated) {
      window.history.back();
    }
  }
}
