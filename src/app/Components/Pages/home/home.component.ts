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
        '../../../../assets/images/Hero/Hero-2.png',
      imageAlt: 'BioVision Africa Trus',
    },
    {
      imageSrc:
        '../../../../assets/images/Hero/Hero-2.png',
      imageAlt: 'Stiching Doen',
    },
    {
      imageSrc:
        '../../../../assets/images/Hero/Hero-2.png',
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
      pContentLeft: "50 Frmers in our Program",
      pContentRight: "More than 200 Crops"
    },
    {
      h4Heading: "Welcome To Feedback To the Future 2",
      h1Heading: "CO-CREATION AND OPERATION OF CIRCULAR AND REGENERATIVE INNOVATIONS 2.",
      pContentLeft: "50 Frmers in our Program 2",
      pContentRight: "More than 200 Crops 2"
    },
    {
      h4Heading: "Welcome To Feedback To the Future 3",
      h1Heading: "CO-CREATION AND OPERATION OF CIRCULAR AND REGENERATIVE INNOVATIONS 3.",
      pContentLeft: "50 Frmers in our Program 3",
      pContentRight: "More than 200 Crops 3"
    },
    {
      h4Heading: "Welcome To Feedback To the Future 4",
      h1Heading: "CO-CREATION AND OPERATION OF CIRCULAR AND REGENERATIVE INNOVATIONS 4.",
      pContentLeft: "50 Frmers in our Program 4",
      pContentRight: "More than 200 Crops 4"
    },
  ]
}
