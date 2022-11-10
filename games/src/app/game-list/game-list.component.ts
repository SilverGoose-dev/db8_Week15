import { Component, OnInit } from '@angular/core';
import { Game } from '../game';
import { GameService } from '../game.service';

@Component({
	selector: 'app-game-list',
	templateUrl: './game-list.component.html',
	styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {

	newTitle: string='';
	newYear: number=0;
	newConsole: boolean = false;
	newPC: boolean = false;

	add() {
		this.GameSrv.get().push(
			{
				title: this.newTitle,
				year: this.newYear,
				console: this.newConsole,
				PC: this.newPC
			}
		);
		this.newTitle='';
		this.newYear=0;
		this.newConsole=false;
		this.newPC=false;
	};

	deleteGame(whichGame: Game) {
		for (let index: number = 0; index <= this.GameSrv.get().length; index++) {
			if (this.GameSrv.get()[index] == whichGame) {
				//Remove from list
				this.GameSrv.get().splice(index, 1);
				return;
			}
		}
	};


	constructor(public GameSrv: GameService) { }

	ngOnInit(): void {
	}

}
