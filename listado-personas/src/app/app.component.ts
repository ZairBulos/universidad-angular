import { Component, OnInit } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { LoginService } from './Login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'Listado de Personas';

  constructor(private loginService: LoginService) {}

  ngOnInit(): void {
    initializeApp({
      apiKey: '',
      authDomain: '',
    });
  }

  isAuthenticated(): boolean {
    return this.loginService.isAuthenticated();
  }

  logout(): void {
    this.loginService.logout();
  }
}
