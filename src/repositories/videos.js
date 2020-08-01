import config from '../config'

const VIDEOS_URL = `${config.URL}/videos`

function create(data) {
    return fetch(`${VIDEOS_URL}?_embed=videos`, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify(data),
    })
        .then(async(res) => {
            if(res.ok) {
                const response = await res.json()            
                return response;
            }
            throw new Error('Server unavailable')
        })
};
    
export default {
    create,

}