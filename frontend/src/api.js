import axios from 'axios';

/**
 * The base URL for the backend API is pulled from the environment variables.
 * In a standard Vite setup, custom environment variables must be prefixed with VITE_.
 * The default development URL will be 'http://localhost:3000' unless VITE_API_URL is set.
 */
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default apiClient;