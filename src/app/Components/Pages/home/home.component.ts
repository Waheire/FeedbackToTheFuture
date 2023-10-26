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
        '../../../../assets/images/Hero/slider-1.webp',
      imageAlt: 'BioVision Africa Trus',
    },
    {
      imageSrc:
        '../../../../assets/images/Hero/slider-2.webp',
      imageAlt: 'Stiching Doen',
    },
    {
      imageSrc:
        '../../../../assets/images/Hero/slider-3.webp',
      imageAlt: 'Alliance Ciat',
    },
    {
      imageSrc:
        '../../../../assets/images/Hero/slider-4.webp',
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
      h1Heading1: "Co-creation and Operation of",
      h1Heading2: "Circular and Regenerative Innovations.",
      pContentLeft: "50 farmers in our program",
      pContentRight: "More than 200 Plant species"
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
  blogDetails = [
    {
      imageSrc: '../../../../assets/images/blog/blog-1.jpg',
      imageAlt: 'article 1',
      author: 'Hilda Malow',
      title: 'Regenerative Agriculture Practices',
      content: '',
      singleBlogUrl: '/blog',
    },
    {
      imageSrc: '../../../../assets/images/blog/blog-2.jpg',
      imageAlt: 'article 2',
      author: 'Thiong’o Gachie',
      title: 'Organic farming',
      content: '',
      singleBlogUrl: '/blog',
    },
    {
      imageSrc: '../../../../assets/images/blog/blog-3.jpg',
      imageAlt: 'article 3',
      author: 'Elizabeth Nthenya',
      title: 'Mixed Farming',
      content: '',
      singleBlogUrl: '/blog',
    },

  ]
}
