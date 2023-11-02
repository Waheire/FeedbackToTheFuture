import { Component, Input } from '@angular/core';
import { OwlOptions, SlidesOutputData } from 'ngx-owl-carousel-o';
import { articles } from 'src/app/Data/articles';


interface slides {
  id: string;
  src: string;
  alt: string;
  title: string;
}
interface donorSlides {
  id: string;
  src: string;
  alt: string;
}




@Component({
  selector: 'app-owl-carousel',
  templateUrl: './owl-carousel.component.html',
  styleUrls: ['./owl-carousel.component.css']
})
export class OwlCarouselComponent {
  articles = articles;
  blogHeaders = [{
    title: 'Latest News & Articles Directly from Blog'
  }]



  @Input() donors: boolean = false;
  @Input() blog: boolean = false;

  // @Input() blogSliderStore: slides[] = [];
  @Input() donorSlidesStore: donorSlides[] = [];
  blogCustomOptions: OwlOptions = {
    loop: true,
    items: 3,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 3
      }
    },
    nav: false
  }


  customOptionsDonors: OwlOptions = {
    loop: true,
    mouseDrag: true,
    items: 5,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: false
  }

  // Method to extract the first two sentences
  getFirstTwoSentences(content: string): string {
    const sentences = content.split(/(?<=[.!?])\s+/);
    return sentences.slice(0, 1).join(' ');
  }
}
