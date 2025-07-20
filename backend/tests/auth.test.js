const axios = require('axios');

// Base URL for API
const API_URL = 'http://localhost:5000/api/v1';

// Test user data
const testUser = {
  name: 'Test User',
  email: `test${Date.now()}@example.com`,
  password: 'password123',
  role: 'customer'
};

let token;
let resetToken;

// Helper function to log test results
const logResult = (testName, success, error = null) => {
  if (success) {
    console.log(`✅ ${testName}: PASSED`);
  } else {
    console.log(`❌ ${testName}: FAILED`);
    if (error) {
      console.error(`   Error: ${error.message || JSON.stringify(error)}`);
    }
  }
};

// Test registration
const testRegistration = async () => {
  try {
    const response = await axios.post(`${API_URL}/auth/register`, testUser);
    token = response.data.token;
    
    if (response.data.success && response.data.token && response.data.user) {
      logResult('User Registration', true);
      return true;
    } else {
      logResult('User Registration', false, 'Invalid response format');
      return false;
    }
  } catch (error) {
    logResult('User Registration', false, error);
    return false;
  }
};

// Test login
const testLogin = async () => {
  try {
    const response = await axios.post(`${API_URL}/auth/login`, {
      email: testUser.email,
      password: testUser.password
    });
    
    token = response.data.token;
    
    if (response.data.success && response.data.token && response.data.user) {
      logResult('User Login', true);
      return true;
    } else {
      logResult('User Login', false, 'Invalid response format');
      return false;
    }
  } catch (error) {
    logResult('User Login', false, error);
    return false;
  }
};

// Test get current user
const testGetMe = async () => {
  try {
    const response = await axios.get(`${API_URL}/auth/me`, {
      headers: { Authorization: `Bearer ${token}` }
    });
    
    if (response.data.success && response.data.data) {
      logResult('Get Current User', true);
      return true;
    } else {
      logResult('Get Current User', false, 'Invalid response format');
      return false;
    }
  } catch (error) {
    logResult('Get Current User', false, error);
    return false;
  }
};

// Test forgot password
const testForgotPassword = async () => {
  try {
    const response = await axios.post(`${API_URL}/auth/forgot-password`, {
      email: testUser.email
    });
    
    if (response.data.success) {
      logResult('Forgot Password', true);
      return true;
    } else {
      logResult('Forgot Password', false, 'Invalid response format');
      return false;
    }
  } catch (error) {
    logResult('Forgot Password', false, error);
    return false;
  }
};

// Test logout
const testLogout = async () => {
  try {
    const response = await axios.get(`${API_URL}/auth/logout`, {
      headers: { Authorization: `Bearer ${token}` }
    });
    
    if (response.data.success) {
      logResult('User Logout', true);
      return true;
    } else {
      logResult('User Logout', false, 'Invalid response format');
      return false;
    }
  } catch (error) {
    logResult('User Logout', false, error);
    return false;
  }
};

// Run all tests
const runTests = async () => {
  console.log('🧪 Starting Authentication API Tests...');
  
  // Register a new user
  const registrationSuccess = await testRegistration();
  if (!registrationSuccess) {
    console.log('❌ Registration failed, skipping remaining tests');
    return;
  }
  
  // Test login
  const loginSuccess = await testLogin();
  if (!loginSuccess) {
    console.log('❌ Login failed, skipping remaining tests');
    return;
  }
  
  // Test get current user
  await testGetMe();
  
  // Test forgot password
  await testForgotPassword();
  
  // Test logout
  await testLogout();
  
  console.log('🎉 All tests completed!');
};

// Run the tests
runTests().catch(error => {
  console.error('Test suite error:', error);
});