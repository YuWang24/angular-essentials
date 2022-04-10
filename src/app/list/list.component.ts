import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {StarWarsService} from "../star-wars.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit, OnDestroy {
  // @Input() characters: any;
  characters : { name: string; side: string; }[] | undefined;
  activatedRoute: ActivatedRoute;
  swService: StarWarsService;
  loadedSide = 'all';
  subscription: Subscription | undefined
    // @Output() sideAssigned = new EventEmitter<{name: string, side:string}>();

  // @Output() sideAssigned = new EventEmitter<{name: string, side:string}>();

  constructor(activatedRoute: ActivatedRoute, swService: StarWarsService) {
    this.activatedRoute = activatedRoute;
    this.swService = swService;
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      (params) => {
        this.characters = this.swService.getCharacters(params['side']);
        this.loadedSide = params['side'];
      }
    );
    this.subscription = this.swService.charactersChanged.subscribe(
      () => {
        this.characters = this.swService.getCharacters(this.loadedSide);
      }
    );
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  // onSideAssigned(charInfo: { name: string; side: string; } | undefined) {
  //   this.sideAssigned.emit(charInfo);
  // }

}