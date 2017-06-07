import { HeroService } from './services/hero/hero.service';
import { Hero } from './models/hero';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  providers: [HeroService],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private heroService: HeroService) {}

  title = 'Tour of Heroes';
  heroes: Hero[];
  selectedHero: Hero;

  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  ngOnInit(): void {
    this.getHeroes();
  }
}
