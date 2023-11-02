import { Component, Input } from '@angular/core';
import { faCircleLeft } from '@fortawesome/free-solid-svg-icons';

interface carouselImage {
  imageSrc: string;
  imageAlt: string;
}

interface imageText {
  h4Heading: string;
  h1Heading1: string;
  h1Heading2: string;
  pContentLeft: string;
  pContentRight: string;
}


@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent {

  @Input() images: carouselImage[] = [];
  @Input() indicators = true;
  @Input() controls = true;
  @Input() texts: imageText[] = [];

  selectedIndex = 0;
  ngOnInit() {



  }

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
