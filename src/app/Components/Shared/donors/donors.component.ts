import { Component, Input } from '@angular/core';



@Component({
  selector: 'app-donors',
  templateUrl: './donors.component.html',
  styleUrls: ['./donors.component.css']
})
export class DonorsComponent {
  images = [
    {
      id: '1',
      src:
        '../../assets/images/donors/donor-1.png',
      alt: 'BioVision Africa Trus',
    },
    {
      id: '2',
      src:
        '../../assets/images/donors/donor-2.png',
      alt: 'BioVision Africa Trus',
    },
    {
      id: '3',
      src:
        '../../assets/images/donors/donor-3.png',
      alt: 'BioVision Africa Trus',
    },
    {
      id: '4',
      src:
        '../../assets/images/donors/donor-4.png',
      alt: 'BioVision Africa Trus',
    },
    {
      id: '5',
      src:
        '../../assets/images/donors/donor-5.png',
      alt: 'BioVision Africa Trus',
    },
    {
      id: '6',
      src:
        '../../assets/images/donors/donor-6.png',
      alt: 'BioVision Africa Trus',
    },
    {
      id: '7',
      src:
        '../../assets/images/donors/donor-7.png',
      alt: 'BioVision Africa Trus',
    },
  ]


  ngOnInit(): void {

  }

}
