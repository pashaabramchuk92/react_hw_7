import axios from "axios";

export default axios.create({
    BASE_URL: process.env.REACT_APP_API_URL,
    headers: {
        "Content-Type": "application/json"
    }
});