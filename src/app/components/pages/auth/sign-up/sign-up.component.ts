import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import { reTypePasswordValidator } from 'src/app/components/customFormValidation/rePasswordValidation';
import { errorMassageAnimation } from 'src/app/components/animations/errorMassageAnimation';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
  animations: [
    errorMassageAnimation
  ]
  
})
export class SignUpComponent implements OnInit {

  

  signUpForm : FormGroup;
  countries = [
    {name: 'United States Of America'},
    {name: 'Israel'},
    {name: 'Egypt'}
  ]
  signUpFormValidations = {
    'email': [
      {type: 'required', massage: 'Email is mandatory'},
      {type: 'email',massage: 'Not a valid email address'}
    ],
    'username' : [
      {type: 'required',massage: 'This field is required'}
    ],
    'country' : [
      {type: 'required',massage: 'Country is requried'}
    ],
    'businessName': [
      {type: 'required', massage: 'Buisness name is manadatory'}
    ],
    'password' : [
      {type: 'required', massage: 'Password is required'},
      {type: 'minlength', massage: 'Password should be of minimum eight length'}
    ],
    'rePassword' : [
      {type: 'required', massage: 'Plz re-enter the passwrod'}
      
    ],
    'firstName' : [
      {type: 'required', massage: 'First Name is mandatory'}
    ],
    'lastName' : [
      {type: 'required', massage: 'Last Name is mandatory'}
    ],
    'birthDate': [
      {type:'required', massage: 'Birth Date is mandatory'}
    ]
  }
  
  constructor(private router: Router,private fb : FormBuilder) { 
    this.createSignupForm();
  }

  ngOnInit() {
  }


  createSignupForm() {
    this.signUpForm = this.fb.group({
      email: ['',[Validators.required,Validators.email]],
      username: ['',[Validators.required]],
      country: ['',[Validators.required]],
      businessName: ['',[Validators.required]],
      password: ['',[Validators.required,Validators.minLength(7)]],
      rePassword: ['',[Validators.required,Validators.minLength(7)]],
      firstName: ['',[Validators.required]],
      lastName: ['',[Validators.required]],
      birthDate: ['',[Validators.required]]
    }, { validator: reTypePasswordValidator })
    
  }
 
  signUp(signUpData) {
    console.log(signUpData)
  }

}
