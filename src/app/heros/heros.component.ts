import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
})
export class HerosComponent implements OnInit {

  hero = {
    id: 1,
    name: "Windstorm"
  }

  constructor() { }

  ngOnInit() {
  }

}
