import { of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from '../../../../environments/environment';
import { Post } from '../../../shared/interfaces/post.interface';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private posts: Post[] = [];
  private nextId = 1;

  getPosts(): Post[] {
    return [...this.posts]; // Retorna uma cópia da lista para evitar mutações diretas
  }

  addPost(author: string, content: string): Post {
    const newPost: Post = {
      id: this.nextId++,
      author,
      content,
      timestamp: new Date()
    };
    this.posts.unshift(newPost);
    return newPost;
  }

  fetchPostsFromApi(): void {
    console.log('Simulação de conexão com API');
  }
}
