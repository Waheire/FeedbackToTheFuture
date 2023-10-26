import { Component, Input } from '@angular/core';

interface teamMemberDetails {
  imageSrc: string;
  imageAlt: string;
  fullName: string;
  title: string;
  socialX: string;
  socialLinkedin: string;
}



@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent {

  @Input() details: teamMemberDetails[] = [];

}
