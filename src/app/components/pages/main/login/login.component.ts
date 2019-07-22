import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, Validators, FormGroup} from '@angular/forms';
import { errorMassageAnimation } from 'src/app/components/animations/errorMassageAnimation';
import { LoginSignUpService } from 'src/app/services/loginSignUpService/login-sign-up.service';
import { loginRequest } from 'src/app/classes/requestClasses/loginRequest';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [
    errorMassageAnimation
  ]
})
export class LoginComponent implements OnInit {
  headers: any[];
  loginRequestData: loginRequest;
  loginDataForm: FormGroup;
  private credentialsErrors = [
    { statusCode: '203' , massage: "password doesn't match"},
    { statusCode: '204' , massage: 'Username Not Found'}
  ];
  private serverStatusCode = "";
  private loginValidationMassages = {
    email : [
      {type: 'required',massage: 'Email Is Required'},
      {type: 'pattern',massage: 'enter a valid email address'}
    ],
    password : [
      {type: 'required',massage: 'Password is Required'},
      {type: 'minlength',massage: 'password is less than 8 characters'}
    ]
  }


  constructor(private router: Router, private fb: FormBuilder,private loginService: LoginSignUpService) { 
    this.buildingLoginForm();
  }

  ngOnInit() {
  }

  buildingLoginForm() {

    this.loginDataForm = this.fb.group({
      email: ['', [
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]],
      password: ['', [
        Validators.required,
        Validators.minLength(7)
      ]]
    }
    );


  }

  login(loginDataForm) {
    this.loginRequestData = loginDataForm;
    console.log(this.loginRequestData);
    this.loginService.login(loginDataForm).subscribe(res => {
      if (res.status === 200) {
        sessionStorage.setItem('token', res.body.token);
        sessionStorage.setItem('role', res.body.role);
        this.router.navigate(['user', 'home']);
      } else {
        this.serverStatusCode = '';
        this.serverStatusCode += res.status;
      }
    }
    );
  }

}
