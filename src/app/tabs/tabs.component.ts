import { Component, OnInit } from '@angular/core';
import {StarWarsService} from "../star-wars.service";

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {
  // characters : { name: string; side: string; }[] | undefined;
  // chosenList = 'all';
  // swService: StarWarsService;

  // constructor(swService: StarWarsService) {
  //   this.swService = swService;
  // }

  constructor() {

  }

  ngOnInit(): void {
  }

  // onChoose(side: string) {
  //   this.chosenList = side;
  // }

  // getCharacters() {
  //   this.characters = this.swService.getCharacters(this.chosenList);
  //   return this.characters;
  // }

}
