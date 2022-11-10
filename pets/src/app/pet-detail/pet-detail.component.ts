import { DomElementSchemaRegistry } from '@angular/compiler';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Pet } from '../pet';

@Component({
	selector: 'app-pet-detail',
	templateUrl: './pet-detail.component.html',
	styleUrls: ['./pet-detail.component.css']
})
export class PetDetailComponent implements OnInit {

	// This component will manage a single instance of Pet.
	// So we need an instance of Pet
	// three operations:
	// View the pet (R)
	// Edit the pet (U)
	//		To make it editable, add a bool for editMode
	//		Make two sets of controls, one for view mode
	//		and one for edit mode, and make them toggleable
	// Delete the pet (D)
	// There won't be a Create part of CRUD
	// Let's add styling to the .css file 


	@Input() ThePet: Pet = {
		name: "Jager",
		species: "Cat",
		born: 2016
	}

	editMode: boolean = false;

	editName: string='';
	editSpecies: string='';
	editBorn: number= 0;

	//Here is the event emitter. The event will be called Delete
	@Output() delete: EventEmitter<Pet> = new EventEmitter<Pet>();



	goToEditMode() {
		this.editMode = true;
		// PrePopulate the edit boxes through these variables.
		this.editName = this.ThePet.name;
		this.editSpecies = this.ThePet.species;
		this.editBorn = this.ThePet.born;
	}

	cancel() {
		// Cancel is easy, just go back to the non-edit mode.
		this.editMode=false;
	}

	save() {
		// Two things: Save the edit boxes into the object
		// Go back to non-edit mode.
		this.ThePet.name = this.editName;
		this.ThePet.species = this.editSpecies;
		this.ThePet.born = this.editBorn;
		this.editMode=false;
	}

	deleteMe() {
		// Send the message! Send out the object with it as the payload.
		this.delete.emit(this.ThePet);
	}













	constructor() { }

	ngOnInit(): void {
	}

}
