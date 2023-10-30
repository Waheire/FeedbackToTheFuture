import { Component } from '@angular/core';
import { articles } from 'src/app/Data/articles';

@Component({
  selector: 'app-blog-page',
  templateUrl: './blog-page.component.html',
  styleUrls: ['./blog-page.component.css']
})
export class BlogPageComponent {
  articles = articles;
  
  blogHeader = [
    {
      title: 'Latest News & Articles '
    }
  ]
}
