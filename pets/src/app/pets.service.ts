import { Injectable } from '@angular/core';
import { Pet } from './pet';

// "Injectable" just means we can share it with other components in our app. 
// The way we share it is nothing short of bizarre, and we'll see it when we
// add it to the PetListComponent class

@Injectable({
	providedIn: 'root'
})
export class PetsService {


	TheList: Pet[] = [
		{name: 'Muffin', species: 'Cat', born: 1979},
		{name: 'Donald Duck', species: 'Cat', born: 2007}
	];
	constructor() { }

	// Let's add a getter so anyone who has access to an instance
	// of this class can easily get the list from it

	get(): Pet[] {
		return this.TheList;
	}
}
