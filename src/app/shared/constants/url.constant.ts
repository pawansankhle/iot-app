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
    DEVICE_URL: URL.baseApiUrl + '/device',
    CREATE_DEVICE_URL: URL.baseApiUrl + '/device',
    SEARCH_DEVICE_URL: URL.baseApiUrl + '/device/search',
    DEVICE_REMOVE_BY_ID_URL: URL.baseApiUrl + '/device/removeById/',

    CONTROL_URL: URL.baseApiUrl + '/control',
    CREATE_CONTROL_URL: URL.baseApiUrl + '/control/search',
    DELETE_CONTROL_BY_ID_URL: URL.baseApiUrl + '/control/removeById',
    CONTROL_ENABLE_URL: URL.baseApiUrl + '/control/enable',
}
