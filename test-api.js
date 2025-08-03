const axios = require('axios');

async function testUserListAPI() {
  const baseURL = 'http://localhost:1337';
  
  try {
    console.log('Testing user-list API...');
    
    // Test 1: Basic GET request without filters
    console.log('\n1. Testing basic GET /api/user-lists');
    const response1 = await axios.get(`${baseURL}/api/user-lists`);
    console.log('Status:', response1.status);
    console.log('Data:', response1.data);
    
    // Test 2: GET request with email filter (lowercase)
    console.log('\n2. Testing GET /api/user-lists with email filter (lowercase)');
    const response2 = await axios.get(`${baseURL}/api/user-lists?filters[email][$eq]=samradhjindal@gmail.com`);
    console.log('Status:', response2.status);
    console.log('Data:', response2.data);
    
    // Test 3: GET request with email filter (uppercase)
    console.log('\n3. Testing GET /api/user-lists with email filter (uppercase)');
    const response3 = await axios.get(`${baseURL}/api/user-lists?filters[Email][$eq]=samradhjindal@gmail.com`);
    console.log('Status:', response3.status);
    console.log('Data:', response3.data);
    
    // Test 4: Test route
    console.log('\n4. Testing test route /api/user-lists/test');
    const response4 = await axios.get(`${baseURL}/api/user-lists/test`);
    console.log('Status:', response4.status);
    console.log('Data:', response4.data);
    
  } catch (error) {
    console.error('Error testing API:', error.response ? {
      status: error.response.status,
      statusText: error.response.statusText,
      data: error.response.data
    } : error.message);
  }
}

testUserListAPI(); 