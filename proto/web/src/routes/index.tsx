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
      {
        path: '/jobs',
        element: <BrowseJobsPage />,
      },
      {
        path: '/job/:id',
        element: <JobDetailsPage />,
      },
      {
        path: '/profile',
        element: <ProtectedRoute><StudentProfilePage /></ProtectedRoute>,
      },
      {
        path: '/my-applications',
        element: <ProtectedRoute><StudentProfilePage /></ProtectedRoute>,
      },
      {
        path: '/employer-dashboard',
        element: <ProtectedRoute><EmployerDashboardPage /></ProtectedRoute>,
      },
      {
        path: '/analytics',
        element: <ProtectedRoute><UniversityAnalyticsPage /></ProtectedRoute>,
      },
      {
        path: '/candidate/:id',
        element: <ProtectedRoute><CandidateDetailPage /></ProtectedRoute>,
      },
    ],
  },
]);

export const AppRouter = () => (
  <AuthProvider>
    <RouterProvider router={router} />
  </AuthProvider>
);
