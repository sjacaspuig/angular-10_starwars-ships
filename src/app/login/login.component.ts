import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../shared/services/authentication.service';
import { FlashService } from '../shared/services/flash.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  public dataLoading: boolean;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService,
    private flashService: FlashService
  ) { }

  ngOnInit(): void {
    // reset login status
    this.authenticationService.clearCredentials();
    
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  login(): void {
    this.dataLoading = true;
    const dataForm = this.loginForm.controls;
    console.log(dataForm.username.value);
    console.log(dataForm.password.value);
    this.authenticationService.login(dataForm.username.value, dataForm.password.value, (response) => {
      if (response.success) {
        this.authenticationService.setCredentials(dataForm.username.value, dataForm.password.value);
        this.router.navigateByUrl('/ships');
      } else {
        this.flashService.error(response.message);
        this.dataLoading = false;
      }
    });
  };

}
