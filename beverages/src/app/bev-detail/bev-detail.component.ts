import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Beverage } from '../beverage';

@Component({
	selector: 'app-bev-detail',
	templateUrl: './bev-detail.component.html',
	styleUrls: ['./bev-detail.component.css']
})
export class BevDetailComponent implements OnInit {


	@Input() TheBev: Beverage = {
		name: 'test name',
		alcohol: true,
		size: 10
	};

	@Output() delete: EventEmitter<Beverage> = new EventEmitter<Beverage>();

	constructor() { }

	ngOnInit(): void {
	}


	doDelete() {
		this.delete.emit(this.TheBev);
	}




}
