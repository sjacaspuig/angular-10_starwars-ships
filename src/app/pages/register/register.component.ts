import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { FlashService } from '../../shared/services/flash.service';
import { UserService } from '../../shared/services/user.service';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit, OnDestroy {

  public registerForm: FormGroup;
  public dataLoading: boolean;
  private userSubscription: Subscription = null;

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

  ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
  }

  register(): void {
    this.dataLoading = true;
    this.userSubscription = this.userService.create(this.registerForm.value)
      .subscribe( (response: {success: string, message: string}) => {
        if (response.success) {
          this.flashService.success('Registration successful', true);
          this.router.navigateByUrl('/login');
        } else {
          this.flashService.error(response.message);
          this.dataLoading = false;
        }
    });
  }

}
