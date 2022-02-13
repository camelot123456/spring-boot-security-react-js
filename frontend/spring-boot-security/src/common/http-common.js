import axios from 'axios';

export const URL_BASE = 'http://localhost:8081/api'

export const httpCommon = axios.create({
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
})