import axios from "axios"

export default
{
    bookSearch: (bookTitle) => { return axios.get("/api/book_search")}
}