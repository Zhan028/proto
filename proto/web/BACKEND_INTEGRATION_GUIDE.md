# Backend Integration Guide

## Architecture Overview

```
Your Backend Services (Separate)          Frontend Services (src/services/)
┌─────────────────────────────┐          ┌──────────────────────────────┐
│ api-gateway                 │          │ apiClient.ts (HTTP client)   │
│ (routes requests)           │◄─────────┤ (wrapper for API calls)      │
├─────────────────────────────┤          ├──────────────────────────────┤
│ auth-service                │          │ studentService.ts            │
│ (user authentication)        │◄─────────┤ (student business logic)     │
├─────────────────────────────┤          ├──────────────────────────────┤
│ student-service             │          │ employerService.ts           │
│ (student operations)         │◄─────────┤ (employer business logic)    │
├─────────────────────────────┤          ├──────────────────────────────┤
│ employer-service            │          │ universityService.ts         │
│ (employer operations)        │◄─────────┤ (university business logic)  │
└─────────────────────────────┘          └──────────────────────────────┘
```

## Step-by-Step Integration

### Step 1: Set Up Environment Variables

Create a `.env` file in `proto/web/`:

```bash
# .env (Frontend)
REACT_APP_API_URL=http://localhost:5000/api
REACT_APP_AUTH_SERVICE_URL=http://localhost:3001/api
REACT_APP_STUDENT_SERVICE_URL=http://localhost:3002/api
REACT_APP_EMPLOYER_SERVICE_URL=http://localhost:3003/api
REACT_APP_UNIVERSITY_SERVICE_URL=http://localhost:3004/api
```

Or use a single API Gateway:

```bash
REACT_APP_API_URL=http://localhost:5000/api
```

### Step 2: Update Service Files with API Calls

#### Example: Update `src/services/studentService.ts`

**Before (Mock Data):**
```typescript
export const studentService = {
  getProfile: async (studentId: string): Promise<StudentProfile> => {
    // TODO: Replace with actual API call
    return {
      name: 'John Doe',
      // ...
    };
  },
};
```

**After (With API Call):**
```typescript
import { apiClient, API_CONFIG } from '../config/apiClient';

export const studentService = {
  getProfile: async (studentId: string): Promise<StudentProfile> => {
    try {
      const endpoint = `${API_CONFIG.ENDPOINTS.STUDENT.PROFILE}/${studentId}`;
      return await apiClient.get(endpoint);
    } catch (error) {
      console.error('Failed to fetch student profile:', error);
      throw error;
    }
  },

  updateProfile: async (studentId: string, profile: StudentProfile): Promise<StudentProfile> => {
    try {
      const endpoint = `${API_CONFIG.ENDPOINTS.STUDENT.PROFILE}/${studentId}`;
      return await apiClient.put(endpoint, profile);
    } catch (error) {
      console.error('Failed to update student profile:', error);
      throw error;
    }
  },

  getApplications: async (studentId: string): Promise<StudentApplication[]> => {
    try {
      const endpoint = API_CONFIG.ENDPOINTS.STUDENT.APPLICATIONS.replace(':id', studentId);
      return await apiClient.get(endpoint);
    } catch (error) {
      console.error('Failed to fetch student applications:', error);
      throw error;
    }
  },

  applyForJob: async (studentId: string, jobId: number, coverLetter: string): Promise<boolean> => {
    try {
      const endpoint = API_CONFIG.ENDPOINTS.STUDENT.APPLICATIONS.replace(':id', studentId);
      await apiClient.post(endpoint, { jobId, coverLetter });
      return true;
    } catch (error) {
      console.error('Failed to apply for job:', error);
      throw error;
    }
  },

  // ... rest of the service functions
};
```

### Step 3: Example - Employer Service Integration

```typescript
import { apiClient, API_CONFIG } from '../config/apiClient';

export const employerService = {
  getJobPostings: async (employerId: string): Promise<JobPosting[]> => {
    const endpoint = API_CONFIG.ENDPOINTS.EMPLOYER.JOBS.replace(':id', employerId);
    return await apiClient.get(endpoint);
  },

  createJobPosting: async (employerId: string, jobData: Partial<JobPosting>): Promise<JobPosting> => {
    const endpoint = API_CONFIG.ENDPOINTS.EMPLOYER.JOBS.replace(':id', employerId);
    return await apiClient.post(endpoint, jobData);
  },

  searchCandidates: async (employerId: string, filters?: any): Promise<CandidateProfile[]> => {
    const endpoint = API_CONFIG.ENDPOINTS.EMPLOYER.CANDIDATES.replace(':id', employerId);
    const queryString = new URLSearchParams(filters).toString();
    return await apiClient.get(`${endpoint}?${queryString}`);
  },

  updateApplicationStatus: async (
    employerId: string,
    applicationId: number,
    status: string
  ): Promise<boolean> => {
    const endpoint = `${API_CONFIG.ENDPOINTS.EMPLOYER.APPLICATIONS.replace(':id', employerId)}/${applicationId}`;
    await apiClient.put(endpoint, { status });
    return true;
  },
};
```

### Step 4: Example - University Service Integration

```typescript
import { apiClient, API_CONFIG } from '../config/apiClient';

export const universityService = {
  getOverallStatistics: async (universityId: string) => {
    const endpoint = `${API_CONFIG.ENDPOINTS.UNIVERSITY.STATS}/${universityId}`;
    return await apiClient.get(endpoint);
  },

  getEmploymentByProgram: async (universityId: string) => {
    const endpoint = `${API_CONFIG.ENDPOINTS.UNIVERSITY.STATS}/${universityId}/by-program`;
    return await apiClient.get(endpoint);
  },

  getGraduatePlacements: async (universityId: string, limit: number = 10) => {
    const endpoint = `${API_CONFIG.ENDPOINTS.UNIVERSITY.PLACEMENTS}/${universityId}?limit=${limit}`;
    return await apiClient.get(endpoint);
  },
};
```

## API Endpoint Examples

Based on your backend structure, here's how the frontend will call your services:

### Student Service Calls
```
GET  /api/students/:id                      → student-service (get profile)
PUT  /api/students/:id                      → student-service (update profile)
GET  /api/students/:id/applications         → student-service (get applications)
POST /api/students/:id/applications         → student-service (apply for job)
GET  /api/students/:id/resumes              → student-service (get resumes)
POST /api/students/:id/resumes              → student-service (upload resume)
```

### Employer Service Calls
```
GET  /api/employers/:id                     → employer-service (get profile)
GET  /api/employers/:id/jobs                → employer-service (get job postings)
POST /api/employers/:id/jobs                → employer-service (create job)
PUT  /api/employers/:id/jobs/:jobId         → employer-service (update job)
GET  /api/employers/:id/candidates          → employer-service (search candidates)
GET  /api/employers/:id/applications        → employer-service (get applications)
PUT  /api/employers/:id/applications/:appId → employer-service (update app status)
```

### Job Service Calls (Shared)
```
GET  /api/jobs                              → api-gateway (list all jobs)
GET  /api/jobs/:id                          → api-gateway (get job details)
GET  /api/jobs/search?q=...                 → api-gateway (search jobs)
POST /api/jobs/:id/match-index              → api-gateway (calculate match)
```

### University Service Calls
```
GET  /api/university/:id/statistics         → university-service (overall stats)
GET  /api/university/:id/students           → university-service (student list)
GET  /api/university/:id/placements         → university-service (placements)
GET  /api/university/:id/statistics/by-program → university-service (by program)
GET  /api/university/:id/statistics/by-industry → university-service (by industry)
```

## Error Handling

The apiClient automatically handles:
- ✅ 401 Unauthorized → Redirects to login
- ✅ Network errors → Throws error to component
- ✅ JSON parsing → Converts response to JSON

In your services, handle errors:

```typescript
try {
  const data = await apiClient.get(endpoint);
  return data;
} catch (error) {
  console.error('API Error:', error);
  // Show error to user or re-throw
  throw error;
}
```

## Using Services in Components

```typescript
import { studentService } from '../services/studentService';
import { useEffect, useState } from 'react';

export function StudentProfile() {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadProfile = async () => {
      try {
        const data = await studentService.getProfile('student-123');
        setProfile(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadProfile();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>{profile.name}</h1>
      {/* ... */}
    </div>
  );
}
```

## Frontend and Backend Running Together

### During Development:

**Terminal 1: Frontend**
```bash
cd proto/web
npm run dev
# Frontend runs on http://localhost:5173
```

**Terminal 2: Backend API Gateway**
```bash
cd proto/backend
npm run dev
# API Gateway runs on http://localhost:5000
```

**Terminal 3: Student Service**
```bash
cd proto/backend/student-service
npm run dev
# Student Service runs on http://localhost:3002
```

(Similarly for other services)

### Or use Docker Compose to run everything together

```yaml
# docker-compose.yml
version: '3.8'
services:
  frontend:
    build: ./proto/web
    ports:
      - "5173:5173"
    environment:
      REACT_APP_API_URL: http://localhost:5000/api

  api-gateway:
    build: ./proto/backend/api-gateway
    ports:
      - "5000:5000"

  student-service:
    build: ./proto/backend/student-service
    ports:
      - "3002:3002"

  employer-service:
    build: ./proto/backend/employer-service
    ports:
      - "3003:3003"
```

## Summary

✅ **Frontend services** (`src/services/`) = Client-side logic
✅ **Backend services** (separate folder) = Server-side logic
✅ **apiClient** = HTTP wrapper that connects them
✅ **No conflicts** - they're completely separate layers

Just replace the TODO comments with actual API calls using the `apiClient` utility!
