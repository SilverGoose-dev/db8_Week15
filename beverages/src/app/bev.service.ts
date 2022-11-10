import { Injectable } from '@angular/core';
import { Beverage } from './beverage';

@Injectable({
	providedIn: 'root'
})
export class BevService {

	TheList: Beverage[] = [
		{name: 'Pepsi', alcohol: false, size: 20},
		{name: 'Founders Porter', alcohol: true, size: 16}
	]

	// Add a getter function
	get(): Beverage[] {
		return this.TheList;
	}
	constructor() { }
}
