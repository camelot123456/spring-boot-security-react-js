import axios from 'axios';

export default axios.create({
    baseURL: 'http://localhost:8081/api',
    headers: {
        'Allow': 'POST, GET, PUT, DELETE',
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization':
        "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhY2MyIiwicm9sZXMiOlsiUk9MRV9VU0VSIl0sImlzcyI6Imh0dHA6Ly9sb2NhbGhvc3Q6ODA4MS9hcGkvbG9naW4iLCJleHAiOjE2NDM4MjEyMDAsImlhdCI6MTY0MjYxODc1MH0.qAkGu__DYOJrsyRbYbWCG8nikx28EKamC5_JqcpVd70",
    }
})