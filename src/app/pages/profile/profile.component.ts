import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
//https://documenter.getpostman.com/view/8854915/Szf7znEe#64142a26-a16b-43f9-9303-ff8b13d9d3ee
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  profileJson: string = null;

  constructor(public auth: AuthService) { }

  ngOnInit() {

    this.auth.idTokenClaims$.subscribe(
      (data) => {
        console.log('----------------token Auth02--------------------------');
        console.log(data.__raw);
        console.log('------------------------------------------------')

      }
    );
    this.auth.user$.subscribe(
      (profile) => (this.profileJson = JSON.stringify(profile, null, 2))
    );
  }
}
