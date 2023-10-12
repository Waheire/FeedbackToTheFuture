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
        'https://images.unsplash.com/photo-1460627390041-532a28402358?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      imageAlt: 'nature1',
    },
    {
      imageSrc:
        'https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      imageAlt: 'nature2',
    },
    {
      imageSrc:
        'https://images.unsplash.com/photo-1640844444545-66e19eb6f549?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80',
      imageAlt: 'person1',
    },
    {
      imageSrc:
        'https://images.unsplash.com/photo-1490730141103-6cac27aaab94?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      imageAlt: 'person2',
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
