import axios from "axios";

const apiNotifications = axios.create(
    { baseURL: 'https://jsonplaceholder.typicode.com/' }
)

export default apiNotifications;