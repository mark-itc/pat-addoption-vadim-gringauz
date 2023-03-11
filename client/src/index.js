import React from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import router from './config/routes'
import { Provider } from 'react-redux'
import { store } from './app/store'
// import RemeberSignedUser from './helpers/RemeberSignedUser'

const container = document.getElementById('root')
const root = createRoot(container)

root.render(
  <React.StrictMode>
    <Provider store={store}>
        <RouterProvider router={router} />
      {/* <RemeberSignedUser>
      </RemeberSignedUser> */}
    </Provider>
  </React.StrictMode>
)
