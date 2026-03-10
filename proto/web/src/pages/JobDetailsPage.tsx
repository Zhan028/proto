import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import MatchIndex from '../components/MatchIndex';

const JobDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [applied, setApplied] = useState(false);
  const [showApplicationForm, setShowApplicationForm] = useState(false);
  const [coverLetter, setCoverLetter] = useState('');

  // Mock job data (in a real app, would fetch from API)
  const job = {
    id: parseInt(id || '1'),
    title: 'Senior Software Developer',
    company: 'Tech Innovators Inc',
    location: 'Astana',
    salary: { min: 4000, max: 6000 },
    type: 'Full-time',
    matchIndex: 85,
    postedDate: '2 days ago',
    description: `We are looking for an experienced Senior Software Developer to join our growing team. You will be responsible for developing and maintaining high-quality software solutions, mentoring junior developers, and collaborating with cross-functional teams.`,
    fullDescription: `
    About the Role:
    We are seeking a talented Senior Software Developer with expertise in modern web development technologies. You will work on building scalable applications that serve millions of users worldwide.

    Key Responsibilities:
    - Design and implement robust backend systems using Node.js and TypeScript
    - Develop responsive frontend applications with React
    - Lead code reviews and mentor junior team members
    - Collaborate with product and design teams to deliver excellent user experiences
    - Participate in system architecture decisions
    - Maintain and improve existing codebase
    - Contribute to continuous integration and deployment practices

    What We're Looking For:
    - 5+ years of professional software development experience
    - Strong expertise in JavaScript/TypeScript, React, and Node.js
    - Experience with relational databases (PostgreSQL) and NoSQL databases
    - Familiarity with Docker and cloud platforms (AWS/GCP)
    - Strong problem-solving and communication skills
    - Experience with agile methodologies
    - Bachelor's degree in Computer Science or related field (or equivalent experience)
    `,
    requirements: [
      '5+ years of professional software development experience',
      'Expertise in React, Node.js, and TypeScript',
      'Strong knowledge of SQL and NoSQL databases',
      'Experience with Docker and containerization',
      'AWS or cloud platform experience',
      'Git and version control proficiency',
      'Strong communication and teamwork skills',
    ],
    benefits: [
      'Competitive salary and performance bonuses',
      'Health insurance and retirement plan',
      'Professional development opportunities',
      'Flexible working hours',
      'Remote work options',
      'Company-sponsored training',
      'Annual team building events',
    ],
    skills: ['React', 'Node.js', 'TypeScript', 'PostgreSQL', 'Docker', 'AWS', 'Git', 'Agile'],
    applicants: 45,
    companyLogo: '🚀',
  };

  const similarJobs = [
    {
      id: 2,
      title: 'Frontend Developer',
      company: 'Creative Design Studio',
      salary: { min: 3000, max: 4500 },
      matchIndex: 72,
    },
    {
      id: 4,
      title: 'DevOps Engineer',
      company: 'Tech Innovators Inc',
      salary: { min: 5000, max: 7000 },
      matchIndex: 62,
    },
  ];

  const handleApply = () => {
    if (!applied) {
      setShowApplicationForm(true);
    }
  };

  const submitApplication = () => {
    setApplied(true);
    setShowApplicationForm(false);
    setCoverLetter('');
  };

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
      >
        ← Back
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Header */}
          <div className="bg-white rounded-xl border border-gray-200 p-8">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-start gap-4">
                <div className="text-6xl">{job.companyLogo}</div>
                <div>
                  <h1 className="text-4xl font-bold text-gray-900 mb-2">{job.title}</h1>
                  <p className="text-xl text-gray-600 mb-4">{job.company}</p>
                  <div className="flex flex-wrap gap-4 mb-4">
                    <span className="text-gray-700">📍 {job.location}</span>
                    <span className="text-gray-700">💰 ${job.salary.min.toLocaleString()}-${job.salary.max.toLocaleString()}</span>
                    <span className="text-gray-700">💼 {job.type}</span>
                    <span className="text-gray-500 text-sm">Posted {job.postedDate}</span>
                  </div>
                </div>
              </div>
              <div>
                <MatchIndex percentage={job.matchIndex} size="lg" />
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="bg-white rounded-xl border border-gray-200 p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">About the Position</h2>
            <div className="text-gray-700 space-y-4 whitespace-pre-wrap">
              {job.fullDescription}
            </div>
          </div>

          {/* Requirements */}
          <div className="bg-white rounded-xl border border-gray-200 p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Requirements</h2>
            <ul className="space-y-3">
              {job.requirements.map((req, idx) => (
                <li key={idx} className="flex items-start gap-3 text-gray-700">
                  <span className="text-blue-600 font-bold mt-1">✓</span>
                  <span>{req}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Benefits */}
          <div className="bg-white rounded-xl border border-gray-200 p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Benefits & Perks</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {job.benefits.map((benefit, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <span className="text-yellow-500 text-xl">⭐</span>
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div className="bg-white rounded-xl border border-gray-200 p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Required Skills</h2>
            <div className="flex flex-wrap gap-3">
              {job.skills.map((skill, idx) => (
                <span
                  key={idx}
                  className="px-4 py-2 bg-blue-50 text-blue-700 rounded-lg font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1 space-y-6">
          {/* Apply Section */}
          <div className="bg-white rounded-xl border border-gray-200 p-6 sticky top-24">
            {!applied ? (
              <>
                <button
                  onClick={handleApply}
                  className="w-full px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors mb-4"
                >
                  Apply Now
                </button>
                <p className="text-center text-gray-600 text-sm mb-4">
                  {job.applicants} people have applied
                </p>
                <button
                  onClick={() => {}}
                  className="w-full px-6 py-2 border-2 border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors"
                >
                  ❤️ Save Job
                </button>
              </>
            ) : (
              <div className="text-center py-6">
                <div className="text-5xl mb-3">✅</div>
                <p className="text-lg font-semibold text-gray-900 mb-2">Application Sent!</p>
                <p className="text-gray-600 text-sm mb-4">
                  The employer will review your application shortly.
                </p>
                <button
                  onClick={() => navigate('/my-applications')}
                  className="w-full px-6 py-2 bg-blue-50 text-blue-600 font-medium rounded-lg hover:bg-blue-100 transition-colors"
                >
                  View My Applications
                </button>
              </div>
            )}
          </div>

          {/* Company Info */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">About {job.company}</h3>
            <p className="text-gray-600 text-sm mb-4">
              Tech Innovators Inc is a leading software development company specializing in innovative solutions for global enterprises.
            </p>
            <button className="w-full px-4 py-2 bg-gray-100 text-gray-700 font-medium rounded-lg hover:bg-gray-200 transition-colors">
              Visit Company Page
            </button>
          </div>

          {/* Similar Jobs */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Similar Jobs</h3>
            <div className="space-y-3">
              {similarJobs.map((simJob) => (
                <div
                  key={simJob.id}
                  onClick={() => navigate(`/job/${simJob.id}`)}
                  className="p-3 bg-gray-50 rounded-lg hover:bg-gray-100 cursor-pointer transition-colors"
                >
                  <p className="font-medium text-gray-900 text-sm mb-1">{simJob.title}</p>
                  <p className="text-xs text-gray-600 mb-2">{simJob.company}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-semibold text-blue-600">
                      ${simJob.salary.min.toLocaleString()}
                    </span>
                    <span className="text-xs text-blue-600 font-medium">{simJob.matchIndex}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Application Form Modal */}
      {showApplicationForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-8 max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Submit Your Application</h2>

            <div className="space-y-6 mb-6">
              {/* Resume Selection */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Select Resume
                </label>
                <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>My Resume (Updated 1 week ago)</option>
                  <option>Resume v2 (Updated 2 weeks ago)</option>
                </select>
              </div>

              {/* Cover Letter */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Cover Letter (Optional)
                </label>
                <textarea
                  value={coverLetter}
                  onChange={(e) => setCoverLetter(e.target.value)}
                  placeholder="Tell the employer why you're a great fit for this role..."
                  rows={6}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Confirmation */}
              <label className="flex items-center gap-3 cursor-pointer">
                <input type="checkbox" className="rounded" />
                <span className="text-sm text-gray-700">
                  I confirm that the information provided is accurate and I'm interested in this position
                </span>
              </label>
            </div>

            <div className="flex gap-3">
              <button
                onClick={submitApplication}
                className="flex-1 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
              >
                Submit Application
              </button>
              <button
                onClick={() => setShowApplicationForm(false)}
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

export default JobDetailsPage;
