import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { User } from './user.model';
import { User1 } from './user1.model';
import { Tags } from './tags.model';
import { Post } from './post.model';
import { Post1 } from './post1.model';
import { Post2 } from './post2.model';
import { Comment } from './comment.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  users$: User[];
  users1$: User1[];
  tags$: Tags[];
  post$: Post[];
  post1$: Post1[];
  post2$: Post2[];
  comment$: Comment[];
  public errorMsg;

  constructor(private dataService: DataService){

  }

  ngOnInit() {
    this.dataService.getUser().subscribe(data => this.users$ = data);
    this.dataService.getUser1().subscribe(data => this.users1$ = data);
    this.dataService.getTags().subscribe(data => this.tags$ = data);
    this.dataService.getPost().subscribe(data => this.post$ = data);
    this.dataService.getPost1().subscribe(data => this.post1$ = data);
    this.dataService.getPost2().subscribe(data => this.post2$ = data);
    this.dataService.getComment().subscribe(data => this.comment$ = data);
  }
}