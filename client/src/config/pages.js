const pages = [
    {
      name: 'Home',
      onClick: () => {
      },
      path: '/',
    },
    {
      name: 'About',
      onClick: () => {
        console.log('navigate to About page')
      },
      path: '/about',
      subPages: [
        {
          name: 'About us',
          path: ''
        },
        {
          name: 'Contact us',
          path: ''
        },
      ]
    },
    {
      name: 'Our Pets',
      onClick: () => {
        console.log('navigate to pets page')
      },
      path: '/pets',
      subPages: [
        {
          name: 'Dogs',
          path: '/pets?type=dog'
        },
        {
          name: 'Cats',
          path: '/pets?type=cat'
        },
      ]
    },
    {
      name: 'Wish List',
      onClick: () => {
        console.log('navigate to Wish List page')
      },
      path: '/wish-list'
    },
  ]

  export default pages