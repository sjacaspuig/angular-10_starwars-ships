import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FlashService } from '../services/flash.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  public dataLoading: boolean;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private userService: UserService,
    private flashService: FlashService
  ) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  register() {
    this.dataLoading = true;
    console.log(localStorage);
    this.userService.create(this.registerForm.value)
      .subscribe( response => {
        if (response['success']) {
          this.flashService.success('Registration successful', true);
          this.router.navigateByUrl('/login');
        } else {
          this.flashService.error(response.message);
          this.dataLoading = false;
        }
    })
  }

}
