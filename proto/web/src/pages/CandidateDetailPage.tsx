import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import MatchIndex from '../components/MatchIndex';

const CandidateDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [actionTaken, setActionTaken] = useState<string | null>(null);

  // Mock candidate data
  const candidate = {
    id: parseInt(id || '1'),
    name: 'John Doe',
    email: 'john@example.com',
    phone: '+1 (555) 123-4567',
    university: 'Kazakh National University',
    major: 'Computer Science',
    graduationYear: '2024',
    location: 'Astana, Kazakhstan',
    bio: 'Passionate software developer with expertise in full-stack development. Interested in working with modern technologies like React, Node.js, and cloud platforms.',
    matchIndex: 85,
    skills: ['JavaScript', 'React', 'Node.js', 'TypeScript', 'MongoDB', 'Docker', 'AWS', 'Git'],
    experience: '2 years of experience in full-stack web development. Worked on several successful projects including e-commerce platforms and SaaS applications.',
    education: [
      {
        school: 'Kazakh National University',
        degree: 'Bachelor of Science',
        field: 'Computer Science',
        year: '2020 - 2024',
      },
    ],
    languages: ['English (Fluent)', 'Russian (Native)', 'Kazakh (Native)'],
    certifications: [
      'AWS Certified Solutions Architect',
      'Google Cloud Professional Data Engineer',
    ],
    resume: '#',
    portfolio: 'https://example.com',
    linkedIn: 'https://linkedin.com/in/johndoe',
    github: 'https://github.com/johndoe',
  };

  const similarCandidates = [
    {
      id: 2,
      name: 'Sarah Smith',
      major: 'Software Engineering',
      matchIndex: 78,
      skills: 4,
    },
    {
      id: 3,
      name: 'Mike Johnson',
      major: 'Information Systems',
      matchIndex: 72,
      skills: 6,
    },
  ];

  const jobRecommendations = [
    {
      id: 1,
      title: 'Senior Software Developer',
      company: 'Tech Innovators Inc',
      matchIndex: 85,
    },
    {
      id: 2,
      title: 'Full Stack Developer',
      company: 'Creative Design Studio',
      matchIndex: 78,
    },
    {
      id: 3,
      title: 'Backend Engineer',
      company: 'Global Finance Solutions',
      matchIndex: 72,
    },
  ];

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
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-start gap-4">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-400 to-indigo-600 rounded-xl flex items-center justify-center text-white text-4xl font-bold">
                  {candidate.name.charAt(0).toUpperCase()}
                </div>
                <div>
                  <h1 className="text-4xl font-bold text-gray-900 mb-2">{candidate.name}</h1>
                  <p className="text-xl text-gray-600 mb-3">{candidate.major}</p>
                  <div className="space-y-1 text-gray-600">
                    <p>📍 {candidate.location}</p>
                    <p>📧 {candidate.email}</p>
                    <p>📱 {candidate.phone}</p>
                  </div>
                </div>
              </div>
              <div>
                <MatchIndex percentage={candidate.matchIndex} size="lg" />
              </div>
            </div>
          </div>

          {/* Bio */}
          <div className="bg-white rounded-xl border border-gray-200 p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">About</h2>
            <p className="text-gray-700 leading-relaxed">{candidate.bio}</p>
          </div>

          {/* Education */}
          <div className="bg-white rounded-xl border border-gray-200 p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Education</h2>
            <div className="space-y-4">
              {candidate.education.map((edu, idx) => (
                <div key={idx}>
                  <p className="font-semibold text-gray-900">{edu.degree} in {edu.field}</p>
                  <p className="text-gray-600">{edu.school}</p>
                  <p className="text-sm text-gray-500">{edu.year}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div className="bg-white rounded-xl border border-gray-200 p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Skills</h2>
            <div className="flex flex-wrap gap-3">
              {candidate.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-blue-50 text-blue-700 rounded-lg font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div className="bg-white rounded-xl border border-gray-200 p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Experience</h2>
            <p className="text-gray-700">{candidate.experience}</p>
          </div>

          {/* Languages */}
          <div className="bg-white rounded-xl border border-gray-200 p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Languages</h2>
            <div className="space-y-2">
              {candidate.languages.map((lang) => (
                <p key={lang} className="text-gray-700 font-medium">
                  {lang}
                </p>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="bg-white rounded-xl border border-gray-200 p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Certifications</h2>
            <div className="space-y-2">
              {candidate.certifications.map((cert) => (
                <div key={cert} className="flex items-center gap-2">
                  <span className="text-blue-600">✓</span>
                  <span className="text-gray-700 font-medium">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1 space-y-6">
          {/* Action Buttons */}
          <div className="bg-white rounded-xl border border-gray-200 p-6 sticky top-24 space-y-3">
            {!actionTaken ? (
              <>
                <button
                  onClick={() => setActionTaken('shortlist')}
                  className="w-full px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                >
                  ⭐ Shortlist Candidate
                </button>
                <button
                  onClick={() => setActionTaken('interview')}
                  className="w-full px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors"
                >
                  📅 Schedule Interview
                </button>
                <button
                  onClick={() => setActionTaken('offer')}
                  className="w-full px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors"
                >
                  💼 Send Offer
                </button>
                <button
                  onClick={() => setActionTaken('reject')}
                  className="w-full px-6 py-3 border-2 border-red-300 text-red-700 font-semibold rounded-lg hover:bg-red-50 transition-colors"
                >
                  ❌ Reject
                </button>
              </>
            ) : (
              <div className="text-center py-6">
                <div className="text-5xl mb-3">✅</div>
                <p className="text-lg font-semibold text-gray-900 mb-2">
                  {actionTaken === 'shortlist'
                    ? 'Candidate Shortlisted!'
                    : actionTaken === 'interview'
                    ? 'Interview Scheduled'
                    : actionTaken === 'offer'
                    ? 'Offer Sent!'
                    : 'Candidate Rejected'}
                </p>
                <button
                  onClick={() => setActionTaken(null)}
                  className="w-full px-6 py-2 mt-4 bg-blue-50 text-blue-600 font-medium rounded-lg hover:bg-blue-100 transition-colors"
                >
                  Undo
                </button>
              </div>
            )}
          </div>

          {/* Links */}
          <div className="bg-white rounded-xl border border-gray-200 p-6 space-y-3">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Links</h3>
            <a
              href={candidate.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="block px-4 py-3 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors text-center font-medium"
            >
              📄 View Resume
            </a>
            <a
              href={candidate.portfolio}
              target="_blank"
              rel="noopener noreferrer"
              className="block px-4 py-3 bg-indigo-50 text-indigo-600 rounded-lg hover:bg-indigo-100 transition-colors text-center font-medium"
            >
              🌐 Portfolio
            </a>
            <a
              href={candidate.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="block px-4 py-3 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors text-center font-medium"
            >
              💼 LinkedIn
            </a>
            <a
              href={candidate.github}
              target="_blank"
              rel="noopener noreferrer"
              className="block px-4 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors text-center font-medium"
            >
              💻 GitHub
            </a>
          </div>

          {/* Recommended Jobs */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Recommended Jobs</h3>
            <div className="space-y-3">
              {jobRecommendations.map((job) => (
                <div
                  key={job.id}
                  className="p-3 bg-gray-50 rounded-lg hover:bg-gray-100 cursor-pointer transition-colors"
                >
                  <p className="font-medium text-gray-900 text-sm mb-1">{job.title}</p>
                  <p className="text-xs text-gray-600 mb-2">{job.company}</p>
                  <span className="text-xs text-blue-600 font-bold">{job.matchIndex}% match</span>
                </div>
              ))}
            </div>
          </div>

          {/* Similar Candidates */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Similar Candidates</h3>
            <div className="space-y-3">
              {similarCandidates.map((cand) => (
                <div
                  key={cand.id}
                  onClick={() => navigate(`/candidate/${cand.id}`)}
                  className="p-3 bg-gray-50 rounded-lg hover:bg-gray-100 cursor-pointer transition-colors"
                >
                  <p className="font-medium text-gray-900 text-sm mb-1">{cand.name}</p>
                  <p className="text-xs text-gray-600 mb-2">{cand.major}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-blue-600 font-bold">{cand.matchIndex}%</span>
                    <span className="text-xs text-gray-600">{cand.skills} skills</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CandidateDetailPage;
