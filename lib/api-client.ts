const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3002';

interface RequestOptions {
  method?: string;
  headers?: HeadersInit;
  body?: any;
}

export class ApiClient {
  private getHeaders(): HeadersInit {
    const token = localStorage.getItem('linear_token');
    const userStr = localStorage.getItem('linear_user');
    const user = userStr ? JSON.parse(userStr) : null;
    
    return {
      'Content-Type': 'application/json',
      ...(token ? { 'Authorization': `Bearer ${token}` } : {}),
      ...(user?.id ? { 'x-user-id': user.id } : {}),
    };
  }

  async request(endpoint: string, options: RequestOptions = {}) {
    const { method = 'GET', body } = options;
    
    const config: RequestInit = {
      method,
      headers: this.getHeaders(),
      ...(body ? { body: JSON.stringify(body) } : {}),
    };

    const res = await fetch(`${API_BASE_URL}${endpoint}`, config);

    if (!res.ok) {
      const error = await res.json().catch(() => ({ error: 'Request failed' }));
      throw new Error(error.error || `Request failed with status ${res.status}`);
    }

    return res.json();
  }

  async get(endpoint: string, params?: Record<string, string>) {
    const url = new URL(`${API_BASE_URL}${endpoint}`);
    if (params) {
      Object.keys(params).forEach(key => {
        if (params[key] !== undefined && params[key] !== null) {
          url.searchParams.append(key, params[key]);
        }
      });
    }

    const res = await fetch(url.toString(), {
      headers: this.getHeaders(),
    });

    if (!res.ok) {
      const error = await res.json().catch(() => ({ error: 'Request failed' }));
      throw new Error(error.error || `Request failed with status ${res.status}`);
    }

    return res.json();
  }

  async post(endpoint: string, data?: any) {
    return this.request(endpoint, { method: 'POST', body: data });
  }

  async put(endpoint: string, data: any) {
    return this.request(endpoint, { method: 'PUT', body: data });
  }

  async delete(endpoint: string) {
    return this.request(endpoint, { method: 'DELETE' });
  }
}

export const api = new ApiClient();

