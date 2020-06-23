import axios from 'axios'

const instanceaxios = axios.create({
    baseURL: 'http://51.75.20.206:3100'
})

export default instanceaxios