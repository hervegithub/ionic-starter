import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  isPasswordVisible: boolean = false;

  constructor(private router:Router) { }

  ngOnInit() {
  }

  onLogin(){
    this.router.navigateByUrl('home');
  }

  onShowPassword(){
    this.isPasswordVisible = !this.isPasswordVisible;
  }

}
