import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {

  constructor(private router: Router, private userService: UsersService) {}

  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  login() {
    let user = {
      email: this.loginForm.value.email || '',
      password: this.loginForm.value.email|| ''
    };

    this.userService.loginFn(user).subscribe((res: any) => {
      res
      this.router.navigate(['/home']);
    });
   
  }
}
