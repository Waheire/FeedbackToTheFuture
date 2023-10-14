import { Component, Input } from '@angular/core';

interface carouselImage {
  imageSrc: string;
  imageAlt: string;
}

interface imageText {
  h4Heading: string;
  h1Heading: string;
  pContentLeft: string;
  pContentRight: string;
}

@Component({
  selector: 'app-logo-carousel',
  templateUrl: './logo-carousel.component.html',
  styleUrls: ['./logo-carousel.component.css']
})
export class LogoCarouselComponent {

  @Input() images: carouselImage[] = [];
  @Input() indicators = true;
  @Input() controls = true;
  @Input() texts: imageText[] = [];


  selectedIndex = 0;

  //sets index of image on dot/indicator click
  selectedImage(index: number) {
    this.selectedIndex = index;
  }

  onPrevClick() {
    if (this.selectedIndex === 0) {
      this.selectedIndex = this.images.length - 1;
    } else {
      this.selectedIndex--;
    }
  }

  onNextClick() {
    if (this.selectedIndex === this.images.length - 1) {
      this.selectedIndex = 0;
    } else {
      this.selectedIndex++;
    }
  }

}
