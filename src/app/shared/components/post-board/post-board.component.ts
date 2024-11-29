import { Component } from '@angular/core';
import { Post } from '../../interfaces/post.interface';
import { PostService } from '../../../core/services/post-board-service/post-board.service';

@Component({
  selector: 'post-board',
  templateUrl: './post-board.component.html',
  styleUrls: ['./post-board.component.scss']
})
export class PostBoardComponent {
  posts: Post[] = [];
  author: string = '';
  content: string = '';

  constructor(private postService: PostService) {
    this.refreshPosts();
  }

  refreshPosts(): void {
    this.posts = this.postService.getPosts();
  }

  addPost(): void {
    if (this.author.trim() && this.content.trim()) {
      this.postService.addPost(this.author, this.content);
      this.refreshPosts();
      this.clearForm();
    }
  }

  clearForm(): void {
    this.author = '';
    this.content = '';
  }
}
