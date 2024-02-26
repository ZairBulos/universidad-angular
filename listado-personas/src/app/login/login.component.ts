import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from '../Login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private loginService: LoginService) {}

  login(form: NgForm): void {
    const email = form.value.email;
    const password = form.value.password;

    this.loginService.login(email, password);
  }
}
