import { Injectable } from '@angular/core';
import { Game } from './game';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  TheList:Game[] = [
    {title: 'Overwatch', year: 2016, console: true, PC: true},
    {title: 'Super Mario Bros', year: 1986, console: true, PC: false}
  ];
  
  constructor() { }

  get(): Game[] {
    return this.TheList;
  }

}
