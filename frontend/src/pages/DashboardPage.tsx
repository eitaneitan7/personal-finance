import { useAuth } from '../context/AuthContext';
import toast from 'react-hot-toast';

const DashboardPage = () => {
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    toast.success('Logged out successfully!');
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-xl font-semibold mb-4">Welcome to your Dashboard, {user?.username}!</h1>
      <button
        onClick={handleLogout}
        className="btn btn-error"
      >
        Logout
      </button>
    </div>
  );
};

export default DashboardPage;
