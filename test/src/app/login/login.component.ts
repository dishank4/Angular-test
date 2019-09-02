import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginServiceService } from '../core/service/login-service.service';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  submitted: boolean;
  loginForm: FormGroup;
  constructor(
    private loginService: LoginServiceService,
    private router: Router
  ) {
    this.loginForm = this.createLoginForm();
  }

  ngOnInit() {
    this.loginService.isUserLogedIn() ? this.redirectUser() : '';
  }

  createLoginForm() {
    return new FormGroup({
      email : new FormControl('' , [Validators.required, Validators.email]),
      password : new FormControl('' , Validators.required),
    });
  }

  login() {

    console.log(this.loginForm);
    const isAuthenticated = this.loginService.verifyUser(this.loginForm.value.email , this.loginForm.value.password);
    if (isAuthenticated) {
      this.redirectUser();
    } else {
      alert(isAuthenticated);
    }
  }

  redirectUser(){
    this.router.navigate(['/items']);
  }
}
