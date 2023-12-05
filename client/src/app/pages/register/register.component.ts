import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/user';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  RegisterForm = new FormGroup({
    name: new FormControl (''),
    email: new FormControl(''),
    password: new FormControl('')
  
  });

  items: User[] = [];
  password: any;
  email: any;
  name: any;
  userService: any;
  constructor(
    private service:UsersService,
    private router: Router
  ) {}
        
  ngOnIit(): void {}

  Regiser() {
    let user = {
      name: this.RegisterForm.value.name || '',
      email: this.RegisterForm.value.email || '',
      password: this.RegisterForm.value.email|| ''
    };

    this.service.registerFn(user).subscribe((res: any) => {
      res
      this.router.navigate(['/home']);
    });
  }
}