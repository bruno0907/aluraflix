const URL = window.location.hostname.includes('localhost')
    ? 'http://localhost:3333'
    : 'https://aluraflix-backend.herokuapp.com';

export default {
    URL,
}