import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context';

const HomePage = () => {
  const { user, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  // Job categories with counts
  const jobCategories = [
    { id: 1, name: 'Information Technology', count: '2,340', icon: '💻' },
    { id: 2, name: 'Sales & Marketing', count: '1,850', icon: '📊' },
    { id: 3, name: 'Finance & Accounting', count: '1,250', icon: '💰' },
    { id: 4, name: 'Human Resources', count: '890', icon: '👥' },
    { id: 5, name: 'Engineering', count: '1,560', icon: '⚙️' },
    { id: 6, name: 'Healthcare', count: '940', icon: '⚕️' },
    { id: 7, name: 'Education', count: '720', icon: '🎓' },
    { id: 8, name: 'Construction', count: '1,100', icon: '🏗️' },
  ];

  // Quick filter chips
  const filters = [
    { label: 'Remote Work', count: 342 },
    { label: 'Part-time', count: 156 },
    { label: 'Internship', count: 234 },
    { label: 'New Graduates', count: 189 },
    { label: 'Freelance', count: 478 },
  ];

  // Featured articles/news
  const articles = [
    {
      id: 1,
      title: 'Top 5 Skills Employers Look for in 2024',
      category: 'Career Tips',
      image: '📰',
      date: '3 days ago',
    },
    {
      id: 2,
      title: 'How to Write an Effective Resume',
      category: 'Resume Tips',
      image: '📝',
      date: '5 days ago',
    },
    {
      id: 3,
      title: 'Interview Tips from Top Recruiters',
      category: 'Interview Prep',
      image: '💬',
      date: '1 week ago',
    },
  ];

  // Latest companies
  const companies = [
    { id: 1, name: 'Tech Innovators Inc', positions: 45, icon: '🚀' },
    { id: 2, name: 'Global Finance Solutions', positions: 32, icon: '💼' },
    { id: 3, name: 'Creative Design Studio', positions: 28, icon: '🎨' },
  ];

  // Landing Page (Not Authenticated)
  const LandingPage = () => (
    <div className="space-y-8">
      {/* Hero Section with Search */}
      <section className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 sm:p-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 text-center">
            Find Your Perfect Job
          </h1>
          <p className="text-xl text-gray-600 text-center mb-8">
            Browse thousands of job opportunities and start your career journey today
          </p>

          {/* Search Bar */}
          <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Job title, keywords, or company"
                className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">
                Search
              </button>
            </div>
          </div>

          {/* Quick Filter Chips */}
          <div className="flex flex-wrap gap-3 justify-center">
            {filters.map((filter) => (
              <button
                key={filter.label}
                className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Job Categories Section */}
      <section>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Jobs by Profession</h2>
          <Link to="#" className="text-blue-600 hover:text-blue-700 font-medium text-sm">
            See All →
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {jobCategories.map((category) => (
            <div
              key={category.id}
              className="bg-white rounded-xl border border-gray-200 p-5 hover:shadow-md transition-all cursor-pointer"
            >
              <div className="text-4xl mb-3">{category.icon}</div>
              <h3 className="font-semibold text-gray-900 mb-2">{category.name}</h3>
              <p className="text-blue-600 font-bold text-lg">{category.count}</p>
              <p className="text-gray-500 text-sm">open positions</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Companies Section */}
      <section>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Companies Hiring Now</h2>
          <Link to="#" className="text-blue-600 hover:text-blue-700 font-medium text-sm">
            See All →
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {companies.map((company) => (
            <div
              key={company.id}
              className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-all"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="text-5xl">{company.icon}</div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{company.name}</h3>
              <p className="text-blue-600 font-bold mb-4">{company.positions} open positions</p>
              <button className="w-full px-4 py-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 font-medium transition-colors">
                View Jobs
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* News & Articles Section */}
      <section>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Career Tips & News</h2>
          <Link to="#" className="text-blue-600 hover:text-blue-700 font-medium text-sm">
            See All →
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((article) => (
            <div key={article.id} className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all cursor-pointer">
              <div className="bg-gradient-to-br from-blue-100 to-indigo-100 h-40 flex items-center justify-center text-6xl">
                {article.image}
              </div>
              <div className="p-5">
                <p className="text-xs font-semibold text-blue-600 uppercase mb-2">{article.category}</p>
                <h3 className="text-lg font-semibold text-gray-900 mb-3 line-clamp-2">{article.title}</h3>
                <p className="text-sm text-gray-500">{article.date}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 sm:p-12 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h2>
        <p className="text-blue-100 mb-8 text-lg">
          Join thousands of job seekers finding their perfect role
        </p>
        <div className="flex gap-4 justify-center">
          <button
            onClick={() => navigate('/register')}
            className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
          >
            Create Free Account
          </button>
          <button
            onClick={() => navigate('/login')}
            className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
          >
            Sign In
          </button>
        </div>
      </section>
    </div>
  );

  // Student Home Page
  const StudentHome = () => (
    <div className="space-y-8">
      {/* Welcome Section */}
      <section className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome, {user?.email?.split('@')[0]}!</h1>
        <p className="text-gray-600">Discover and apply for opportunities that match your skills</p>
      </section>

      {/* Search Section */}
      <section className="bg-white rounded-xl border border-gray-200 p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Search Jobs</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Job title or keywords"
            className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">
            Search
          </button>
        </div>
      </section>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <p className="text-gray-600 text-sm mb-2">Profile Completion</p>
          <p className="text-3xl font-bold text-gray-900">85%</p>
          <div className="w-full bg-gray-200 rounded-full h-2 mt-4">
            <div className="bg-blue-600 h-2 rounded-full" style={{ width: '85%' }}></div>
          </div>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <p className="text-gray-600 text-sm mb-2">Applications Sent</p>
          <p className="text-3xl font-bold text-gray-900">12</p>
          <p className="text-sm text-gray-500 mt-2">This month</p>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <p className="text-gray-600 text-sm mb-2">Profile Views</p>
          <p className="text-3xl font-bold text-gray-900">234</p>
          <p className="text-sm text-gray-500 mt-2">By employers</p>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          { title: 'Update Profile', description: 'Complete your CV and profile information', icon: '👤', link: '/my-sessions' },
          { title: 'Browse Jobs', description: 'Explore available job opportunities', icon: '🔍', link: '#' },
          { title: 'My Applications', description: 'Track your job applications', icon: '📋', link: '#' },
        ].map((item, idx) => (
          <Link
            key={idx}
            to={item.link}
            className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-all"
          >
            <div className="text-4xl mb-3">{item.icon}</div>
            <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
            <p className="text-gray-600 text-sm mb-4">{item.description}</p>
            <span className="text-blue-600 font-medium text-sm">View →</span>
          </Link>
        ))}
      </div>

      {/* Recommended Jobs */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Jobs Recommended for You</h2>
        <div className="space-y-4">
          {[1, 2, 3].map((idx) => (
            <div key={idx} className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-md transition-all">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">Senior Software Developer</h3>
                  <p className="text-gray-600 mb-3">Tech Innovators Inc • Astana</p>
                  <p className="text-gray-700 mb-4">We're looking for experienced developers to join our growing team...</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-blue-50 text-blue-700 text-sm rounded-full">$4,000-5,000</span>
                    <span className="px-3 py-1 bg-green-50 text-green-700 text-sm rounded-full">Full-time</span>
                  </div>
                </div>
                <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium">
                  Apply
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );

  // Render appropriate page based on authentication and role
  if (!isAuthenticated) {
    return <LandingPage />;
  }

  if (user?.role === 'student') {
    return <StudentHome />;
  }

  // Default landing for other roles
  return <LandingPage />;
};

export default HomePage;
