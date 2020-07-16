import { Component, OnInit } from '@angular/core';
//import { Validators } from '@angular/forms';
 import {Router} from '@angular/router';
 import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../user.service';



@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})

export class LoginPageComponent implements OnInit {
  
  profileForm = new FormGroup({
    emailaddress: new FormControl(''),
    password: new FormControl('',Validators.minLength(6)),
  });
  
  email=this.profileForm.get('emailaddress').value;


  constructor(private router: Router,private userservice: UserService) { }

  ngOnInit() {
    
  }
  validlogin:boolean =false;
  
   
 validate()
 {
   return this.userservice.validate(this.profileForm);
 }
 getErrorMessage() {
  if (this.profileForm["email"].hasError('required')) {
    return 'please Enter Email address';
  }

  return this.profileForm["email"].hasError('email') ? 'Not a valid email' : '';
}
}
