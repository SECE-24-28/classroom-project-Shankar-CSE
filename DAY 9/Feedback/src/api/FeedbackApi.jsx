import axios from "axios";

const URL = "http://localhost:1234";

const FeedbackApi = axios.create({baseURL: URL});

export default FeedbackApi;