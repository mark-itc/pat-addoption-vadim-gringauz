const userSettings = [
    {
        name: 'Profile/Account',
        onClick: () => {
            console.log('navigate to Profile page')
        },
        path: '/profile',
    },
    // {
    //     name: 'Account',
    //     onClick: () => {
    //         console.log('navigate to Account page')
    //     }
    // },
    {
        name: 'Dashboard*',
        onClick: () => {
            console.log('navigate to Account page')
        },
        path: '/dashboard'
    },
    {
        name: 'Sign out',
        onClick: () => {
            console.log('Logout')
        },
        path: '/signout'
    }
]

export default userSettings