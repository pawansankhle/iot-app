import { NgModule } from '@angular/core';
import { AuthRoutingModule } from './auth.routing.module';
import { LoginModule } from '../auth/login/login.module';
import { LoginRoutes } from './login/login.routing';
import { SharedModule } from '../shared/shared.module';
import { AnonymousGuard } from './guards';

@NgModule({
 imports: [AuthRoutingModule, SharedModule, LoginModule ],
 exports: [LoginModule],
 providers: [AnonymousGuard]
})

export class AuthModule { }




