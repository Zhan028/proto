// API Client Configuration
// This file configures the base URL and headers for API calls to your backend services

// API Base URLs for your backend services
export const API_CONFIG = {
  // Main API Gateway or base URL
  BASE_URL: process.env.REACT_APP_API_URL || 'http://localhost:3000/api',

  // Individual service endpoints (if using service discovery)
  SERVICES: {
    AUTH: process.env.REACT_APP_AUTH_SERVICE_URL || 'http://localhost:3001/api',
    STUDENT: process.env.REACT_APP_STUDENT_SERVICE_URL || 'http://localhost:3002/api',
    EMPLOYER: process.env.REACT_APP_EMPLOYER_SERVICE_URL || 'http://localhost:3003/api',
    UNIVERSITY: process.env.REACT_APP_UNIVERSITY_SERVICE_URL || 'http://localhost:3004/api',
  },

  // API Endpoints paths
  ENDPOINTS: {
    // Auth endpoints
    AUTH: {
      LOGIN: '/auth/login',
      REGISTER: '/auth/register',
      LOGOUT: '/auth/logout',
      REFRESH: '/auth/refresh',
    },

    // Student endpoints
    STUDENT: {
      PROFILE: '/students',
      APPLICATIONS: '/students/:id/applications',
      RESUMES: '/students/:id/resumes',
      RECOMMENDED_JOBS: '/students/:id/recommended-jobs',
    },

    // Employer endpoints
    EMPLOYER: {
      PROFILE: '/employers',
      JOBS: '/employers/:id/jobs',
      CANDIDATES: '/employers/:id/candidates',
      APPLICATIONS: '/employers/:id/applications',
    },

    // University endpoints
    UNIVERSITY: {
      STATS: '/university/statistics',
      STUDENTS: '/university/students',
      EMPLOYERS: '/university/employers',
      PLACEMENTS: '/university/placements',
    },

    // Job endpoints (shared)
    JOBS: {
      LIST: '/jobs',
      DETAIL: '/jobs/:id',
      SEARCH: '/jobs/search',
      MATCH_INDEX: '/jobs/:id/match-index',
    },
  },
};

// Axios or Fetch client with authentication
export const createApiClient = () => {
  return {
    // Get authentication token from localStorage or context
    getAuthToken: (): string | null => {
      return localStorage.getItem('authToken');
    },

    // Default headers for all requests
    getDefaultHeaders: () => ({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${createApiClient().getAuthToken()}`,
    }),

    // Helper method for GET requests
    get: async (endpoint: string) => {
      const url = `${API_CONFIG.BASE_URL}${endpoint}`;
      const response = await fetch(url, {
        method: 'GET',
        headers: createApiClient().getDefaultHeaders(),
      });
      return handleResponse(response);
    },

    // Helper method for POST requests
    post: async (endpoint: string, data: any) => {
      const url = `${API_CONFIG.BASE_URL}${endpoint}`;
      const response = await fetch(url, {
        method: 'POST',
        headers: createApiClient().getDefaultHeaders(),
        body: JSON.stringify(data),
      });
      return handleResponse(response);
    },

    // Helper method for PUT requests
    put: async (endpoint: string, data: any) => {
      const url = `${API_CONFIG.BASE_URL}${endpoint}`;
      const response = await fetch(url, {
        method: 'PUT',
        headers: createApiClient().getDefaultHeaders(),
        body: JSON.stringify(data),
      });
      return handleResponse(response);
    },

    // Helper method for DELETE requests
    delete: async (endpoint: string) => {
      const url = `${API_CONFIG.BASE_URL}${endpoint}`;
      const response = await fetch(url, {
        method: 'DELETE',
        headers: createApiClient().getDefaultHeaders(),
      });
      return handleResponse(response);
    },
  };
};

// Handle API responses
const handleResponse = async (response: Response) => {
  if (!response.ok) {
    if (response.status === 401) {
      // Unauthorized - redirect to login
      localStorage.removeItem('authToken');
      window.location.href = '/login';
    }
    const error = await response.json();
    throw new Error(error.message || 'API request failed');
  }
  return response.json();
};

// Export a singleton instance
export const apiClient = createApiClient();
