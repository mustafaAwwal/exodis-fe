import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { loginRequest } from '../../classes/requestClasses/loginRequest';
import { Observable } from 'rxjs';
import { environment_url } from 'src/environments/environment'
import { HttpResponse } from '@angular/common/http/'
import { loginResponse } from 'src/app/classes/responseClasses/loginResponse'

@Injectable({
  providedIn: 'root'
})
export class LoginSignUpService {

  constructor(private http: HttpClient) { }

  login(loginRequest: loginRequest): Observable<HttpResponse<any>> {
    let url = environment_url + "users/login"
    return this.http.post<HttpResponse<loginResponse>>(url,loginRequest,{observe: 'response'})
  }

}
