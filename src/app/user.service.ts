import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  redirectUrl: string;
  emailId:string='admin@gmail.com';
    passwrd:string='123456';
    validlogin:boolean =false;
  constructor(private router :Router) { }
  validate(profileForm: FormGroup)  
  {
    if(profileForm.get('emailaddress').value== this.emailId && profileForm.get('password').value==this.passwrd) 
    {
      window.alert("valid credintials");
      this.router.navigate(['/HomePage']);
      this.validlogin=true;
      return true;
    }
    else{
      window.alert("Invalid Credintials");
      return false;
    }
  }
}
