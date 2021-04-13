import axios from "axios";

const uri = "https://localhost:5000/posts";

export const fetchPosts = () => axios.get(uri);
