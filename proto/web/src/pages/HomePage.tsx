import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context';

const HomePage = () => {
  const { user, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const roles = [
    {
      id: 'student',
      title: 'Student',
      subtitle: 'Job Seekers',
      icon: '👨‍🎓',
      color: {
        bg: 'from-cyan-500 to-blue-500',
        light: 'bg-cyan-50',
        border: 'border-cyan-200',
        icon: 'bg-cyan-500',
        text: 'text-cyan-700',
      },
      features: [
        'Create and manage profile with CV/resume',
        'Browse and search available job vacancies',
        'Apply for job positions and internships',
        'Track application status and history',
        'Receive notifications about new opportunities',
        'Communicate with employers and university',
        'Access career resources and guidance',
        'View employment statistics and analytics',
      ],
    },
    {
      id: 'university',
      title: 'University',
      subtitle: 'Educational Institution',
      icon: '🏫',
      color: {
        bg: 'from-emerald-500 to-teal-500',
        light: 'bg-emerald-50',
        border: 'border-emerald-200',
        icon: 'bg-emerald-500',
        text: 'text-emerald-700',
      },
      features: [
        'Manage student database and records',
        'Monitor student employment rates and trends',
        'Approve and verify employer organizations',
        'Post university-partnered job opportunities',
        'Generate employment reports and analytics',
        'Organize career fairs and events',
        'Provide career counseling support',
        'Communicate with students and employers',
      ],
    },
    {
      id: 'employer',
      title: 'Employer',
      subtitle: 'Job Providers',
      icon: '💼',
      color: {
        bg: 'from-orange-500 to-red-500',
        light: 'bg-orange-50',
        border: 'border-orange-200',
        icon: 'bg-orange-500',
        text: 'text-orange-700',
      },
      features: [
        'Register and create company profile',
        'Post job vacancies and internship positions',
        'Search and browse student profiles/CVs',
        'Review and manage job applications',
        'Schedule interviews with candidates',
        'Communicate with students and university',
        'Update job posting status and requirements',
        'Access recruitment analytics and metrics',
      ],
    },
    {
      id: 'admin',
      title: 'Administrator',
      subtitle: 'System Managers',
      icon: '⚙️',
      color: {
        bg: 'from-slate-500 to-gray-500',
        light: 'bg-slate-50',
        border: 'border-slate-200',
        icon: 'bg-slate-500',
        text: 'text-slate-700',
      },
      features: [
        'Manage all user accounts and permissions',
        'Configure system settings and parameters',
        'Monitor system performance and security',
        'Moderate content and job postings',
        'Generate comprehensive system reports',
        'Resolve disputes and handle complaints',
        'Manage database backups and maintenance',
        'Update system features and functionality',
      ],
    },
  ];

  const getRoleColor = (roleId: string) => {
    const role = roles.find((r) => r.id === roleId);
    return role?.color || roles[0].color;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-purple-600 to-purple-700">
      {/* Hero Section */}
      <section className="relative py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Student Employment Information System
          </h1>
          <p className="text-xl text-blue-100 mb-8">
            Role Functionality Diagram
          </p>

          {!isAuthenticated && (
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
          )}

          {isAuthenticated && (
            <div className="inline-block bg-white/10 backdrop-blur-md px-6 py-3 rounded-lg border border-white/20">
              <p className="text-blue-100">
                Welcome, <span className="font-semibold text-white">{user?.email}</span>
              </p>
              <p className="text-blue-100 text-sm mt-1">
                Role: <span className="font-semibold capitalize">{user?.role}</span>
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Roles Grid */}
      <section className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {roles.map((role) => {
              const isUserRole = user?.role === role.id;
              return (
                <div
                  key={role.id}
                  className={`rounded-2xl overflow-hidden transition-all duration-300 ${
                    isUserRole ? 'ring-2 ring-white shadow-2xl scale-105' : 'hover:shadow-xl'
                  }`}
                >
                  <div className="bg-white p-6 h-full flex flex-col">
                    {/* Role Header */}
                    <div className="flex items-center mb-4">
                      <div className={`w-14 h-14 rounded-full ${role.color.icon} flex items-center justify-center text-2xl mr-4`}>
                        {role.icon}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">
                          {role.title}
                        </h3>
                        <p className="text-sm text-gray-500">{role.subtitle}</p>
                      </div>
                    </div>

                    {/* Features List */}
                    <div className="space-y-3 flex-1">
                      {role.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <svg
                            className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span className="text-sm text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Action Button */}
                    <div className="mt-6 pt-4 border-t border-gray-200">
                      {isAuthenticated && isUserRole ? (
                        <Link
                          to="/my-sessions"
                          className={`w-full block text-center py-2 px-4 bg-gradient-to-r ${role.color.bg} text-white font-semibold rounded-lg hover:opacity-90 transition-all`}
                        >
                          Continue to Dashboard
                        </Link>
                      ) : !isAuthenticated ? (
                        <button
                          onClick={() => navigate('/register')}
                          className={`w-full py-2 px-4 bg-gradient-to-r ${role.color.bg} text-white font-semibold rounded-lg hover:opacity-90 transition-all`}
                        >
                          Register as {role.title}
                        </button>
                      ) : (
                        <div className="text-sm text-gray-500 text-center py-2">
                          Not your current role
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* System Overview Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              System Roles Overview
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { label: 'Student - Job Seekers', color: 'bg-cyan-400' },
                { label: 'University - Educational Institution', color: 'bg-emerald-400' },
                { label: 'Employer - Job Providers', color: 'bg-orange-400' },
                { label: 'Admin - System Managers', color: 'bg-slate-400' },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className={`w-6 h-6 rounded-full ${item.color}`}></div>
                  <span className="text-gray-700 font-medium text-sm">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      {!isAuthenticated && (
        <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-md rounded-2xl p-8 sm:p-12 border border-white/20 text-center">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Ready to get started?
            </h3>
            <p className="text-blue-100 mb-8 text-lg">
              Create an account or sign in to access your role-specific features
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
                className="px-8 py-3 bg-transparent text-white font-semibold rounded-lg hover:bg-white/20 transition-colors border border-white"
              >
                Sign In
              </Link>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default HomePage;
