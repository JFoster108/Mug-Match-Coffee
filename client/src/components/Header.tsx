import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const Header = () => {
  const { user, logout } = useContext(AuthContext)!;
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/auth');
  };

  return (
    <header className="header">
      <h1><Link to="/dashboard">Mug Match Coffee</Link></h1>
      <nav>
        {user && (
          <>
            <Link to="/coffee-matches">Coffee Matches</Link>
            <Link to="/coffee-shops">Coffee Shops</Link>
            <Link to="/profile-settings">Profile Settings</Link>
            <button onClick={handleLogout}>Logout</button>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;