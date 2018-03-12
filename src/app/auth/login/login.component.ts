import { Component, OnInit } from '@angular/core';
import { LoaderService } from '../../shared/modules/loader/loader.service';
import { AuthService } from '../../auth/services/auth.service';
import { FormBuilder, Validators, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  disabled = false;
  error: string;

  constructor(public loaderService: LoaderService, fb: FormBuilder, public authSrv: AuthService) {
    this.loginForm = fb.group({
      'username': [null, Validators.compose([Validators.required, Validators.minLength(3)])],
      'password' : [null, Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(16)])],
    });
  }

  ngOnInit() {}

  get username(){ return this.loginForm.get('username'); }
  get password() { return this.loginForm.get('password'); }


  login(form) {
    this.loaderService.show();
    this.disabled = true;
    this.authSrv.login(form)
    .subscribe(res => {
      this.loaderService.hide();
      if (res.success) {
          this.disabled = false;
          this.authSrv.saveToken(res.token);
      }else {
        this.error = res.message;
        this.disabled = false;
      }
    });
  }

}
