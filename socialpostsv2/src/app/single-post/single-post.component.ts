import { outputAst } from '@angular/compiler';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Post } from '../post';
import { SocialPostsComponent } from '../social-posts/social-posts.component';

@Component({
	selector: 'app-single-post',
	templateUrl: './single-post.component.html',
	styleUrls: ['./single-post.component.css']
})
export class SinglePostComponent implements OnInit {

	@Input() ThePost: Post = {
		title: "Big Test",
		thought: "This is the big test"
	}



	@Output() remove: EventEmitter<Post> = new EventEmitter<Post>();

	constructor() { }

	ngOnInit(): void {
	}

	delete() {
		this.remove.emit(this.ThePost);
	}



}
