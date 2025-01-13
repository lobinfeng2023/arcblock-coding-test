import { Route, Routes, Navigate } from 'react-router-dom'
import Layout from '../layout/PageLayout'
import { lazy } from 'react'
import UserProfile from '../pages/user/Profile';
const NotFound = lazy(() => import('../pages/NotFound'));
const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigate to='/user' />} />
            <Route path="/user" element={<Layout />}>
                <Route path="" element={<Navigate to='profile' />} />
                <Route path="profile" element={<UserProfile />} />
            </Route>
            <Route path="*" element={<NotFound />} />
      </Routes>
    )
}

export default Router