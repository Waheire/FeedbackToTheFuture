import { Component, Input } from '@angular/core';

interface heroImages {
  id: string;
  imageSrc: string;
  imageAlt: string;
  h4Heading: string;
  h1Heading1: string;
  h1Heading2: string;
  height: string;
  pContentLeft: string;
  pContentRight: string;
}



@Component({
  selector: 'app-hero-carousel',
  templateUrl: './hero-carousel.component.html',
  styleUrls: ['./hero-carousel.component.css']
})
export class HeroCarouselComponent {

  images = [
    {
      id: '1',
      imageSrc:
        '../../../../assets/images/Hero/slider-1.webp',
      imageAlt: 'BioVision Africa Trus',
      h4Heading: "Feedback To the Future",
      h1Heading1: "Co-creation and Operation of",
      h1Heading2: "Circular and Regenerative Innovations.",
      pContentLeft: "50 farmers in our program",
      pContentRight: "More than 200 Plant species",
      height: '0.1rem'
    },
    {
      id: '2',
      imageSrc:
        '../../../../assets/images/Hero/slider-2.webp',
      imageAlt: 'Stiching Doen',
      h4Heading: "",
      h1Heading1: "",
      h1Heading2: "",
      pContentLeft: "",
      pContentRight: "",
      height: '0'
    },
    {
      id: '3',
      imageSrc:
        '../../../../assets/images/Hero/slider-3.png',
      imageAlt: 'Stiching Doen',
      h4Heading: "",
      h1Heading1: "",
      h1Heading2: "",
      pContentLeft: "",
      pContentRight: "",
      height: '0'
    },

    {
      id: '4',
      imageSrc:
        '../../../../assets/images/Hero/slider-4.webp',
      imageAlt: 'Alliance Ciat',
      h4Heading: "",
      h1Heading1: "",
      h1Heading2: "",
      pContentLeft: "",
      pContentRight: "",
      height: '0'
    },
  ]

}
