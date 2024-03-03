import { Routes, Route } from 'react-router-dom';
import LoginPage from 'pages/LoginPage';
import { Contacts } from 'pages/Contacts/Contacts';
import SharedLayout from 'components/SharedLayout/SharedLayout';
import NotFoundPage from 'pages/NotFoundPage';
import RegisterPage from 'pages/RegisterPage'
import PrivateRoute from 'components/PrivateRoute/PrivateRoute'
import PublicRoute from 'components/PublicRoute/PublicRoute'
import HomePage from 'pages/HomePage/HomePage';


export const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
        
          
          <Route element={<PublicRoute />}>
            <Route index element={<HomePage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage />} />
          </Route>
          <Route element={<PrivateRoute/>}>
            <Route path="/contacts" element={<Contacts/>}/>
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Route>
        
    </Routes>
    </div>
  );
};
export default AppRoutes