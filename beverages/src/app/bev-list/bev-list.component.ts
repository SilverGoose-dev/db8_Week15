import { Component, OnInit } from '@angular/core';
import { BevService } from '../bev.service';
import { Beverage } from '../beverage';

@Component({
	selector: 'app-bev-list',
	templateUrl: './bev-list.component.html',
	styleUrls: ['./bev-list.component.css']
})
export class BevListComponent implements OnInit {

	//Variables for the inputs for a new beverage

newName:string='';
newAlcohol:boolean=false;
newSize: number = 0;


	constructor(public BevSrv: BevService) { }

	ngOnInit(): void {
	}

	doDelete(whichBev: Beverage) {
		for (let i = 0; i < this.BevSrv.get().length; i++) {
			if(this.BevSrv.get()[i] == whichBev) {
				this.BevSrv.get().splice(i,1);
				return;
			}
		}
	}

	addOne() {
		this.BevSrv.get().push(
			{
				name: this.newName,
				alcohol: this.newAlcohol,
				size: this.newSize
			}
		);

		this.newName = '';
		this.newAlcohol = false;
		this.newSize=0;
	}
}
