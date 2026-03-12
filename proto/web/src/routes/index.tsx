import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from '../App';
import {
  HomePage,
  LoginPage,
  RegisterPage,
  MySessionsPage,
  BrowseJobsPage,
  JobDetailsPage,
  StudentProfilePage,
  EmployerDashboardPage,
  UniversityAnalyticsPage,
  CandidateDetailPage,
} from '../pages';
import { AuthProvider } from '../context';
import { ProtectedRoute } from '../components';
import RoleBasedRoute from '../components/RoleBasedRoute';

const router = createBrowserRouter([
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/register',
    element: <RegisterPage />,
  },
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: '/my-sessions',
        element: <ProtectedRoute><MySessionsPage /></ProtectedRoute>,
      },
      // Public routes (all authenticated users)
      {
        path: '/jobs',
        element: <ProtectedRoute><BrowseJobsPage /></ProtectedRoute>,
      },
      {
        path: '/job/:id',
        element: <ProtectedRoute><JobDetailsPage /></ProtectedRoute>,
      },

      // Student-only routes
      {
        path: '/profile',
        element: (
          <ProtectedRoute>
            <RoleBasedRoute allowedRoles={['student']}>
              <StudentProfilePage />
            </RoleBasedRoute>
          </ProtectedRoute>
        ),
      },
      {
        path: '/my-applications',
        element: (
          <ProtectedRoute>
            <RoleBasedRoute allowedRoles={['student']}>
              <StudentProfilePage />
            </RoleBasedRoute>
          </ProtectedRoute>
        ),
      },

      // Employer-only routes
      {
        path: '/employer-dashboard',
        element: (
          <ProtectedRoute>
            <RoleBasedRoute allowedRoles={['employer']}>
              <EmployerDashboardPage />
            </RoleBasedRoute>
          </ProtectedRoute>
        ),
      },
      {
        path: '/candidate/:id',
        element: (
          <ProtectedRoute>
            <RoleBasedRoute allowedRoles={['employer']}>
              <CandidateDetailPage />
            </RoleBasedRoute>
          </ProtectedRoute>
        ),
      },

      // University admin-only routes
      {
        path: '/analytics',
        element: (
          <ProtectedRoute>
            <RoleBasedRoute allowedRoles={['university', 'admin']}>
              <UniversityAnalyticsPage />
            </RoleBasedRoute>
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

export const AppRouter = () => (
  <AuthProvider>
    <RouterProvider router={router} />
  </AuthProvider>
);
