import { Component, OnInit } from '@angular/core';

import { HEROES } from '../mock-heros';

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
})
export class HerosComponent implements OnInit {

  heroes = HEROES;

  constructor() { }

  ngOnInit() {
    console.log(this.heroes);
  }

}
