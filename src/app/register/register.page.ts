import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  isPasswordVisible: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  onShowPassword(){
    this.isPasswordVisible = !this.isPasswordVisible;
  }

}
