// React Router DOM
import { Routes, Route, Navigate } from 'react-router-dom'
import { Home } from '../pages'

export const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path='/login'
        element={<Home/>}
      />
      <Route
        path='*'
        element={<Navigate to='/login' />}
      />
    </Routes>
  )
}