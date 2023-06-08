import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  name: string='';
  password: string='';

  constructor(public router: Router) {}
  

  login() {
    if (this.name === 'admin' && this.password === 'admin') {
      // Login successful
      this.router.navigate(['/members/']);
    } else {
      // Login failed
      console.log('Login failed');
    }
  }

}
