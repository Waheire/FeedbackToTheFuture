import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { articles } from 'src/app/Data/articles';


@Component({
  selector: 'app-single-blog-page',
  templateUrl: './single-blog-page.component.html',
  styleUrls: ['./single-blog-page.component.css']
})
export class SingleBlogPageComponent {

  article: {
    id: string;
    imageSrc: string;
    imageAlt: string;
    author: string;
    title: string;
    content: string;
  } | undefined = undefined;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const articleId = params.get('id') ?? "fttf-1";
      console.log(articleId + "I reached here first");
      this.article = this.getArtcileById(articleId);
    });
  }

  getArtcileById(Id: string) {
    console.log(articles.find((article) => article.id === Id));

    return articles.find((article) => article.id === Id);


  }

}
