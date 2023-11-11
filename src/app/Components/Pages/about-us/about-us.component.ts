import { Component } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent {
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


}
