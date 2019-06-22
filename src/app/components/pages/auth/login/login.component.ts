import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, Validators, FormGroup} from '@angular/forms';
import { errorMassageAnimation } from 'src/app/components/animations/errorMassageAnimation'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [
    errorMassageAnimation
  ]
})
export class LoginComponent implements OnInit {

  loginDataForm : FormGroup;
  private loginValidationMassages = {
    'email' : [
      {type: 'required',massage: 'Email Is Required'},
      {type: 'pattern',massage: 'enter a valid email address'}
      
    ],
    'password' : [
      {type: 'required',massage: 'Password is Required'},
      {type: 'minlength',massage: 'password is less than 8 characters'}
    ]
  }


  constructor(private router: Router, private fb: FormBuilder) { 
    this.buildingLoginForm();
  }

  ngOnInit() {
    
  }

  buildingLoginForm() {

    this.loginDataForm = this.fb.group({
      email: ['',[
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]],
      password: ['',[
        Validators.required,
        Validators.minLength(7)
      ]]
    }
    );


  }
  
  

  login(loginDataForm) {
    console.log(loginDataForm);
    this.router.navigate(['admin','dashboard'])

      
  }

}
