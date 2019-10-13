import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { User } from './user.model';
import { User1 } from './user1.model';
import { Tags } from './tags.model';
import { Post } from './post.model';
import { Post1 } from './post1.model';
import { Post2 } from './post2.model';
import { Comment } from './Comment.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class DataService {
  apiUrlUser = 'https://n161.tech/api/dummyapi/user';               //done
  apiUrlUser1 = 'https://n161.tech/api/dummyapi/user/1';            //done
  apiUrlTagList = 'https://n161.tech/api/dummyapi/tag';             //done 
  apiUrlPost = 'https://n161.tech/api/dummyapi/post';               //done
  apiUrlPost1 = 'https://n161.tech/api/dummyapi/post/1';            //done
  apiUrlPost2 = 'https://n161.tech/api/dummyapi/user/1/post';       //done
  apiUrlPost3 = 'https://n161.tech/api/dummyapi/tag/common/post';   //same with post
  apiUrlComment = 'https://n161.tech/api/dummyapi/post/1/comment';  //done

  constructor(private _http: HttpClient) {}

  getUser(): Observable<User[]> {
    return this._http.get<User[]>(this.apiUrlUser);
  }

  getUser1(): Observable<User1[]> {
    return this._http.get<User1[]>(this.apiUrlUser1);
  }

  getTags(): Observable<Tags[]>{
    return this._http.get<Tags[]>(this.apiUrlTagList);
  }

  getPost(): Observable<Post[]> {
    return this._http.get<Post[]>(this.apiUrlPost);
  }

  getPost1(): Observable<Post1[]> {
    return this._http.get<Post1[]>(this.apiUrlPost1);
  }

  getPost2():Observable<Post2[]> {
    return this._http.get<Post2[]>(this.apiUrlPost2);
  }

  getComment(): Observable<Comment[]> {
    return this._http.get<Comment[]>(this.apiUrlComment);
  }

}
