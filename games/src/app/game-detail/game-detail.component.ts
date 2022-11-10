import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Game } from '../game';

@Component({
	selector: 'app-game-detail',
	templateUrl: './game-detail.component.html',
	styleUrls: ['./game-detail.component.css']
})
export class GameDetailComponent implements OnInit {

	editMode: boolean = false;

	editTitle: string = '';
	editYear: number = 0;
	editConsole: boolean=false;
	editPC: boolean=false;

	@Input() TheGame: Game = {
		
		title: "Overwatch",
		year: 2016,
		console: true,
		PC: true
	};


	@Output() delete: EventEmitter<Game> = new EventEmitter<Game>();

	toEdit() {
		this.editMode = true;
		this.editTitle = this.TheGame.title;
		this.editYear = this.TheGame.year;
		this.editConsole = this.TheGame.console;
		this.editConsole = this.TheGame.PC;
	};

	toDelete() {
		this.delete.emit(this.TheGame);
	};

	save() {
		this.editMode = false;
		this.TheGame.title = this.editTitle;
		this.TheGame.year = this.editYear;
		this.TheGame.console = this.editConsole;
		this.TheGame.PC = this.editPC;

	}

	cancel() {
		this.editMode = false;
	}

	constructor() { }

	ngOnInit(): void {
	}

}
