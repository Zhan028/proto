import { Link, Outlet } from 'react-router-dom';
import { useAuth } from './context';

const App = () => {
  const { isAuthenticated, user, logout } = useAuth();

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link to="/" className="flex items-center gap-2">
              <div className="text-2xl font-bold text-blue-600">HH</div>
              <span className="hidden sm:inline text-sm text-gray-600">Employment Portal</span>
            </Link>
            <nav className="flex items-center gap-6">
              {isAuthenticated && (
                <div className="hidden sm:flex items-center gap-2">
                  <span className="text-sm font-medium text-gray-900">📍 Astana</span>
                </div>
              )}
              {isAuthenticated ? (
                <div className="flex items-center gap-4">
                  <Link
                    to="/my-sessions"
                    className="text-sm text-gray-700 hover:text-gray-900 font-medium"
                  >
                    My Sessions
                  </Link>
                  <div className="flex items-center gap-3 pl-4 border-l border-gray-200">
                    <div className="text-sm">
                      <p className="font-medium text-gray-900">{user?.email}</p>
                    </div>
                    <button
                      onClick={logout}
                      className="text-sm text-gray-600 hover:text-gray-900"
                    >
                      Exit
                    </button>
                  </div>
                </div>
              ) : (
                <div className="flex items-center gap-3">
                  <Link
                    to="/login"
                    className="text-sm font-medium text-gray-700 hover:text-gray-900"
                  >
                    Sign in
                  </Link>
                  <Link
                    to="/register"
                    className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700"
                  >
                    Sign up
                  </Link>
                </div>
              )}
            </nav>
          </div>
        </div>
      </header>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Outlet />
      </main>
    </div>
  );
};

export default App;
