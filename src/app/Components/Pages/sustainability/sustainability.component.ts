import { Component } from '@angular/core';

@Component({
  selector: 'app-sustainability',
  templateUrl: './sustainability.component.html',
  styleUrls: ['./sustainability.component.css']
})
export class SustainabilityComponent {
  images = [
    {
      imageSrc:
        '../../../../assets/images/home/header-1.jpg',
      imageAlt: 'BioVision Africa Trus',
    },
    {
      imageSrc:
        '../../../../assets/images/home/header-2.jpg',
      imageAlt: 'Stiching Doen',
    },
    {
      imageSrc:
        '../../../../assets/images/home/home-2.jpg',
      imageAlt: 'Alliance Ciat',
    },
    {
      imageSrc:
        '../../../../assets/images/Hero/Hero-2.png',
      imageAlt: 'Diabetes Awareness trust',
    },
  ]

  texts = [
    {
      h4Heading: "Welcome To Feedback To the Future",
      h1Heading: "CO-CREATION AND OPERATION OF CIRCULAR AND REGENERATIVE INNOVATIONS.",
      pContentLeft: "50 Farmers in our Program",
      pContentRight: "More than 200 Crops"
    },
    {
      h4Heading: "Welcome To Feedback To the Future",
      h1Heading: "CO-CREATION AND OPERATION OF CIRCULAR AND REGENERATIVE INNOVATIONS.",
      pContentLeft: "50 Farmers in our Program",
      pContentRight: "More than 200 Crops"
    },
    {
      h4Heading: "Welcome To Feedback To the Future",
      h1Heading: "CO-CREATION AND OPERATION OF CIRCULAR AND REGENERATIVE INNOVATIONS.",
      pContentLeft: "50 Farmers in our Program",
      pContentRight: "More than 200 Crops"
    },
    {
      h4Heading: "Welcome To Feedback To the Future",
      h1Heading: "CO-CREATION AND OPERATION OF CIRCULAR AND REGENERATIVE INNOVATIONS.",
      pContentLeft: "50 Farmers in our Program",
      pContentRight: "More than 200 Crops"
    },
  ]

}
