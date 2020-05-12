import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID TVWvj0y4qwRNQH4v7ZmJKcqOm6xRP-yyUGcRqi-p30c",
  },
});
