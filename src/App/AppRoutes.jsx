import { Routes, Route } from 'react-router-dom';

import { HomePage } from 'pages/HomePage';
import NotFoundPage from 'pages/NotFoundPage';

export const AppRoutes = () => {
  return (
    <div>
      <Routes>
        
          <Route path="/" element={<HomePage />} />     
          <Route path="*" element={<NotFoundPage />} />
    </Routes>
    </div>
  );
};
export default AppRoutes