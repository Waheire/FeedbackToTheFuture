import { Component, Input } from '@angular/core';




@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent {

  details = [
    {
      imageSrc:
        '../../../../assets/images/team/Benedetta-kyengo.png',
      imageAlt: 'Benedetta-kyengo',
      fullName: 'Benedetta Kyengo',
      title: 'Founder, Regenerative and Circular Economy Expert ',
      socialX: '#',
      socialLinkedin: '#'
    },
    {
      imageSrc:
        '../../../../assets/images/team/elizabeth-Nthenya.png',
      imageAlt: 'Elizabeth Nthenya',
      fullName: 'Elizabeth Nthenya',
      title: 'Co-Founder Monitoring and Evaluation Expert',
      socialX: '#',
      socialLinkedin: '#'
    },
    {
      imageSrc:
        '../../../../assets/images/team/guus-paardekooper.png',
      imageAlt: 'Guus Paardekooper',
      fullName: 'Guus Paardekooper',
      title: 'Co-Founder',
      socialX: '#',
      socialLinkedin: '#'
    },
    {
      imageSrc:
        '../../../../assets/images/team/marc-buiter.png',
      imageAlt: 'Marc Buiter',
      fullName: 'Marc Buiter',
      title: 'Co-Founder and Sustainable Land Use Expert',
      socialX: '#',
      socialLinkedin: '#'
    },
    {
      imageSrc:
        '../../../../assets/images/team/pascalia-mwende.png',
      imageAlt: 'Pascalia Mwende',
      fullName: 'Pascalia Mwende',
      title: 'Community Resource Person',
      socialX: '#',
      socialLinkedin: '#'
    },
    {
      imageSrc:
        '../../../../assets/images/team/james-thiongo.png',
      imageAlt: 'Thiong’o Gachie',
      fullName: 'Thiong’o Gachie',
      title: 'Co-Founder and Regenerative Agriculture Expert',
      socialX: '#',
      socialLinkedin: '#'
    },
    {
      imageSrc:
        '../../../../assets/images/team/Nichole.png',
      imageAlt: 'Nicole Chepkoech Kosgei',
      fullName: 'Nicole Chepkoech Kosgei',
      title: 'Financial Management Expert',
      socialX: '#',
      socialLinkedin: '#'
    },
    {
      imageSrc:
        '../../../../assets/images/team/Ann.png',
      imageAlt: 'Ann Mutsami',
      fullName: 'Ann Mutsami',
      title: 'Program Management Expert',
      socialX: '#',
      socialLinkedin: '#'
    },
    {
      imageSrc:
        '../../../../assets/images/team/cathrine.png',
      imageAlt: 'Catherine Mwongel',
      fullName: 'Catherine Mwongel',
      title: 'Human Resorce and Adminstration Expert',
      socialX: '#',
      socialLinkedin: '#'
    },


  ]

}
