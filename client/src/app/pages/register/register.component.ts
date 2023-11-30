import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/user';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  name: string = '';
  email: string = '';
  password: string = '';

  items: User[] = [];
  constructor(
    private service:UsersService,
    private router: Router
  ) {}

  form: FormGroup = new FormGroup({
    name: new FormGroup(''),
    email: new FormGroup(''),
    password: new FormGroup(''),
  });
        
  ngOnIit(): void {}

  onSubmit() {
    if (!this.name || !this.email || !this.password) {
       alert('All fileds are required');
      return;
    }
  
    const object = {
      name: this.name,
      email: this.email,
      password: this.password,
    };
    this.service.registerFn(object).subscribe(
      (res: any) => {
        alert(res.message);
        this.router.navigate(['/home']);
      },
      (error) => {
        alert(error.message + '  ' + error.error._message);
       
      }
    );
  }
}