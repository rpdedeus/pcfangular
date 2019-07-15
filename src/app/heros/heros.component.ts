import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
})
export class HerosComponent implements OnInit {

  hero = "Windstorm";

  constructor() { }

  ngOnInit() {
  }

}
