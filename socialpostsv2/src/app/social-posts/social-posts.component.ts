import { Component, OnInit } from '@angular/core';
import { Post } from '../post';

@Component({
	selector: 'app-social-posts',
	templateUrl: './social-posts.component.html',
	styleUrls: ['./social-posts.component.css']
})
export class SocialPostsComponent implements OnInit {

	showAdd: boolean = false;

	Posts: Post[] = [
		{title: "Testing", thought: "Everything in life needs to be tested"},
		{title: "Failure", thought: "Failure is the path to success"}
	]

	newTitle: string = '';
	newThought: string = '';
	

	constructor() { }

	ngOnInit(): void {
	}

	showAddForm() {
		this.showAdd=true;
	}

	add() {
		this.Posts.push({
			title: this.newTitle,
			thought: this.newThought
		});

		this.newTitle='';
		this.newThought='';
	}

	cancel() {
		this.newTitle='';
		this.newThought='';
		this.showAdd=false;
	}

	removeItem(whichPost: Post) {
		for (let index=0; index < this.Posts.length; index++) {
			if (this.Posts[index] == whichPost) {
				this.Posts.splice(index, 1);
				return;
			  }
		}
	}

}
