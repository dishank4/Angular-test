import { Injectable } from '@angular/core';
import { UserModel, genedarEnum, Role } from '../Models/user.model';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  users: UserModel[];
  constructor() {
    this.users = [
      {email : 'dishank.shah@gmail.com' , password : 'abc@123' , gender: genedarEnum.m , role: Role.User},
      {email : 'test@test.com' , password : 'abc@123' , gender: genedarEnum.m, role: Role.Admin},
      {email : 'shahbrijesh1986@gmail.com' , password : 'abc@123' , gender: genedarEnum.f, role: Role.User},
      {email : 'abc@gmail.com' , password : 'abc@123' , gender: genedarEnum.f, role: Role.User}
    ];
  }

  verifyUser(email: string , password: string , save: boolean = true ): boolean {
    const user = this.users.find(obj => obj.email === email);
    if (user && user.password === password) {
      if (save) {
        this.saveSession(user.role);
      }
      return true;
    }
    return false;
  }

  isUserLogedIn() {
    return localStorage.getItem('isLogedIn') ? true : false;
  }

  saveSession(role) {
    localStorage.setItem('isLogedIn' , 'true');
    localStorage.setItem('role' , role);
  }

  Logout() {
    localStorage.removeItem('isLogedIn');
    localStorage.removeItem('role');
  }
}
