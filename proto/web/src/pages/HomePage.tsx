import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context';

const HomePage = () => {
  const { user, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  // Student Home Page
  const StudentHome = () => (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Welcome, Student!</h1>
          <p className="text-xl text-gray-600">Discover and manage your career opportunities</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: 'Profile Management',
              description: 'Create and manage your profile with CV/resume',
              icon: '👤',
              color: 'bg-cyan-100 text-cyan-700',
              action: 'Go to My Sessions',
              link: '/my-sessions',
            },
            {
              title: 'Browse Vacancies',
              description: 'View and search available job vacancies',
              icon: '🔍',
              color: 'bg-blue-100 text-blue-700',
              action: 'Browse Jobs',
              link: '#',
            },
            {
              title: 'Apply for Jobs',
              description: 'Apply for job positions and internships',
              icon: '📝',
              color: 'bg-indigo-100 text-indigo-700',
              action: 'View Applications',
              link: '#',
            },
            {
              title: 'Application Tracking',
              description: 'Track the status and history of your applications',
              icon: '📊',
              color: 'bg-purple-100 text-purple-700',
              action: 'Check Status',
              link: '#',
            },
            {
              title: 'Notifications',
              description: 'Receive notifications about new opportunities',
              icon: '🔔',
              color: 'bg-pink-100 text-pink-700',
              action: 'View Notifications',
              link: '#',
            },
            {
              title: 'Resources',
              description: 'Access career resources and guides',
              icon: '📚',
              color: 'bg-orange-100 text-orange-700',
              action: 'Learn More',
              link: '#',
            },
          ].map((item, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className={`w-12 h-12 rounded-lg ${item.color} flex items-center justify-center text-2xl mb-4`}>
                {item.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-600 mb-4">{item.description}</p>
              <Link
                to={item.link}
                className="inline-block text-cyan-600 hover:text-cyan-700 font-medium"
              >
                {item.action} →
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Employment Statistics</h2>
          <p className="text-gray-600 mb-6">View your employment analytics and insights</p>
          <button className="px-6 py-2 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700">
            View Analytics
          </button>
        </div>
      </div>
    </div>
  );

  // University Home Page
  const UniversityHome = () => (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Welcome, University!</h1>
          <p className="text-xl text-gray-600">Manage students and employment opportunities</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: 'Student Database',
              description: 'Manage the student database and records',
              icon: '👥',
              color: 'bg-emerald-100 text-emerald-700',
              action: 'Manage Students',
              link: '#',
            },
            {
              title: 'Employment Trends',
              description: 'Monitor student employment rates and trends',
              icon: '📈',
              color: 'bg-teal-100 text-teal-700',
              action: 'View Trends',
              link: '#',
            },
            {
              title: 'Employer Verification',
              description: 'Approve and verify employer organizations',
              icon: '✅',
              color: 'bg-green-100 text-green-700',
              action: 'Review Employers',
              link: '#',
            },
            {
              title: 'Post Vacancies',
              description: 'Post vacancies from university partners',
              icon: '📢',
              color: 'bg-lime-100 text-lime-700',
              action: 'Create Posting',
              link: '#',
            },
            {
              title: 'Reports & Analytics',
              description: 'Generate employment reports and analytics',
              icon: '📊',
              color: 'bg-cyan-100 text-cyan-700',
              action: 'Generate Reports',
              link: '#',
            },
            {
              title: 'Career Events',
              description: 'Organize career fairs and events',
              icon: '🎓',
              color: 'bg-blue-100 text-blue-700',
              action: 'Manage Events',
              link: '#',
            },
          ].map((item, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className={`w-12 h-12 rounded-lg ${item.color} flex items-center justify-center text-2xl mb-4`}>
                {item.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-600 mb-4">{item.description}</p>
              <Link
                to={item.link}
                className="inline-block text-emerald-600 hover:text-emerald-700 font-medium"
              >
                {item.action} →
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Career Counseling</h2>
          <p className="text-gray-600 mb-6">Provide career counseling support to students</p>
          <button className="px-6 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700">
            Access Counseling
          </button>
        </div>
      </div>
    </div>
  );

  // Employer Home Page
  const EmployerHome = () => (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Welcome, Employer!</h1>
          <p className="text-xl text-gray-600">Find and manage talent for your organization</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: 'Company Profile',
              description: 'Register and create your company profile',
              icon: '🏢',
              color: 'bg-orange-100 text-orange-700',
              action: 'Edit Profile',
              link: '/my-sessions',
            },
            {
              title: 'Post Vacancies',
              description: 'Post job vacancies and internship positions',
              icon: '📝',
              color: 'bg-red-100 text-red-700',
              action: 'Create Job Post',
              link: '#',
            },
            {
              title: 'Search Candidates',
              description: 'Search and view student profiles/resumes',
              icon: '🔍',
              color: 'bg-rose-100 text-rose-700',
              action: 'Browse Resumes',
              link: '#',
            },
            {
              title: 'Applications',
              description: 'Review and manage job applications',
              icon: '📋',
              color: 'bg-pink-100 text-pink-700',
              action: 'Review Applications',
              link: '#',
            },
            {
              title: 'Schedule Interviews',
              description: 'Schedule interviews with candidates',
              icon: '📅',
              color: 'bg-fuchsia-100 text-fuchsia-700',
              action: 'Manage Interviews',
              link: '#',
            },
            {
              title: 'Analytics',
              description: 'Access recruitment analytics and metrics',
              icon: '📊',
              color: 'bg-violet-100 text-violet-700',
              action: 'View Metrics',
              link: '#',
            },
          ].map((item, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className={`w-12 h-12 rounded-lg ${item.color} flex items-center justify-center text-2xl mb-4`}>
                {item.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-600 mb-4">{item.description}</p>
              <Link
                to={item.link}
                className="inline-block text-orange-600 hover:text-orange-700 font-medium"
              >
                {item.action} →
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Communication</h2>
          <p className="text-gray-600 mb-6">Communicate with students and the university</p>
          <button className="px-6 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700">
            Message Center
          </button>
        </div>
      </div>
    </div>
  );

  // Administrator Home Page
  const AdminHome = () => (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Welcome, Administrator!</h1>
          <p className="text-xl text-gray-600">Manage the entire system</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: 'User Management',
              description: 'Manage all accounts and access rights',
              icon: '👨‍💼',
              color: 'bg-slate-100 text-slate-700',
              action: 'Manage Users',
              link: '#',
            },
            {
              title: 'System Settings',
              description: 'Configure system settings and parameters',
              icon: '⚙️',
              color: 'bg-gray-100 text-gray-700',
              action: 'Configure Settings',
              link: '#',
            },
            {
              title: 'System Monitoring',
              description: 'Monitor system performance and security',
              icon: '📡',
              color: 'bg-zinc-100 text-zinc-700',
              action: 'View Monitoring',
              link: '#',
            },
            {
              title: 'Content Moderation',
              description: 'Moderate content and job postings',
              icon: '🛡️',
              color: 'bg-stone-100 text-stone-700',
              action: 'Review Content',
              link: '#',
            },
            {
              title: 'Reports',
              description: 'Generate comprehensive system reports',
              icon: '📊',
              color: 'bg-neutral-100 text-neutral-700',
              action: 'Generate Reports',
              link: '#',
            },
            {
              title: 'Support',
              description: 'Resolve disputes and process complaints',
              icon: '💬',
              color: 'bg-slate-200 text-slate-700',
              action: 'View Tickets',
              link: '#',
            },
          ].map((item, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className={`w-12 h-12 rounded-lg ${item.color} flex items-center justify-center text-2xl mb-4`}>
                {item.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-600 mb-4">{item.description}</p>
              <Link
                to={item.link}
                className="inline-block text-slate-600 hover:text-slate-700 font-medium"
              >
                {item.action} →
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Database Maintenance</h2>
            <p className="text-gray-600 mb-6">Manage database backups and maintenance</p>
            <button className="px-6 py-2 bg-slate-600 text-white rounded-lg hover:bg-slate-700">
              Access Maintenance
            </button>
          </div>
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">System Updates</h2>
            <p className="text-gray-600 mb-6">Update system features and capabilities</p>
            <button className="px-6 py-2 bg-slate-600 text-white rounded-lg hover:bg-slate-700">
              Manage Updates
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  // Landing Page (Not Authenticated)
  const LandingPage = () => (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-purple-600 to-purple-700">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-4">
            Student Employment Information System
          </h1>
          <p className="text-xl text-blue-100 mb-8">
            Connecting Students, Universities, and Employers
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              to="/register"
              className="px-8 py-3 bg-white text-purple-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Create Account
            </Link>
            <Link
              to="/login"
              className="px-8 py-3 bg-purple-800 text-white font-semibold rounded-lg hover:bg-purple-900 transition-colors border border-purple-400"
            >
              Sign In
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              role: 'Student',
              subtitle: 'Job Seekers',
              icon: '👨‍🎓',
              color: 'from-cyan-500 to-blue-500',
            },
            {
              role: 'University',
              subtitle: 'Educational Institution',
              icon: '🏫',
              color: 'from-emerald-500 to-teal-500',
            },
            {
              role: 'Employer',
              subtitle: 'Job Providers',
              icon: '💼',
              color: 'from-orange-500 to-red-500',
            },
            {
              role: 'Administrator',
              subtitle: 'System Managers',
              icon: '⚙️',
              color: 'from-slate-500 to-gray-500',
            },
          ].map((item, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="text-5xl mb-4">{item.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-1">{item.role}</h3>
              <p className="text-gray-600 text-sm">{item.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  // Render appropriate page based on authentication and role
  if (!isAuthenticated) {
    return <LandingPage />;
  }

  switch (user?.role) {
    case 'student':
      return <StudentHome />;
    case 'university':
      return <UniversityHome />;
    case 'employer':
      return <EmployerHome />;
    case 'admin':
      return <AdminHome />;
    default:
      return <LandingPage />;
  }
};

export default HomePage;
