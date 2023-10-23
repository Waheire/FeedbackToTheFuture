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
        '../../../../assets/images/Hero/slider-1.png',
      imageAlt: 'BioVision Africa Trus',
    },
    {
      imageSrc:
        '../../../../assets/images/Hero/slider-2.png',
      imageAlt: 'Stiching Doen',
    },
    {
      imageSrc:
        '../../../../assets/images/Hero/slider-3.png',
      imageAlt: 'Alliance Ciat',
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
      h4Heading: "Feedback To the Future",
      h1Heading: "Co-creation and Operation of Circular and Regenerative Innovations.",
      pContentLeft: "50 farmers in our program",
      pContentRight: "More than 200 crops"
    },
    // {
    //   h4Heading: "Welcome To Feedback To the Future",
    //   h1Heading: "Co-creation and Operation of Circular and Regenerative Innovations",
    //   pContentLeft: "50 farmers in our program",
    //   pContentRight: "More than 200 crops"
    // },
    // {
    //   h4Heading: "Welcome To Feedback To the Future",
    //   h1Heading: "Co-creation and Operation of Circular and Regenerative Innovations",
    //   pContentLeft: "50 farmers in our program",
    //   pContentRight: "More than 200 crops"
    // },
    // {
    //   h4Heading: "Welcome To Feedback To the Future",
    //   h1Heading: "Co-creation and Operation of Circular and Regenerative Innovations",
    //   pContentLeft: "50 farmers in our program",
    //   pContentRight: "More than 200 crops"
    // },

  ]
}
