import axios from "axios";

const url = "http://localhost:3000";

const stu_api =  axios.create({baseURL : url});


export default stu_api;