import config from '../config'

const CATEGORIES_URL = `${config.URL}/categorias`

function getAllWithVideos() {
    return fetch(`${CATEGORIES_URL}?_embed=videos`)
        .then(async(res) => {
            if(res.ok) {
                const response = await res.json()            
                return response;
            }
            throw new Error('Server unavailable')
        })
};

function getAll() {
    return fetch(CATEGORIES_URL)
        .then(async(res) => {
            if(res.ok) {
                const response = await res.json()            
                return response;
            }
            throw new Error('Server unavailable')
        })
};
    
export default {
    getAllWithVideos,
    getAll
}