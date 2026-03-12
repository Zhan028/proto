# Role-Based Architecture Guide

## Overview

The Student Employment Information System is built with a **comprehensive role-based architecture** that ensures proper separation of concerns and access control. Each user role (Student, Employer, University Admin) has its own:

- **Dedicated Pages/Components**
- **Service Layer Functions**
- **Route Protection**
- **UI/UX Workflows**

---

## User Roles & Responsibilities

### 1. **Student Role** (`role: 'student'`)
- Job seeking and application management
- Profile and resume management
- Track application status
- View recommendations based on Match-Index

### 2. **Employer Role** (`role: 'employer'`)
- Post and manage job openings
- Search and review candidates
- Manage applications and interviews
- Send offers and rejections

### 3. **University Admin Role** (`role: 'university' | 'admin'`)
- Monitor employment statistics
- Analyze skill gaps in labor market
- View graduate placement data
- Track employer partnerships

---

## Architecture Components

### 1. Route Protection (`src/routes/index.tsx`)

All routes are protected based on user role:

```typescript
// Student-only routes
{
  path: '/profile',
  element: (
    <ProtectedRoute>
      <RoleBasedRoute allowedRoles={['student']}>
        <StudentProfilePage />
      </RoleBasedRoute>
    </ProtectedRoute>
  ),
}

// Employer-only routes
{
  path: '/employer-dashboard',
  element: (
    <ProtectedRoute>
      <RoleBasedRoute allowedRoles={['employer']}>
        <EmployerDashboardPage />
      </RoleBasedRoute>
    </ProtectedRoute>
  ),
}

// University-only routes
{
  path: '/analytics',
  element: (
    <ProtectedRoute>
      <RoleBasedRoute allowedRoles={['university', 'admin']}>
        <UniversityAnalyticsPage />
      </RoleBasedRoute>
    </ProtectedRoute>
  ),
}
```

### 2. Role-Based Route Component (`src/components/RoleBasedRoute.tsx`)

Implements permission checking:

```typescript
const RoleBasedRoute = ({ children, allowedRoles }: RoleBasedRouteProps) => {
  const { isAuthenticated, user } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  if (!allowedRoles.includes(user?.role || '')) {
    return <AccessDeniedPage />;
  }

  return <>{children}</>;
};
```

### 3. Service Layer Functions

#### **Student Service** (`src/services/studentService.ts`)
```typescript
studentService.getProfile(studentId)
studentService.updateProfile(studentId, profile)
studentService.getApplications(studentId)
studentService.applyForJob(studentId, jobId, coverLetter)
studentService.getResumes(studentId)
studentService.uploadResume(studentId, file)
studentService.getRecommendedJobs(studentId)
studentService.saveJob(studentId, jobId)
```

#### **Employer Service** (`src/services/employerService.ts`)
```typescript
employerService.getCompanyProfile(employerId)
employerService.getJobPostings(employerId)
employerService.createJobPosting(employerId, jobData)
employerService.updateJobPosting(employerId, jobId, jobData)
employerService.searchCandidates(employerId, filters)
employerService.getCandidateProfile(employerId, candidateId)
employerService.getApplicationsForJob(employerId, jobId)
employerService.updateApplicationStatus(employerId, appId, status)
employerService.sendOffer(employerId, appId, offerData)
employerService.scheduleInterview(employerId, appId, interviewData)
employerService.getStatistics(employerId)
```

#### **University Service** (`src/services/universityService.ts`)
```typescript
universityService.getOverallStatistics(universityId)
universityService.getEmploymentByProgram(universityId)
universityService.getGraduatePlacements(universityId)
universityService.getSkillDemand(universityId)
universityService.getEmploymentByIndustry(universityId)
universityService.getTopEmployers(universityId)
universityService.getAllStudents(universityId)
universityService.getAllEmployers(universityId)
universityService.verifyEmployer(universityId, employerId)
universityService.generateEmploymentReport(universityId, period)
universityService.getCurriculumRecommendations(universityId)
```

#### **Shared Job Service** (`src/services/jobService.ts`)
```typescript
jobService.getAllJobs(filters)
jobService.getJobById(jobId)
jobService.searchJobs(searchTerm, filters)
jobService.getRecommendedJobs(studentId)
jobService.getTrendingJobs()
jobService.calculateMatchIndex(jobId, candidateId)
jobService.getSkillStatistics()
```

---

## Page Routing Map

### Public Pages (All Authenticated Users)
```
/ - Home (role-specific dashboard)
/login - Login page
/register - Registration page
/jobs - Browse jobs (all roles can view)
/job/:id - Job details (all roles can view)
```

### Student-Only Pages
```
/profile - Profile management
/my-applications - Application tracking
```

### Employer-Only Pages
```
/employer-dashboard - Recruitment hub
/candidate/:id - Candidate profile review
```

### University Admin-Only Pages
```
/analytics - Employment analytics dashboard
```

---

## Home Page Role-Based Rendering

The home page (`HomePage.tsx`) renders different content based on user role:

### For Unauthenticated Users
- Job search hero section
- Job categories
- Featured companies
- Career tips & articles
- Call-to-action buttons

### For Student Users
- Welcome message
- Job search section
- Quick stats (profile completion, applications, profile views)
- Quick action cards
- Recommended jobs

### For Employer Users
- Welcome message
- Key statistics (active jobs, applications, interviews, hires)
- Link to employer dashboard

### For University Admin Users
- Welcome message
- Key statistics (students, employed graduates, employers, openings)
- Link to analytics dashboard

---

## Access Control Flow

```
User Visits URL
    ↓
ProtectedRoute (Auth Check)
    ├─ If not authenticated → Redirect to /login
    └─ If authenticated → Continue
        ↓
    RoleBasedRoute (Role Check)
        ├─ If role not in allowedRoles → Show Access Denied
        └─ If role in allowedRoles → Render Component
```

---

## Implementation Examples

### Example 1: Student Using Job Search
```typescript
// Student visits /jobs
// ✅ ProtectedRoute: User is authenticated
// ✅ No RoleBasedRoute guard needed (all can view)
// ✅ BrowseJobsPage loads
// Jobs show with Match-Index scores for the student
```

### Example 2: Employer Accessing Student Profile
```typescript
// Employer tries to visit /profile (student route)
// ✅ ProtectedRoute: User is authenticated
// ❌ RoleBasedRoute: User role is 'employer'
// ❌ allowedRoles is ['student']
// → Access Denied page shown
```

### Example 3: University Admin Accessing Analytics
```typescript
// University admin visits /analytics
// ✅ ProtectedRoute: User is authenticated
// ✅ RoleBasedRoute: User role is 'university'
// ✅ allowedRoles is ['university', 'admin']
// ✅ UniversityAnalyticsPage loads
// Dashboard shows employment statistics
```

---

## Key Features by Role

### 🎓 Student Features
- ✅ Browse and search jobs
- ✅ Apply for positions
- ✅ Track applications
- ✅ Manage profile and resume
- ✅ View recommended jobs (Match-Index)
- ✅ Save favorite jobs

### 💼 Employer Features
- ✅ Post job openings
- ✅ Search candidates
- ✅ Review applications
- ✅ Schedule interviews
- ✅ Send offers
- ✅ View recruitment statistics
- ✅ Manage job postings

### 🏫 University Admin Features
- ✅ View employment statistics
- ✅ Monitor graduate placements
- ✅ Analyze skill gaps
- ✅ Track employer partnerships
- ✅ Generate reports
- ✅ View employment by degree/industry
- ✅ Get curriculum recommendations

---

## Match-Index Algorithm Integration

The Match-Index is used across all roles:

```typescript
// In jobService
calculateMatchIndex(jobId, candidateId) {
  // Compares candidate skills/experience with job requirements
  // Returns percentage (0-100)
  // Used to rank job recommendations for students
  // Used to rank candidate suitability for employers
}
```

**How it's used:**
- **Students**: See which jobs are best matches
- **Employers**: See which candidates are best fits
- **University Admin**: Analyze match quality across graduates

---

## Best Practices

### 1. Always Use Role-Based Routes
```typescript
// ✅ Good
<RoleBasedRoute allowedRoles={['employer']}>
  <EmployerDashboard />
</RoleBasedRoute>

// ❌ Bad
<MyEmployerComponent /> // No protection
```

### 2. Use Service Functions for API Calls
```typescript
// ✅ Good
const applications = await studentService.getApplications(studentId);

// ❌ Bad
const applications = await fetch('/api/applications'); // No type safety
```

### 3. Check User Role in Components
```typescript
// ✅ Good
const { user } = useAuth();
if (user?.role === 'student') {
  // Show student-specific UI
}

// ❌ Bad
// Render student UI without checking role
```

### 4. Provide Clear Error Messages
```typescript
// ✅ Good - RoleBasedRoute shows specific roles allowed
"You don't have permission to access this page. 
This page is for employer only."

// ❌ Bad
"Access Denied"
```

---

## Future Enhancements

### 1. Service Layer Integration
Replace TODO comments with actual API calls:
```typescript
// src/services/studentService.ts
export const studentService = {
  getProfile: async (studentId: string) => {
    const response = await fetch(`/api/students/${studentId}`);
    return response.json();
  }
}
```

### 2. Advanced Permission System
Add more granular permissions:
```typescript
// Example: Some employers can only view specific jobs
<RoleBasedRoute 
  allowedRoles={['employer']} 
  permissions={['view:jobs', 'create:jobs']}
>
  <EmployerDashboard />
</RoleBasedRoute>
```

### 3. Role-Specific Middlewares
Create middleware for role-specific logic:
```typescript
// Check employer subscription level
// Check university agreement status
```

### 4. Audit Logging
Log all actions per role:
```typescript
// Track when employers access candidate profiles
// Track when admins export reports
```

---

## Summary

The role-based architecture ensures:

✅ **Security**: Users can only access pages for their role
✅ **Separation of Concerns**: Each role has dedicated services & pages
✅ **Scalability**: Easy to add new roles or modify existing ones
✅ **User Experience**: Tailored workflows for each role
✅ **Maintainability**: Clear structure and organization

Each role has full functionality for their specific use case, with no overlap in restrictions.
