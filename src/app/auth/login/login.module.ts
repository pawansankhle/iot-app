import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { LoginComponent } from './login.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
 imports: [ CommonModule, SharedModule],
 exports: [ RouterModule ],
 declarations: [ LoginComponent ],
})

export class LoginModule { }



