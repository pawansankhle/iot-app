export const MENU = [
    {
        'title':  'Device',
        'link': '/device',
        'roles' : ['ADMIN', 'ANONYMOUS'],
        'icon': 'zmdi zmdi-devices'
    },
    {
        'title':  'Administration',
        'component' : 'AdminPage',
        'link': '.',
        'icon': 'zmdi-accounts-alt',
        'roles' : ['ADMIN', 'SUPERADMIN'],
        'isChildOpen': false,
        'children' : [
            {
                'title':  'Users',
                'icon': 'zmdi-account',
                'link': '/users'
            },
            {
                'title':  'Route',
                'icon': 'zmdi-account',
                'link': '/route'
            }
        ]
    }

]
