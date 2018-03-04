import { User } from '../models/user.class';
import { Observable } from 'rxjs/Observable';

export interface IAuth {
    isAuthenticated(): boolean;
    getUserinContext(): User;
    login(form: User): Observable<User>;
}
