import axios from 'axios'

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: '9d620e2d1e1f4de1b6941bd01ca79525'
    }
})