const API_BASE_URL = 'http://localhost:8080/api/v1/car-info/'

export const requestHandler = suffix => fetch(API_BASE_URL + suffix).then(r => r.json())