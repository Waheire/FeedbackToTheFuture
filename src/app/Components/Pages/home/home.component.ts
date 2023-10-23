import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

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

  logoImages = [
    {
      imageSrc:
        '../../../../assets/images/donors/donor-1.png',
      imageAlt: 'BioVision Africa Trus',
    },
    {
      imageSrc:
        '../../../../assets/images/donors/donor-2.png',
      imageAlt: 'Stiching Doen',
    },
    {
      imageSrc:
        '../../../../assets/images/donors/donor-3.png',
      imageAlt: 'Alliance Ciat',
    },
    {
      imageSrc:
        '../../../../assets/images/donors/donor-4.png',
      imageAlt: 'Diabetes Awareness trust',
    },
    {
      imageSrc:
        '../../../../assets/images/donors/donor-5.png',
      imageAlt: 'Diabetes Awareness trust',
    },
    {
      imageSrc:
        '../../../../assets/images/donors/donor-6.png',
      imageAlt: 'Diabetes Awareness trust',
    },
    {
      imageSrc:
        '../../../../assets/images/donors/donor-7.png',
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
