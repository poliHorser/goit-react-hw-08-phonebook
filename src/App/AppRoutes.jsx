import { Routes, Route } from 'react-router-dom';
import LoginPage from 'pages/LoginPage';
import { HomePage } from 'pages/HomePage';
import SharedLayout from 'components/SharedLayout/SharedLayout';
import NotFoundPage from 'pages/NotFoundPage';
import RegisterPage from 'pages/RegisterPage'
import PrivateRoute from 'components/PrivateRoute/PrivateRoute'
import PublicRoute from 'components/PublicRoute/PublicRoute'
export const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route element = {<PublicRoute/>}>
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage />} />
          </Route>
          <Route element={<PrivateRoute/>}>
            <Route path="/contacts" element={<HomePage/>}/>
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Route>
        
    </Routes>
    </div>
  );
};
export default AppRoutes