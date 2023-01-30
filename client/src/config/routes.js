import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
// import PrivateRoute from '../helpers/PrivateRoute'
import WelcomePage from '../views/WelcomePage'
import AboutPage from '../views/AboutPage'
import SignInPage from '../views/SignInPage'
import ErrorPage from '../views/ErrorPage'
import PetPage from '../views/PetPage'
import SearchPage from '../views/SearchPage'
import WishList from '../views/WishList'
import ProfileSettings from '../views/ProfileSettings'


const router = createBrowserRouter([
    {
      element: <App />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: '/',
          element: <WelcomePage />
        },
        {
          path: '/signin',
          element: <SignInPage />
        },
        {
          path: '/about',
          element: <AboutPage />
        },
        {
          path: '/pets',
          element: <PetPage />
        },
        {
          path: '/search',
          element: <SearchPage />
        },
        {
          path: '/wish-list',
          element: <WishList />
        },
        {
          path: '/profile',
          element: <ProfileSettings />
        },
        {
          path: '/signout',
          element: <div>Signing out!<br/> later will navigate to api endpoint</div>
        },
      ]
    }, 
  ])

  export default router