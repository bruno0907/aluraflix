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

function getCategory(id){
    return fetch(`${CATEGORIES_URL}/${id}`
    )
        .then( async(res) => {
            if(res.ok) {
                const response = await res.json()
                console.log('Fetch', response)
                return response;
            }            
        }).catch((e) => { console.log('Error', e)})
}

function create(data){
    return fetch(`${CATEGORIES_URL}?_embed=videos`, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify(data)
        
    }).then(async(res) => {
            if(res.ok) {
                const response = await res.json()
                return response
            } throw new Error('Unable to create')
        })
}

function destroy(id){
    return fetch(`${CATEGORIES_URL}/${id}`, {
        method: 'DELETE'
    }).then(async(res) => {
            if(res.ok) {
                const response = await res.json()
                return response
            } throw new Error('Unable to delete')
        })
}
    
function update(id, data){
    return fetch(`${CATEGORIES_URL}/${id}`, {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(async(res) => {
            if(res.ok) {
                const response = await res.json()
                return response
            } throw new Error('Cant Update')
        })
}
    
export default {
    getAllWithVideos,
    getAll,
    getCategory,
    create,
    destroy,
    update
}