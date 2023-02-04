import axios from 'axios'

// handle Auth for admin
const url = '/api'


export async function authAdmin(token) {
    const auth = await axios.post(url + "/admin", token);
    return auth.data;
}

