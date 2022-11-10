import { Injectable } from '@angular/core';
import { Game } from './game';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  TheList:Game[] = [
    {title: 'Game1', year: 2020, console: false},
    {title: 'Game2', year: 2022, console: true}
  ]

  constructor() { }
}
