import { useState } from 'react';

const UniversityAnalyticsPage = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'students' | 'employers' | 'statistics'>('overview');

  // Mock analytics data
  const overallStats = [
    { label: 'Total Students', value: '2,450', icon: '👥', trend: '+12%' },
    { label: 'Employed Graduates', value: '1,862', icon: '✅', trend: '+8%' },
    { label: 'Active Employers', value: '156', icon: '🏢', trend: '+15%' },
    { label: 'Job Openings', value: '487', icon: '📋', trend: '+22%' },
  ];

  const employmentByDegree = [
    { degree: 'Computer Science', employed: 95, total: 98, percentage: 96.9 },
    { degree: 'Business Administration', employed: 78, total: 82, percentage: 95.1 },
    { degree: 'Engineering', employed: 112, total: 125, percentage: 89.6 },
    { degree: 'Economics', employed: 54, total: 62, percentage: 87.1 },
    { degree: 'Marketing', employed: 38, total: 45, percentage: 84.4 },
  ];

  const topEmployers = [
    { name: 'Tech Innovators Inc', hires: 45, openings: 8, rating: 4.8 },
    { name: 'Global Finance Solutions', hires: 38, openings: 6, rating: 4.6 },
    { name: 'Creative Design Studio', hires: 32, openings: 5, rating: 4.5 },
    { name: 'Innovation Labs', hires: 28, openings: 4, rating: 4.7 },
    { name: 'Digital Transformation Co', hires: 25, openings: 3, rating: 4.4 },
  ];

  const demandedSkills = [
    { skill: 'JavaScript', count: 156, growth: '+18%' },
    { skill: 'Python', count: 142, growth: '+15%' },
    { skill: 'React', count: 128, growth: '+22%' },
    { skill: 'SQL', count: 98, growth: '+8%' },
    { skill: 'Docker', count: 87, growth: '+25%' },
    { skill: 'AWS', count: 76, growth: '+20%' },
    { skill: 'Node.js', count: 65, growth: '+12%' },
    { skill: 'TypeScript', count: 54, growth: '+35%' },
  ];

  const recentPlacements = [
    {
      studentName: 'John Doe',
      major: 'Computer Science',
      employer: 'Tech Innovators Inc',
      position: 'Senior Developer',
      salary: '$5,500',
      startDate: '2024-02-15',
    },
    {
      studentName: 'Sarah Smith',
      major: 'Business Administration',
      employer: 'Global Finance Solutions',
      position: 'Business Analyst',
      salary: '$4,200',
      startDate: '2024-02-10',
    },
    {
      studentName: 'Mike Johnson',
      major: 'Engineering',
      employer: 'Innovation Labs',
      position: 'Systems Engineer',
      salary: '$4,800',
      startDate: '2024-02-05',
    },
  ];

  const employmentByIndustry = [
    { industry: 'Technology', count: 345, percentage: 28.5 },
    { industry: 'Finance', count: 198, percentage: 16.3 },
    { industry: 'Consulting', count: 145, percentage: 12.0 },
    { industry: 'Healthcare', count: 125, percentage: 10.3 },
    { industry: 'Manufacturing', count: 98, percentage: 8.1 },
    { industry: 'Education', count: 76, percentage: 6.3 },
    { industry: 'Other', count: 112, percentage: 18.5 },
  ];

  const skillGapAnalysis = [
    { skill: 'AI/Machine Learning', demand: 95, supply: 34, gap: 61 },
    { skill: 'Cloud Computing', demand: 88, supply: 45, gap: 43 },
    { skill: 'Data Science', demand: 82, supply: 38, gap: 44 },
    { skill: 'DevOps', demand: 76, supply: 35, gap: 41 },
    { skill: 'Cybersecurity', demand: 68, supply: 28, gap: 40 },
  ];

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <section>
        <h1 className="text-4xl font-bold text-gray-900 mb-2">University Analytics Dashboard</h1>
        <p className="text-xl text-gray-600">Monitor employment statistics and graduate outcomes</p>
      </section>

      {/* Overall Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {overallStats.map((stat, idx) => (
          <div key={idx} className="bg-white rounded-xl border border-gray-200 p-6">
            <div className="flex justify-between items-start mb-4">
              <span className="text-4xl">{stat.icon}</span>
              <span className="text-green-600 font-semibold text-sm">{stat.trend}</span>
            </div>
            <p className="text-gray-600 text-sm mb-2">{stat.label}</p>
            <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white rounded-xl border border-gray-200">
        <div className="flex border-b border-gray-200 overflow-x-auto">
          {(['overview', 'students', 'employers', 'statistics'] as const).map((tab) => (
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
              {/* Recent Placements */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Recent Graduate Placements</h2>
                <div className="space-y-4">
                  {recentPlacements.map((placement, idx) => (
                    <div
                      key={idx}
                      className="bg-gray-50 rounded-lg p-6 flex justify-between items-center hover:shadow-md transition-all"
                    >
                      <div>
                        <h3 className="font-semibold text-gray-900 text-lg">{placement.studentName}</h3>
                        <p className="text-gray-600 text-sm">{placement.major}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-gray-900">{placement.position}</p>
                        <p className="text-gray-600 text-sm">{placement.employer}</p>
                        <p className="text-blue-600 font-bold text-sm mt-1">{placement.salary}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-xs text-gray-500">Started</p>
                        <p className="font-medium text-gray-900">{placement.startDate}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Employment by Industry */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Employment by Industry</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    {employmentByIndustry.map((item, idx) => (
                      <div key={idx}>
                        <div className="flex justify-between mb-2">
                          <span className="text-gray-700 font-medium">{item.industry}</span>
                          <span className="text-gray-900 font-semibold">{item.count}</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-blue-600 h-2 rounded-full"
                            style={{ width: `${item.percentage}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="bg-blue-50 rounded-lg p-6 flex items-center justify-center">
                    <div className="text-center">
                      <p className="text-4xl font-bold text-blue-600 mb-2">1,862</p>
                      <p className="text-gray-600 text-sm">Total Employed Graduates</p>
                      <p className="text-gray-500 text-xs mt-2">(76% employment rate)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'students' && (
            <div className="space-y-8">
              {/* Employment by Degree */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Employment by Degree Program</h2>
                <div className="space-y-4">
                  {employmentByDegree.map((program, idx) => (
                    <div key={idx} className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-all">
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <h3 className="font-semibold text-gray-900">{program.degree}</h3>
                          <p className="text-sm text-gray-600">
                            {program.employed} out of {program.total} students employed
                          </p>
                        </div>
                        <span className="text-2xl font-bold text-green-600">{program.percentage}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div
                          className="bg-green-500 h-3 rounded-full transition-all"
                          style={{ width: `${program.percentage}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'employers' && (
            <div className="space-y-8">
              {/* Top Employers */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Top Hiring Companies</h2>
                <div className="space-y-4">
                  {topEmployers.map((employer, idx) => (
                    <div
                      key={idx}
                      className="bg-gradient-to-r from-gray-50 to-white rounded-lg p-6 border border-gray-200 hover:shadow-md transition-all"
                    >
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-900 text-lg mb-2">{employer.name}</h3>
                          <div className="flex items-center gap-4 text-sm text-gray-600">
                            <span>👥 {employer.hires} hires</span>
                            <span>📋 {employer.openings} open positions</span>
                            <span>⭐ {employer.rating}/5.0 rating</span>
                          </div>
                        </div>
                        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium text-sm">
                          View Profile
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'statistics' && (
            <div className="space-y-8">
              {/* Demanded Skills */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Most Demanded Skills in Labor Market</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {demandedSkills.map((skill, idx) => (
                    <div key={idx} className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-4 border border-blue-200">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-semibold text-gray-900">{skill.skill}</span>
                        <span className="text-green-600 font-bold text-sm">{skill.growth}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-2xl font-bold text-blue-600">{skill.count}</span>
                        <span className="text-gray-600 text-sm">job postings</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Skill Gap Analysis */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Skill Gap Analysis</h2>
                <div className="space-y-6">
                  {skillGapAnalysis.map((item, idx) => (
                    <div key={idx} className="p-6 border border-gray-200 rounded-lg hover:shadow-md transition-all">
                      <div className="flex justify-between items-center mb-4">
                        <h3 className="font-semibold text-gray-900 text-lg">{item.skill}</h3>
                        <span className="text-red-600 font-bold text-lg">Gap: {item.gap}</span>
                      </div>
                      <div className="grid grid-cols-3 gap-4">
                        <div>
                          <p className="text-xs text-gray-600 mb-2">Market Demand</p>
                          <div className="w-full bg-gray-200 rounded-full h-3">
                            <div
                              className="bg-red-500 h-3 rounded-full"
                              style={{ width: `${item.demand}%` }}
                            ></div>
                          </div>
                          <p className="text-xs font-semibold text-gray-900 mt-1">{item.demand}%</p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-600 mb-2">Graduate Supply</p>
                          <div className="w-full bg-gray-200 rounded-full h-3">
                            <div
                              className="bg-green-500 h-3 rounded-full"
                              style={{ width: `${item.supply}%` }}
                            ></div>
                          </div>
                          <p className="text-xs font-semibold text-gray-900 mt-1">{item.supply}%</p>
                        </div>
                        <div className="text-center">
                          <p className="text-xs text-gray-600 mb-2">Gap</p>
                          <p className="text-lg font-bold text-red-600">{item.gap}</p>
                          <p className="text-xs text-gray-600 mt-1">needed</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UniversityAnalyticsPage;
