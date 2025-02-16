import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AuthPage from './pages/AuthPage';
import Dashboard from './pages/Dashboard';
import CoffeeMatches from './pages/CoffeeMatches';
import CoffeeShops from './pages/CoffeeShops';
import ProfileSettings from './pages/ProfileSettings';
import ProtectedRoute from './components/ProtectedRoute';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/auth" element={<AuthPage />} />
        
        {/* Protected Routes */}
        <Route element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/coffee-matches" element={<CoffeeMatches />} />
          <Route path="/coffee-shops" element={<CoffeeShops />} />
          <Route path="/profile-settings" element={<ProfileSettings />} />
        </Route>

        {/* Default Redirect */}
        <Route path="*" element={<AuthPage />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
