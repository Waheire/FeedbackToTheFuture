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


interface heroImages {
  imageSrc: string;
  imageAlt: string;
  h4Heading: string;
  h1Heading1: string;
  h1Heading2: string;
   height:string;
  pContentLeft: string;
  pContentRight: string;
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
  @Input() hero: boolean = false;

  // @Input() blogSliderStore: slides[] = [];
  @Input() donorSlidesStore: donorSlides[] = [];
  @Input() images: heroImages[] = [];

  height = 0.1;

  




  heroCustomOptions: OwlOptions = {
    loop: true,
    items: 1,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: false
  }

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
    items: 7,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 2
      },
      400: {
        items: 3
      },
      740: {
        items: 4
      },
      940: {
        items: 5
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
