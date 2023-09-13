import { Route, Routes } from 'react-router-dom';
import { HeroesRoutes, LoginPage } from '../modules';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

export const AppRoutes = () => {
  return (
    <>

      <Routes>
        <Route
          path='login'
          element={
            <PublicRoute
              children={<LoginPage/>}
            />
          }
        />
        {/* <Route path='login' element={<LoginPage/>}/> */}

        <Route
          path='/*'
          element={
            <PrivateRoute
              children={<HeroesRoutes/>}
            />
          }
        />

        {/* <Route path='/*' element={<HeroesRoutes/>}/> */}
      </Routes>
    </>
  )
}
