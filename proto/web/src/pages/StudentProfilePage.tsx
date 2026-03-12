import { useState } from 'react';

const StudentProfilePage = () => {
  const [editMode, setEditMode] = useState(false);
  const [activeTab, setActiveTab] = useState<'profile' | 'resume' | 'applications'>('profile');
  const [formData, setFormData] = useState({
    name: 'John Doe',
    email: 'john@example.com',
    phone: '+1 (555) 123-4567',
    location: 'Astana, Kazakhstan',
    university: 'Kazakh National University',
    major: 'Computer Science',
    graduationYear: '2024',
    bio: 'Passionate software developer with interest in web technologies and open-source projects.',
    skills: ['JavaScript', 'React', 'Node.js', 'TypeScript', 'MongoDB', 'Docker'],
  });

  const [newSkill, setNewSkill] = useState('');

  const applications = [
    {
      id: 1,
      jobTitle: 'Senior Software Developer',
      company: 'Tech Innovators Inc',
      status: 'interview',
      appliedDate: '2024-02-01',
      matchIndex: 85,
    },
    {
      id: 2,
      jobTitle: 'Frontend Developer',
      company: 'Creative Design Studio',
      status: 'shortlisted',
      appliedDate: '2024-01-28',
      matchIndex: 72,
    },
    {
      id: 3,
      jobTitle: 'Full Stack Developer',
      company: 'Global Finance Solutions',
      status: 'applied',
      appliedDate: '2024-01-25',
      matchIndex: 68,
    },
  ];

  const resumes = [
    {
      id: 1,
      name: 'John Doe Resume (2024)',
      uploadedDate: '2024-02-01',
      isPrimary: true,
    },
    {
      id: 2,
      name: 'CV - Updated',
      uploadedDate: '2024-01-15',
      isPrimary: false,
    },
  ];

  const handleAddSkill = () => {
    if (newSkill.trim() && !formData.skills.includes(newSkill)) {
      setFormData({
        ...formData,
        skills: [...formData.skills, newSkill],
      });
      setNewSkill('');
    }
  };

  const handleRemoveSkill = (skillToRemove: string) => {
    setFormData({
      ...formData,
      skills: formData.skills.filter((s) => s !== skillToRemove),
    });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'interview':
        return 'bg-purple-100 text-purple-700';
      case 'shortlisted':
        return 'bg-green-100 text-green-700';
      case 'applied':
        return 'bg-blue-100 text-blue-700';
      case 'rejected':
        return 'bg-red-100 text-red-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <section>
        <h1 className="text-4xl font-bold text-gray-900 mb-2">My Profile</h1>
        <p className="text-xl text-gray-600">Manage your profile and applications</p>
      </section>

      {/* Navigation Tabs */}
      <div className="bg-white rounded-xl border border-gray-200">
        <div className="flex border-b border-gray-200 overflow-x-auto">
          {(['profile', 'resume', 'applications'] as const).map((tab) => (
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
          {activeTab === 'profile' && (
            <div className="space-y-8">
              {/* Profile Header */}
              <div className="flex justify-between items-start mb-8">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">{formData.name}</h2>
                  <p className="text-gray-600 mb-2">📍 {formData.location}</p>
                  <p className="text-gray-600 mb-2">🎓 {formData.university}</p>
                  <p className="text-gray-600">Major: {formData.major}</p>
                </div>
                <button
                  onClick={() => setEditMode(!editMode)}
                  className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium"
                >
                  {editMode ? 'Cancel' : 'Edit Profile'}
                </button>
              </div>

              {!editMode ? (
                // View Mode
                <div className="space-y-8">
                  {/* Bio */}
                  <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Bio</h3>
                    <p className="text-gray-700">{formData.bio}</p>
                  </div>

                  {/* Contact Info */}
                  <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact Information</h3>
                    <div className="space-y-3">
                      <div>
                        <p className="text-sm text-gray-600">Email</p>
                        <p className="text-gray-900 font-medium">{formData.email}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Phone</p>
                        <p className="text-gray-900 font-medium">{formData.phone}</p>
                      </div>
                    </div>
                  </div>

                  {/* Education */}
                  <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Education</h3>
                    <div>
                      <p className="text-gray-900 font-semibold">{formData.university}</p>
                      <p className="text-gray-600 text-sm">{formData.major}</p>
                      <p className="text-gray-600 text-sm">Graduating: {formData.graduationYear}</p>
                    </div>
                  </div>

                  {/* Skills */}
                  <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Skills</h3>
                    <div className="flex flex-wrap gap-3">
                      {formData.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-4 py-2 bg-blue-100 text-blue-700 rounded-lg font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                // Edit Mode
                <div className="space-y-6 max-w-2xl">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Bio
                    </label>
                    <textarea
                      value={formData.bio}
                      onChange={(e) =>
                        setFormData({ ...formData, bio: e.target.value })
                      }
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Skills
                    </label>
                    <div className="flex gap-2 mb-3">
                      <input
                        type="text"
                        value={newSkill}
                        onChange={(e) => setNewSkill(e.target.value)}
                        onKeyPress={(e) => {
                          if (e.key === 'Enter') {
                            e.preventDefault();
                            handleAddSkill();
                          }
                        }}
                        placeholder="Add a skill..."
                        className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                      <button
                        onClick={handleAddSkill}
                        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium"
                      >
                        Add
                      </button>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {formData.skills.map((skill) => (
                        <div
                          key={skill}
                          className="px-3 py-1 bg-blue-100 text-blue-700 rounded-lg text-sm font-medium flex items-center gap-2"
                        >
                          {skill}
                          <button
                            onClick={() => handleRemoveSkill(skill)}
                            className="text-blue-600 hover:text-blue-800 font-bold"
                          >
                            ×
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-3 pt-4">
                    <button
                      onClick={() => setEditMode(false)}
                      className="flex-1 px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Save Changes
                    </button>
                    <button
                      onClick={() => setEditMode(false)}
                      className="flex-1 px-6 py-2 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}

          {activeTab === 'resume' && (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">My Resumes</h2>
                <p className="text-gray-600 mb-6">Upload and manage your resumes</p>
              </div>

              {/* Upload Section */}
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-blue-500 transition-colors">
                <div className="text-4xl mb-3">📤</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Upload Resume</h3>
                <p className="text-gray-600 mb-4">Drag and drop your resume here or click to select</p>
                <input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  className="hidden"
                  id="resume-upload"
                />
                <label
                  htmlFor="resume-upload"
                  className="inline-block px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 cursor-pointer font-medium"
                >
                  Choose File
                </label>
              </div>

              {/* Resume List */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Your Resumes</h3>
                <div className="space-y-3">
                  {resumes.map((resume) => (
                    <div
                      key={resume.id}
                      className="flex justify-between items-center p-4 border border-gray-200 rounded-lg hover:shadow-md transition-all"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">📄</span>
                        <div>
                          <p className="font-semibold text-gray-900">{resume.name}</p>
                          <p className="text-sm text-gray-600">Uploaded {resume.uploadedDate}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        {resume.isPrimary && (
                          <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold">
                            Primary
                          </span>
                        )}
                        <button className="px-3 py-1 text-gray-600 hover:text-gray-900 font-medium text-sm">
                          ⋯
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'applications' && (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">My Applications</h2>
                <p className="text-gray-600 mb-6">Track the status of your job applications</p>
              </div>

              <div className="space-y-4">
                {applications.map((app) => (
                  <div
                    key={app.id}
                    className="bg-gray-50 rounded-lg p-6 border border-gray-200 hover:shadow-md transition-all"
                  >
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900 mb-1">
                          {app.jobTitle}
                        </h3>
                        <p className="text-gray-600 mb-3">{app.company}</p>
                        <div className="flex gap-4">
                          <span className="text-sm text-gray-600">
                            Applied {app.appliedDate}
                          </span>
                          <span
                            className={`text-xs font-semibold px-3 py-1 rounded-full ${getStatusColor(
                              app.status
                            )}`}
                          >
                            {app.status.charAt(0).toUpperCase() + app.status.slice(1)}
                          </span>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-bold text-blue-600 mb-2">{app.matchIndex}%</p>
                        <p className="text-xs text-gray-600">Match Index</p>
                      </div>
                    </div>
                    {app.status === 'interview' && (
                      <div className="mt-4 p-3 bg-purple-50 border border-purple-200 rounded-lg">
                        <p className="text-sm text-purple-800 font-medium">
                          📅 Interview scheduled for Feb 15, 2024
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default StudentProfilePage;
