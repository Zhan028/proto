import { useState } from 'react';
import JobCard from '../components/JobCard';

const BrowseJobsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);
  const [salaryRange, setSalaryRange] = useState([0, 10000]);

  // Mock job data
  const jobs = [
    {
      id: 1,
      title: 'Senior Software Developer',
      company: 'Tech Innovators Inc',
      location: 'Astana',
      salary: { min: 4000, max: 6000 },
      type: 'Full-time' as const,
      matchIndex: 85,
      description: 'We are looking for an experienced software developer with expertise in React and Node.js...',
      skills: ['React', 'Node.js', 'TypeScript', 'PostgreSQL', 'Docker'],
      postedDate: '2 days ago',
    },
    {
      id: 2,
      title: 'Frontend Developer',
      company: 'Creative Design Studio',
      location: 'Astana',
      salary: { min: 3000, max: 4500 },
      type: 'Full-time' as const,
      matchIndex: 72,
      description: 'Join our creative team and build amazing user interfaces with modern web technologies...',
      skills: ['React', 'CSS', 'JavaScript', 'Figma'],
      postedDate: '3 days ago',
    },
    {
      id: 3,
      title: 'Data Analyst Internship',
      company: 'Global Finance Solutions',
      location: 'Astana',
      salary: { min: 1500, max: 2500 },
      type: 'Internship' as const,
      matchIndex: 68,
      description: 'Gain practical experience in data analysis and business intelligence with our expert team...',
      skills: ['Python', 'SQL', 'Excel', 'Tableau'],
      postedDate: '1 day ago',
    },
    {
      id: 4,
      title: 'DevOps Engineer',
      company: 'Tech Innovators Inc',
      location: 'Astana',
      salary: { min: 5000, max: 7000 },
      type: 'Full-time' as const,
      matchIndex: 62,
      description: 'Manage and optimize our cloud infrastructure, CI/CD pipelines, and deployment systems...',
      skills: ['Docker', 'Kubernetes', 'AWS', 'Linux', 'Jenkins'],
      postedDate: '4 days ago',
    },
    {
      id: 5,
      title: 'UX/UI Designer',
      company: 'Creative Design Studio',
      location: 'Astana',
      salary: { min: 3500, max: 5000 },
      type: 'Full-time' as const,
      matchIndex: 55,
      description: 'Create beautiful and intuitive user experiences for web and mobile applications...',
      skills: ['Figma', 'UI Design', 'User Research', 'Prototyping'],
      postedDate: '5 days ago',
    },
    {
      id: 6,
      title: 'Quality Assurance Specialist',
      company: 'Global Finance Solutions',
      location: 'Almaty',
      salary: { min: 2000, max: 3500 },
      type: 'Full-time' as const,
      matchIndex: 48,
      description: 'Ensure quality and reliability of our software products through comprehensive testing...',
      skills: ['Selenium', 'Test Automation', 'QA', 'API Testing'],
      postedDate: '6 days ago',
    },
  ];

  // Filter jobs
  const filteredJobs = jobs.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.skills.some((skill) => skill.toLowerCase().includes(searchTerm.toLowerCase()));

    const matchesType = !selectedType || job.type === selectedType;
    const matchesLocation = !selectedLocation || job.location === selectedLocation;
    const matchesSalary =
      job.salary.min >= salaryRange[0] && job.salary.max <= salaryRange[1];

    return matchesSearch && matchesType && matchesLocation && matchesSalary;
  });

  const locations = [...new Set(jobs.map((j) => j.location))];
  const types = [...new Set(jobs.map((j) => j.type))];

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <section>
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Browse Jobs</h1>
        <p className="text-xl text-gray-600">Find your next opportunity</p>
      </section>

      {/* Filters and Results */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Sidebar Filters */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-xl border border-gray-200 p-6 sticky top-24 space-y-6">
            <h2 className="text-lg font-semibold text-gray-900">Filters</h2>

            {/* Search */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Search
              </label>
              <input
                type="text"
                placeholder="Job title, skill..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Job Type */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                Job Type
              </label>
              <div className="space-y-2">
                {types.map((type) => (
                  <label key={type} className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={selectedType === type}
                      onChange={() =>
                        setSelectedType(selectedType === type ? null : type)
                      }
                      className="rounded"
                    />
                    <span className="text-sm text-gray-700">{type}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Location */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                Location
              </label>
              <div className="space-y-2">
                {locations.map((location) => (
                  <label key={location} className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={selectedLocation === location}
                      onChange={() =>
                        setSelectedLocation(
                          selectedLocation === location ? null : location
                        )
                      }
                      className="rounded"
                    />
                    <span className="text-sm text-gray-700">{location}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Salary Range */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                Salary Range: ${salaryRange[0]}-${salaryRange[1]}
              </label>
              <input
                type="range"
                min="0"
                max="10000"
                step="500"
                value={salaryRange[1]}
                onChange={(e) =>
                  setSalaryRange([salaryRange[0], parseInt(e.target.value)])
                }
                className="w-full"
              />
            </div>

            {/* Reset */}
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedType(null);
                setSelectedLocation(null);
                setSalaryRange([0, 10000]);
              }}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition-colors"
            >
              Reset Filters
            </button>
          </div>
        </div>

        {/* Job Results */}
        <div className="lg:col-span-3">
          <div className="mb-4 flex justify-between items-center">
            <p className="text-gray-600">
              Found <span className="font-semibold text-gray-900">{filteredJobs.length}</span> jobs
            </p>
          </div>

          <div className="space-y-4">
            {filteredJobs.length > 0 ? (
              filteredJobs.map((job) => (
                <JobCard key={job.id} {...job} />
              ))
            ) : (
              <div className="bg-white rounded-xl border border-gray-200 p-12 text-center">
                <p className="text-gray-600 mb-4">No jobs found matching your criteria</p>
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedType(null);
                    setSelectedLocation(null);
                    setSalaryRange([0, 10000]);
                  }}
                  className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrowseJobsPage;
