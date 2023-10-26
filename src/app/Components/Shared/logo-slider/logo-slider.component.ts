import { Component } from '@angular/core';

@Component({
  selector: 'app-logo-slider',
  templateUrl: './logo-slider.component.html',
  styleUrls: ['./logo-slider.component.css']
})
export class LogoSliderComponent {
  logos: { src: string, alt: string }[] = [
    { src: '../../../../assets/images/donors/donor-1.png', alt: 'Logo 1' },
    { src: '../../../../assets/images/donors/donor-2.png', alt: 'Logo 2' },
    { src: '../../../../assets/images/donors/donor-3.png', alt: 'Logo 3' },
    { src: '../../../../assets/images/donors/donor-4.png', alt: 'Logo 3' },
    { src: '../../../../assets/images/donors/donor-5.png', alt: 'Logo 3' },
    { src: '../../../../assets/images/donors/donor-6.png', alt: 'Logo 3' },
    { src: '../../../../assets/images/donors/donor-7.png', alt: 'Logo 3' },
    // Add more logos as needed
  ];

  activeLogoIndex = 0;
  sliderPosition = 0;

  constructor() { }

  ngOnInit() { }

  goToLogo(index: number) {
    this.activeLogoIndex = index;
    this.sliderPosition = -index * 50; // Adjust based on your image width
  }

  nextLogo() {
    if (this.activeLogoIndex < this.logos.length - 1) {
      this.goToLogo(this.activeLogoIndex + 1);
    }
  }

  prevLogo() {
    if (this.activeLogoIndex > 0) {
      this.goToLogo(this.activeLogoIndex - 1);
    }
  }

}
