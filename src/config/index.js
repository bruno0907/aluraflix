const URL = window.location.hostname.includes('localhost')
    ? 'https://aluraflix-backend.herokuapp.com/'
    : 'http://localhost:3333';

export default {
    URL,
}