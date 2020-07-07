import axios from "axios"

axios.defaults.baseURL = "http://127.0.0.1:8000/api"

export default {
    // 모든 글 불러와용
    getAllPosts() {
        return axios.get('/posts/')
    },
    // 글 작성하깅
    createPost(data){
        return axios.post('/posts/', data)
    },

    deletePost(id) {
        return axios.delete('/posts/'+String(id))
    },


}