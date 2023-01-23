const pages = [
    {
      name: 'Home',
      onClick: () => {
        console.log('navigate to homepage')
      },
      path: '/',
    },
    {
      name: 'About',
      onClick: () => {
        console.log('navigate to About page')
      },
      path: '',
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
      path: '',
      subPages: [
        {
          name: 'Dogs',
          path: ''
        },
        {
          name: 'Cats',
          path: ''
        },
      ]
    },
    {
      name: 'Wish List',
      onClick: () => {
        console.log('navigate to Wish List page')
      },
      path: ''
    },
  ]

  export default pages