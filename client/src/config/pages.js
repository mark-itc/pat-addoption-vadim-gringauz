const pages = [
    {
      name: 'Home',
      onClick: () => {
      },
      path: '/',
      permission: 'all',
    },
    {
      name: 'About',
      onClick: () => {
        console.log('navigate to About page')
      },
      path: '/about',
      permission: 'all',
      // subPages: [
      //   {
      //     name: 'About us',
      //     path: '',
      //     permission: 'all',
      //   },
      //   {
      //     name: 'Contact us',
      //     path: '',
      //     permission: 'all',
      //   },
      // ]
    },
    {
      name: 'Our Pets',
      onClick: () => {
        console.log('navigate to pets page')
      },
      path: '/pets',
      permission: 'all',
      subPages: [
        {
          name: 'all',
          path: '/pets',
          permission: 'all',
        },
        {
          name: 'Dogs',
          path: '/pets?type=dog',
          permission: 'all',
        },
        {
          name: 'Cats',
          path: '/pets?type=cat',
          permission: 'all',
        },
      ]
    },
    {
      name: 'Wish List',
      onClick: () => {
        console.log('navigate to Wish List page')
      },
      path: '/wish-list',
    permission: 'user',
    },
  ]

  export default pages