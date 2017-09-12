import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../auth.service';
import {NgForm} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    if (this.authService.getToken()) {
      this.router.navigate(['admin']);
    }
  }
  onSignin(form: NgForm) {
    this.authService.signin(form.value.email, form.value.password).subscribe(
      response => this.router.navigate(['admin']),
        error => console.log(error)
    );
  }
}
