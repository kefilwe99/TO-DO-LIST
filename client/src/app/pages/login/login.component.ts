import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private router: Router) { }

  loginForm = new FormGroup({
    email: new FormControl(""),
    password: new FormControl(""),
  });

  onSubmit() {
    console.log(this.loginForm.value);
    this.router.navigate(['/register']);
  }
  
}
