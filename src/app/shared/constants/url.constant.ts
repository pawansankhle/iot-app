import { URL } from './baseurl.constants';

export const UrlConstant =  {
    MENU_URL: 'assets/data/menu.json',
    USER_LOGIN_URL: URL.baseAuthUrl + '/login',
    GET_ALL_USERS: URL.baseApiUrl + '/user',
    ADD_USER_URL: URL.baseApiUrl + '/user',
    USER_SIGNOUT_URL: URL.baseAuthUrl + '/signout',
    USER_ENABLE: URL.baseApiUrl + '/user/enable',
    USER_DELETE_URL: URL.baseApiUrl + '/user/delete',
    EDIT_USER_URL: URL.baseApiUrl + '/user/edit',
    GET_ALL_DEVICES: URL.baseApiUrl + '/device'
}
