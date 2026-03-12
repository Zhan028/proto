import { useState } from 'react';
import { Link } from 'react-router-dom';
import CandidateCard from '../components/CandidateCard';
import JobCard from '../components/JobCard';

const EmployerDashboardPage = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'jobs' | 'candidates' | 'applications'>('overview');
  const [showJobForm, setShowJobForm] = useState(false);
  const [jobTitle, setJobTitle] = useState('');
  const [jobDescription, setJobDescription] = useState('');

  // Mock data
  const stats = [
    { label: 'Active Jobs', value: '5', icon: '📋', color: 'bg-blue-50 text-blue-700' },
    { label: 'Total Applications', value: '124', icon: '📨', color: 'bg-green-50 text-green-700' },
    { label: 'Interviews Scheduled', value: '12', icon: '📅', color: 'bg-purple-50 text-purple-700' },
    { label: 'Hires This Month', value: '3', icon: '✅', color: 'bg-yellow-50 text-yellow-700' },
  ];

  const myJobs = [
    {
      id: 1,
      title: 'Senior Software Developer',
      company: 'Tech Innovators Inc',
      location: 'Astana',
      salary: { min: 4000, max: 6000 },
      type: 'Full-time' as const,
      description: 'Looking for an experienced developer...',
      skills: ['React', 'Node.js', 'TypeScript'],
      postedDate: '2 days ago',
      applicants: 45,
    },
    {
      id: 2,
      title: 'DevOps Engineer',
      company: 'Tech Innovators Inc',
      location: 'Astana',
      salary: { min: 5000, max: 7000 },
      type: 'Full-time' as const,
      description: 'Manage our cloud infrastructure...',
      skills: ['Docker', 'Kubernetes', 'AWS'],
      postedDate: '5 days ago',
      applicants: 32,
    },
  ];

  const recentApplications = [
    {
      id: 1,
      jobId: 1,
      candidateName: 'John Doe',
      candidateEmail: 'john@example.com',
      university: 'Kazakh National University',
      major: 'Computer Science',
      status: 'interview' as const,
      matchIndex: 85,
      appliedDate: 'Today',
    },
    {
      id: 2,
      jobId: 1,
      candidateName: 'Sarah Smith',
      candidateEmail: 'sarah@example.com',
      university: 'Nazarbayev University',
      major: 'Software Engineering',
      status: 'shortlisted' as const,
      matchIndex: 78,
      appliedDate: 'Yesterday',
    },
    {
      id: 3,
      jobId: 2,
      candidateName: 'Mike Johnson',
      candidateEmail: 'mike@example.com',
      university: 'Astana IT University',
      major: 'Information Systems',
      status: 'applied' as const,
      matchIndex: 65,
      appliedDate: '2 days ago',
    },
  ];

  const topCandidates = [
    {
      id: 1,
      name: 'John Doe',
      email: 'john@example.com',
      university: 'Kazakh National University',
      major: 'Computer Science',
      matchIndex: 85,
      skills: ['React', 'Node.js', 'TypeScript', 'Docker'],
      experience: '2 years of experience in full-stack development',
      resume: '#',
      status: 'interview' as const,
    },
    {
      id: 2,
      name: 'Sarah Smith',
      email: 'sarah@example.com',
      university: 'Nazarbayev University',
      major: 'Software Engineering',
      matchIndex: 78,
      skills: ['React', 'JavaScript', 'CSS', 'Git'],
      experience: '1.5 years in frontend development',
      resume: '#',
      status: 'shortlisted' as const,
    },
  ];

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <section>
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Employer Dashboard</h1>
        <p className="text-xl text-gray-600">Manage your jobs, applications, and candidates</p>
      </section>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, idx) => (
          <div key={idx} className="bg-white rounded-xl border border-gray-200 p-6">
            <div className={`w-12 h-12 rounded-lg ${stat.color} flex items-center justify-center text-2xl mb-4`}>
              {stat.icon}
            </div>
            <p className="text-gray-600 text-sm mb-1">{stat.label}</p>
            <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white rounded-xl border border-gray-200">
        <div className="flex border-b border-gray-200 overflow-x-auto">
          {(['overview', 'jobs', 'candidates', 'applications'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-4 font-medium text-sm whitespace-nowrap transition-colors ${
                activeTab === tab
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="p-8">
          {activeTab === 'overview' && (
            <div className="space-y-8">
              {/* Recent Applications */}
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold text-gray-900">Recent Applications</h2>
                  <Link to="#" className="text-blue-600 hover:text-blue-700 font-medium text-sm">
                    View All →
                  </Link>
                </div>
                <div className="space-y-4">
                  {recentApplications.map((app) => (
                    <div
                      key={app.id}
                      className="bg-gray-50 rounded-lg p-4 flex justify-between items-center hover:bg-gray-100 transition-colors"
                    >
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900">{app.candidateName}</h3>
                        <p className="text-sm text-gray-600">
                          {app.university} • {app.major}
                        </p>
                        <p className="text-xs text-gray-500 mt-1">Applied {app.appliedDate}</p>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="text-sm font-bold text-blue-600">{app.matchIndex}%</span>
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-medium ${
                            app.status === 'interview'
                              ? 'bg-purple-100 text-purple-700'
                              : app.status === 'shortlisted'
                              ? 'bg-green-100 text-green-700'
                              : 'bg-blue-100 text-blue-700'
                          }`}
                        >
                          {app.status.charAt(0).toUpperCase() + app.status.slice(1)}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Top Candidates */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Top Candidates</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {topCandidates.map((candidate) => (
                    <CandidateCard key={candidate.id} {...candidate} />
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'jobs' && (
            <div className="space-y-6">
              <button
                onClick={() => setShowJobForm(true)}
                className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
              >
                + Post New Job
              </button>

              <div className="space-y-4">
                {myJobs.map((job) => (
                  <JobCard key={job.id} {...job} />
                ))}
              </div>
            </div>
          )}

          {activeTab === 'candidates' && (
            <div className="space-y-6">
              <input
                type="text"
                placeholder="Search candidates..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {topCandidates.map((candidate) => (
                  <CandidateCard key={candidate.id} {...candidate} />
                ))}
              </div>
            </div>
          )}

          {activeTab === 'applications' && (
            <div className="space-y-4">
              {recentApplications.map((app) => (
                <div
                  key={app.id}
                  className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-all"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="font-semibold text-gray-900 text-lg">{app.candidateName}</h3>
                      <p className="text-gray-600">{app.candidateEmail}</p>
                    </div>
                    <span className="text-2xl font-bold text-blue-600">{app.matchIndex}%</span>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Applied for: <span className="font-medium">Senior Software Developer</span>
                  </p>
                  <div className="flex gap-2">
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium text-sm">
                      Review
                    </button>
                    <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 font-medium text-sm">
                      Schedule Interview
                    </button>
                    <button className="px-4 py-2 border border-red-300 text-red-700 rounded-lg hover:bg-red-50 font-medium text-sm">
                      Reject
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Job Posting Form Modal */}
      {showJobForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-8 max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Post New Job</h2>

            <div className="space-y-6 mb-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Job Title *
                </label>
                <input
                  type="text"
                  value={jobTitle}
                  onChange={(e) => setJobTitle(e.target.value)}
                  placeholder="e.g., Senior Developer"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Job Description *
                </label>
                <textarea
                  value={jobDescription}
                  onChange={(e) => setJobDescription(e.target.value)}
                  placeholder="Describe the role, responsibilities, and requirements..."
                  rows={6}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Job Type *
                </label>
                <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>Full-time</option>
                  <option>Part-time</option>
                  <option>Contract</option>
                  <option>Internship</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Min Salary ($)
                  </label>
                  <input
                    type="number"
                    placeholder="3000"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Max Salary ($)
                  </label>
                  <input
                    type="number"
                    placeholder="5000"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => {
                  setShowJobForm(false);
                  setJobTitle('');
                  setJobDescription('');
                }}
                className="flex-1 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
              >
                Post Job
              </button>
              <button
                onClick={() => setShowJobForm(false)}
                className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EmployerDashboardPage;
