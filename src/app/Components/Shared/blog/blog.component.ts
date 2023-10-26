import { Component, Input } from '@angular/core';

interface singleBlog {
  imageSrc: string;
  imageAlt: string;
  author: string;
  title: string;
  content: string;
  singleBlogUrl: string;
}

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {

  @Input() blogDetails: singleBlog[] = [];

}
