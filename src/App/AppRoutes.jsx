import { Routes, Route } from 'react-router-dom';
import LoginPage from 'pages/LoginPage';
import { HomePage } from 'pages/HomePage';
import SharedLayout from 'components/SharedLayout/SharedLayout';
import NotFoundPage from 'pages/NotFoundPage';
import RegisterPage from 'pages/RegisterPage'

export const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route path="/contacts" element={<HomePage/>}/>
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage/>}/>
          <Route path="*" element={<NotFoundPage />} />
        </Route>
        
    </Routes>
    </div>
  );
};
export default AppRoutes