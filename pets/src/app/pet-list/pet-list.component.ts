import { Component, OnInit } from '@angular/core';
import { Pet } from '../pet';
import { PetsService } from '../pets.service';

@Component({
	selector: 'app-pet-list',
	templateUrl: './pet-list.component.html',
	styleUrls: ['./pet-list.component.css']
})
export class PetListComponent implements OnInit {

	// We built pet-detail first. Now let's build pet-list
	// We will have a list of pets. This component will deisplay the list
	// with each pet usign the pet-detail component.
	// We will have a foirm for adding a pet
	// We will handle the delete event that comes from the pet-detail component

	// We'll create a list and temporarily put test data in it
	// But then after we see it's working for displaying it we will remove


	// then we'll add the view for displaying them. 
	// The view will be a for loop that goes through tht list and send each
	// individual one into a pet-detail component. 

	//TheList: Pet[] = [
		// After testing, let's remove the test data
		//{name: 'Muffin', species: 'Cat', born: 1979},
		//{name: 'Donald Duck', species: 'Cat', born: 2007}
	//]

	// For the add:
	//		We create the form
	//		We make variables for each input box and bind them
	//		We include an add button whose event handler creates a new pet
	//		and adds to the list

	newName: string='';
	newSpecies: string='';
	newBorn: number=0;


	add() {
		// Create a new Pet object and add to the list
		// Then clear out the input boxes
		this.PetSrv.get().push(
			{
				name: this.newName,
				species: this.newSpecies,
				born: this.newBorn
			}
		);
		this.newName='';
		this.newSpecies='';
		this.newBorn=0;
	}

	deletePet(whichPet: Pet) {
		for (let index: number = 0; index <= this.PetSrv.get().length; index++) {
			if (this.PetSrv.get()[index] == whichPet) {
				//Remove from list
				this.PetSrv.get().splice(index, 1);
				return;
			}
		}
	}
	// Let's have Angular give us the one instance of the pet list from the 
	// PetService

	//We now have an insance of PetService stored in a var call PetSrv
	// PetSrv is now a memever of the class and we can access it through this.PetSrv
	constructor(public PetSrv: PetsService) { }

	ngOnInit(): void {
	}

}
