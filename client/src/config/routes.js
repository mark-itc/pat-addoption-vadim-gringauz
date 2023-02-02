import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
// import PrivateRoute from '../helpers/PrivateRoute'
import WelcomePage from '../pages/WelcomePage'
import AboutPage from '../pages/AboutPage'
import SignInPage from '../pages/SignInPage'
import ErrorPage from '../pages/ErrorPage'
import PetPage from '../pages/PetPage'
import SearchPage from '../pages/SearchPage'
import WishList from '../pages/WishList'
import ProfileSettings from '../pages/ProfileSettings'
import Article from '../pages/Article'
import SignOutTemp from '../pages/SignOutTemp'


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
          path: '/why-adopt-article',
          element: <Article />
        },
        {
          path: '/signout',
          element: <SignOutTemp />
        },
      ]
    }, 
  ])

  export default router