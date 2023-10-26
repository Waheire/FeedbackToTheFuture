import { Component } from '@angular/core';

@Component({
  selector: 'app-blog-page',
  templateUrl: './blog-page.component.html',
  styleUrls: ['./blog-page.component.css']
})
export class BlogPageComponent {
  blogDetails = [
    {
      imageSrc: '../../../../assets/images/blog/blog-1.jpg',
      imageAlt: 'article 1',
      author: 'Hilda Malow',
      title: 'Regenerative Agriculture Practices',
      content: '',
      singleBlogUrl: '/blog',
    },
    {
      imageSrc: '../../../../assets/images/blog/blog-2.jpg',
      imageAlt: 'article 2',
      author: 'Thiong’o Gachie',
      title: 'Organic farming',
      content: '',
      singleBlogUrl: '/blog',
    },
    {
      imageSrc: '../../../../assets/images/blog/blog-3.jpg',
      imageAlt: 'article 3',
      author: 'Elizabeth Nthenya',
      title: 'Mixed Farming',
      content: '',
      singleBlogUrl: '/blog',
    },
    {
      imageSrc: '../../../../assets/images/blog/blog-1.jpg',
      imageAlt: 'article 1',
      author: 'Hilda Malow',
      title: 'Regenerative Agriculture Practices',
      content: '',
      singleBlogUrl: '/blog',
    },
    {
      imageSrc: '../../../../assets/images/blog/blog-2.jpg',
      imageAlt: 'article 2',
      author: 'Thiong’o Gachie',
      title: 'Organic farming',
      content: '',
      singleBlogUrl: '/blog',
    },
    {
      imageSrc: '../../../../assets/images/blog/blog-3.jpg',
      imageAlt: 'article 3',
      author: 'Elizabeth Nthenya',
      title: 'Mixed Farming',
      content: '',
      singleBlogUrl: '/blog',
    },

  ]
}
