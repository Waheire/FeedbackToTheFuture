import { Component, Input } from '@angular/core';

interface singleArticle {
  id: string;
  imageSrc: string;
  imageAlt: string;
  author: string;
  title: string;
  content: string;
}

interface blogHeder {
  title: string;
}

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {

  @Input() articles: singleArticle[] = [];
  @Input() blogHeaders: blogHeder[] = [];

  // Method to extract the first two sentences
  getFirstTwoSentences(content: string): string {
    const sentences = content.split(/(?<=[.!?])\s+/);
    return sentences.slice(0, 1).join(' ');
  }
}
